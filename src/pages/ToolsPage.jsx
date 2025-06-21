import React from 'react';
// لم نعد بحاجة إلى Link هنا لأن الروابط خارجية، ولكن سأبقيها معلّقة في حال احتجتِها لاحقًا
// import { Link } from 'react-router-dom';

function ToolsPage() {
  return (
    <main id="main-content-wrapper">
      <section className="container">
        <h1 className="page-title">
          الادوات من حسابي الشخصي
          <a href="https://github.com/sb3ly" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>sb3ly</a>
        </h1>
        <p className="intro-description">
          في هذه الصفحة، ستجد مجموعة من الأدوات التي تم تطويرها ومشاركتها في حساب GitHub الخاص بـ <span style={{ color: 'var(--primary-color)' }}>sb3ly</span>.
        </p>
      </section>

      <section className="container">
        <div className="grid">
          {/* بطاقة UST-phishing */}
          <div className="card">
            <h2 className="card-title">UST-phishing</h2>
            <p className="card-content">تدمج هذه الأداة ثلاث أدوات شائعة للاختراق الأخلاقي والتصيد الاحتيالي: Zphisher و CamPhisher و WiFiPhisher، مع دعم إضافي لـ Cloudflare Tunnel.</p>
            <a href="https://github.com/sb3ly/UST-phishing" target="_blank" rel="noopener noreferrer" className="ui-btn">
              <span>GitHub</span>
            </a>
          </div>

          {/* بطاقة scanWAS */}
          <div className="card">
            <h2 className="card-title">scanWAS</h2>
            <p className="card-content">يكتشف أجهزة الشبكة باستخدام fping ويحاكي هجوم ARP spoofing باستخدام arpspoof لتقييم المخاطر الأمنية. يساعد في تحديد نقاط الضعف وتعزيز الدفاعات ضد هجمات MITM.</p>
            <a href="https://github.com/sb3ly/scanWAS" target="_blank" rel="noopener noreferrer" className="ui-btn">
              <span>GitHub</span>
            </a>
          </div>

          {/* بطاقة scanARe */}
          <div className="card">
            <h2 className="card-title">scanARe</h2>
            <p className="card-content">نظام لمراقبة الشبكة واكتشاف التهديدات باستخدام Flask و Scapy. يكتشف الأجهزة المتصلة، يحلل الحزم، ويسجل الطلبات المشبوهة. يستخدم fping للمسح الضوئي، ويوفر معلومات مفصلة.</p>
            <a href="https://github.com/sb3ly/scanARe" target="_blank" rel="noopener noreferrer" className="ui-btn">
              <span>GitHub</span>
            </a>
          </div>

          {/* بطاقة DoS */}
          <div className="card">
            <h2 className="card-title">DoS</h2>
            <p className="card-content">هجوم حجب الخدمة (DoS) هو هجوم إلكتروني يهدف إلى جعل موقع ويب أو خادم أو شبكة غير متوفرة عن طريق إغراقها بحركة مرور مفرطة أو طلبات تستهلك موارد كبيرة.</p>
            <a href="https://github.com/sb3ly/DoS" target="_blank" rel="noopener noreferrer" className="ui-btn">
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ToolsPage;

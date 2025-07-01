import React from 'react';
// import { Link } from 'react-router-dom'; // الروابط من برا فا مانحتاجها حاليا 

function AboutPage() {
  return (
    <main id="main-content-wrapper">
      <section className="container">
        <h1 className="page-title">مرحباً! أنا <span style={{ color: 'var(--primary-color)' }}>سعيد او sb3ly</span></h1>
        <p className="intro-description">
          أنا مطور شغوف وخبير في الأمن السيبراني، أؤمن بقوة مشاركة المعرفة لتمكين الآخرين. هدفي هو تبسيط المفاهيم المعقدة وجعل عالم الأمن السيبراني متاحاً للجميع. أكرس جهدي لتقديم شروحات واضحة، أدوات عملية، ومشاركة تجاربي في مجال الاختراق الأخلاقي لمساعدة المهتمين على تطوير مهاراتهم وحماية أنظمتهم.
          <br /><br />
          في رحلتي، أسعى دائماً للتعلم واكتشاف الجديد، وأشارك ما أتعلمه هنا ليكون مصدراً قيماً للمبتدئين والمحترفين على حد سواء.
        </p>
      </section>

      <section className="container" id="certificates">
        <h2 className="page-title">الشهادات والخبرات</h2>
        <div className="grid">
          <div className="certificate-card">
            <img src="https://sb3ly.github.io/sb3ly.github.io/img/ICDL.jpg" alt="شهادة رقم 1" />
            <div className="image-overlay">
              <a href="https://sb3ly.github.io/sb3ly.github.io/img/ICDL.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">عرض الشهادة</a>
            </div>
            <h3 className="cert-title">الترخيص الدولي ICDL</h3>
            <p className="cert-description">الرخصة الدولية لقيادة الحاسب الآلي (ICDL).</p>
          </div>

          <div className="certificate-card">
            <img src="https://via.placeholder.com/300x200?text=Certificate+Image+2" alt="شهادة رقم 2" />
            <div className="image-overlay">
              <a href="https://example.com/certificate2" target="_blank" rel="noopener noreferrer" className="cert-link">عرض الشهادة</a>
            </div>
            <h3 className="cert-title">شهادة مطور ويب احترافي</h3>
            <p className="cert-description">تغطي هذه الشهادة المهارات الأساسية لتطوير الويب الأمامي والخلفي، بما في ذلك HTML، CSS، JavaScript، وإطارات العمل.</p>
          </div>

          <div className="certificate-card">
            <img src="https://sb3ly.github.io/sb3ly.github.io/img/EDRAAK.jpg" alt="شهادة رقم 3" />
            <div className="image-overlay">
              <a href="https://sb3ly.github.io/sb3ly.github.io/img/EDRAAK.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">عرض الشهادة</a>
            </div>
            <h3 className="cert-title">CYs from EDRAAK</h3>
            <p className="cert-description">أساسيات الأمن السيبراني، شمل فهم طرق الهجوم، مقدمة في حماية الأنظمة، واستكشاف المسارات الوظيفية في المجال.</p>
          </div>

          <div className="certificate-card">
            <img src="https://sb3ly.github.io/sb3ly.github.io/img/4.jpg" alt="شهادة رقم 4" />
            <div className="image-overlay">
              <a href="https://sb3ly.github.io/sb3ly.github.io/img/4.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">عرض الشهادة</a>
            </div>
            <h3 className="cert-title">Linux 100: Fundamentals from TCM</h3>
            <p className="cert-description">دورة أساسيات Linux، تعلمت فيها أساسيات سطر الأوامر، إدارة الملفات والمستخدمين، ومفاهيم الشبكات، مما يمنحني قاعدة قوية للعمل على أنظمة Linux.</p>
          </div>

          <div className="certificate-card">
            <img src="https://sb3ly.github.io/sb3ly.github.io/img/EN.jpg" alt="شهادة رقم 5" />
            <div className="image-overlay">
              <a href="https://sb3ly.github.io/sb3ly.github.io/img/EN.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">عرض الشهادة</a>
            </div>
            <h3 className="cert-title">English American Files – Starter</h3>
            <p className="cert-description">إتمام المستوى التمهيدي في اللغة الإنجليزية ضمن سلسلة American English File، وتركّز على المهارات الأساسية مثل: المحادثة، الاستماع، القواعد، والمفردات الأساسية. تُعادل عادة مستوى A1 حسب الإطار الأوروبي المرجعي للغات (CEFR)</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

// src/components/TutorialsPage.jsx (أو src/TutorialsPage.jsx)
import React from 'react';
import { Link } from 'react-router-dom'; // هذا يتطلب React Router

function TutorialsPage() {
  return (
    <main>
      <section className="container">
        <h1 className="page-title">
          اكتشف عالم <span style={{ color: 'var(--primary-color)' }}>الشروحات</span>
        </h1>
        <p className="intro-description">
          هنا تجد مقالات مفصلة وشروحات وافية حول مختلف المواضيع في مجال الأمن السيبراني والاختراق الأخلاقي. نسعى لتبسيط المعلومات وتقديمها بطريقة شيقة ومفيدة للجميع.
        </p>
      </section>

      <section className="container">
        <h2 className="page-title">أحدث المقالات والشروحات</h2>
        <div className="grid">
          <div className="card">
            <h3 className="card-title">مقدمة في اختبار الاختراق</h3>
            <p className="card-content">
              دليل شامل للمبتدئين حول أساسيات اختبار الاختراق وأهميته في حماية الأنظمة.
            </p>
            <Link to="/tutorials/intro-pentesting" className="ui-btn">
              <span>Read</span>
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">فهم ثغرات SQL Injection</h3>
            <p className="card-content">
              شرح مفصل لثغرات حقن SQL وكيفية استغلالها وطرق الحماية منها.
            </p>
            <Link to="/tutorials/sql-injection" className="ui-btn">
              <span>Read</span>
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">تأمين شبكات Wi-Fi المنزلية</h3>
            <p className="card-content">
              خطوات عملية لتعزيز أمن شبكة Wi-Fi الخاصة بك وحمايتها من الاختراق.
            </p>
            <Link to="/tutorials/wifi-security" className="ui-btn">
              <span>Read</span>
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">التعامل مع البرمجيات الخبيثة (Malware)</h3>
            <p className="card-content">
              كيفية اكتشاف وإزالة أنواع مختلفة من البرمجيات الخبيثة وحماية جهازك.
            </p>
            <Link to="/tutorials/malware-handling" className="ui-btn">
              <span>Read</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TutorialsPage;

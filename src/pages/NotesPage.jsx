import React from 'react';

function NotesPage() {
  return (
    <main id="main-content-wrapper">
      <section className="container">
        <h1 className="page-title">
          📒 ملاحظات ومشاكل قيد الحل
        </h1>

        <div className="article-content">
          <div className="entry">
            <div className="date">2 يونيو 2025</div>
            <h2>مشكلة في عرض موقعي على الجوال</h2>
            <p>
              لاحظت أن بعض العناصر تطلع خارج الشاشة، الحل كان تعديل العرض في الـ CSS باستخدام{' '}
              <strong style={{ direction: 'ltr', display: 'inline-block' }}>`max-width: 100%`</strong>.
            </p>
          </div>

          <div className="entry">
            <div className="date">1 يونيو 2025</div>
            <h2>أفكار عشوائية 🤔</h2>
            <p>
              أفكر أضيف قسم فيه أدوات بسيطة أبرمجها وأخلي الناس يستخدمونها مباشرة من الموقع.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotesPage;
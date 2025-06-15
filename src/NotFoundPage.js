// NotFoundPage.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Inter, sans-serif', // استخدام خط Inter
      backgroundColor: '#f4f4f4', // لون خلفية خفيف
      minHeight: 'calc(100vh - 120px)', // لضمان أن الصفحة تغطي الارتفاع المتاح باستثناء الهيدر والفوتر التقريبي
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px', // إضافة بعض الهوامش
      borderRadius: '8px', // حواف دائرية
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ظل خفيف
      margin: '20px auto', // توسيط المكون في الصفحة مع هامش
      maxWidth: '900px' // تحديد أقصى عرض للمكون
    }}>
      {/* الصورة المعروضة لخطأ 404. تأكد من أن المسار '/your-gif-image.gif' صحيح ويشير إلى صورة الـ GIF الخاصة بك في مجلد public */}
      <img
        src="https://raw.githubusercontent.com/sb3ly/madar/refs/heads/main/public/img/GOKU_BLACKHOLE.gif"
        alt="404 - الصفحة غير موجودة"
        style={{
          maxWidth: '80%', // لجعل الصورة تستجيب للعرض
          height: 'auto',
          marginBottom: '30px', // مسافة بين الصورة والعنوان
          borderRadius: '8px' // حواف دائرية للصورة
        }}
        // هذا المعالج يساعد في حالة عدم تحميل الصورة، يعرض صورة بديلة
        onError={(e) => {
          e.target.onerror = null; // يمنع تكرار الخطأ
          e.target.src = "https://placehold.co/400x300/e0e0e0/333333?text=Image+Not+Found";
        }}
      />
      {/* عنوان الخطأ */}
      <h1 style={{
        fontSize: '3em',
        color: 'var(--primary-color)', // استخدام متغير CSS أو لون مباشر
        marginBottom: '20px'
      }}>
        404 - الصفحة غير موجودة
      </h1>
      {/* وصف للخطأ */}
      <p style={{
        fontSize: '1.2em',
        color: '#666'
      }}>
        عذرًا، الصفحة التي تبحث عنها غير موجودة.
      </p>
      {/* رابط العودة إلى الصفحة الرئيسية */}
      <p style={{
        fontSize: '1.2em',
        color: '#666'
      }}>
        يمكنك العودة إلى <a href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>الصفحة الرئيسية</a>.
      </p>
    </div>
  );
};

export default NotFoundPage;

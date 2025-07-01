document.addEventListener('DOMContentLoaded', () => {
    // منطق الهيدر (Burger Icon)
    const burgerIcon = document.getElementById('burger-icon');
    const mainNav = document.getElementById('main-nav');

    if (burgerIcon && mainNav) {
        burgerIcon.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // إغلاق قائمة التنقل عند النقر على رابط (لتحسين تجربة الجوال)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // يمكن إضافة منطق آخر هنا إذا كنت تريد معالجة تحميل المحتوى ديناميكيًا
    // على سبيل المثال، إذا كان لديك زر "حمل المزيد" أو معرض صور.

    // ملاحظة: بما أننا نقوم بالتحويل إلى HTML/CSS/JS عادي،
    // فإن الانتقال بين الصفحات سيتم عبر إعادة تحميل المتصفح لملف HTML جديد.
    // لإنشاء صفحات مثل Tutorials, About, Tools, Notes, Articles:
    // ستحتاج إلى إنشاء ملفات HTML منفصلة لكل صفحة:
    // - tutorials.html
    // - tools.html
    // - about.html
    // - notes.html
    // - articles/intro-pentesting.html
    // - articles/malware-handling.html
    // - articles/sql-injection.html
    // - articles/wifi-security.html
    // وكل ملف سيتضمن هيكل الصفحة الأساسي (header, main content, footer)
    // ومحتوى القسم الخاص به.

    // مثال على كيفية إنشاء صفحة 404 منفصلة (يمكنك استخدامها كنموذج):
    // const currentPath = window.location.pathname;
    // if (!['/', '/madar', '/tutorials.html', '/tools.html', '/about.html', '/notes.html'].includes(currentPath)) {
    //     // هنا يمكنك إعادة توجيه المستخدم إلى صفحة 404 مخصصة أو عرض المحتوى مباشرة
    //     // For simplicity, we assume 404 is handled by the server or a separate 404.html file.
    // }
});

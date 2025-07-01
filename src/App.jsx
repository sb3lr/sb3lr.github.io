import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// المكونات الاساسية
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import WhyMadarSection from './components/WhyMadarSection';

// هاذ خاص في حق البرقر 
import TutorialsPage from './pages/TutorialsPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import NotesPage from './pages/NotesPage';

// هنا بيستورد المقالات
import IntroPentestingArticle from './articles/IntroPentestingArticle';
import MalwareHandlingArticle from './articles/MalwareHandlingArticle';
import SqlInjectionArticle from './articles/SqlInjectionArticle';
import WifiSecurityArticle from './articles/WifiSecurityArticle';

// هاذي البيانات الثابته ياعزوز لاتغيرها
const pageData = {
  header: {
    logoText: 'Madar',
    navLinks: [
      { name: 'Home', path: '/', active: true },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'Tools', path: '/tools' },
      { name: 'who am i', path: '/about' },
      { name: 'notes', path: '/notes' },
    ],
  },
  welcome: {
    title: 'مرحباً بك في عالم ',
    highlight: 'Madar',
    description:
      'Madar هو مشروع شخصي يهدف إلى إثراء المحتوى العربي في مجال الأمن السيبراني. هنا، أشارك خبراتي في <strong>اكتشاف الثغرات</strong>، أقدم <strong>شروحات عملية</strong>، <strong>أستعرض أدوات قوية</strong> لمساعدتك في رحلتك نحو عالم الاختراق الأخلاقي.',
    buttonText: 'ابدأ رحلتك معنا!',
    buttonLink: '/tutorials',
  },
  whyMadar: {
    title: 'لماذا تختار ',
    highlight: 'Madar ',
    items: [
      {
        icon: 'fa-book-open',
        title: 'شروحات متعمقة',
        description:
          'مقالات وشروحات تفصيلية تغطي أحدث تقنيات اكتشاف الثغرات والأمن السيبراني، مناسبة لكل المستويات.',
      },
      {
        icon: 'fa-screwdriver-wrench',
        title: 'أدوات عملية',
        description:
          'مجموعة من الأدوات الموصى بها والمطوّرة خصيصاً لمساعدتك في مهامك الأمنية.',
      },
      {
        icon: 'fa-lightbulb',
        title: 'تجارب واقعية',
        description:
          'أشارك معك خلاصة تجاربي الشخصية والدروس المستفادة من مشاريع الأمن السيبراني.',
      },
    ],
  },
  footer: {
    socialLinks: [
      { href: 'https://x.com/sb3ly', icon: 'fab fa-twitter', label: 'Twitter' },
      { href: 'https://github.com/sb3ly', icon: 'fab fa-github', label: 'GitHub' },
      { href: '#', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    ],
    copyright: '© 2025 Madar. جميع الحقوق محفوظة.',
  },
};

function HomePage() {
  return (
    <main id="main-content-wrapper">
      <WelcomeSection data={pageData.welcome} />
      <WhyMadarSection data={pageData.whyMadar} />
    </main>
  );
}

function App() {
  return (
    <Router basename="/">
      <div className="app-wrapper">
        <Header data={pageData.header} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notes" element={<NotesPage />} />

          {/* المقالات */}
          <Route path="/tutorials/intro-pentesting" element={<IntroPentestingArticle />} />
          <Route path="/tutorials/malware-handling" element={<MalwareHandlingArticle />} />
          <Route path="/tutorials/sql-injection" element={<SqlInjectionArticle />} />
          <Route path="/tutorials/wifi-security" element={<WifiSecurityArticle />} />

          {/*  404 */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', margin: '50px' }}>
                <h1 style={{ color: 'var(--primary-color)' }}>
                  What are you doing? <br />
                  You're in the wrong place. Go back.
                </h1>
                <img
                  src="https://raw.githubusercontent.com/sb3ly/madar/refs/heads/main/public/img/GOKU_BLACKHOLE.gif"
                  alt="Goku Blackhole"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginTop: '20px',
                    borderRadius: '12px',
                  }}
                />
              </div>
            }
          />
        </Routes>

        <Footer data={pageData.footer} />
      </div>
    </Router>
  );
}

export default App;

'use client';

import { motion } from 'framer-motion';
import RegistrationForm from '@/components/RegistrationForm';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Load mosque background image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.log('Mosque background image failed to load, using CSS fallback');
      setImageLoaded(false);
    };
    img.src = '/mosque-background.jpg';

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Approximate header height on mobile
      const elementPosition = element.offsetTop - headerHeight - 20; // Extra 20px for breathing room
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Mosque Background Image */}
      <div className={`mosque-background ${imageLoaded ? 'image-loaded' : 'image-fallback'}`}></div>
      <div className="background-overlay"></div>

      {/* Professional Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="/logo.png" 
              alt="مسجد الإمام مالك" 
              className="mosque-logo"
            />
            <div className="logo-text">
              <span className="mosque-name">مسجد الإمام مالك</span>
              <span className="location">الإقامة الجامعية بوراوي عمار - الحراش</span>
            </div>
          </div>
          
          <nav className="nav-links">
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              الرئيسية
            </a>
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              حول الدورة
            </a>
            <a 
              href="#form" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('form');
              }}
            >
              التسجيل
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              دورة حفظ القرآن الكريم
            </h1>
            <p className="hero-subtitle">
              انضم إلى دورة حفظ القرآن الكريم الصيفية عبر تطبيق Telegram
              <br />
              بإشراف مشايخ مؤهلين - مسجد الإمام مالك
            </p>
            
            <motion.button
              className="button"
              onClick={() => scrollToSection('form')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              سجل الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-content"
          >
            <h2>حول الدورة</h2>
            <p>
              يسر مسجد الإمام مالك بالإقامة الجامعية بوراوي عمار الإعلان عن انطلاق دورة لحفظ القرآن الكريم عن بعد عبر تطبيق Telegram، 
              بإشراف مشايخ مؤهلين، وتمتد إلى غاية 1 سبتمبر. 
              الدورة مخصصة لجميع الأعمار والمستويات، مع توفير بيئة تعليمية مناسبة ومتابعة مستمرة.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>تعليم عن بعد</h3>
                <p>دروس تفاعلية عبر تطبيق Telegram</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🏫</div>
                <h3>مشايخ مؤهلين</h3>
                <p>إشراف مباشر من مشايخ متخصصين</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>منهج متكامل</h3>
                <p>برنامج تعليمي شامل ومتابعة مستمرة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="form" className="form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <RegistrationForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-card">
                <div className="footer-card-header">
                  <div className="footer-card-title">
                    <h2>مسجد الإمام مالك</h2>
                  </div>
                  <img src="/logo.png" alt="شعار المسجد" className="footer-card-logo" />
                </div>
                <div className="footer-card-desc">منارة الإيمان في الإقامة الجامعية بوراوي عمار - الحراش</div>
                <div className="footer-card-socials">
                  <a href="https://www.facebook.com/bouraouimasjid" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/bouraouimasjid/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a href="mailto:mosqueebouraoui@gmail.com" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 مسجد الإمام مالك - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    </div>
  );
} 
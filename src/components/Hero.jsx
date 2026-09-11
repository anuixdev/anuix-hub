import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import ProfileCard from './ProfileCard.jsx';
import profileImg from '../assets/images/Profile.png'
import './css/Hero.css';

export default function Hero() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const content = {
    es: {
      statusBadge: 'ESTADO: SISTEMA EN LÍNEA // DISPONIBLE',
      greeting: 'HOLA, SOY',
      role: 'Desarrollador de Software e IA',
      tagline: 'Construyendo arquitecturas digitales escalables, modelos inteligentes y experiencias web con ingeniería de alto rendimiento.',
      primaryCta: 'Explorar Proyectos',
      secondaryCta: 'Contactar',
      cardTag: 'DEV_PROFILE // 01',
      location: 'España // Remoto',
      focusLabel: 'ENFOQUE TÉCNICO',
      focusValues: 'React • Node • Python • Deep Learning',
    },
    en: {
      statusBadge: 'STATUS: SYSTEM ONLINE // AVAILABLE',
      greeting: "HELLO, I'M",
      role: 'Software & AI Engineer',
      tagline: 'Engineering scalable digital architectures, intelligent machine learning models, and high-performance web systems.',
      primaryCta: 'Explore Projects',
      secondaryCta: 'Get In Touch',
      cardTag: 'DEV_PROFILE // 01',
      location: 'Spain // Remote',
      focusLabel: 'TECHNICAL FOCUS',
      focusValues: 'React • Node • Python • Deep Learning',
    },
  };

  const t = content[lang];

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleContact = () => {
    const section = document.getElementById('contacto');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-page-wrapper">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <section id="hero" className="hero-viewport">
        <div className="hero-shape-grid">
          <div className="grid-overlay-gradient"></div>
        </div>

        <div className="hud-corner top-left">+</div>
        <div className="hud-corner top-right">+</div>
        <div className="hud-corner bottom-left">+</div>
        <div className="hud-corner bottom-right">+</div>

        <div className="hero-container">
          
          <div className="hero-col-card">
            <ProfileCard
              name="Alexandru Untaru"
              title="Ingeniero Informático"
              handle="anuixdev"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileImg}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>

          <div className="hero-col-text">
            <div className="status-terminal-badge">
              <span className="badge-dot"></span>
              <span>{t.statusBadge}</span>
            </div>

            <p className="hero-greeting-prefix">{t.greeting}</p>
            <h1 className="hero-main-title">
              anuix<span className="title-accent">dev</span>
            </h1>

            <h2 className="hero-role-title">{t.role}</h2>
            <p className="hero-description">{t.tagline}</p>

            <div className="hero-actions">
              <a href="#portafolio" className="hero-btn primary-btn">
                <span>{t.primaryCta}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#contacto" className="hero-btn secondary-btn">
                <span>{t.secondaryCta}</span>
              </a>
            </div>
          </div>

        </div>

        <div className="scroll-indicator-container">
          <button 
            className="scroll-square-btn" 
            onClick={handleScrollDown}
            aria-label="Ir a la siguiente sección"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
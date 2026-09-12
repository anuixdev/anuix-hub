import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import ProfileCard from './ProfileCard.jsx';
import profileImg from '../assets/images/profile.png';
import './css/Hero.css';

export default function Hero() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('light');

  const phrases = {
    es: [
      'Desarrollador de Software e IA',
      'Ingeniero Informático',
      'Arquitecto de Sistemas',
      'Practicante de Modelos Inteligentes',
      'Fanático de Inteligencia Artificial'
    ],
    en: [
      'Software & AI Engineer',
      'Computer Engineer',
      'Systems Architect',
      'Machine Learning Practitioner',
      'Artificial Intelligence Fanatic'
    ]
  };

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentList = phrases[lang];
    const currentPhrase = currentList[phraseIndex % currentList.length];

    let timer;
    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => setCharIndex(prev => prev + 1), 60);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(prev => prev - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex(prev => (prev + 1) % currentList.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, lang]);

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
      cardTitle: 'Ingeniero Informático',
      cardModule: 'MOD:01 // BIO-IDENT',
      consoleModule: 'MOD:02 // EXEC_CORE',
      statusBadge: 'SISTEMA ONLINE // DISPONIBLE',
      greeting: 'EN EL MUNDO DE LA INFORMÁTICA ME LLAMO',
      telemetryLoc: 'España // Presencial • Híbrido',
      telemetryFocus: 'React • Node • Python • JavaScript • Y más...',
      primaryCta: 'MI VIAJE',

    },
    en: {
      cardTitle: 'Computer Engineer',
      cardModule: 'MOD:01 // BIO-IDENT',
      consoleModule: 'MOD:02 // EXEC_CORE',
      statusBadge: 'SYSTEM ONLINE // AVAILABLE',
      greeting: 'IN THE WORLD OF COMPUTING I GO BY',
      telemetryLoc: 'Spain // Presencial • Hybrid',
      telemetryFocus: 'React • Node • Python • JavaScript • And More...',
      primaryCta: 'MY JOURNEY',
    },
  };

  const t = content[lang];
  const displayedRole = phrases[lang][phraseIndex % phrases[lang].length].substring(0, charIndex);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleContact = () => {
    const section = document.getElementById('contacto');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
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
        <div className="hero-shape-grid" />

        <div className="hud-corner top-left">┌</div>
        <div className="hud-corner top-right">┐</div>
        <div className="hud-corner bottom-left">└</div>
        <div className="hud-corner bottom-right">┘</div>

        <div className="hero-console-deck">
          
          <div className="deck-card-slot">
            <div className="slot-telemetry-header">
              <span className="slot-tag">{t.cardModule}</span>
              <span className="slot-spec">ID: ANX-904</span>
            </div>

            <ProfileCard
              name="Alexandru Untaru"
              title={t.cardTitle}
              avatarUrl={profileImg}
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled
              behindGlowColor={
                theme === 'dark' 
                  ? 'rgba(251, 191, 36, 0.4)' 
                  : 'rgba(234, 88, 12, 0.22)'
              }
              innerGradient={
                theme === 'dark'
                  ? 'linear-gradient(145deg, #181308c0 0%, #291d06aa 100%)'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.9) 55%, rgba(254, 243, 199, 0.45) 100%)'
              }
            />
          </div>
          

          <div className="deck-terminal-slot">
            
            <div className="console-window">
              <div className="console-titlebar">
                <div className="console-tab">
                  <span className="badge-dot" />
                  <span className="tab-title">{t.statusBadge}</span>
                </div>
                <div className="console-meta-tag">{t.consoleModule}</div>
              </div>

              <div className="console-body">
                <p className="console-prefix">
                  <span className="prefix-arrow">▶</span> {t.greeting}
                </p>

                <h1 className="console-main-title">
                  anuix<span className="title-accent">dev</span>
                </h1>

                <div className="console-role-line">
                  <span className="role-text">{displayedRole}</span>
                  <span className="type-caret" aria-hidden="true" />
                </div>

                <p className="console-description">{t.description}</p>

                <div className="console-telemetry-grid">
                  <div className="telemetry-item">
                    <span className="telemetry-label">LOC //</span>
                    <span className="telemetry-val">{t.telemetryLoc}</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="telemetry-label">STACK //</span>
                    <span className="telemetry-val">{t.telemetryFocus}</span>
                  </div>
                </div>

                <div className="console-actions">
                  <a href="#portafolio" className="hero-btn primary-btn">
                    <span>{t.primaryCta}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="console-footer">
                <span>TERMINAL_SYS: V1.2_ACTIVE</span>
                <span>ENC: SHA-256</span>
              </div>
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
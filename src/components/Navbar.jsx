import React, { useState, useEffect, useRef } from 'react';
import './css/Navbar.css';

export default function Navbar({ lang, setLang, theme, toggleTheme }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsSettingsOpen(false);
      }
    };

    if (isSettingsOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSettingsOpen]);

  const navLabels = {
    es: {
      home: 'Inicio',
      about: 'Sobre mí',
      portfolio: 'Portafolio',
      contact: 'Contacto',
      cv: 'CV',
      settings: 'Ajustes',
      cfgHeader: 'PREFERENCIAS // SYS',
      langLabel: 'IDIOMA',
      themeLabel: 'TEMA',
      dark: 'Oscuro',
      light: 'Claro',
    },
    en: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cv: 'CV',
      settings: 'Settings',
      cfgHeader: 'PREFERENCES // SYS',
      langLabel: 'LANGUAGE',
      themeLabel: 'THEME',
      dark: 'Dark',
      light: 'Light',
    },
  };

  const t = navLabels[lang];

  return (
    <header className="anuix-navbar">
      <div className="nav-left">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">anuixdev</span>
          <span className="logo-dot" />
          <span className="logo-bracket">]</span>
        </a>
      </div>

      <nav className="nav-center">
        <div className="nav-dock">
          <a href="#hero" className="nav-dock-item active">
            <span className="nav-active-pip" />
            <span>{t.home}</span>
          </a>

          <a href="#sobre-mi" className="nav-dock-item">
            <span>{t.about}</span>
          </a>

          <a href="#portafolio" className="nav-dock-item">
            <span>{t.portfolio}</span>
          </a>

          <a href="#contacto" className="nav-dock-item">
            <span>{t.contact}</span>
          </a>

          <span className="nav-dock-divider" />

          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-dock-item nav-cv-chip"
          >
            <span>{t.cv}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </nav>

      <div className="nav-right">
        <div className="settings-wrapper" ref={settingsRef}>
          <button 
            type="button"
            className={`settings-trigger ${isSettingsOpen ? 'open' : ''}`}
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            title={t.settings}
            aria-expanded={isSettingsOpen}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className="settings-tag">CFG</span>
          </button>

          {isSettingsOpen && (
            <div className="settings-dropdown" role="menu">
              <div className="dropdown-meta-bar">
                <span>{t.cfgHeader}</span>
                <span className="meta-dot" />
              </div>

              <div className="dropdown-row">
                <span className="dropdown-label">{t.langLabel}</span>
                <button 
                  type="button"
                  className="segmented-control"
                  onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))}
                  aria-label={`Cambiar idioma. Actual: ${lang.toUpperCase()}`}
                >
                  <span className={`segment-indicator ${lang}`} />
                  <span className={`segment-label ${lang === 'es' ? 'active' : ''}`}>ES</span>
                  <span className={`segment-label ${lang === 'en' ? 'active' : ''}`}>EN</span>
                </button>
              </div>

              <div className="dropdown-divider" />

              <div className="dropdown-row">
                <span className="dropdown-label">{t.themeLabel}</span>
                <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
                  {theme === 'dark' ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <span>{t.light}</span>
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                      <span>{t.dark}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
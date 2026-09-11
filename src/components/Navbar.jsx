import React, { useState } from 'react';

export default function Navbar({ lang, setLang, theme, toggleTheme }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navLabels = {
    es: {
      home: 'Inicio',
      about: 'Sobre mí',
      portfolio: 'Portafolio',
      contact: 'Contacto',
      cv: 'Ver CV',
      settings: 'Ajustes',
      langLabel: 'Idioma',
      themeLabel: 'Tema',
      dark: 'Oscuro',
      light: 'Claro',
    },
    en: {
      home: 'Home',
      about: 'About me',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cv: 'View CV',
      settings: 'Settings',
      langLabel: 'Language',
      themeLabel: 'Theme',
      dark: 'Dark',
      light: 'Light',
    },
  };

  const t = navLabels[lang];

  return (
    <header className="anuix-navbar">
      {/* 1. SECCIÓN IZQUIERDA: Enlace a Inicio */}
      <div className="nav-left">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">anuixdev</span>
          <span className="logo-dot"></span>
          <span className="logo-bracket">]</span>
        </a>
      </div>

      {/* 2. SECCIÓN CENTRAL: Navegación principal */}
      <nav className="nav-center">
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link active">{t.home}</a></li>
          <li><a href="#sobre-mi" className="nav-link">{t.about}</a></li>
          <li><a href="#portafolio" className="nav-link">{t.portfolio}</a></li>
          <li><a href="#contacto" className="nav-link">{t.contact}</a></li>
          <li>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link nav-cv-btn"
            >
              {t.cv}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. SECCIÓN DERECHA: Menú de Ajustes (ES/EN y Tema) */}
      <div className="nav-right">
        <div className="settings-wrapper">
          <button 
            className={`settings-trigger ${isSettingsOpen ? 'open' : ''}`}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            title={t.settings}
            aria-label={t.settings}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className="settings-tag">CFG</span>
          </button>

          {isSettingsOpen && (
            <div className="settings-dropdown">
              <div className="dropdown-row">
                <span className="dropdown-label">{t.langLabel}</span>
                <div className="segmented-control">
                  <button 
                    className={`segment-btn ${lang === 'es' ? 'active' : ''}`}
                    onClick={() => setLang('es')}
                  >
                    ES
                  </button>
                  <button 
                    className={`segment-btn ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => setLang('en')}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <div className="dropdown-row">
                <span className="dropdown-label">{t.themeLabel}</span>
                <button className="theme-toggle-btn" onClick={toggleTheme}>
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
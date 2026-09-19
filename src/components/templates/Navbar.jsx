import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { usePreferences } from '../../context/PreferencesContext.jsx';
import { NAV_LABELS } from '../../data/siteData.js';
import '../css/Navbar.css';

export default function Navbar({ currentPage }) {
  const { lang, setLang, theme, toggleTheme } = usePreferences();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const settingsRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAboutPage = currentPage === 'about' || location.pathname.includes('sobre-mi');

  useEffect(() => {
    if (!isSettingsOpen) return;

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

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSettingsOpen]);

  useEffect(() => {
    if (isAboutPage) {
      setActiveSection('sobre-mi');
      return;
    }

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('contacto');
        return;
      }

      if (scrollY < 140) {
        setActiveSection('hero');
        return;
      }

      const triggerPoint = windowHeight * 0.35;
      const sectionIds = ['hero', 'portafolio', 'contacto'];
      let current = 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    if (location.hash) {
      const targetHash = location.hash.replace('#', '');
      const validIds = ['hero', 'portafolio', 'contacto'];
      if (validIds.includes(targetHash)) {
        setActiveSection(targetHash);
        isProgrammaticScroll.current = true;

        if (targetHash === 'hero') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          isProgrammaticScroll.current = false;
        } else {
          const timer = setTimeout(() => {
            const el = document.getElementById(targetHash);
            if (el) {
              const navHeight = 64;
              const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({ top: targetY, left: 0, behavior: 'smooth' });
            }
            setTimeout(() => {
              isProgrammaticScroll.current = false;
            }, 750);
          }, 140);

          return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
          };
        }
      }
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutPage, location.hash, location.pathname]);

  const handleNavigateSection = (e, targetId) => {
    e.preventDefault();

    if (isAboutPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      navigate(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(targetId);
      isProgrammaticScroll.current = true;
      window.history.pushState(null, '', `#${targetId}`);

      const navHeight = 64;
      const targetY = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, left: 0, behavior: 'smooth' });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 750);
    }
  };

  const handleGoToAbout = (e) => {
    if (isAboutPage) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const t = NAV_LABELS[lang];

  return (
    <header className="anuix-navbar">
      <div className="nav-left">
        <Link 
          to="/#hero" 
          className="nav-logo"
          onClick={(e) => handleNavigateSection(e, 'hero')}
        >
          <span className="logo-bracket">[</span>
          <span className="logo-text">anuixdev</span>
          <span className="logo-dot" />
          <span className="logo-bracket">]</span>
        </Link>
      </div>

      <nav className="nav-center">
        <div className="nav-dock">
          <Link
            to="/#hero"
            className={`nav-dock-item ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={(e) => handleNavigateSection(e, 'hero')}
          >
            {activeSection === 'hero' && <span className="nav-active-pip" />}
            <span>{t.home}</span>
          </Link>

          <Link
            to="/sobre-mi"
            className={`nav-dock-item ${activeSection === 'sobre-mi' ? 'active' : ''}`}
            onClick={handleGoToAbout}
          >
            {activeSection === 'sobre-mi' && <span className="nav-active-pip" />}
            <span>{t.about}</span>
          </Link>

          <Link
            to="/#portafolio"
            className={`nav-dock-item ${activeSection === 'portafolio' ? 'active' : ''}`}
            onClick={(e) => handleNavigateSection(e, 'portafolio')}
          >
            {activeSection === 'portafolio' && <span className="nav-active-pip" />}
            <span>{t.portfolio}</span>
          </Link>

          <Link
            to="/#contacto"
            className={`nav-dock-item ${activeSection === 'contacto' ? 'active' : ''}`}
            onClick={(e) => handleNavigateSection(e, 'contacto')}
          >
            {activeSection === 'contacto' && <span className="nav-active-pip" />}
            <span>{t.contact}</span>
          </Link>

          <span className="nav-dock-divider" />

          <a
            href={lang === 'es' ? '/CV_Alexandru_Nicolas_Untaru_Ionescu.pdf' : '/EN_CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'}
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
            className={`settings-trigger-tactical ${isSettingsOpen ? 'open' : ''}`}
            onClick={() => setIsSettingsOpen((prev) => !prev)}
            title={t.settings}
            aria-label={t.settings}
            aria-expanded={isSettingsOpen}
          >
            <div className="trigger-icon-box">
              <svg
                className="gear-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="trigger-code-tag">CFG</span>
          </button>

          {isSettingsOpen && (
            <div className="settings-dropdown" role="menu">
              <div className="dropdown-meta-bar">
                <span>{t.cfgHeader}</span>
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
                <button
                  type="button"
                  className="segmented-control"
                  onClick={toggleTheme}
                  aria-label={`Cambiar tema. Actual: ${theme}`}
                >
                  <span className={`segment-indicator ${theme}`} />
                  <span className={`segment-label ${theme === 'dark' ? 'active' : ''}`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </span>
                  <span className={`segment-label ${theme === 'light' ? 'active' : ''}`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4.5" />
                      <line x1="12" y1="2" x2="12" y2="4.5" />
                      <line x1="12" y1="19.5" x2="12" y2="22" />
                      <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" />
                      <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" />
                      <line x1="2" y1="12" x2="4.5" y2="12" />
                      <line x1="19.5" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="19.07" x2="6.7" y2="17.3" />
                      <line x1="17.3" y1="6.7" x2="19.07" y2="4.93" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
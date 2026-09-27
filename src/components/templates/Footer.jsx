import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FOOTER_CONTENT, NAV_LABELS } from '../../data/siteData.js';
import '../css/Footer.css';

export default function Footer({ lang = 'es' }) {
  const t = FOOTER_CONTENT[lang];
  const tNav = NAV_LABELS[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isCvModalClosing, setIsCvModalClosing] = useState(false);

  const isAboutPage = location.pathname.includes('sobre-mi');

  const handleCloseCvModal = () => {
    if (isCvModalClosing) return;
    setIsCvModalClosing(true);
    setTimeout(() => {
      setIsCvModalOpen(false);
      setIsCvModalClosing(false);
    }, 190);
  };

  const handleOpenCvModal = (e) => {
    e.preventDefault();
    setIsCvModalClosing(false);
    setIsCvModalOpen(true);
  };

  useEffect(() => {
    if (isCvModalOpen && !isCvModalClosing) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isCvModalOpen, isCvModalClosing]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCvModalOpen) {
        handleCloseCvModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCvModalOpen]);

  const handleNavigateSection = (e, targetId) => {
    e.preventDefault();

    if (isAboutPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      navigate(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 64;
      const targetY = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, left: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
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

  return (
    <>
      <footer className="site-master-footer">
        <div className="footer-container">
          
          <div className="footer-columns-grid">
            <div className="footer-col brand-col">
              <Link 
                to="/#hero" 
                className="footer-brand-logo"
                onClick={(e) => handleNavigateSection(e, 'hero')}
              >
                <span className="logo-text">ANUIXDEV</span>
              </Link>
              <p className="footer-brand-tagline">{t.brandDesc}</p>
              <div className="footer-status-pill">
                <span className="status-ping" />
                <span>{t.core}</span>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">{t.navTitle}</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="/#hero" onClick={(e) => handleNavigateSection(e, 'hero')}>
                    {t.home}
                  </a>
                </li>
                <li>
                  <Link to="/sobre-mi" onClick={handleGoToAbout}>
                    <span>{t.about}</span>
                  </Link>
                </li>
                <li>
                  <a href="/#portafolio" onClick={(e) => handleNavigateSection(e, 'portafolio')}>
                    {t.portfolio}
                  </a>
                </li>
                <li>
                  <a href="/#contacto" onClick={(e) => handleNavigateSection(e, 'contacto')}>
                    {t.contact}
                  </a>
                </li>
                <li>
                  <a href="#cv" onClick={handleOpenCvModal}>
                    {t.cv}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">{t.socialTitle}</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://www.linkedin.com/in/alexandru-untaru" target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anuixdev" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:alexandru.untaru.dev@gmail.com">
                    {t.mail} ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-copyright-text">{t.signature}</p>
          </div>

        </div>
      </footer>

      {isCvModalOpen && (
        <div 
          className={`cv-modal-backdrop ${isCvModalClosing ? 'closing' : ''}`}
          onClick={handleCloseCvModal}
        >
          <div 
            className={`cv-modal-window ${isCvModalClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="cv-modal-header">
              <div className="cv-modal-title">
                <span>{tNav.cvModal.title}</span>
              </div>
              <button 
                type="button" 
                className="cv-modal-close"
                onClick={handleCloseCvModal}
                aria-label="Cerrar ventana"
              >
                ✕
              </button>
            </div>

            <p className="cv-modal-prompt">
              {tNav.cvModal.prompt}
            </p>

            <div className="cv-modal-options">
              {tNav.cvModal.options.map((option) => (
                <a
                  key={option.badge}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-option-card"
                  onClick={handleCloseCvModal}
                >
                  <span className="cv-option-badge">{option.badge}</span>
                  <div className="cv-option-info">
                    <span className="cv-option-label">{option.label}</span>
                    <span className="cv-option-meta">{option.meta}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
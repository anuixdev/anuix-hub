import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FOOTER_CONTENT } from '../../data/siteData.js';
import '../css/Footer.css';

export default function Footer({ lang = 'es' }) {
  const t = FOOTER_CONTENT[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const isAboutPage = location.pathname.includes('sobre-mi');

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
                <a 
                  href={lang === 'es' ? '/CV_Alexandru_Nicolas_Untaru_Ionescu.pdf' : '/EN_CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
  );
}
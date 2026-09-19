import React from 'react';
import { FOOTER_CONTENT } from '../../data/siteData.js';
import '../css/Footer.css';

export default function Footer({ lang = 'es' }) {
  const t = FOOTER_CONTENT[lang];

  return (
    <footer className="site-master-footer">
      <div className="footer-container">
        
        <div className="footer-columns-grid">
          <div className="footer-col brand-col">
            <a href="#hero" className="footer-brand-logo">
              <span className="logo-text">ANUIXDEV</span>
            </a>
            <p className="footer-brand-tagline">{t.brandDesc}</p>
            <div className="footer-status-pill">
              <span className="status-ping" />
              <span>{t.core}</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.navTitle}</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">{t.home}</a></li>
              <li><a href="#sobre-mi">{t.about}</a></li>
              <li><a href="#portafolio">{t.portfolio}</a></li>
              <li><a href="#contacto">{t.contact}</a></li>
              <li><a href={lang === 'es' ? '/CV_Alexandru_Nicolas_Untaru_Ionescu.pdf' : '/EN_CV_Alexandru_Nicolas_Untaru_Ionescu.pdf'} target="_blank" rel="noopener noreferrer">{t.cv}</a></li>
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
                  Email Directo ↗
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
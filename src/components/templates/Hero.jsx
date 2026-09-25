import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ProfileCard from './ProfileCard.jsx';
import Projects from './Projects.jsx';
import TechStack from './TechStack.jsx';
import BorderGlowButton from './BorderGlowButton.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { usePreferences } from '../../context/PreferencesContext.jsx';
import { HERO_PHRASES, HERO_CONTENT } from '../../data/siteData.js';
import profileImg from '../../assets/images/profile.png';
import '../css/Hero.css';

export default function Hero() {
  const location = useLocation();
  const { lang, theme } = usePreferences();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = 'anuix.dev@gmail.com';
  const t = HERO_CONTENT[lang];
  const currentList = HERO_PHRASES[lang];
  const currentPhrase = currentList[phraseIndex % currentList.length];
  const displayedRole = currentPhrase.substring(0, charIndex);

  useEffect(() => {
    let timer;
    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), 60);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % currentList.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, currentList, currentPhrase]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('portafolio');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-page-wrapper">
      <Navbar currentPage="home" />

      <main key={location.pathname} className="hero-main-flow page-module-enter">
        <section id="hero" className="hero-viewport">
          <div className="hud-corner top-left">┌</div>
          <div className="hud-corner top-right">┐</div>
          <div className="hud-corner bottom-left">└</div>
          <div className="hud-corner bottom-right">┘</div>

          <div className="hero-console-deck">
            <div className="deck-card-slot">
              <div className="slot-telemetry-header">
                <span className="slot-tag">{t.cardModule}</span>
              </div>

              <ProfileCard
                name="Alexandru Untaru"
                title={t.cardTitle}
                avatarUrl={profileImg}
                iconUrl="/assets/demo/iconpattern.png"
                behindGlowEnabled
                behindGlowColor={theme === 'dark' ? 'rgba(251, 191, 36, 0.4)' : 'rgba(234, 88, 12, 0.25)'}
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
                    <BorderGlowButton to="/sobre-mi">
                      <span>{t.primaryCta}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </BorderGlowButton>
                  </div>
                </div>

                <div className="console-footer">
                  <span>TERMINAL_SYS: V2.1_ACTIVE</span>
                  <span>ENC: SHA-256</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator-container">
            <button 
              type="button"
              className="scroll-square-btn" 
              onClick={handleScrollDown}
              aria-label="Ir a proyectos"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>

        <Projects lang={lang} />
        <TechStack lang={lang} />

        <section id="contacto" className="content-section">
          <div className="section-container">
            <div className="contact-terminal-frame">
              <div className="contact-header-bar">
                <span className="contact-tag-badge">{t.contactTag}</span>
                <span className="contact-status-ping">{t.status}</span>
              </div>

              <div className="contact-core-content">
                <h2 className="contact-big-heading">{t.contactTitle}</h2>
                <p className="contact-explain">{t.contactSubtitle}</p>

                <div className="contact-ctas-wrapper">
                  <a href={`mailto:${myEmail}`} className="hero-btn primary-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{t.sendMail}</span>
                  </a>

                  <button type="button" onClick={handleCopyEmail} className="hero-btn secondary-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? t.mailCopied : t.copyMail}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <ScrollToTop theme={theme} />
    </div>
  );
}
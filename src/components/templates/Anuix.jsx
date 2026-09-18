import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { usePreferences } from '../../context/PreferencesContext.jsx';
import { ANUIX_CONTENT } from '../../data/siteData.js';
import profileImg from '../../assets/images/profile.png';
import '../css/Anuix.css';

export default function Anuix() {
  const { lang, theme } = usePreferences();
  const t = ANUIX_CONTENT[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="anuix-master-root">
      <Navbar currentPage="about" />

      <section className="anuix-page-section telemetry-identity-zone">
        <div className="telemetry-grid-wrapper page-module-enter">
          <div className="operator-spec-deck">
            
            <header className="deck-meta-header">
              <div className="meta-header-left">
                <span className="strip-badge">{t.heroBadge}</span>
                <span className="operator-id-tag">{t.sysId}</span>
              </div>
              <div className="meta-header-right">
                <span className="strip-status">{t.heroStatus}</span>
              </div>
            </header>

            <div className="deck-core-content">
              <div className="biometric-portrait-frame">
                <div className="portrait-hud-corner tl">┌</div>
                <div className="portrait-hud-corner tr">┐</div>
                <div className="portrait-hud-corner bl">└</div>
                <div className="portrait-hud-corner br">┘</div>

                <div className="portrait-image-wrapper">
                  <img 
                    src={profileImg} 
                    alt={t.heroTitle} 
                    className="biometric-image" 
                  />
                </div>
              </div>

              <div className="operator-editorial-pane">
                <div className="manifesto-lead">
                  <span className="lead-prefix">▶</span>
                  <span className="lead-tag">OPERATOR PROFILE // ROOT</span>
                </div>

                <h1 className="operator-full-name">{t.heroTitle}</h1>
                <p className="operator-callout-role">{t.heroRole}</p>
                <p className="operator-mission-statement">{t.heroBio}</p>

                <div className="telemetry-compact-grid">
                  {t.telemetry.map((item, i) => (
                    <div key={i} className="telemetry-compact-card">
                      <span className="compact-label">{item.label} //</span>
                      <span className="compact-val">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="anuix-page-section experience-section-zone">
        <div className="telemetry-grid-wrapper page-module-enter">
          <header className="section-hud-header">
            <span className="hud-pre-tag">{t.expTag}</span>
            <h2 className="hud-major-title">{t.expTitle}</h2>
            <p className="hud-explain-lead">{t.expSub}</p>
          </header>

          <div className="experience-scroll-frame">
            <div className="experience-timeline-container">
              <div className="experience-timeline-spine" />

              <div className="experience-cards-column">
                <article className="experience-node-card current-active pending-slot-card">
                  <div className="experience-timeline-node">
                    <span className="node-outer-ring" />
                    <span className="node-inner-dot" />
                    <span className="node-live-ping" />
                  </div>

                  <div className="experience-card-inner pending-card-inner">
                    <div className="experience-card-topbar">
                      <span className="exp-period-capsule pending-period">
                        {t.pendingSlot.period}
                      </span>
                      <span className="exp-status-pill status-live pending-badge">
                        <span className="pulsing-beacon-mini" />
                        {t.pendingSlot.status}
                      </span>
                    </div>

                    <div className="experience-title-group">
                      <h3 className="exp-role-title pending-title">
                        {t.pendingSlot.role}
                      </h3>
                      <span className="loading-dots" aria-hidden="true">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </span>
                    </div>

                    <p className="exp-brief-summary">{t.pendingSlot.desc}</p>

                    <div className="experience-stack-footer">
                      {t.pendingSlot.stack.map((tech, i) => (
                        <span key={i} className="exp-tech-chip pending-tech-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>

                {t.experiences.map((exp, idx) => (
                  <article
                    key={idx}
                    className={`experience-node-card ${exp.isCurrent ? 'current-active' : ''}`}
                  >
                    <div className="experience-timeline-node">
                      <span className="node-outer-ring" />
                      <span className="node-inner-dot" />
                      {exp.isCurrent && <span className="node-live-ping" />}
                    </div>

                    <div className="experience-card-inner">
                      <div className="experience-card-topbar">
                        <span className="exp-period-capsule">
                          {exp.period}
                        </span>
                        <span className="exp-status-pill">
                          {exp.status}
                        </span>
                      </div>

                      <div className="experience-title-group">
                        <h3 className="exp-role-title">{exp.role}</h3>
                        <p className="exp-company-sub">{exp.company}</p>
                      </div>

                      <p className="exp-brief-summary">{exp.desc}</p>

                      <div className="experience-tasks-block">
                        <span className="tasks-label">RESPONSABILIDADES & LOGROS:</span>
                        <ul className="tasks-bullet-list">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="tasks-bullet-item">
                              <span className="bullet-arrow">▶</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-stack-footer">
                        {exp.stack.map((tech, i) => (
                          <span key={i} className="exp-tech-chip">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="anuix-page-section principles-matrix-section">
        <div className="telemetry-grid-wrapper page-module-enter">
          <div className="principles-master-deck">
            <header className="section-hud-header">
              <span className="hud-pre-tag">{t.principlesTag}</span>
              <h2 className="hud-major-title">{t.principlesTitle}</h2>
              <p className="hud-explain-lead">{t.principlesSub}</p>
            </header>

            <div className="principles-quad-grid">
              {t.principles.map((rule) => (
                <article key={rule.code} className="principle-monolith-card">
                  <div className="monolith-head">
                    <span className="monolith-code-pill">{rule.code}</span>
                    <span className="monolith-line-tick" />
                  </div>
                  <h3 className="monolith-name">{rule.title}</h3>
                  <blockquote className="monolith-axiom">"{rule.mantra}"</blockquote>
                  <p className="monolith-exposition">{rule.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="anuix-page-section external-life-section">
        <div className="telemetry-grid-wrapper page-module-enter">
          <div className="external-system-frame">
            <header className="section-hud-header">
              <span className="hud-pre-tag">{t.lifeTag}</span>
              <h2 className="hud-major-title">{t.lifeTitle}</h2>
              <p className="hud-explain-lead">{t.lifeSub}</p>
            </header>

            <div className="external-cards-grid">
              {t.lifeCards.map((card, i) => (
                <article key={i} className="external-pod-card">
                  <div className="pod-telemetry-badge">
                    <span className="pod-status-string">{card.status}</span>
                  </div>
                  <h3 className="pod-title">{card.title}</h3>
                  <p className="pod-description">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <ScrollToTop theme={theme} />
    </div>
  );
}
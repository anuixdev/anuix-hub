import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/projectsData.js';
import ProjectModal from './ProjectModal.jsx';
import '../css/Projects.css';

export default function Projects({ lang = 'es' }) {
  const t = PROJECTS_DATA[lang];
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const sortedProjects = [...t.projects].sort((a, b) => {
    if (a.statusType === 'active' && b.statusType !== 'active') return -1;
    if (a.statusType !== 'active' && b.statusType === 'active') return 1;
    return 0;
  });

  const handleOpenInspect = (proj) => {
    setSelectedProject(proj);
    setIsModalClosing(false);
  };

  const handleCloseInspect = () => {
    if (isModalClosing) return;
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsModalClosing(false);
    }, 190);
  };

  return (
    <section id="portafolio" className="content-section">
      <div className="section-container">
        
        <div className="section-header-block">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="projects-matrix">
          {sortedProjects.map((proj, index) => {
            return (
              <article key={proj.id} className="project-blueprint-card">
                
                <div className="card-telemetry-top">
                  <span className="project-id-badge">{`PRJ:0${index + 1}`}</span>
                  <div className={`status-badge-chip ${proj.statusType}`}>
                    <span className="status-dot" />
                    <span className="status-label">{proj.status}</span>
                  </div>
                </div>

                <div className="card-body-spec">
                  <h3 className="project-heading">{proj.title}</h3>
                  <p className="project-summary">{proj.desc}</p>
                </div>

                <div className="project-tags-cloud">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-btn repo-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>{t.viewCode}</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => handleOpenInspect(proj)}
                    className="card-action-btn live-demo-btn"
                  >
                    <span>{t.viewInspect}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>

      <ProjectModal 
        project={selectedProject}
        isClosing={isModalClosing}
        onClose={handleCloseInspect}
        lang={lang}
      />
    </section>
  );
}
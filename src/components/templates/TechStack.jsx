import React from 'react';
import '../css/TechStack.css';

const TECH_STACK_CONTENT = {
  es: {
    tag: 'MOD:04 // ARQUITECTURA TÉCNICA',
    title: 'Stack de Tecnologías',
    subtitle: 'Herramientas, frameworks y lenguajes adquiridos.',
    categories: [
      {
        code: '01',
        name: 'LENGUAJES BASE',
        items: ['Bash', 'C / C++', 'HTML5 & CSS3', 'Java', 'JavaScript', 'Python', 'Scala', 'SQL', 'TypeScript']
      },
      {
        code: '02',
        name: 'BACKEND & WEB',
        items: ['MySQL', 'React', 'REST APIs', 'Spring Boot', 'Vite']
      },
      {
        code: '03',
        name: 'DEVOPS & SISTEMAS',
        items: ['CI/CD', 'Docker', 'Git / GitHub', 'Jenkins', 'Kubernetes', 'Linux', 'MacOS', 'Windows', 'Máquinas Virtuales', 'BitBucket', 'Markdown']
      }, 
      {
        code: '04',
        name: 'IA & CIENCIA DE DATOS',
        items: ['ChromaDB', 'Hugging Face', 'LLM Integration', 'Ollama', 'OpenCode', 'OpenCV', 'Pandas', 'RAG', 'Machine Learning', 'Deep Learning']
      }
    ]
  },
  en: {
    tag: 'MOD:04 // TECHNICAL ARCHITECTURE',
    title: 'Technology Stack',
    subtitle: 'Tools, frameworks, and languages aquired.',
    categories: [
      {
        code: '01',
        name: 'CORE LANGUAGES',
        items: ['Bash', 'C / C++', 'HTML5 & CSS3', 'Java', 'JavaScript', 'Python', 'Scala', 'SQL', 'TypeScript', 'Markdown']
      },
      {
        code: '02',
        name: 'BACKEND & WEB',
        items: ['MySQL', 'React', 'REST APIs', 'Spring Boot', 'Vite']
      },
      {
        code: '03',
        name: 'DEVOPS & SYSTEMS',
        items: ['CI/CD', 'Docker', 'Git / GitHub', 'Jenkins', 'Kubernetes', 'Linux', 'MacOS', 'Windows', 'Virtual Machines', 'BitBucket', 'Markdown']
      },
      {
        code: '04',
        name: 'AI & DATA SCIENCE',
        items: ['ChromaDB', 'Hugging Face', 'LLM Integration', 'Ollama', 'OpenCode', 'OpenCV', 'Pandas', 'RAG']
      }
    ]
  }
};

export default function TechStack({ lang = 'es' }) {
  const t = TECH_STACK_CONTENT[lang];

  return (
    <section id="sobre-mi" className="content-section techstack-section">
      <div className="section-container">
        
        <div className="section-header-block">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="techstack-grid">
          {t.categories.map((cat) => (
            <div key={cat.code} className="techstack-card">
              <div className="techstack-card-header">
                <div className="card-title-group">
                  <span className="card-code">{cat.code} //</span>
                  <h3 className="card-heading">{cat.name}</h3>
                </div>
                <span className="card-counter">[{cat.items.length}]</span>
              </div>

              <div className="techstack-tags-wrap">
                {cat.items.map((item, idx) => (
                  <span key={idx} className="stack-tag-pill">
                    <span className="tag-dot" />
                    <span className="tag-text">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
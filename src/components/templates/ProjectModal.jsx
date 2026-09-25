import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../css/ProjectModal.css';

const TacticalCarousel = ({ images }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current || index < 0 || index >= images.length) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
  };

  return (
    <div className="term-carousel-container">
      <div className="carousel-hud-top">
        <span className="carousel-tag">DATA_BANK // {images.length} FILES</span>
        <div className="carousel-controls">
          <button 
            type="button" 
            className="carousel-btn" 
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className="carousel-counter">
            0{currentIndex + 1} <span className="counter-dim">/ 0{images.length}</span>
          </span>
          <button 
            type="button" 
            className="carousel-btn" 
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex === images.length - 1}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      
      <div 
        className="carousel-viewport" 
        ref={scrollRef} 
        onScroll={handleScroll}
      >
        {images.map((img, idx) => (
          <figure key={idx} className="carousel-slide">
            <div className="carousel-img-wrapper">
              <img src={img.url} alt={img.caption || `Imagen ${idx + 1}`} className="carousel-img" />
            </div>
            {img.caption && (
              <figcaption className="carousel-caption">
                <span className="caption-pip" /> {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

const ComparisonSlider = ({ beforeUrl, afterUrl, beforeLabel, afterLabel, caption }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <figure className="term-comparison-block">
      <div className="term-comparison-container">
        <img src={beforeUrl} alt="Original" className="term-comparison-img before" />
        
        <div 
          className="term-comparison-after-wrapper" 
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img src={afterUrl} alt="Procesada" className="term-comparison-img after" />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(e.target.value)}
          className="term-comparison-range"
          aria-label="Deslizador comparativo"
        />

        <div className="term-comparison-divider" style={{ left: `${sliderPos}%` }}>
          <div className="term-comparison-handle">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {beforeLabel && <span className="term-comparison-badge left-badge">{beforeLabel}</span>}
        {afterLabel && <span className="term-comparison-badge right-badge">{afterLabel}</span>}
      </div>
      {caption && <figcaption className="term-caption">{caption}</figcaption>}
    </figure>
  );
};

export default function ProjectModal({ project, isClosing, onClose, lang }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (project) setActiveTab(0);
  }, [project]);

  useEffect(() => {
    if (project && !isClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, isClosing, onClose]);

  if (!project) return null;

  const currentTabContent = project.tabs[activeTab]?.content || [];

  return createPortal(
    <div 
      className={`term-modal-backdrop ${isClosing ? 'closing' : ''}`} 
      onClick={onClose}
    >
      <div 
        className={`term-modal-window ${isClosing ? 'closing' : ''}`} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="term-modal-header">
          <div className="term-title">
            {project.inspectTag}
          </div>
          <button 
            type="button" 
            className="term-close-x" 
            onClick={onClose} 
            aria-label="Cerrar ventana"
          >
            ✕
          </button>
        </header>

        <nav className="term-tabs-bar">
          {project.tabs.map((tab, idx) => (
            <button
              key={tab.id}
              type="button"
              className={`term-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="term-github-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GITHUB</span>
            </a>
          )}
        </nav>

        <div className="term-modal-body">
          <div className="term-content-flow" key={activeTab}>
            <h2 className="term-project-heading">{project.title}</h2>
            
            {currentTabContent.map((block, index) => {
              if (block.type === 'text') {
                return <p key={index} className="term-text">{block.value}</p>;
              }
              if (block.type === 'video') {
                const hasParams = block.url.includes('?');
                const autoplayUrl = `${block.url}${hasParams ? '&' : '?'}autoplay=1`;

                return (
                  <div key={index} className="term-video-wrapper">
                    <iframe
                      src={autoplayUrl}
                      title={`Video ${project.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="term-video"
                    />
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={index} className="term-image-wrapper">
                    <img src={block.url} alt={`Captura de ${project.title}`} className="term-image" />
                    {block.caption && <figcaption className="term-caption">{block.caption}</figcaption>}
                  </figure>
                );
              }
              if (block.type === 'link') {
                return (
                  <a key={index} href={block.url} target="_blank" rel="noopener noreferrer" className="term-link-btn">
                    <span>{block.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                );
              }
              if (block.type === 'gallery') {
                return <TacticalCarousel key={index} images={block.images} />;
              }
              if (block.type === 'comparison') {
                return (
                  <ComparisonSlider 
                    key={index}
                    beforeUrl={block.beforeUrl}
                    afterUrl={block.afterUrl}
                    beforeLabel={block.beforeLabel}
                    afterLabel={block.afterLabel}
                    caption={block.caption}
                  />
                );
              }
              if (block.type === 'grade') {
                return (
                  <div key={index} className="term-grade-panel">
                    <span className="term-grade-label">{block.label}</span>
                    <div className="term-grade-score-row">
                      <span className="term-grade-value">{block.value}</span>
                      {block.badge && <span className="term-grade-badge">{block.badge}</span>}
                    </div>
                  </div>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="term-quote-block">
                    {block.title && <div className="term-quote-title">{block.title}</div>}
                    <p className="term-quote-text">«{block.value}»</p>
                  </blockquote>
                );
              }
              if (block.type === 'document') {
                return (
                  <a key={index} href={block.url} target="_blank" rel="noopener noreferrer" className="term-document-card">
                    <div className="term-doc-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="term-doc-info">
                      <span className="term-doc-label">{block.label}</span>
                      {block.format && <span className="term-doc-format">{block.format}</span>}
                    </div>
                    <div className="term-doc-action">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
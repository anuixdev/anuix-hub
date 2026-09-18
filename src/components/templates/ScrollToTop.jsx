import React, { useState, useEffect } from 'react';
import '../css/ScrollToTop.css';

export default function ScrollToTop({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scroll-top-fab"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      title="Volver arriba [Top]"
    >
      <span className="fab-glint" />
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
      <span className="fab-tag">TOP</span>
    </button>
  );
}
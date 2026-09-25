import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BorderGlowButton.css';

export default function BorderGlowButton({ to = '/sobre-mi', children, className = '' }) {
  return (
    <Link to={to} className={`border-glow-action-btn ${className}`}>
      <span className="glow-aura" aria-hidden="true" />
      <span className="glow-track" aria-hidden="true" />
      <span className="glow-line" aria-hidden="true" />
      <span className="glow-surface">
        {children}
      </span>
    </Link>
  );
}
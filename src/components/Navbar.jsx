import { useState } from 'react';
import './css/Navbar.css';

function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ES');

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          anuixdev
        </a>

        <nav>
          <ul className="navbar-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Portfolio</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className="settings-wrapper">
          <button
            type="button"
            className="settings-trigger"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            style={{ display: 'inline-block', padding: '6px 12px', cursor: 'pointer' }}
            >
            ⚙️ Ajustes
          </button>

          {isSettingsOpen && (
            <div className="settings-dropdown">
              <div className="settings-item">
                <span>Tema</span>
                <button
                  type="button"
                  className="settings-action-btn"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
                </button>
              </div>

              <div className="settings-item">
                <span>Idioma</span>
                <button
                  type="button"
                  className="settings-action-btn"
                  onClick={toggleLanguage}
                >
                  {language === 'ES' ? 'ES (Cambiar a EN)' : 'EN (Switch to ES)'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
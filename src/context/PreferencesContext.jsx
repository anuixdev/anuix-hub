import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('anuix-lang') || 'es';
    }
    return 'es';
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('anuix-theme');
      if (saved) return saved;
      return document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    localStorage.setItem('anuix-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('anuix-lang', lang);
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <PreferencesContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
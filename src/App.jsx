import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PreferencesProvider } from './context/PreferencesContext.jsx';
import Loader from './components/templates/LoadingScreen.jsx';
import Hero from './components/templates/Hero.jsx';
import Anuix from './components/templates/Anuix.jsx';

export default function App() {
  return (
    <PreferencesProvider>
      <BrowserRouter>
        <Loader>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/sobre-mi" element={<Anuix />} />
          </Routes>
        </Loader>
      </BrowserRouter>
    </PreferencesProvider>
  );
}
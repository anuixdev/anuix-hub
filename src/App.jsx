import React from 'react';
import Loader from './components/LoadingScreen.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/Navbar.jsx'

function App() {
  return (
    <Loader>
      <Hero />
    </Loader>
  );
}

export default App;
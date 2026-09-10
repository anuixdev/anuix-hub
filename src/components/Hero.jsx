import React from 'react';

function Hero() {
  return (
    <section 
      id="hero" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        color: '#ffffff', // <-- Asegura contraste blanco sobre el fondo oscuro
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '2px' }}>
        Hola, soy Anuixdev
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>
        Desarrollador enfocado en Software e IA
      </p>
    </section>
  );
}

export default Hero;
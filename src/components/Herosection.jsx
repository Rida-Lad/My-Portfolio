import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to My Portfolio</h1>
        <p style={styles.subtitle}>Showcasing my projects and skills</p>
        <button style={styles.button}>Learn More</button>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    maxWidth: '600px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HeroSection;
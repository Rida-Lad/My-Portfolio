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


export default HeroSection;
import React, { useState, useEffect, useRef } from 'react';

const PremiumPortfolioHeader = () => {
  const jobTitles = [
    "Web Developer",
    "Designer",
    "Data Analyst",
    "Business Manager"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const nameRef = useRef(null);
  
  // Particle animation setup
  const particlesRef = useRef([]);
  const [particles, setParticles] = useState([]);
  
  // Generate particles on component mount
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setParticles(newParticles);
    
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100
        }))
      );
      particlesRef.current = requestAnimationFrame(animateParticles);
    };
    
    particlesRef.current = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(particlesRef.current);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < jobTitles[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(jobTitles[currentIndex].substring(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        // Pause at the end of typing before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Deleting speed (slightly faster than typing)
      } else {
        // Move to next job title and start typing again
        setCurrentIndex((currentIndex + 1) % jobTitles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex]);

  // Name hover effect
  useEffect(() => {
    if (!nameRef.current) return;
    
    const handleMouseMove = (e) => {
      if (!nameRef.current) return;
      
      const rect = nameRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      nameRef.current.style.transform = `perspective(500px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (nameRef.current) {
        nameRef.current.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg)';
      }
    };
    
    const element = nameRef.current;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [nameRef.current]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-gold-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              backgroundColor: index % 3 === 0 ? '#D4AF37' : '#FFFFFF'
            }}
          />
        ))}
      </div>
      
      {/* Content container with subtle parallax effect */}
      <div className="relative z-20 text-center px-6">
        {/* Enhanced name with stronger visibility */}
        <div 
          ref={nameRef}
          className="inline-block transition-all duration-300 cursor-pointer mb-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white" 
              style={{ 
                textShadow: "0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(212, 175, 55, 0.3)",
                letterSpacing: "3px"
              }}>
            RIDA LADIB
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-gold-300 to-white mt-2"></div>
        </div>
        
        {/* Typing animation for job title */}
        <div className="h-16 mb-8 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-medium"
              style={{ color: '#D4AF37', textShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}>
            {displayText}
            <span className="inline-block w-2 h-6 ml-1 bg-white animate-pulse"></span>
          </h2>
        </div>
        
        {/* Decorative elements */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="w-16 h-px bg-white opacity-30"></div>
          <div className="w-8 h-8 rounded-full border-2 border-gold-400 flex items-center justify-center transform rotate-45" 
               style={{ borderColor: '#D4AF37' }}>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>
          <div className="w-16 h-px bg-white opacity-30"></div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10">
          <button 
            className="group relative px-8 py-3 overflow-hidden rounded font-medium"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black border-2 border-white opacity-50 rounded"></span>
            <span className="relative text-white group-hover:text-black font-medium">View Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPortfolioHeader;
import React, { useState, useEffect } from 'react';

const AnimatedPortfolioHeader = () => {
  const jobTitles = [
    "Web Developer",
    "Designer",
    "Data Analyst",
    "Business Manager"
  ];
  
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      // First fade out
      setIsVisible(false);
      
      setTimeout(() => {
        // Change job title and fade in
        setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
        setIsVisible(true);
      }, 500); // Wait for fade out animation to complete
      
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(textInterval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          RIDA LADIB
        </h1>
        
        <div className="h-16 flex items-center justify-center">
          <div 
            className={`transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center">
              <span className="text-white text-2xl">/</span>
              <h2 className="text-2xl text-gold-400 px-3 font-medium" style={{ color: '#D4AF37' }}>
                {jobTitles[currentJobIndex]}
              </h2>
              <span className="text-white text-2xl">/</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="w-32 h-1 bg-gradient-to-r from-gold-300 to-gold-500 mx-auto rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPortfolioHeader;
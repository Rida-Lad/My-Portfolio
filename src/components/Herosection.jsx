import React from 'react';


const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">Showcasing my projects and skills</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
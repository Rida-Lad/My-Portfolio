import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Name and Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">RIDA LADIB</h1>
          <div className="flex items-center">
            <div className="w-12 h-1 bg-red-900 mr-4"></div>
            <p className="text-xl md:text-2xl">WEB DEVELOPER & DATA ANALYST</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-t-2 border-red-900 pt-4">
            <p className="text-4xl font-bold">3</p>
            <p className="text-gray-400">certifications</p>
          </div>
          <div className="border-t-2 border-red-900 pt-4">
            <p className="text-4xl font-bold">10</p>
            <p className="text-gray-400">projects</p>
          </div>
          <div className="border-t-2 border-red-900 pt-4">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-gray-400">technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
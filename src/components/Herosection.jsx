import React from 'react';

export default function HeroSection({ scrollToProjects }) {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Name and Title */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 block tracking-tight">RIDA LADIB</h1>
          <div className="flex items-center justify-center mb-12">
            <p style={{ fontFamily: 'Cinzel' }} className="text-3xl md:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 font-medium">
              WEB DEVELOPER & DATA ANALYST
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 bg-red-400 text-white rounded-full font-bold hover:bg-red-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={scrollToProjects}
            >
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-red-400 text-white rounded-full font-bold hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-12 mt-24">
          <div className="text-center relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">4</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Certifications</p>
          </div>
          <div className="text-center relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">10</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Projects</p>
          </div>
          <div className="text-center relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">20+</p>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
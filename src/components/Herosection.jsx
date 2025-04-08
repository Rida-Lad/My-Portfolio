import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 ">
        {/* Name and Title */}
        <div className="mb-30 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 block">RIDA LADIB</h1>
          <div className="flex items-center justify-center">
            <div className="w-12 h-1 bg-red-900 mr-4"></div>
            <p className="text-xl md:text-2xl block">WEB DEVELOPER & DATA ANALYST</p>
          </div>
        </div>


        {/* Stats */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <div className=" pl-4 text-center">
            <p className="text-lg font-bold">3</p>
            <p className="text-sm text-gray-400">Certifications</p>
          </div>
          <div className="border-l-4 border-red-900 pl-4 text-center">
            <p className="text-lg font-bold">10</p>
            <p className="text-sm text-gray-400">Projects</p>
          </div>
          <div className="border-l-4 border-red-900 pl-4 text-center">
            <p className="text-lg font-bold">20+</p>
            <p className="text-sm text-gray-400">Technologies</p>
          </div>
        </div>
      </div>
    </section >
  );
}
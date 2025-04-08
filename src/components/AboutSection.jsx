import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect - matching the hero section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Content placeholder - to be filled later */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">ABOUT SECTION</h2>
          <p className="text-xl opacity-80">Content will go here...</p>
        </div>
      </div>
    </section>
  );
}
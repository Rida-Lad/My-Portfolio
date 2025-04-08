import React from 'react';

export default function SkillsSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
          TECH STACK
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skill Item - Repeat this block for each technology */}
          <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              {/* Replace with actual icon component */}
              <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              <h3 className="text-lg font-semibold">JavaScript</h3>
            </div>
            <p className="text-sm opacity-80 mt-2">Frontend Development</p>
          </div>

          {/* Add more skills following the same pattern */}
          <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              <h3 className="text-lg font-semibold">Python</h3>
            </div>
            <p className="text-sm opacity-80 mt-2">Data Analysis</p>
          </div>

          <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              <h3 className="text-lg font-semibold">React</h3>
            </div>
            <p className="text-sm opacity-80 mt-2">Frontend Framework</p>
          </div>

          <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-red-600/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              <h3 className="text-lg font-semibold">Node.js</h3>
            </div>
            <p className="text-sm opacity-80 mt-2">Backend Development</p>
          </div>

          {/* Add more skill items as needed */}
        </div>
      </div>
    </section>
  );
}
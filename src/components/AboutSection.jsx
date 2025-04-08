import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title & Description */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
            WHO I AM
          </h2>
          <p  className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            A disciplined Moroccan developer with a strong passion for technology and precision. 
            Specializing in web development and Python programming, I combine technical expertise 
            with a keen interest in the data analytics domain.
          </p>
        </div>

        {/* Education & Skills Columns */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Education Timeline */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
              Education & Formation
            </h3>
            <div className="relative pl-8 border-l-2 border-red-600/30 space-y-8">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-red-400 rounded-full -left-[20px] top-2"></div>
                <p className=" font-semibold">2023</p>
                <p className="opacity-80">Scientific Baccalaureate in Physics</p>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-red-400 rounded-full -left-[20px] top-2"></div>
                <p className="font-semibold">2024</p>
                <p className="opacity-80">ISTA NTIC SYBA - Digital Development</p>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-red-400 rounded-full -left-[20px] top-2"></div>
                <p className="font-semibold">2025-Current</p>
                <p className="opacity-80">Jah Info Plus - Company Management</p>
                <p className="opacity-80 mt-1">Self-Learning in Tech & Data Science</p>
              </div>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-black/50 backdrop-blur-sm border  rounded-xl border-red-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="opacity-80 text-sm">Building modern applications using JavaScript, Python, and cutting-edge frameworks</p>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border  rounded-xl border-red-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">Data Analysis & Visualization</h3>
                <p className="opacity-80 text-sm">Transforming raw data into actionable insights through advanced analytics</p>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border  rounded-xl border-red-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">Business Management</h3>
                <p className="opacity-80 text-sm">Strategic planning and operational optimization for tech-driven organizations</p>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm border  rounded-xl border-red-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p className="opacity-80 text-sm">Creating intuitive user experiences with modern design principles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
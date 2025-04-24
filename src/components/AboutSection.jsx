import React from 'react';
import { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="bg-black text-white min-h-screen flex items-center py-12 px-4 md:px-12 relative overflow-hidden will-change-transform [overflow-clip-margin:contain-paint]">
      {/* Optimized Red Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-red-900/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 transform-gpu">
        {/* Title & Description */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
            WHO I AM
          </h2>
          <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            A disciplined Moroccan developer with a strong passion for technology and precision. 
            Specializing in web development and Python programming.
          </p>
        </div>

        {/* Education & Skills Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Education Timeline */}
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
              Education & Formation
            </h3>
            <div className="relative pl-6 border-l-2 border-red-600/30 space-y-6">
              {[
                { year: "2023", text: "Scientific Baccalaureate in Physics" },
                { 
                  year: "2024-Current", 
                  text: ["Jah Info Plus - Company Management", "Self-Learning in Tech & Data Science"]
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute w-2 h-2 bg-red-400 rounded-full -left-[15px] top-2" />
                  <p className="text-sm font-semibold">{item.year}</p>
                  {Array.isArray(item.text) ? (
                    item.text.map((t, i) => (
                      <p key={i} className="opacity-80 text-sm">{t}</p>
                    ))
                  ) : (
                    <p className="opacity-80 text-sm">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Cards */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  title: "Web Development", 
                  text: "Building modern applications using JavaScript, Python, and cutting-edge frameworks" 
                },
                { 
                  title: "Data Analysis & Visualization", 
                  text: "Transforming raw data into actionable insights through advanced analytics" 
                },
                { 
                  title: "Business Management", 
                  text: "Strategic planning and operational optimization for tech-driven organizations" 
                },
                { 
                  title: "UI/UX Design", 
                  text: "Creating intuitive user experiences with modern design principles" 
                }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 bg-black/40 border rounded-lg border-red-400/30 transition-opacity duration-200 hover:opacity-90"
                >
                  <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                  <p className="opacity-80 text-xs md:text-sm">{skill.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function ContactSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
          GET IN TOUCH
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-16">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-red-400 transition-colors">
            <FaGithub className="w-16 h-16" />
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-red-400 transition-colors">
            <FaLinkedin className="w-16 h-16" />
          </a>
          
          <a href="mailto:your.email@gmail.com" className="text-red-300 hover:text-red-400 transition-colors">
            <SiGmail className="w-16 h-16" />
          </a>
          
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-red-400 transition-colors">
            <FaWhatsapp className="w-16 h-16" />
          </a>
        </div>
      </div>
    </section>
  );
}
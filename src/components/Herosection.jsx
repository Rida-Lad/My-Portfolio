import React from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = forwardRef(({ scrollToProjects }, ref) => {
  return (
    <section ref={ref} className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Name and Title */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }}
            className="text-6xl md:text-8xl font-bold mb-4 block tracking-tight"
          >
            RIDA LADIB
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center justify-center mb-12"
          >
            <p
              style={{ fontFamily: 'Cinzel' }}
              className="text-3xl md:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 font-medium"
            >
              WEB DEVELOPER & DATA ANALYST
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button
              className="px-8 py-3 bg-red-400 text-white rounded-full font-bold hover:bg-red-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={scrollToProjects}
            >
              View Projects
            </button>
            <a
              href="/files/RIDA_CV.pdf"  
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-red-400 text-white rounded-full font-bold hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              View CV
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-row flex-wrap items-center justify-center gap-12 mt-24"
        >
          {[['4', 'Certifications'], ['10', 'Projects'], ['20+', 'Technologies']].map(([value, text], index) => (
            <motion.div
              key={text}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.4 + index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className="text-center relative"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-red-600 rounded-full opacity-15"></div>
              <p className="text-4xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                {value}
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default HeroSection;
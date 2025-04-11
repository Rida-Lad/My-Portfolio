import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaPaperPlane } from 'react-icons/fa';

const Navbar = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState(0);
  const navRef = useRef();

  const sections = [
    { id: 'hero', icon: <FaHome /> },
    { id: 'about', icon: <FaUser /> },
    { id: 'skills', icon: <FaCode /> },
    { id: 'projects', icon: <FaProjectDiagram /> },
    { id: 'contact', icon: <FaPaperPlane /> }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      const ref = sectionRefs[index];
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        if (
          scrollPosition > offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/5 backdrop-blur-md rounded-full p-2 flex gap-4 border border-white/10 z-50"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 2.2 + index * 0.1,
            type: 'spring',
            stiffness: 150
          }}
          onClick={() => scrollToSection(sectionRefs[index])}
          className={`p-3 rounded-full hover:text-red-400 transition-all cursor-pointer ${activeSection === index
              ? 'bg-gradient-to-r from-red-600 to-red-400 text-white hover:text-white '
              : 'text-gray-400'
            }`}
        >
          <span className="text-xl">{section.icon}</span>
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navbar;



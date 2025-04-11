import React, { useRef, useState, useEffect } from 'react';
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
    <nav 
      ref={navRef}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/5 backdrop-blur-md rounded-full p-2 flex gap-4 border border-white/10 z-50"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(sectionRefs[index])}
          className={`p-3 rounded-full hover:text-red-400 transition-all cursor-pointer ${
            activeSection === index 
              ? 'bg-gradient-to-r from-red-600 to-red-400 text-white hover:text-white ' 
              : 'text-gray-400'
          }`}
        >
          <span className="text-xl">{section.icon}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
import React, { useState,useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectsPage from './pages/ProjectsPage';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="fixed bottom-6 left-0 right-0 mx-auto w-max z-50">
      <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 shadow-xl hover:shadow-red-900/30 transition-shadow duration-300">
        <Link 
          to="/" 
          onClick={() => setActiveSection('home')}
          className="p-3 relative group"
        >
          <div className={`absolute inset-0 border-2 ${activeSection === 'home' ? 'border-red-400' : 'border-white/10'} rounded-full transition-all duration-300 group-hover:border-red-400`}>
            <div className="absolute inset-0 bg-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <FaHome className={`w-6 h-6 ${activeSection === 'home' ? 'text-red-400' : 'text-white'}`} />
        </Link>

        <a 
          href="#about" 
          onClick={() => setActiveSection('about')}
          className="p-3 relative group"
        >
          <div className={`absolute inset-0 border-2 ${activeSection === 'about' ? 'border-red-400' : 'border-white/10'} rounded-full transition-all duration-300 group-hover:border-red-400`}>
            <div className="absolute inset-0 bg-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <FaUser className={`w-6 h-6 ${activeSection === 'about' ? 'text-red-400' : 'text-white'}`} />
        </a>

        <a 
          href="#skills" 
          onClick={() => setActiveSection('skills')}
          className="p-3 relative group"
        >
          <div className={`absolute inset-0 border-2 ${activeSection === 'skills' ? 'border-red-400' : 'border-white/10'} rounded-full transition-all duration-300 group-hover:border-red-400`}>
            <div className="absolute inset-0 bg-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <FaCode className={`w-6 h-6 ${activeSection === 'skills' ? 'text-red-400' : 'text-white'}`} />
        </a>

        <a 
          href="#projects" 
          onClick={() => setActiveSection('projects')}
          className="p-3 relative group"
        >
          <div className={`absolute inset-0 border-2 ${activeSection === 'projects' ? 'border-red-400' : 'border-white/10'} rounded-full transition-all duration-300 group-hover:border-red-400`}>
            <div className="absolute inset-0 bg-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <FaProjectDiagram className={`w-6 h-6 ${activeSection === 'projects' ? 'text-red-400' : 'text-white'}`} />
        </a>

        <a 
          href="#contact" 
          onClick={() => setActiveSection('contact')}
          className="p-3 relative group"
        >
          <div className={`absolute inset-0 border-2 ${activeSection === 'contact' ? 'border-red-400' : 'border-white/10'} rounded-full transition-all duration-300 group-hover:border-red-400`}>
            <div className="absolute inset-0 bg-red-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <FaEnvelope className={`w-6 h-6 ${activeSection === 'contact' ? 'text-red-400' : 'text-white'}`} />
        </a>
      </div>
    </nav>
  );
};

export default function App() {
  const projectsSectionRef = useRef(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection scrollToProjects={() => projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection ref={projectsSectionRef} />
            <ContactSection />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
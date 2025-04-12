import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  // Create refs for all sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Array of refs for the navbar
  const sectionRefs = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar sectionRefs={sectionRefs} />
            
            <HeroSection 
              ref={heroRef}
              scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            
            <AboutSection ref={aboutRef} />
            <SkillsSection ref={skillsRef} />
            <ProjectsSection ref={projectsRef} />
            <ContactSection ref={contactRef} />
          </>
        } />
        
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
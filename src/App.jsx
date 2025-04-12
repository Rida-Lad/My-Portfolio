import React, { useRef, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy-loaded components
const HeroSection = lazy(() => import('./components/Herosection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

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
              <>
                <HeroSection 
                  ref={heroRef}
                  scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                />
                <AboutSection ref={aboutRef} />
                <SkillsSection ref={skillsRef} />
                <ProjectsSection ref={projectsRef} />
                <ContactSection ref={contactRef} />
              </>
          </>
        } />
        
        <Route path="/projects" element={
            <ProjectsPage />
        } />
      </Routes>
    </Router>
  );
}
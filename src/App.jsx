import React from 'react';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectsPage from './pages/ProjectsPage';
export default function App() {
  const projectsSectionRef = useRef(null);
  return (
    <Router>
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
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectsPage from './pages/ProjectsPage';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
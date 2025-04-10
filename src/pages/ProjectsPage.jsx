import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 style={{fontFamily:'Poppins'}} className="text-4xl md:text-6xl font-bold mb-10 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
          PROJECTS ARCHIVE
        </h1>
        
        {/* Grid sorted by newest first */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .sort((a, b) => b.id - a.id) // Newest projects first
            .map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                className="h-full" // Add if needed
              />
            ))}
        </div>
      </div>
    </section>
  );
}
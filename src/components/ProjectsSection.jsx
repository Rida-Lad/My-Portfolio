import React from 'react';
import projects from '../data/projects';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                    FEATURED WORK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects
                        .filter(project => project.featured)
                        .slice(0, 3) // Safety limit
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/projects"
                        className="inline-block px-8 py-3 border-2 border-red-400 text-red-300 rounded-full"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
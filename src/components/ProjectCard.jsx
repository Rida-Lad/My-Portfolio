import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative p-px overflow-hidden rounded-2xl transition-all duration-300 shadow-red-900/50 shadow-2xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-transparent to-red-300 opacity-40 transition-opacity duration-300">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_,theme(colors.red.600)_25%,transparent_50%)]"></div>
            </div>

            {/* Card content */}
            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6">
                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text">
                        {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full backdrop-blur-sm border border-red-900/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* GitHub link */}
                    <div className="flex items-center justify-between">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-red-400 hover:text-red-200 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>

            {/* Add this to your tailwind.config.js */}
            <style jsx global>{`
                @keyframes border-rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
                }
                .animate-border-rotate {
                animation: border-rotate 3s linear infinite;
                }
                
                @media (prefers-reduced-motion: reduce) {
                .animate-border-rotate {
                    animation: none;
                }
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;
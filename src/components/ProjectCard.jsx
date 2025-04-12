import React from 'react';

const ProjectCard = ({ project }) => {
    const techStackElements = project.tech.map((tech, index) => (
        <span
            key={index}
            className="px-2 py-1 text-xs bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full 
                       backdrop-blur-sm border border-red-900/50 flex-shrink-0"
        >
            {tech}
        </span>
    ));
    
    return (
        <div 
            className="group relative p-px overflow-hidden rounded-2xl transition-all duration-300 shadow-red-900/50 shadow-2xl"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-transparent to-red-300 opacity-40 transition-opacity duration-300 gradient-container">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_,theme(colors.red.600)_25%,transparent_50%)]"></div>
            </div>

            {/* Card content */}
            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Title with fixed 2-line height */}
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text 
                                  line-clamp-2 h-14 min-h-14">
                        {project.name}
                    </h3>

                    {/* Description with fixed 4-line height */}
                    <p className="text-gray-400 mb-4 line-clamp-4 h-24 min-h-24">
                        {project.description}
                    </p>

                    {/* Tech stack with dynamic 2-row wrapping */}
                    <div className="flex flex-wrap gap-2 mb-6 overflow-hidden">
                        {techStackElements}
                    </div>

                    {/* GitHub link */}
                    <div className="mt-auto">
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

            {/* Styles remain the same */}
            <style jsx="true">{`
                @keyframes border-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-border-rotate {
                    animation: border-rotate 3s linear infinite;
                }
                
                .paused .animate-border-rotate {
                    animation-play-state: paused;
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
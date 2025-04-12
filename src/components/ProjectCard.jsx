import React, { useEffect, useRef, useMemo } from 'react';

const ProjectCard = ({ project }) => {
    const animationRef = useRef(null);
    
    const techStackElements = useMemo(() => {
        return project.tech.map((tech, index) => (
            <span
                key={index}
                className="px-2 py-1 text-xs bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full 
                           backdrop-blur-sm border border-red-900/50 flex-shrink-0"
            >
                {tech}
            </span>
        ));
    }, [project.tech]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const element = entry.target.querySelector('.gradient-container');
                    if (element) {
                        element.classList.toggle('paused', !entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        if (animationRef.current) observer.observe(animationRef.current);
        
        return () => {
            if (animationRef.current) observer.unobserve(animationRef.current);
        };
    }, []);
    
    return (
        <div 
            ref={animationRef}
            className="group relative overflow-hidden rounded-2xl transition-all duration-300 shadow-red-900/50 shadow-2xl"
        >
            {/* Desktop-only animated gradient */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-300 via-transparent to-red-300 opacity-40 transition-opacity duration-300 gradient-container">
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0_,theme(colors.red.600)_25%,transparent_50%)]"></div>
            </div>

            {/* Card content with mobile border */}
            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-red-900/50 sm:border-0">
                <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text 
                                  line-clamp-2 h-14 min-h-14">
                        {project.name}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-4 h-24 min-h-24">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 overflow-hidden">
                        {techStackElements}
                    </div>

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

            <style jsx="true">{`
                @keyframes border-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @media (min-width: 640px) {
                    .animate-border-rotate {
                        animation: border-rotate 3s linear infinite;
                    }
                    
                    .paused .animate-border-rotate {
                        animation-play-state: paused;
                    }
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-border-rotate {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;
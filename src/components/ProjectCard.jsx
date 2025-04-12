import React, { useEffect, useRef, useMemo } from 'react';

const ProjectCard = ({ project }) => {
    const animationRef = useRef(null);

    // Memoized tech stack rendering
    const techStackElements = useMemo(() => (
        project.tech.map((tech, index) => (
            <span
                key={index}
                className="px-2 py-1 text-xs bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full 
                           backdrop-blur-sm border border-red-900/50 flex-shrink-0"
            >
                {tech}
            </span>
        ))
    ), [project.tech]);

    // Intersection observer for animation control
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('paused');
                    } else {
                        entry.target.classList.add('paused');
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
            className="group relative rounded-2xl bg-gradient-to-r from-red-300/40 to-transparent shadow-red-900/50 shadow-2xl"
        >
            {/* Card content */}
            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6 m-px">
                <div className="relative z-10 flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text 
                                  line-clamp-2 h-14 min-h-14">
                        {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 line-clamp-4 h-24 min-h-24">
                        {project.description}
                    </p>

                    {/* Tech stack */}
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

            <style jsx="true">{`
                .group {
                    position: relative;
                    background: linear-gradient(
                        45deg,
                        rgba(248, 113, 113, 0.4),
                        transparent,
                        rgba(248, 113, 113, 0.4)
                    );
                    background-size: 200% 200%;
                    animation: border-flow 6s linear infinite;
                }

                @keyframes border-flow {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                .paused {
                    animation-play-state: paused;
                }

                @media (prefers-reduced-motion: reduce) {
                    .group {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;
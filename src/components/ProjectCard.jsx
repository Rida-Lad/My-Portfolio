import React, { useEffect, useRef, useMemo } from 'react';

const ProjectCard = ({ project }) => {
    const animationRef = useRef(null);

    // Memoized tech stack rendering
    const techStackElements = useMemo(() => (
        project.tech.map((tech, index) => (
            <span
                key={index}
                className="px-2 py-1 text-xs bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full 
                           border border-red-900/50 flex-shrink-0"
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
                    const wrapper = entry.target;
                    wrapper.classList.toggle('active', entry.isIntersecting);
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
            className="group relative rounded-2xl overflow-hidden shadow-red-900/30 shadow-lg"
        >
            {/* Desktop-only border animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                <div className="absolute inset-0 desktop-animation opacity-40" />
            </div>

            {/* Mobile/tablet border animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
                <div className="absolute inset-0 mobile-animation opacity-30" />
            </div>

            {/* Card content */}
            <div className="relative h-full bg-black/95 rounded-2xl p-6">
                <div className="relative z-10 flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text 
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
                /* Desktop animation (>= 768px) */
                .desktop-animation {
                    background: conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        rgba(248,113,113,0.4) 180deg,
                        transparent 360deg
                    );
                    animation: rotate 4s linear infinite;
                    transform-origin: 50% 50%;
                }

                /* Mobile animation (< 768px) */
                .mobile-animation {
                    background: linear-gradient(
                        90deg,
                        rgba(248,113,113,0) 0%,
                        rgba(248,113,113,0.3) 50%,
                        rgba(248,113,113,0) 100%
                    );
                    background-size: 200% auto;
                    animation: pulse 3s linear infinite;
                }

                @keyframes rotate {
                    100% { transform: rotate(360deg); }
                }

                @keyframes pulse {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* Animation control */
                .active .desktop-animation,
                .active .mobile-animation {
                    animation-play-state: running;
                }

                .group:not(.active) .desktop-animation,
                .group:not(.active) .mobile-animation {
                    animation-play-state: paused;
                }

                @media (prefers-reduced-motion: reduce) {
                    .desktop-animation,
                    .mobile-animation {
                        animation: none !important;
                    }
                }

                /* Mobile-specific optimizations */
                @media (max-width: 767px) {
                    .desktop-animation {
                        display: none;
                    }
                    .mobile-animation {
                        animation-duration: 4s;
                    }
                }

                @media (min-width: 768px) {
                    .mobile-animation {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;
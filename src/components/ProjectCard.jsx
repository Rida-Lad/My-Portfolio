import React, { useState, useEffect } from 'react';

const ProjectCard = React.memo(({ project }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for lazy-rendering
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: '50px 0px 50px 0px' }
        );

        const cardElement = document.getElementById(`project-card-${project.id}`);
        if (cardElement) observer.observe(cardElement);

        return () => {
            if (cardElement) observer.unobserve(cardElement);
        };
    }, [project.id]);

    // Simplified tech stack rendering
    const techStackElements = project.tech.slice(0, 5).map((tech) => (
        <span
            key={tech}
            className="px-2 py-1 text-xs bg-red-900/30 rounded-full border border-red-900/50 flex-shrink-0"
        >
            {tech}
        </span>
    ));

    if (!isVisible) return <div id={`project-card-${project.id}`} className="h-[450px]" />;

    return (
        <div
            id={`project-card-${project.id}`}
            className="group relative p-px overflow-hidden rounded-2xl shadow-red-900/50 shadow-2xl"
            style={{
                transform: 'translateZ(0)', // Promote to GPU layer
                willChange: 'transform', // Hint browser about animation
            }}
        >
            {/* Simplified gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/50" />

            {/* Card content */}
            <div className="relative h-full bg-black/95 rounded-2xl p-6">
                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2 text-red-400 line-clamp-2 h-14">
                        {project.name}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-4 h-24">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 max-h-20 overflow-hidden">
                        {techStackElements}
                    </div>

                    <div className="mt-auto">
                        <a
                            href={project.github}
                            className="inline-flex items-center gap-2 text-red-400 hover:text-red-200 transition-colors"
                            aria-label={`View source code for ${project.name}`}
                        >
                            <svg
                                className="w-5 h-5 flex-shrink-0"
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
                            <span className="truncate">Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}, (prevProps, nextProps) => prevProps.project.id === nextProps.project.id);

export default ProjectCard;
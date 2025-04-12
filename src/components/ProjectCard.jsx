import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-red-900/50 shadow-2xl">
      {/* Card content with simple border */}
      <div className="h-full bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-red-900/50">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-400 text-transparent bg-clip-text 
                        line-clamp-2 h-14 min-h-14">
            {project.name}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-4 h-24 min-h-24">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 overflow-hidden">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gradient-to-r from-red-900/30 to-red-900/10 rounded-full 
                         backdrop-blur-sm border border-red-900/50 flex-shrink-0"
              >
                {tech}
              </span>
            ))}
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
    </div>
  );
};

export default ProjectCard;
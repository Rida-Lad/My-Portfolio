import React from 'react';
import projects from '../data/projects';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectsSection = React.forwardRef((props, ref) => {
    const featuredProjects = React.useMemo(() => 
        projects
            .filter(project => project.featured)
            .slice(0, 3)
    , []); // Empty array if projects is static

    const handleScrollReset = React.useCallback(() => {
        setTimeout(() => window.scrollTo(0, 0), 0);
    }, []);

    // React.useEffect(() => {
    //     console.log("ProjectsSection mounted/updated");
    // }, [featuredProjects]); // Only re-run when featuredProjects changes

    return (
        <section id="projects" ref={ref} className="bg-black text-white py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                    FEATURED WORK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/projects"
                        onClick={handleScrollReset}
                        className="inline-block px-8 py-3 border-2 border-red-400 text-red-300 rounded-full 
                        transition-all duration-300 ease-in-out 
                        hover:bg-red-400 hover:text-white hover:border-red-500 hover:scale-105 transform">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
});

export default React.memo(ProjectsSection);
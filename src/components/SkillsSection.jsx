import React from 'react';
import { forwardRef } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiNodedotjs, 
         SiExpress, SiDjango, SiMysql, SiMongodb, SiFigma, SiCanva, 
         SiAdobeillustrator, SiAdobephotoshop, SiBlender, SiPostman, 
         SiGit, SiGithub, SiNpm, SiXampp, SiTypescript } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillsSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="skills" className="bg-black text-white min-h-screen flex items-center py-12 px-4 md:px-12 relative overflow-hidden will-change-transform">
            {/* Optimized Red Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 transform-gpu">
                <h2 className="text-3xl md:text-6xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                    TECH STACK
                </h2>

                <div className="flex flex-col gap-6 md:gap-8">
                    {[
                        {
                            title: "Frontend Development",
                            icons: [SiHtml5, SiCss3, RiTailwindCssFill, SiJavascript, SiReact, SiTypescript]
                        },
                        {
                            title: "Backend & Databases",
                            icons: [SiPython, SiNodedotjs, SiExpress, SiDjango, SiMysql, SiMongodb]
                        },
                        {
                            title: "Design",
                            icons: [SiFigma, SiCanva, SiAdobeillustrator, SiAdobephotoshop, SiBlender]
                        },
                        {
                            title: "Tools",
                            icons: [BiLogoVisualStudio, DiVisualstudio, SiPostman, SiGit, 
                                   SiGithub, SiNpm, SiXampp]
                        }
                    ].map((category, index) => (
                        <div 
                            key={index}
                            className="p-4 md:p-6 bg-black/40 border border-white/10 rounded-xl shadow-red-300/20 shadow-sm transition-opacity duration-200"
                        >
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="md:w-1/4">
                                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="md:w-3/4 overflow-x-auto pb-2 md:pb-0 
                                    [-ms-overflow-style:none] [scrollbar-width:none]
                                    [&::-webkit-scrollbar]:hidden">
                                    <div className="flex gap-3 md:gap-6 min-w-max pr-4 md:pr-0">
                                        {category.icons.map((Icon, iconIndex) => (
                                            <Icon 
                                                key={iconIndex}
                                                className="h-7 md:h-10 w-auto text-red-300/90 flex-shrink-0"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default SkillsSection;

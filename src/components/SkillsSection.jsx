import React from 'react';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiDjango,
    SiMysql,
    SiMongodb,
    SiFigma,
    SiCanva,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiBlender
} from 'react-icons/si';
import {
    SiPostman,
    SiGit,
    SiGithub,
    SiNpm
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { SiXampp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";




export default function SkillsSection() {
    return (
        <section className="bg-black text-white min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
            {/* Red glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-900 opacity-40 blur-3xl rounded-full"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                    TECH STACK
                </h2>

                <div className="flex flex-col gap-8">
                    {/* Frontend Development Card */}
                    <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-red-300/30 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                                Frontend Development
                            </h3>
                        </div>
                        <div className="md:w-3/4 flex overflow-x-auto md:overflow-visible pb-3 md:pb-0">
                            <div className="flex flex-nowrap gap-4 md:gap-6 min-w-max">
                                <SiHtml5 className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiCss3 className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <RiTailwindCssFill className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiJavascript className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiReact className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiTypescript className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiNextdotjs className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Backend & Databases Card */}
                    <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-red-300/30 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                                Backend & Databases
                            </h3>
                        </div>
                        <div className="w-full md:w-3/4 flex overflow-x-auto md:overflow-visible pb-3 md:pb-0">
                            <div className="flex flex-nowrap gap-4 md:gap-6 min-w-max">
                                <SiPython className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiNodedotjs className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiExpress className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiDjango className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiMysql className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiMongodb className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Design Card */}
                    <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-red-300/30 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                                Design
                            </h3>
                        </div>
                        <div className="w-full md:w-3/4 flex overflow-x-auto md:overflow-visible pb-3 md:pb-0">
                            <div className="flex flex-nowrap gap-4 md:gap-6 min-w-max">
                                <SiFigma className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiCanva className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiAdobeillustrator className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiAdobephotoshop className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                <SiBlender className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Tools Card */}
                    <div className="p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-red-300/30 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/4">
                            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-600 text-transparent bg-clip-text">
                                Tools
                            </h3>
                        </div>
                        <div className="w-full md:w-3/4 flex overflow-x-auto md:overflow-visible pb-3 md:pb-0">
                            <div className="flex flex-nowrap gap-4 md:gap-6 min-w-max">
                                {/* VS Code */}
                                <BiLogoVisualStudio 
                                className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                                {/* VS Studio */}
                                <DiVisualstudio className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />

                                {/* Postman */}
                                <SiPostman className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />

                                {/* Git */}
                                <SiGit className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />

                                {/* GitHub */}
                                <SiGithub className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />

                                {/* npm */}
                                <SiNpm className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />

                                {/* XAMPP */}
                                <SiXampp className="h-8 md:h-10 w-auto text-red-300 flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
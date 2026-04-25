import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index, isVisible }) => {
    return (
        <div
            className={`group relative bg-gradient-to-br ${project.color} p-[1px] rounded-3xl transition-all duration-500 hover:scale-[1.03] ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-black/90 backdrop-blur-xl p-8 rounded-3xl h-full border border-white/5 hover:border-purple-500/30 transition-all">

                {/* 🔥 TAG */}
                {project.tag && (
                    <span className="absolute top-4 right-4 text-xs bg-purple-600 px-3 py-1 rounded-full">
                        {project.tag}
                    </span>
                )}

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">
                    {project.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                    >
                        Live <ExternalLink size={16} />
                    </a>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                        >
                            Code <Github size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
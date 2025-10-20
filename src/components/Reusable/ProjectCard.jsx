import React from "react";
import { ExternalLink } from "lucide-react";
const ProjectCard = ({ project, index, isVisible }) => {
    return (
        <div
            className={`group relative bg-gradient-to-br ${project.color} p-1 rounded-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-black p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                    View Project <ExternalLink size={16} />
                </a>

            </div>
        </div>
    );
};
export default ProjectCard;
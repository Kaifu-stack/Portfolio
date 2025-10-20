import React from "react";
import ProjectCard from "../Reusable/ProjectCard";

const ProjectSection = ({ isVisible }) => {
    const projects = [
        {
            title: "Rock Paper Scissors Game",
            desc: "An interactive Rock Paper Scissors game built with React. Enjoy smooth animations, live score tracking, and responsive design for all devices.",
            tech: ["React", "CSS", "JavaScript"],
            color: "from-purple-500 to-pink-500",
            link: "https://kaifu-stack.github.io/RPS-game/"
        },
        {
            title: "Currency Converter",
            desc: "A fast and accurate real-time currency converter using modern React hooks and public exchange rate APIs. Minimal and elegant UI for quick conversions.",
            tech: ["React", "API Integration", "Tailwind CSS"],
            color: "from-blue-500 to-cyan-500",
            link: "https://react-currency-converter-rouge.vercel.app/"
        },
        {
            title: "To-Do App",
            desc: "A productivity-focused to-do list application that allows users to add, edit, and manage daily tasks with a clean and smooth interface.",
            tech: ["React", "Tailwind CSS", "Local Storage"],
            color: "from-green-500 to-emerald-500",
            link: "https://todo-app-delta-fawn.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="relative py-32 px-6 z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            index={i}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

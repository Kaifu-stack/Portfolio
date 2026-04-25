import React from "react";
import ProjectCard from "../Reusable/ProjectCard";

const ProjectSection = ({ isVisible }) => {

    const featuredProjects = [
        {
            title: "Vynqo – Video Platform",
            desc: "Full-stack video sharing platform with real-time features including likes, tweets, subscriptions, and infinite scroll feed.",
            tech: ["MERN", "Socket.io", "JWT", "MongoDB"],
            color: "from-purple-500 to-pink-500",
            link: "https://vynqo.vercel.app",
            tag: "🔥 Featured"
        },
        {
            title: "Online News Portal",
            desc: "Admin-based news platform with analytics dashboard, role-based authentication, and full CRUD system.",
            tech: ["React", "Node.js", "MongoDB", "JWT"],
            color: "from-blue-500 to-cyan-500",
            link: "https://online-news-red.vercel.app",
            tag: "🚀 Full-Stack"
        }
    ];

    const otherProjects = [
        {
            title: "To-Do App",
            desc: "Task management app with local storage and clean UI.",
            tech: ["React", "Tailwind", "Local Storage"],
            color: "from-green-500 to-emerald-500",
            link: "https://todo-app-delta-fawn.vercel.app/"
        },
        {
            title: "Rock Paper Scissors",
            desc: "Interactive game with animations and live scoring.",
            tech: ["React", "CSS", "JavaScript"],
            color: "from-purple-500 to-pink-500",
            link: "https://kaifu-stack.github.io/RPS-game/"
        }
    ];

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    {featuredProjects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
                    ))}
                </div>

                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-300">
                    Other Projects
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {otherProjects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
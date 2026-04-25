import React from "react";
import SkillCard from "../Reusable/SkillCard";
import { Code, Rocket, Database } from "lucide-react";

const Skill = ({ isVisible }) => {
    const skills = [
        {
            name: "Programming & DSA",
            icon: <Code />,
            items: ["C++", "DSA (200+)", "Python", "SQL"],
        },
        {
            name: "Full-Stack",
            icon: <Rocket />,
            items: ["React", "Node", "MongoDB", "JWT", "Socket.io"],
        },
        {
            name: "Tools",
            icon: <Database />,
            items: ["Git", "Postman", "Figma", "VS Code"],
        },
    ];

    return (
        <section id="skills" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold mb-16 text-center gradient-text">
                    Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <SkillCard key={i} skill={skill} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
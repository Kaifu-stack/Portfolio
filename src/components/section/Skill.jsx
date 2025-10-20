import React from "react";
import SkillCard from "../Reusable/SkillCard";
import { Code, Palette, Rocket } from "lucide-react";

const Skill = ({ isVisible }) => {
    const skills = [
        {
            name: "Programming & DSA",
            icon: <Code />,
            items: ["C++", "DSA", "Python", "SQL"],
        },
        {
            name: "Frontend Development",
            icon: <Rocket />,
            items: [
                "React",
                "Redux",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
            ],
        },
        {
            name: "Design & Tools",
            icon: <Palette />,
            items: [
                "Figma",
                "StarUML",
                "Dia",
                "Google Cloud",
            ],
        },
    ];

    return (
        <section id="skills" className="relative py-32 px-6 z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Skills & Expertise
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <SkillCard
                            key={i}
                            skill={skill}
                            index={i}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;

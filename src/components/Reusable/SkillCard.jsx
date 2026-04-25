import React from "react";

const SkillCard = ({ skill, index, isVisible }) => {
    return (
        <div
            className={`group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 ${isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* ICON */}
            <div className="text-purple-400 mb-4 text-3xl group-hover:scale-110 transition-transform">
                {skill.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>

            {/* ITEMS */}
            <ul className="space-y-2">
                {skill.items.map((item) => (
                    <li
                        key={item}
                        className="text-gray-400 flex items-center gap-2 text-sm"
                    >
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
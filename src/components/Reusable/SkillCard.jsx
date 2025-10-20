import React from "react";
const SkillCard = ({ skill, index, isVisible }) => {
    return (
        <div
            className={`bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/70 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="text-purple-400 mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <ul className="space-y-2">
                {skill.items.map(item => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SkillCard;

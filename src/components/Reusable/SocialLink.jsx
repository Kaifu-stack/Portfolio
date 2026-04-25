import React from "react";

const SocialLink = ({ icon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 transition-all duration-300 hover:scale-110"
        >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 bg-purple-500 transition"></div>

            {/* Icon */}
            <div className="relative z-10 text-white text-xl">
                {icon}
            </div>
        </a>
    );
};

export default SocialLink;
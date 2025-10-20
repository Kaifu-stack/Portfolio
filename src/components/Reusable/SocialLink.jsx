import React from "react";

const SocialLink = ({ icon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white"
        >
            {icon}
        </a>
    );
};

export default SocialLink;

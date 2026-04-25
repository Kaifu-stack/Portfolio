import React, { useState } from "react";

const Navigation = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const links = ["About", "Projects", "Skills", "Contact"];

    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    MD KAIF ALAM
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8">
                    {links.map((item) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;

                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                className={`relative transition duration-300 ${isActive
                                    ? "text-purple-400"
                                    : "text-gray-300 hover:text-purple-300"
                                    }`}
                            >
                                {item}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-300 hover:text-purple-400"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
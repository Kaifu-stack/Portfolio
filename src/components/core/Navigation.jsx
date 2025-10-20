import React from "react";

export default Navigation = () => {
    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/30 border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    MD KAIF ALAM
                </div>
                <div className="flex gap-8">
                    {['About', 'Projects', 'Skills', 'Contact'].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-purple-400 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
import React from "react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Md Kaif Alam</p>
            <p className="mt-1">Built with React • Tailwind • Passion 🚀</p>
        </footer>
    );
};

export default Footer;
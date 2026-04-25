import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight } from "lucide-react";

const [position, setPosition] = React.useState({ x: 0, y: 0 });

React.useEffect(() => {
    const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
}, []);

const HeroSection = ({ isVisible }) => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">

            {/* subtle lighting */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            <div className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
                    <span className="gradient-text">Full-Stack Developer</span>
                    <br />
                    <span className="text-white text-3xl md:text-5xl">
                        MERN • Real-Time Systems
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
                    I build scalable web applications with real-time features and optimized performance.
                </p>

                <p className="text-sm text-purple-400 mb-8">
                    🚀 Creator of <span className="font-semibold">Vynqo</span>
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a href="#projects" className="btn-primary flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </a>

                    <a href="#contact" className="btn-outline">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="absolute right-10 bottom-10 w-64 md:w-80 opacity-40 pointer-events-none hidden md:block">
                <DotLottieReact src="./Coding boy.json" loop autoplay />
            </div>
        </section>
    );
};

export default HeroSection;
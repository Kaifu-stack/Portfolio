import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ isVisible }) => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6"
        >
            <div className="relative z-10 text-center max-w-5xl">
                <div
                    className={`transition-all duration-1000 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                        }`}
                >
                    <h1 className="text-7xl md:text-9xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                            Software
                        </span>
                        <br />
                        <span className="text-white">Developer</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8">
                        Building immersive digital experiences that push
                        boundaries
                    </p>

                    <div className="flex gap-4 justify-center">
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            View Work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            {/*  Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            {/* Coding Animation */}
            <DotLottieReact src="./Coding boy.json" loop autoplay />
        </section>
    );
};

export default HeroSection;

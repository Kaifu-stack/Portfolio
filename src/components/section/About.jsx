import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = ({ isVisible }) => {
    return (
        <section id="about" className="relative py-32 px-6 z-10">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`transition-all duration-1000 ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                        }`}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* TEXT */}
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I’m <span className="text-white font-semibold">Md Kaif Alam</span>, a
                                full-stack developer focused on building scalable and real-world web applications.
                            </p>

                            <p>
                                I specialize in the <span className="text-purple-400">MERN stack</span> and have
                                hands-on experience creating projects with real-time features, optimized APIs,
                                and clean architecture.
                            </p>

                            <p>
                                Alongside development, I’ve solved <span className="text-pink-400 font-semibold">200+ DSA problems</span>,
                                strengthening my problem-solving skills in trees, graphs, and optimization.
                            </p>

                            <p>
                                I enjoy turning ideas into impactful products and continuously learning new technologies.
                            </p>

                            <div className="flex gap-4 flex-wrap pt-4">
                                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm">
                                    ⚡ Full-Stack Development
                                </span>
                                <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm">
                                    ⚡ Real-Time Systems
                                </span>
                                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm">
                                    ⚡ Problem Solving
                                </span>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 opacity-60 group-hover:opacity-90 transition" />
                            <div className="absolute inset-4 bg-black rounded-xl flex items-center justify-center">
                                <DotLottieReact src="./Coding.json" loop autoplay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
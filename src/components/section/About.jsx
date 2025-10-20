import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = ({ isVisible }) => {
    return (
        <section id="about" className="relative py-32 px-6 z-10">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                I’m Md Kaif Alam, a passionate learner and aspiring full-stack web developer. With a strong foundation in C++ and a keen interest in data structures & algorithms (DSA), I’m dedicated to building clean, efficient, and interactive web applications.
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                I enjoy exploring new technologies and turning ideas into impactful projects.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 opacity-75 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-4 bg-black rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <DotLottieReact
                                        src="./Coding.json"
                                        loop
                                        autoplay
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
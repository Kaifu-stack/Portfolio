import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "../Reusable/SocialLink";

const Contact = () => {
    const socials = [
        {
            icon: <Github size={24} />,
            label: "GitHub",
            href: "https://github.com/Kaifu-stack",
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/md-kaif-alam-a29837290/",
        },
        {
            icon: <Mail size={24} />,
            label: "Email",
            href: "mailto:kaif22101@gmail.com",
        },
    ];

    return (
        <section id="contact" className="relative py-32 px-6 z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                    Have a project in mind? Let's create something amazing together.
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    {socials.map((social) => (
                        <SocialLink
                            key={social.label}
                            icon={social.icon}
                            label={social.label}
                            href={social.href}
                        />
                    ))}
                </div>

                <a
                    href="mailto:kaif22101@gmail.com"
                    className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Contact;

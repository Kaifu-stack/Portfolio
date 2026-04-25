import { useState, useEffect } from "react";
import CustomCursor from "./components/core/CustomCursor";
import ParticleCanvas from "./components/core/ParticleCanvas";
import Navigation from "./components/core/Navigation";
import HeroSection from "./components/section/HeroSection";
import About from "./components/section/About";
import Skill from "./components/section/Skill";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";
import ProjectSection from "./components/section/ProjectSection";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 👀 Section Visibility + Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 📊 Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* 🔥 Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <ParticleCanvas />

      <CustomCursor
        mousePosition={mousePosition}
        activeSection={activeSection}
      />

      <Navigation activeSection={activeSection} />

      <HeroSection isVisible={isVisible.hero} />
      <About isVisible={isVisible.about} />
      <ProjectSection isVisible={isVisible.projects} />
      <Skill isVisible={isVisible.skills} />
      <Contact />
      <Footer />
    </div>
  );
}
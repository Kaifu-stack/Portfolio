import { useState, useEffect } from 'react'
import CustomCursor from './components/core/CustomCursor';
import ParticleCanvas from './components/core/ParticleCanvas';
import Navigation from './components/core/Navigation';
import HeroSection from './components/section/HeroSection';
import About from './components/section/About';
import Skill from './components/section/Skill';
import Contact from './components/section/Contact';
import Footer from './components/section/Footer';
import ProjectSection from './components/section/ProjectSection';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <CustomCursor mousePosition={mousePosition} activeSection={activeSection} />
      <Navigation />
      <HeroSection isVisible={isVisible.hero} />
      <About isVisible={isVisible.about} />
      <ProjectSection isVisible={isVisible.projects} />
      <Skill isVisible={isVisible.skills} />
      <Contact />
      <Footer />
    </div>
  );
}

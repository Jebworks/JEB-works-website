import React, { useState, useEffect, useRef } from 'react';
import './styles/globals.css';

// Import sections
import Navigation from './components/sections/Navigation';
import HeroSection from './components/sections/HeroSection';
import MissionSection from './components/sections/MissionSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import AnimatedBackground from './components/common/AnimatedBackground';
import MobileScreens from './components/common/MobileScreens';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [counter, setCounter] = useState(0);

  const sectionRefs = {
    home: useRef(null),
    mission: useRef(null),
    services: useRef(null),
    features: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'mission', 'services', 'features', 'pricing', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = sectionRefs[section]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (counter < 50000) {
      const timer = setTimeout(() => setCounter(prev => Math.min(prev + 1000, 50000)), 50);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const scrollToSection = (id) => {
    const element = sectionRefs[id]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text-primary)',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}>
      <AnimatedBackground />
      
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        scrollY={scrollY}
      />

      <HeroSection
        sectionRef={sectionRefs.home}
        counter={counter}
        scrollToSection={scrollToSection}
      />

      <MobileScreens sectionRef={sectionRefs.mobilescreens} />
      <MissionSection sectionRef={sectionRefs.mission} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <FeaturesSection sectionRef={sectionRefs.features} />
      <PricingSection sectionRef={sectionRefs.pricing} />
      <TestimonialsSection sectionRef={sectionRefs.testimonials} />
      <ContactSection sectionRef={sectionRefs.contact} />
      
      <Footer />
    </div>
  );
};

export default App;
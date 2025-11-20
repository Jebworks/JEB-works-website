import React, { useState, useEffect, useRef } from "react";
import "./styles/globals.css";

// Import sections
import Navigation from "./components/sections/Navigation";
import HeroSection from "./components/sections/HeroSection";
import MissionSection from "./components/sections/MissionSection";
import ServicesSection from "./components/sections/ServicesSection";
import FeaturesSection from "./components/sections/FeaturesSection";
// import PricingSection from './components/sections/PricingSection'; 
// import TestimonialsSection from './components/sections/TestimonialsSection';
// import ContactSection from './components/sections/ContactSection'; 
import Footer from "./components/sections/Footer";
import AnimatedBackground from "./components/common/AnimatedBackground";
import MobileScreens from "./components/common/MobileScreens";
import SecuritySection from "./components/sections/SecuritySection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import StartJourneySection from "./components/sections/StartJourneySection";
import AboutSection from "./components/sections/AboutSection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [counter, setCounter] = useState(0);

  const sectionRefs = {
    home: useRef(null),
    mobilescreens: useRef(null),
    about: useRef(null), 
    mission: useRef(null),
    services: useRef(null),
    features: useRef(null),
    security: useRef(null),
    howitworks: useRef(null),
    start: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // --- FIX: This array now includes all sections on the page ---
      const sections = [
        "home",
        "about",
        "mobilescreens",
        "mission",
        "services",
        "features",
        "security",
        "howitworks",
        "pricing",
        "testimonials",
        "start",
        "contact",
      ];
      // --- END FIX ---

      const current = sections.find((section) => {
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // Empty dependency array is correct here

  // Counter animation for stats
  useEffect(() => {
    // A simple check to start counter when the hero is visible
    // This is a basic way, IntersectionObserver on the Hero would be more robust
    if (activeSection === 'home' && counter < 50000) {
      const timer = setTimeout(
        () => setCounter((prev) => Math.min(prev + 1000, 50000)),
        50
      );
      return () => clearTimeout(timer);
    }
  }, [counter, activeSection]); // Re-run if activeSection changes

  const scrollToSection = (id) => {
    const element = sectionRefs[id]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
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
      <AboutSection sectionRef={sectionRefs.about} />
      <MobileScreens sectionRef={sectionRefs.mobilescreens} />
      <MissionSection sectionRef={sectionRefs.mission} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <FeaturesSection sectionRef={sectionRefs.features} />
      <SecuritySection sectionRef={sectionRefs.security} />
      <HowItWorksSection sectionRef={sectionRefs.howitworks} />
      
      {/* --- Uncommented these sections --- */}
      {/* <PricingSection sectionRef={sectionRefs.pricing} />
      <TestimonialsSection sectionRef={sectionRefs.testimonials} /> */}
      
      <StartJourneySection
        sectionRef={sectionRefs.start}
        scrollToSection={scrollToSection}
      />
      
      {/* <ContactSection sectionRef={sectionRefs.contact} /> */}
      
      <Footer />
    </div>
  );
};

export default App;
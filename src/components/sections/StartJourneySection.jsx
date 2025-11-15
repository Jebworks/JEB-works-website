import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react'; // Using icons for the button

const StartJourneySection = ({ sectionRef, scrollToSection }) => {
  return (
    <section
      id="start" // You can name this ID whatever you like
      ref={sectionRef}
      className="py-32 px-6 relative bg-white" // Bright white background
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Get Started
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-slate-900">
            Start Your Financial <span className="text-gradient">Journey Today</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto text-slate-600 mb-12"
          >
            Join over 50,000+ users who are taking charge of their money. 
            Get your complete financial picture in minutes.
          </p>

          {/* Large CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("pricing")}
              className="group px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden animate-pulse-glow"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 20px 60px rgba(139, 92, 246, 0.4)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <Sparkles size={20} />
                Sign Up for Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 shimmer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;
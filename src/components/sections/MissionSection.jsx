import React from 'react';
import { Target, Rocket } from 'lucide-react'; // Added icons

const MissionSection = ({ sectionRef }) => {
  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-32 px-6 relative" // Updated padding
      style={{ backgroundColor: 'var(--color-background)' }} // Explicitly dark background
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Our Purpose
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Driven by <span className="text-gradient">Innovation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-animation">
          {/* Mission Card */}
          <div className="group card-shine glass-effect p-12 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20"
              style={{
                background:
                  "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative z-10">
              {/* --- Icon Added --- */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-icon"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Target size={32} className="text-white" />
              </div>
              {/* --- End Icon --- */}
              <h3 className="text-4xl font-black mb-6">Our Mission</h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                To democratize financial intelligence by delivering
                cutting-edge, accessible tools that empower everyone to
                manage, grow, and optimize their wealth with confidence and
                clarity.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group card-shine glass-effect p-12 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20"
              style={{
                background:
                  "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div className="relative z-10">
              {/* --- Icon Added --- */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-icon"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Rocket size={32} className="text-white" />
              </div>
              {/* --- End Icon --- */}
              <h3 className="text-4xl font-black mb-6">Our Vision</h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                To become India's most trusted personal finance ecosystem —
                where innovation meets financial wellness, and technology
                transforms how millions achieve their financial dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
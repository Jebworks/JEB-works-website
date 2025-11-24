import React from 'react';
import { Target, Rocket, ArrowRight } from 'lucide-react';

/**
 * MissionSection Component with Premium Glass Morphism
 */
const MissionSection = ({ sectionRef }) => {
  const highlightColor = 'hsl(42, 100%, 45%)'; 

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-black"
      style={{
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-on-scroll">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            style={{ 
              backgroundColor: 'hsl(18, 60%, 20%)',
              color: 'hsl(18, 100%, 80%)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            Our Purpose
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Driven by <span className="text-gradient-primary">Innovation</span>, <br className="hidden md:block" />
            Focused on <span className="text-gradient-primary">Impact</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're not just building a product; we're on a mission to democratize financial intelligence and redefine wellness for everyone.
          </p>
        </div>

        {/* Glass Morphism Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 stagger-animation">
          
          {/* Mission Card - Premium Glass */}
          <div className="group relative animate-on-scroll">
            {/* Enhanced Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
            
            {/* Premium Glass Card */}
            <div 
              className="relative h-full p-8 md:p-10 rounded-[2rem] transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.36),
                  inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              
              {/* Animated Glass Background Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />

              <div className="relative z-10">
                {/* Glass Icon Container */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.15)'
                  }} 
                >
                  <Target className="w-7 h-7" strokeWidth={1.5} style={{ color: highlightColor }} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient-primary transition-colors duration-300">
                  Our Mission
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  To empower every individual with cutting-edge, accessible tools to manage, grow, and optimize their wealth with absolute confidence and clarity.
                </p>

                <div 
                  className="flex items-center font-bold group-hover:gap-2 transition-all duration-300 cursor-pointer"
                  style={{ color: highlightColor }}
                >
                  <span>Read our manifesto</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card - Premium Glass */}
          <div className="group relative animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {/* Enhanced Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
            
            {/* Premium Glass Card */}
            <div 
              className="relative h-full p-8 md:p-10 rounded-[2rem] transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.36),
                  inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              
              {/* Animated Glass Background Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />

              <div className="relative z-10">
                {/* Glass Icon Container */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <Rocket className="w-7 h-7" strokeWidth={1.5} style={{ color: highlightColor }} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient-primary transition-colors duration-300">
                  Our Vision
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  To build the world's most trusted financial ecosystem—where technology transforms how millions achieve their biggest financial dreams.
                </p>

                <div 
                  className="flex items-center font-bold group-hover:gap-2 transition-all duration-300 cursor-pointer"
                  style={{ color: highlightColor }}
                >
                  <span>See where we're going</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;
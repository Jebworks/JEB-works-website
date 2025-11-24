import React from 'react';
import { Shield, Zap, BarChart3, Smartphone, PlayCircle } from 'lucide-react';

const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${className}`}
    style={{
      background: 'hsl(18, 60%, 45%)', // Solid Primary Clay Color (No Gradient)
      color: 'hsl(36, 33%, 98%)',
      transform: 'translateY(0)',
      boxShadow: '0 4px 20px -5px hsl(18 60% 45% / 0.4)', // Added matching colored shadow
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    {...props}
  >
    <span className="relative z-10">{children}</span>
  </button>
);

const SecondaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${className}`}
    style={{
      background: 'hsl(42, 55%, 55%)',
      color: 'hsl(24, 15%, 18%)',
    }}
    {...props}
  >
    <PlayCircle size={16} className="transition-colors duration-300" />
    <span>{children}</span>
  </button>
);

const HeroSection = ({ sectionRef, counter, scrollToSection }) => {
  const features = [
    { icon: Shield, text: 'Bank-Grade Security' },
    { icon: Zap, text: 'Instant Transactions' },
    { icon: BarChart3, text: 'Smart Analytics' },
    { icon: Smartphone, text: 'Mobile First' },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: 'calc(100vh - 5rem)', 
        borderBottom: '1px solid hsl(36, 15%, 80%)',
      }}
    >
      {/* Premium Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(24, 20%, 12%) 0%, hsl(18, 50%, 20%) 100%)',
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute"
          style={{
            top: '-25%',
            right: '-25%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            opacity: 0.3,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, hsl(42, 55%, 65%) 0%, transparent 70%)',
            animation: 'pulse-subtle 3s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute"
          style={{
            bottom: '-25%',
            left: '-25%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            opacity: 0.25,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, hsl(160, 30%, 50%) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(60px)',
            background: 'radial-gradient(circle, hsl(18, 60%, 55%) 0%, transparent 70%)',
            animation: 'pulse-subtle 3s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
              style={{ 
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                animation: 'fade-in-up 0.8s ease-out forwards',
              }}
            >
              <span style={{ color: 'hsl(18, 100%, 85%)' }}>Take Charge of</span>
              <br />
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(to right, hsl(42, 100%, 75%), hsl(42, 80%, 65%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your Money
              </span>
            </h1>

            <p
              className="mt-6 text-lg md:text-xl max-w-lg"
              style={{ 
                color: 'rgba(250, 248, 245, 0.9)',
                animation: 'fade-in-up 0.8s ease-out 0.1s forwards',
                opacity: 0,
              }}
            >
              Jeb Works makes personal finance simple, smart, and rewarding.
              Get AI-driven insights, track expenses, and optimize savings—all
              from one intuitive platform.
            </p>

            {/* Features List */}
            <div 
              className="flex flex-wrap gap-3 mt-8"
              style={{ 
                animation: 'fade-in-up 0.8s ease-out 0.2s forwards',
                opacity: 0,
              }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <feature.icon size={14} style={{ color: 'hsl(36, 33%, 99%)' }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'hsl(36, 33%, 96%)' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div 
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
              style={{ 
                animation: 'fade-in-up 0.8s ease-out 0.3s forwards',
                opacity: 0,
              }}
            >
              <PrimaryButton onClick={() => { /* Handle Get Started */ }}>
               Coming Soon
              </PrimaryButton>
             
            </div>
          </div>

          {/* RIGHT COLUMN: Image Placeholder */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-on-scroll">
            
            {/* UPDATED WRAPPER: Adds a centered flex container for image and background */}
            <div className="relative flex items-center justify-center">
              
               {/* DECORATIVE CIRCLE (Background) - UPDATED POSITIONS */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full -z-10"
                style={{
                  background: 'linear-gradient(135deg, hsl(160, 30%, 45%), hsl(160, 30%, 35%))', 
                  opacity: 0.8,
                }}
              />

              {/* HERO IMAGE (Foreground) */}
              <div className="relative z-10 w-full max-w-[350px] md:max-w-[500px] lg:max-w-[650px]">
                <img 
                  src="hero.png" 
                  alt="App Preview" 
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{
                     maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' 
                  }}
                />
                
                {/* Floating Card Decoration */}
                <div 
                   className="absolute bottom-10 -left-6 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl animate-float"
                   style={{ animationDelay: '1s' }}
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                         <BarChart3 size={20} className="text-green-400" />
                      </div>
                      <div>
                         <p className="text-xs text-white/60">Monthly Savings</p>
                         <p className="text-sm font-bold text-white">+₹12,450</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="hsl(36, 33%, 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

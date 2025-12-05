import React, { useState, useEffect } from 'react';
import { Shield, Zap, BarChart3, Smartphone, Download } from 'lucide-react';
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const HeroSection = ({ sectionRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const mockScreens = [
    { id: 1, image: '/screen1.png' },
    { id: 2, image: '/screen2.png' },
    { id: 3, image: '/screen3.png' },
    { id: 4, image: '/screen4.png' },
  ];

  const getPrevIndex = () => (activeIndex - 1 + mockScreens.length) % mockScreens.length;
  const getNextIndex = () => (activeIndex + 1) % mockScreens.length;

  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockScreens.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScroll, mockScreens.length]);

  const handleManualScroll = (index) => {
    setActiveIndex(index);
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 7000);
  };

  const handlePrev = () => {
    setActiveIndex(getPrevIndex());
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 7000);
  };

  const handleNext = () => {
    setActiveIndex(getNextIndex());
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 7000);
  };

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
        minHeight: 'auto',
        paddingTop: '2rem',
        paddingBottom: '1.5rem',
        backgroundColor: 'hsl(var(--background-h), var(--background-s), var(--background-l))',
      }}
    >
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, hsl(var(--secondary-h), var(--secondary-s), 15%) 0%, hsl(var(--primary-h), var(--primary-s), 18%) 100%)`,
        }}
      />

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute"
          style={{
            top: '-25%',
            right: '-25%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(80px)',
            background: `radial-gradient(circle, hsl(var(--primary-h), var(--primary-s), 65%) 0%, transparent 70%)`,
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
            opacity: 0.15,
            filter: 'blur(80px)',
            background: `radial-gradient(circle, hsl(var(--secondary-h), var(--secondary-s), 50%) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 pb-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-left pt-8 lg:pt-12">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{
                animation: 'fade-in-up 0.8s ease-out forwards',
              }}
            >
              <span style={{ color: 'hsl(var(--background-h), var(--background-s), 92%)' }}>Take Charge of</span>
              <br />
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(to right, #1EB8A9, #073F3A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your Money
              </span>
            </h1>

            <p
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-lg"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                animation: 'fade-in-up 0.8s ease-out 0.1s both',
              }}
            >
              Jeb Works makes personal finance simple, smart, and rewarding.
              Get AI-driven insights, track expenses, and optimize savings—all
              from one intuitive platform.
              
            </p>

            {/* Features List */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8"
              style={{
                animation: 'fade-in-up 0.8s ease-out 0.2s both',
              }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <feature.icon size={16} style={{ color: 'hsl(var(--primary-h), var(--primary-s), 70%)', flexShrink: 0 }} />
                  <span
                    className="font-medium whitespace-nowrap"
                    style={{ color: 'hsl(var(--background-h), var(--background-s), 98%)', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Download Section */}
            <div
              className="mt-6 sm:mt-8"
              style={{
                animation: 'fade-in-up 0.8s ease-out 0.3s both',
              }}
            >
              <p className="text-xs sm:text-sm font-medium mb-3 sm:mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Download Now
              </p>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <button
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    border: `1px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.2)`;
                    e.currentTarget.style.borderColor = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
                    e.currentTarget.style.borderColor = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`;
                  }}
                >
                  <SiGoogleplay size={18} className="text-white flex-shrink-0" />
                  <span className="font-medium hidden sm:inline">Comming Soon</span>
                  <Download size={14} className="flex-shrink-0" />
                </button>

                <button
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-xs sm:text-sm"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    border: `1px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.2)`;
                    e.currentTarget.style.borderColor = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
                    e.currentTarget.style.borderColor = `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`;
                  }}
                >
                  <SiAppstore size={18} className="text-white flex-shrink-0" />
                  <span className="font-medium hidden sm:inline">Comming Soon</span>
                  <Download size={14} className="flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel - 3 Screens (Left, Center, Right) */}
          <div className="relative flex justify-center items-start lg:justify-end lg:mt-0 pt-2 lg:pt-4">
            <div className="relative w-full flex items-center justify-center h-[500px] sm:h-[600px]">
              {/* Left Screen */}
              <div
                className="absolute left-0 z-0 transition-all duration-500 ease-out opacity-60 scale-75 hidden sm:block"
                style={{
                  transform: 'translateX(-10px)',
                }}
              >
                <div
                  className="w-[220px] h-[400px] rounded-[32px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${mockScreens[getPrevIndex()].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>

              {/* Center Screen - Main */}
              <div
                className="relative z-10 transition-all duration-500 ease-out"
                style={{
                  transform: 'scale(1)',
                }}
              >
                <div
                  className="w-[260px] sm:w-[320px] h-[460px] sm:h-[540px] rounded-[36px] sm:rounded-[48px] overflow-hidden"
                  style={{
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    backgroundImage: `url(${mockScreens[activeIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>

              {/* Right Screen */}
              <div
                className="absolute right-0 z-0 transition-all duration-500 ease-out opacity-60 scale-75 hidden sm:block"
                style={{
                  transform: 'translateX(10px)',
                }}
              >
                <div
                  className="w-[220px] h-[400px] rounded-[32px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${mockScreens[getNextIndex()].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 pb-2 mb-6 sm:mb-8">
              {mockScreens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleManualScroll(idx)}
                  className="transition-all duration-300 hover:scale-110"
                  style={{
                    width: activeIndex === idx ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeIndex === idx ? 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' : 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 pointer-events-none z-20">
              <button
                onClick={handlePrev}
                className="pointer-events-auto hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="pointer-events-auto hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="hsl(var(--background-h), var(--background-s), var(--background-l))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

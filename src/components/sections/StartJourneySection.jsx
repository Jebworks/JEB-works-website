import React from 'react';
import { Sparkles, CheckCircle2, Shield, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * App Store SVG Icon
 */
const AppStoreIcon = () => (
  <img src="app-store.svg" alt="App Store" className="w-12 h-12" />
);

/**
 * Google Play SVG Icon
 */
const GooglePlayIcon = () => (
  <img src='google-play.svg' alt="Play Store" className="w-12 h-12"/>
);

/**
 * Redesigned StartJourneySection (CTA) - Advertising Card Style
 */
const StartJourneySection = ({ sectionRef, scrollToSection }) => {
  return (
    <section
      id="start"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-background"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary-h), var(--primary-s), 65%) 0%, transparent 70%)`,
            opacity: 0.1,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, hsl(var(--secondary-h), var(--secondary-s), 50%) 0%, transparent 70%)`,
            opacity: 0.08,
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content */}
        <div className="text-center mb-16">
          
          {/* Top Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-8"
            style={{
              backgroundColor: `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)`,
              color: `hsl(var(--primary-h), var(--primary-s), 50%)`,
              border: `1px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.2)`,
            }}
          >
            <Sparkles size={24} className='text-[#1EB8A9]' />
            <span className='text-[#1EB8A9]'>Ready to Download</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground">
            Start Your <br />
            <span className="text-gradient-primary">
              Financial Journey
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-muted-foreground">
            Download Jeb Works now and take control of your finances. Available on iOS and Android with powerful features to help you achieve your financial goals.
          </p>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, text: "Smart Tracking" },
              { icon: Shield, text: "Bank-Level Security" },
              { icon: CheckCircle2, text: "100% Free" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 justify-center px-4 py-3 rounded-xl"
                  style={{
                    background: `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.08)`,
                    border: `1px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.2)`,
                  }}
                >
                  <Icon className="w-6 h-6 flex-shrink-0" style={{ color: `hsl(var(--primary-h), var(--primary-s), 50%)` }} />
                  <span className="text-base font-semibold text-foreground">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Large Download Buttons - ADVERTISING CARD STYLE */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* App Store Button */}
          <a
            href="#"
            className="group relative p-3 md:p-6 rounded-3xl border transition-all duration-300 overflow-hidden hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.95) 0%, hsla(var(--secondary-h), var(--secondary-s), var(--secondary-l), 0.85) 100%)`,
              border: `2px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
              boxShadow: `0 20px 60px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.25)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 30px 80px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.35)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 20px 60px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.25)`;
            }}
          >
            {/* Background Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <div className="relative z-10 flex items-center gap-6">
              <AppStoreIcon />
              <div className="text-left flex-1">
                <p className="text-sm font-normal opacity-90" style={{ color: 'white' }}>Comming Soon</p>
                <p className="text-lg md:text-2xl font-black" style={{ color: 'white' }}>App Store</p>
                {/* <p className="text-sm mt-1 opacity-80" style={{ color: 'white' }}>iPhone, iPad & More</p> */}
              </div>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" style={{ color: 'white' }} />
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="group relative p-3 md:p-6 rounded-3xl border transition-all duration-300 overflow-hidden hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.9) 0%, hsla(var(--secondary-h), var(--secondary-s), var(--secondary-l), 0.8) 100%)`,
              border: `2px solid hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
              boxShadow: `0 20px 60px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.25)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 30px 80px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.35)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 20px 60px hsl(var(--primary-h), var(--primary-s), var(--primary-l), 0.25)`;
            }}
          >
            {/* Background Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <div className="relative z-10 flex items-center gap-6">
              <GooglePlayIcon />
              <div className="text-left flex-1">
                <p className="text-sm font-normal opacity-90" style={{ color: 'white' }}>Comming Soon</p>
                <p className="text-xl md:text-2xl font-black" style={{ color: 'white' }}>Google Play</p>
                {/* <p className="text-sm mt-1 opacity-80" style={{ color: 'white' }}>Android & More</p> */}
              </div>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" style={{ color: 'white' }} />
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 flex-wrap justify-center" style={{ color: `hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))` }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: `hsl(var(--primary-h), var(--primary-s), 50%)` }} />
            <span className="text-sm md:text-base font-medium">4.8★ Rated • Trusted by 50K+ Users • 256-bit Encrypted</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;

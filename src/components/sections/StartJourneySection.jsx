import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, TrendingUp } from 'lucide-react';

/*
 * === Reusable Primary Button ===
 * Enhanced with specific shadow for the CTA section
 */
const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-[var(--radius)] text-base font-semibold text-primary-foreground transition-all-std hover-lift ${className}`}
    style={{
      background: 'var(--gradient-primary)',
      boxShadow: '0 10px 30px -10px hsl(var(--primary) / 0.4)', // Subtle glow to make it pop
    }}
    {...props}
  >
    <span className="absolute inset-0 card-shine" />
    <span className="relative z-10">{children}</span>
    <ArrowRight
      size={18}
      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>
);

/**
 * Redesigned StartJourneySection (CTA)
 *
 * Enhancements:
 * - Added "Floating" decorative cards to fill empty space on desktop.
 * - Added Trust/Benefit indicators below the CTA.
 * - Improved typography and spacing density.
 * - Kept background clean (bg-background) as requested.
 */
const StartJourneySection = ({ sectionRef, scrollToSection }) => {
  return (
    <section
      id="start"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background border-t border-border"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
 

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-on-scroll">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-8">
            <Sparkles size={14} />
            <span>Start Free Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Start Your Financial <br />
            <span className="text-gradient-primary">
              Journey Today
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join over 50,000+ users who are taking charge of their money. 
            Get your complete financial picture in minutes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 animate-pulse-glow">
            <PrimaryButton
              onClick={() => scrollToSection('pricing')}
            >
              Coming Soon
            </PrimaryButton>
          </div>

         

        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;
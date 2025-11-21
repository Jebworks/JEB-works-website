import React from 'react';
import { CheckCircle2, Lock, Database, ShieldAlert } from 'lucide-react';

/**
 * Redesigned Security Section
 *
 * Design:
 * - Layout: 2x2 Grid of feature cards.
 * - Theme: Light Mode (Sand/Cream background) for contrast against the previous dark section.
 * - Style: Handcrafted, clean, professional.
 */
const SecuritySection = ({ sectionRef }) => {
  //
  // === Intentional Design System ===
  // Using specific tints of the brand colors for a cohesive look
  //
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Bank-Grade Encryption',
      text: 'We use AES-256 encryption, the same standard trusted by banks and governments.',
      // Light tint of Primary (Clay)
      iconBg: 'hsl(var(--primary) / 0.1)', 
      iconColor: 'hsl(var(--primary))',
    },
    {
      icon: ShieldAlert,
      title: 'RBI & SEBI Compliant',
      text: 'Our platform is fully compliant with all RBI and SEBI security guidelines.',
      // Light tint of Secondary (Saffron)
      iconBg: 'hsl(var(--secondary) / 0.15)', 
      iconColor: 'hsl(var(--secondary-foreground))', // Darker saffron for icon visibility
    },
    {
      icon: Database,
      title: 'Data Privacy First',
      text: 'We never sell or share your personal financial data with third parties. Ever.',
      // Light tint of Accent (Sage)
      iconBg: 'hsl(var(--accent) / 0.15)', 
      iconColor: 'hsl(var(--accent))',
    },
    {
      icon: CheckCircle2,
      title: 'Multi-Factor Auth',
      text: 'Secure your account with multi-factor authentication for all sensitive actions.',
      // Light tint of Primary (Clay)
      iconBg: 'hsl(var(--primary) / 0.1)', 
      iconColor: 'hsl(var(--primary))',
    },
  ];

  return (
    <section
      id="security"
      ref={sectionRef}
      // Keeping background LIGHT to contrast with the previous dark section
      className="relative py-20 md:py-32 border-b border-border bg-background"
      style={{
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Section Header === */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            style={{
              backgroundColor: 'hsl(var(--primary) / 0.1)',
              color: 'hsl(var(--primary))',
            }}
          >
            <ShieldAlert size={14} className="animate-pulse" />
            Fort Knox Security
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Your Trust is Our{' '}
            <span className="text-gradient-primary">Top Priority</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
             We employ a multi-layered security strategy to ensure your financial data remains safe, secure, and private. Always.
          </p>
        </div>

        {/* === Handcrafted Card Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-animation">
          {securityFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border shadow-sm p-8 rounded-[var(--radius-lg)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
            >
              <div className="relative z-10 flex items-start gap-6">
                
                {/* Intentional Icon Background */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: feature.iconBg,
                  }}
                >
                  <feature.icon
                    size={28}
                    strokeWidth={1.5}
                    style={{ color: feature.iconColor }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
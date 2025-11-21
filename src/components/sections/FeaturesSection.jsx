import React from 'react';
import { CheckCircle2, Zap, Brain, ShieldCheck, Repeat } from 'lucide-react';

/**
 * FeaturesSection Component with Premium Glass Morphism
 */
const FeaturesSection = ({ sectionRef }) => {
  const highlightColor = 'hsl(42, 90%, 70%)';

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: 'Experience blazing-fast performance with real-time updates and instant insights.',
      features: [
        'Real-time sync',
        'Instant notifications',
        'Zero lag interface',
      ],
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      desc: 'Advanced machine learning algorithms that learn your financial behavior.',
      features: [
        'Smart predictions',
        'Personalized advice',
        'Automated insights',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Fort Knox Security',
      desc: 'Bank-grade encryption and compliance with all financial regulations.',
      features: ['256-bit encryption', 'RBI compliant', 'Biometric auth'],
    },
    {
      icon: Repeat,
      title: 'Seamless Integration',
      desc: 'Connect all your accounts, cards, and wallets in one place.',
      features: ['Multi-bank support', 'UPI integration', 'Automatic sync'],
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-black"
      style={{
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Section Header === */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            style={{
              backgroundColor: 'hsl(18, 60%, 20%)',
              color: 'hsl(18, 100%, 80%)',
            }}
          >
            <Zap size={14} className="animate-pulse" />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Built for <span className="text-gradient-primary">Excellence</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge technology with human-centric design to deliver a financial experience that is simply superior.
          </p>
        </div>

        {/* === Glass Morphism Features Grid === */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 stagger-animation">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative animate-on-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
              
              {/* Glass Card */}
              <div 
                className="relative h-full p-8 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: `
                    0 8px 32px 0 rgba(0, 0, 0, 0.36),
                    inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                
                {/* Animated Background Elements */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:bg-white/8 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                  
                  {/* Glass Icon Container */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <feature.icon
                        size={32}
                        strokeWidth={1.5}
                        style={{ color: highlightColor }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-3">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2
                            size={18}
                            style={{ color: highlightColor }}
                            className="flex-shrink-0"
                          />
                          <span className="text-gray-300 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
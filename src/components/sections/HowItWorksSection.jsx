import React from 'react';
import { Link, DatabaseZap, PieChart, Calculator, ArrowRight } from 'lucide-react';

/**
 * HowItWorksSection Component with Premium Glass Morphism
 */
const HowItWorksSection = ({ sectionRef }) => {
  const highlightColor = 'hsl(174, 90%, 70%)';

  const steps = [
    {
      icon: Link,
      title: '1. Link Your Accounts',
      description:
        'Securely connect your bank accounts. Our API automatically fetches and syncs your transactions in real-time.',
    },
    {
      icon: DatabaseZap,
      title: '2. Verify & Add',
      description:
        'Our AI auto-categorizes 99% of expenses. For any cash spending, you can manually add a transaction.',
    },
    {
      icon: PieChart,
      title: '3. Analyze Your Habits',
      description:
        'Understand your spending with our powerful analytics. See exactly where your money goes and find trends.',
    },
    {
      icon: Calculator,
      title: '4. Get a Clear Overview',
      description:
        'Receive a complete overview of your credit and debit plans. Make informed decisions to manage debt.',
    },
  ];

  return (
    <section
      id="howitworks"
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
              backgroundColor: 'hsl(174, 60%, 20%)',
              color: 'hsl(174, 100%, 80%)',
            }}
          >
            <DatabaseZap size={14} className="animate-pulse" />
            How It Works
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your Financial Journey <br />
            <span className="text-gradient-primary">Simplified</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get a complete 360-degree view of your finances in just a few minutes.
          </p>
        </div>

        {/* === Glass Morphism Steps Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative stagger-animation">
          
          {/* Visual Connector Line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 -z-10"
            style={{
              background: `linear-gradient(to right, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 190, 0, 0.5) 50%, 
                rgba(255, 255, 255, 0.1) 100%)`
            }}
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative animate-on-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
              
              {/* Glass Card */}
              <div 
                className="relative h-full p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border text-center"
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
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/8 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Glass Icon Container */}
                  <div className="mb-6 relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <step.icon
                        size={28}
                        strokeWidth={1.5}
                        style={{ color: highlightColor }}
                      />
                    </div>
                    {/* Glass Step Number Badge */}
                    <div 
                      className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border backdrop-blur-sm"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: highlightColor
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
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

export default HowItWorksSection;

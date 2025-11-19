import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Target,
  Brain,
  Shield,
  PieChart,
} from 'lucide-react';

/**
 * Services Section with Glass Morphism and Yellow Primary Colors
 */
const ServicesSection = ({ sectionRef }) => {
  const services = [
    {
      icon: BarChart3,
      title: 'Smart Budgeting',
      desc: 'Track every rupee with intelligent categorization and real-time alerts.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Planning',
      desc: 'SIP, ELSS, EMI planning with AI-powered predictive simulations.',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      desc: 'Gamified savings goals with streaks, rewards, and milestones.',
    },
    {
      icon: Brain,
      title: 'AI Insights',
      desc: 'Personalized recommendations based on your spending patterns.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      desc: 'Military-grade encryption for all your financial data.',
    },
    {
      icon: PieChart,
      title: 'Advanced Analytics',
      desc: 'Premium dashboards with trend analysis and forecasting.',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 border-b border-border bg-background"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: 'hsl(var(--primary))' }}
          >
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-5">
            Powerful{' '}
            <span className="text-gradient-primary">
              Financial Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to master your finances, all in one place.
          </p>
        </div>

        {/* Glass Morphism Cards Grid with Yellow Primary Colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-animation">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative animate-on-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Outer Glow with Primary Color */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Glass Card */}
              <div 
                className="relative h-full p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: `
                    0 8px 32px 0 rgba(31, 38, 135, 0.1),
                    inset 0 1px 1px 0 rgba(255, 255, 255, 0.8),
                    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.05)
                  `,
                }}
              >
                
                {/* Subtle Background Elements with Primary Color */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Glass Icon Container with Primary Color */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.6)',
                      boxShadow: `
                        0 4px 20px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)
                      `,
                    }}
                  >
                    <service.icon
                      size={24}
                      style={{ 
                        color: 'hsl(var(--primary))', // Primary yellow color
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}
                    />
                  </div>

                  {/* Heading with Primary Color */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                    style={{ color: 'hsl(var(--primary))' }} // Primary yellow color
                  >
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {service.desc}
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

export default ServicesSection;
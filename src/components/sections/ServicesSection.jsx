import React from 'react';
import { BarChart3, TrendingUp, Target, Brain, Shield, PieChart } from 'lucide-react';

const ServicesSection = ({ sectionRef }) => {
  const services = [
    {
      icon: BarChart3,
      title: "Smart Budgeting",
      desc: "Track every rupee with intelligent categorization and real-time alerts",
      color: "var(--color-primary)",
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      desc: "SIP, ELSS, EMI planning with AI-powered predictive simulations",
      color: "var(--color-secondary)",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      desc: "Gamified savings goals with streaks, rewards, and milestones",
      color: "var(--color-accent)",
    },
    {
      icon: Brain,
      title: "AI Insights",
      desc: "Personalized recommendations based on your spending patterns",
      color: "var(--color-primary)",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "Military-grade encryption for all your financial data",
      color: "var(--color-secondary)",
    },
    {
      icon: PieChart,
      title: "Advanced Analytics",
      desc: "Premium dashboards with trend analysis and forecasting",
      color: "var(--color-accent)",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-10 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            What We Offer
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Powerful <span className="text-gradient">Financial Tools</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Everything you need to master your finances, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 transition-all duration-500 group-hover:opacity-10 group-hover:scale-150"
                style={{
                  background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`,
                  filter: "blur(40px)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, var(--color-primary-light))`,
                  }}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
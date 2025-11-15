import React from 'react';
// import { BarChart3, TrendingUp, Target, Brain, Shield, PieChart } from 'lucide-react'; // Removed icons

const ServicesSection = ({ sectionRef }) => {
  const services = [
    {
      // icon: BarChart3, // Icon removed
      title: "Smart Budgeting",
      desc: "Track every rupee with intelligent categorization and real-time alerts",
      color: "var(--color-primary)",
    },
    {
      // icon: TrendingUp, // Icon removed
      title: "Investment Planning",
      desc: "SIP, ELSS, EMI planning with AI-powered predictive simulations",
      color: "var(--color-secondary)",
    },
    {
      // icon: Target, // Icon removed
      title: "Goal Tracking",
      desc: "Gamified savings goals with streaks, rewards, and milestones",
      color: "var(--color-accent)",
    },
    {
      // icon: Brain, // Icon removed
      title: "AI Insights",
      desc: "Personalized recommendations based on your spending patterns",
      color: "var(--color-primary)",
    },
    {
      // icon: Shield, // Icon removed
      title: "Bank-Grade Security",
      desc: "Military-grade encryption for all your financial data",
      color: "var(--color-secondary)",
    },
    {
      // icon: PieChart, // Icon removed
      title: "Advanced Analytics",
      desc: "Premium dashboards with trend analysis and forecasting",
      color: "var(--color-accent)",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-6 relative bg-slate-50" // Set light background
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            What We Offer
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-slate-900"> {/* Changed h2 text to dark */}
            Powerful <span className="text-gradient">Financial Tools</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto text-slate-600" // Changed p text to dark
          >
            Everything you need to master your finances, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, idx) => (
            <div
              key={idx}
              // Removed 'glass-effect' and 'card-shine', added light theme card styles
              className="group bg-white border border-gray-200 shadow-lg p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              {/* Removed the 'radial-gradient' div, as it won't work on a light theme */}
              <div className="relative z-10">
                
                {/* Removed the icon div block that was here */}

                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3> {/* Changed h3 text to dark */}
                <p
                  className="leading-relaxed text-slate-600" // Changed p text to dark
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
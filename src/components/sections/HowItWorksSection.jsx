import React from 'react';
// Updated icons to be more specific
import { Link, DatabaseZap, PieChart, Calculator } from 'lucide-react'; 

const HowItWorksSection = ({ sectionRef }) => {
  
  // Updated steps based on your new plan
  const steps = [
    {
      icon: Link,
      title: "1. Link Your Accounts",
      description: "Securely connect your bank accounts. Our API automatically fetches and syncs your transactions in real-time."
    },
    {
      icon: DatabaseZap, // Icon for auto-fetching and manual entry
      title: "2. Verify & Add",
      description: "Our AI auto-categorizes 99% of expenses. For any cash spending, you can manually add a transaction to the right category."
    },
    {
      icon: PieChart, // Icon for analytics
      title: "3. Analyze Your Habits",
      description: "Understand your spending with our powerful analytics. See exactly where your money goes, find trends, and plan your budget."
    },
    {
      icon: Calculator, // Icon for planning
      title: "4. Get a Clear Overview",
      description: "Receive a complete overview of your credit and debit plans. Make informed decisions to manage debt and grow your savings."
    }
  ];

  return (
    <section
      id="howitworks"
      ref={sectionRef}
      className="py-32 px-6 relative"
      style={{ backgroundColor: 'var(--color-surface)' }} // Dark theme
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            How It Works
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Your Financial Journey <span className="text-gradient">Simplified</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Get a complete 360-degree view of your finances in just a few minutes.
          </p>
        </div>

        {/* Updated to a 4-column grid for the new steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              <div className="relative z-10">
                {/* Icon Div */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-icon"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <step.icon size={32} className="text-white" />
                </div>
                {/* End Icon Div */}
                
                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

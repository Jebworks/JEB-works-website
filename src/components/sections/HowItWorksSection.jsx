import React from 'react';
// No icons imported, as requested.

const HowItWorksSection = ({ sectionRef }) => {
  
  const steps = [
    {
      number: "01",
      title: "Link Your Accounts",
      description: "Securely connect your bank accounts, credit cards, and wallets in one place using our RBI-compliant integration."
    },
    {
      number: "02",
      title: "Track Your Finances",
      description: "Our AI automatically categorizes your spending and tracks your cash flow in real-time so you know where every rupee goes."
    },
    {
      number: "03",
      title: "Get Smart Insights",
      description: "Receive personalized advice, saving tips, and investment opportunities designed to help you grow your wealth faster."
    }
  ];

  return (
    <section
      id="howitworks"
      ref={sectionRef}
      className="py-32 px-6 relative"
      style={{ backgroundColor: 'var(--color-surface)' }} // Use a dark (but not black) background
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
            Get Started in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            It's as easy as one, two, three. Get your complete financial picture in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 stagger-animation">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              <div className="relative z-10">
                <div 
                  className="text-7xl font-black text-gradient mb-6"
                  style={{
                    opacity: '0.7',
                    lineHeight: '1'
                  }}
                >
                  {step.number}
                </div>
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
import React from 'react';
import { CheckCircle2, Zap, Brain, ShieldCheck, Repeat } from 'lucide-react'; // Added icons

const FeaturesSection = ({ sectionRef }) => {
  const features = [
    {
      icon: Zap, // Added icon
      title: "Lightning Fast",
      desc: "Experience blazing-fast performance with real-time updates and instant insights",
      features: [
        "Real-time sync",
        "Instant notifications",
        "Zero lag interface",
      ],
    },
    {
      icon: Brain, // Added icon
      title: "AI-Powered Intelligence",
      desc: "Advanced machine learning algorithms that learn your financial behavior",
      features: [
        "Smart predictions",
        "Personalized advice",
        "Automated insights",
      ],
    },
    {
      icon: ShieldCheck, // Added icon
      title: "Fort Knox Security",
      desc: "Bank-grade encryption and compliance with all financial regulations",
      features: [
        "256-bit encryption",
        "RBI compliant",
        "Biometric auth",
      ],
    },
    {
      icon: Repeat, // Added icon
      title: "Seamless Integration",
      desc: "Connect all your accounts, cards, and wallets in one place",
      features: [
        "Multi-bank support",
        "UPI integration",
        "Automatic sync",
      ],
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-32 px-6 relative" // Added more padding to match other sections
      style={{ backgroundColor: 'var(--color-background)' }} // Set dark background
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Built for <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20 stagger-animation">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group card-shine glass-effect p-10 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              <div className="flex items-start gap-6">
                {/* --- Icon Div Added --- */}
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 floating-icon"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>
                {/* --- End Icon Div --- */}

                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-3">
                    {feature.title}
                  </h3>
                  <p
                    className="text-lg mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {feature.desc}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          style={{ color: "var(--color-secondary)" }}
                          className="flex-shrink-0"
                        />
                        <span
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
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
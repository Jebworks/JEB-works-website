import React from 'react';
import { CheckCircle2, Lock, Database, ShieldAlert } from 'lucide-react'; // Re-imported icons

const SecuritySection = ({ sectionRef }) => {
  // Updated to re-include icon property
  const securityFeatures = [
    {
      icon: Lock, // Re-added
      title: "Bank-Grade Encryption",
      text: "We use AES-256 encryption, the same standard trusted by banks and governments."
    },
    {
      icon: ShieldAlert, // Re-added
      title: "RBI & SEBI Compliant",
      text: "Our platform is fully compliant with all RBI and SEBI security guidelines."
    },
    {
      icon: Database, // Re-added
      title: "Data Privacy First",
      text: "We never sell or share your personal financial data with third parties. Ever."
    },
    {
      icon: CheckCircle2, // Re-added
      title: "Multi-Factor Auth",
      text: "Secure your account with multi-factor authentication for all sensitive actions."
    }
  ];

  return (
    <section
      id="security"
      ref={sectionRef}
      className="py-32 px-6 relative bg-slate-50" // Light background
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Fort Knox Security
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-slate-900">
            Your Trust is Our <span className="text-gradient">Top Priority</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-slate-600">
            We employ a multi-layered security strategy to ensure your financial
            data remains safe, secure, and private. Always.
          </p>
        </div>

        {/* Security Content Grid: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-animation">
          
          {securityFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 shadow-lg p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
            >
              <div className="relative z-10">
                
                {/* --- Icon Div Re-added --- */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-primary-light))`,
                  }}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                {/* --- End Icon Div --- */}

                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
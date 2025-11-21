import React from 'react';
import { Wallet, Award, Users2, CheckCircle2, Sparkles } from 'lucide-react';

const PricingSection = ({ sectionRef }) => {
  const plans = [
    {
      name: "Free Plan",
      price: "₹0",
      period: "Forever free",
      icon: Wallet,
      features: [
        "Track expenses & income",
        "Basic financial insights",
        "Goal tracking & reminders",
        "3 connected bank accounts",
        "Community support",
        "Basic reporting",
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Premium Plan",
      price: "₹299",
      period: "per month",
      icon: Award,
      features: [
        "Everything in Free plan",
        "Advanced analytics & insights",
        "AI-driven recommendations",
        "Exclusive reward offers",
        "Priority customer support",
        "Unlimited bank accounts",
        "Advanced goal planning",
        "Tax optimization features",
      ],
      buttonText: "Start 14-Day Free Trial",
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      period: "Tailored for your business",
      icon: Users2,
      features: [
        "Everything in Premium plan",
        "Custom dashboards & reporting",
        "Team analytics & collaboration",
        "Data-driven advisory tools",
        "Dedicated account manager",
        "API access & integrations",
        "White-label solutions",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Simple Pricing
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Start free and upgrade as you grow. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-animation">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll ${
                plan.popular ? 'gradient-border scale-105' : ''
              }`}
              style={plan.popular ? {
                background: 'rgba(26, 18, 50, 0.6)',
                backdropFilter: 'blur(20px)',
              } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-3 text-sm font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                >
                  <Sparkles size={14} className="inline mr-2" />
                  MOST POPULAR
                  <Sparkles size={14} className="inline ml-2" />
                </div>
              )}

              <div className={`text-center mb-8 ${plan.popular ? 'mt-12' : ''}`}> {/* Adjusted margin-top for popular card */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <plan.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black text-gradient mb-2">
                  {plan.price}
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: "var(--color-secondary)" }}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span
                      style={{ color: "var(--color-text-secondary)" }}
                      className="text-sm"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <button
                  className="w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ) : (
                <button className="w-full py-4 rounded-xl font-bold transition-all duration-300 glass-effect hover:bg-white/10 border border-gray-600">
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import React from 'react';
import {
  Users,
  Coins,
  Star,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Download
} from 'lucide-react';

const HeroSection = ({ sectionRef, counter, scrollToSection }) => {
  const stats = [
    {
      value: `${counter.toLocaleString()}+`,
      label: "Active Users",
      icon: Users,
    },
    { value: "₹100Cr+", label: "Money Managed", icon: Coins },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ];

  const features = [
    { icon: Shield, text: "Bank-Grade Security" },
    { icon: Zap, text: "Instant Transactions" },
    { icon: BarChart3, text: "Smart Analytics" },
    { icon: Smartphone, text: "Mobile First" }
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-10"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10 pt-20">

        <h1
          className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Take Charge of
          <br />
          <span className="text-gradient">Your Money</span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style={{
            color: "var(--color-text-secondary)",
            animationDelay: "0.2s",
          }}
        >
          Jeb Works makes personal finance simple, smart, and rewarding. Track your expenses, optimise your savings,
          plan investments, and get AI-driven insights — all from one intuitive platform.
        </p>

        {/* App Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <feature.icon size={16} style={{ color: "var(--color-primary)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* App Store Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Direct APK Download */}
          <a
            href="#"
            className="group flex items-center justify-center gap-4 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 20px 60px rgba(139, 92, 246, 0.4)",
            }}
          >
            <Download size={24} className="text-white" />
            <span className="text-white font-bold">Coming Soon</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Animated Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up stagger-animation"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="flex justify-center mb-2">
                <stat.icon size={32} style={{ color: "var(--color-primary)" }} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
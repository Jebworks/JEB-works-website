import React from 'react';
import { Menu, X, IndianRupee, ArrowRight, TrendingUp, Shield, Sparkles } from 'lucide-react';

const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  scrollY 
}) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Mission', id: 'mission' },
    { name: 'Services', id: 'services' },
    { name: 'Features', id: 'features' },
    { name: 'Security', id: 'security' },
    { name: 'How It Works', id: 'howitworks' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? "glass-effect shadow-2xl backdrop-blur-xl" 
          : "bg-transparent"
      }`}
      style={{
        borderBottom: scrollY > 50 ? '1px solid var(--color-border)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div
              className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              style={{ background: "var(--gradient-primary)" }}
            >
              <IndianRupee size={20} className="relative z-10" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)'
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-tight text-gradient">
                Jeb
              </span>
              <span className="text-3xl font-black tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                Works
              </span>
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--color-secondary)',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                <TrendingUp size={12} />
                <span>Pro</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group py-2"
              >
                <span 
                  className="relative z-10 font-semibold transition-all duration-300 text-sm tracking-wide"
                  style={{
                    color: activeSection === item.id
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {item.name}
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      <span className="w-1 h-1 rounded-full animate-pulse-glow" 
                        style={{ background: 'var(--color-primary)' }} />
                      <span className="w-1 h-1 rounded-full animate-pulse-glow" 
                        style={{ background: 'var(--color-secondary)', animationDelay: '0.2s' }} />
                      <span className="w-1 h-1 rounded-full animate-pulse-glow" 
                        style={{ background: 'var(--color-accent)', animationDelay: '0.4s' }} />
                    </span>
                  )}
                </span>
                
                {/* Hover Effect */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ 
                    background: "var(--gradient-primary)",
                    boxShadow: '0 0 10px var(--color-primary)'
                  }}
                />
                
                {/* Hover Glow */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{ 
                    background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
                  }}
                />
              </button>
            ))}
            
            {/* CTA Button with Enhanced Styling */}
            <button
              onClick={() => scrollToSection("pricing")}
              className="relative px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 group overflow-hidden"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={16} />
                Get Started
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              
              {/* Animated shimmer effect */}
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite'
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-300 hover:bg-white/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: 'var(--color-text-primary)' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden mt-6 pb-6 space-y-3 rounded-2xl p-6 animate-slide-up"
            style={{
              background: 'rgba(30, 41, 59, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--color-border)'
            }}
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 px-5 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ 
                  color: "var(--color-text-secondary)",
                  background: activeSection === item.id 
                    ? 'rgba(37, 99, 235, 0.1)' 
                    : 'transparent',
                  border: `1px solid ${activeSection === item.id ? 'var(--color-border-hover)' : 'transparent'}`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <ArrowRight 
                    size={18} 
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>
              </button>
            ))}
            
            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection("pricing")}
              className="w-full mt-4 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)",
              }}
            >
              <Sparkles size={18} />
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
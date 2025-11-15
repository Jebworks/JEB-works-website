import React from 'react';
import { Menu, X, IndianRupee, ArrowRight } from 'lucide-react';

const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  scrollY 
}) => {
  // This list is correct as per your request
  const navItems = ['Home', 'Mission', 'Services', 'Features', 'Security', 'How It Works'];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? "glass-effect shadow-2xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black tracking-tight flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--gradient-primary)" }}
            >
              <IndianRupee size={16} />
            </div>
            <span className="text-gradient">Jeb</span>
            <span style={{ color: "var(--color-text-primary)" }}>
              Works
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => {
              const targetId = item === 'How It Works' ? 'howitworks' : item.toLowerCase();
              const isActive = activeSection === targetId;

              return (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(targetId);
                }}
                className="relative group"
                style={{
                  color:
                    isActive 
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                }}
              >
                <span className="relative z-10 font-medium transition-colors group-hover:text-white flex items-center gap-1">
                  {item}
                  {isActive && (
                    <div className="w-1 h-1 rounded-full bg-current animate-pulse-glow" />
                  )}
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </button>
              ) // This parenthesis closes the return
            })}
            
            {/* --- "Get Started" Button ADDED BACK --- */}
            <button
              onClick={() => { /* No action for now */ }}
              className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                color: "var(--color-text-primary)"
              }}
            >
              Get Started
            </button> 
            {/* --- End Button --- */}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 glass-effect rounded-2xl p-6 mt-4 animate-slide-up">
            {navItems.map((item) => {
              const targetId = item === 'How It Works' ? 'howitworks' : item.toLowerCase();
              const isActive = activeSection === targetId;

              return (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(targetId);
                  setIsMenuOpen(false); // Also close menu on click
                }}
                className="block w-full text-left py-3 px-4 rounded-xl transition-all hover:bg-white/5 flex items-center justify-between"
                style={{ 
                  color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                  backgroundColor: isActive ? "rgba(139, 92, 246, 0.1)" : "transparent"
                }}
              >
                {item}
                <ArrowRight size={16} />
              </button>
            );
            })}

            {/* --- "Get Started" Button ADDED BACK to mobile --- */}
            <div className="px-0 pt-4 mt-4 border-t border-[var(--color-border)]">
              <button
                onClick={() => { /* No action for now */ }}
                className="w-full text-center py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold"
                style={{ 
                  background: "var(--gradient-primary)",
                  color: "var(--color-text-primary)"
                }}
              >
                Get Started
              </button>
            </div>
            {/* --- End Button --- */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
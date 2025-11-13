import React from 'react';
import { Menu, X, ArrowRight, IndianRupee } from 'lucide-react';

const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  scrollY 
}) => {
  const navItems = ['Home', 'Mission', 'Services', 'Features'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrollY > 50 ? 'glass-effect shadow-2xl' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <IndianRupee size={16} />
            </div>
            <span className="text-gradient">Jeb</span>
            <span style={{ color: 'var(--color-text-primary)' }}>Works</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group"
                style={{ 
                  color: activeSection === item.toLowerCase() 
                    ? 'var(--color-primary)' 
                    : 'var(--color-text-secondary)' 
                }}
              >
                <span className="relative z-10 font-medium transition-colors group-hover:text-white flex items-center gap-1">
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="w-1 h-1 rounded-full bg-current animate-pulse-glow" />
                  )}
                </span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
              </button>
            ))}
            <button className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow" style={{
              background: 'var(--gradient-primary)',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
            }}>
              Get Started
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 glass-effect rounded-2xl p-6 mt-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 rounded-xl transition-all hover:bg-white/5 flex items-center justify-between"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item}
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

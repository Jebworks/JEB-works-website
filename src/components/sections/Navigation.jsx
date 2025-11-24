import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  scrollY,
}) => {
  const navItems = [
    'Home',
    'Mission',
    'Services',
    'Features',
    'About',
    'How It Works',
  ];

  const getSectionId = (item) =>
    item === 'How It Works' ? 'howitworks' : item.toLowerCase();

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm"
      style={{
        fontFamily: 'var(--font-sans)',
        height: '5rem', // Fixed height (h-20)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* === Logo Section (Replaced with Image) === */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="container.png" 
              alt="Jeb Works Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-black tracking-tight">
              <span className="text-gradient-primary">Jeb</span>
              <span className="text-gray-900">Works</span>
            </span>
          </div>

          {/* === Desktop Navigation === */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => {
              const targetId = getSectionId(item);
              const isActive = activeSection === targetId;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className={`relative h-full px-1 text-sm font-medium transition-colors duration-300 flex items-center ${
                    isActive
                      ? 'text-[hsl(18,60%,45%)] font-semibold' // Active Text Color (Clay)
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                  
                  {/* === The Primary Color Underline === */}
                  {isActive && (
                    <span
                      className="absolute bottom-7 left-0 w-full h-[3px] rounded-t-full"
                      style={{
                        background: 'hsl(18, 60%, 45%)', // Solid Primary Color
                        boxShadow: '0 -2px 10px hsl(18 60% 45% / 0.3)', // Subtle glow upwards
                        transition: 'all 0.3s ease-in-out',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* === Desktop CTA & Mobile Toggle === */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => { /* Handle Get Started */ }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-white"
              style={{
                background: 'hsl(18, 60%, 45%)', // Solid Primary Color
                color: 'hsl(36, 33%, 98%)',
              }}
            >
              Coming Soon
            </button>
          </div>

          {/* === Mobile Menu Button === */}
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-[var(--radius-sm)] focus:outline-none text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === Mobile Menu Panel === */}
      {isMenuOpen && (
        <div
          className="lg:hidden animate-slide-up px-2 pb-6 pt-2 sm:px-3 border-t border-gray-200 bg-white shadow-lg"
          id="mobile-menu"
        >
          <div className="p-4 space-y-1">
            {navItems.map((item) => {
              const targetId = getSectionId(item);
              const isActive = activeSection === targetId;

              return (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(targetId);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-[var(--radius-sm)] transition-colors-fast flex items-center justify-between text-base font-medium ${
                    isActive
                      ? 'bg-primary/10 text-[hsl(18,60%,45%)] font-semibold' // Active Mobile Style
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{item}</span>
                  <ArrowRight size={16} />
                </button>
              );
            })}

            <div className="pt-4 mt-4 border-t border-gray-200">
              <button
                onClick={() => { /* Handle Get Started */ }}
                className="w-full text-center py-3 px-4 rounded-[var(--radius)] font-semibold transition-all-std hover-lift text-white"
                style={{
                  background: 'hsl(18, 60%, 45%)', // Solid Primary Color
                  color: 'hsl(36, 33%, 98%)',
                }}
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import React from 'react';
import { Menu, X, IndianRupee, ArrowRight } from 'lucide-react';

/**
 * Redesigned Premium Navigation Bar.
 *
 * Updates:
 * - Fixed "Get Started" button text color to be explicitly WHITE on both desktop and mobile.
 * - Kept the solid white background and gray borders as requested.
 */
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
    'Security',
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
          {/* === Logo Section === */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center"
              style={{
                background: 'var(--gradient-primary)',
              }}
            >
              <IndianRupee
                size={20}
                className="text-white" // Logo icon always white inside colored box
              />
            </div>
            <span className="text-2xl font-black tracking-tight">
              <span className="text-gradient-primary">Jeb</span>
              <span className="text-gray-900">Works</span>
            </span>
          </div>

          {/* === Desktop Navigation === */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const targetId = getSectionId(item);
              const isActive = activeSection === targetId;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className={`relative group transition-colors duration-300 text-sm font-medium flex items-center gap-1.5 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                  {isActive && (
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      style={{
                        animation: 'pulse-glow 2.5s ease-in-out infinite',
                        boxShadow: '0 0 15px hsl(var(--primary) / 0.3)',
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
                background: 'var(--gradient-primary)',
                color: 'white', // Explicitly white
              }}
            >
              Get Started
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
                      ? 'bg-gray-100 text-primary'
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
                  background: 'var(--gradient-primary)',
                  color: 'white', // Explicitly white
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
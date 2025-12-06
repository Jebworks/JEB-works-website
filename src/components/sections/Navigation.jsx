import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = ({
  isMenuOpen = false,
  setIsMenuOpen = () => {},
  activeSection = 'home',
  scrollToSection = () => {},
  scrollY = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu-content {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      <nav
        className="w-full z-50 border-b shadow-sm"
        style={{
          fontFamily: 'var(--font-sans)',
          height: '5rem',
          backgroundColor: 'hsl(var(--background-h), var(--background-s), var(--background-l))',
          borderColor: 'hsl(var(--border-h), var(--border-s), var(--border-l))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Section */}
            <div 
              className="flex-shrink-0 flex items-center gap-1 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <img 
                src="container.png" 
                alt="Jeb Works Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-black tracking-tight">
                <span 
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary-h), var(--primary-s), var(--primary-l)), hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l)))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  JEB Works
                </span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 h-full">
              {navItems.map((item) => {
                const targetId = getSectionId(item);
                const isActive = activeSection === targetId;

                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(targetId)}
                    className="relative h-full px-1 text-sm font-medium transition-colors duration-300 flex items-center"
                    style={{
                      color: isActive 
                        ? `hsl(var(--primary-h), var(--primary-s), var(--primary-l))`
                        : 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))',
                      fontWeight: isActive ? '600' : '500',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'hsl(var(--foreground-h), var(--foreground-s), var(--foreground-l))';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))';
                      }
                    }}
                  >
                    {item}
                    
                    {/* Active Underline */}
                    {isActive && (
                      <span
                        className="absolute bottom-7 left-0 w-full h-[3px] rounded-t-full"
                        style={{
                          background: `hsl(var(--primary-h), var(--primary-s), var(--primary-l))`,
                          boxShadow: `0 -2px 10px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                          transition: 'all 0.3s ease-in-out',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => { /* Handle Get Started */ }}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--primary-h), var(--primary-s), var(--primary-l)), hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l)))`,
                  color: 'white',
                  boxShadow: `0 4px 15px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 20px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 15px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`;
                }}
              >
                Coming Soon
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors duration-300"
                style={{
                  color: 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))',
                }}
                onClick={handleMobileMenuToggle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--foreground-h), var(--foreground-s), var(--foreground-l))';
                  e.currentTarget.style.backgroundColor = 'hsl(var(--muted-h), var(--muted-s), var(--muted-l))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t shadow-lg mobile-menu-content"
            style={{
              backgroundColor: 'hsl(var(--background-h), var(--background-s), var(--background-l))',
              borderColor: 'hsl(var(--border-h), var(--border-s), var(--border-l))',
              position: 'absolute',
              top: '5rem',
              left: 0,
              right: 0,
              zIndex: 40,
            }}
            id="mobile-menu"
          >
            <div className="px-2 pb-6 pt-2 sm:px-3 p-4 space-y-1">
              {navItems.map((item) => {
                const targetId = getSectionId(item);
                const isActive = activeSection === targetId;

                return (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(targetId);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between text-base font-medium"
                    style={{
                      backgroundColor: isActive 
                        ? `hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.1)`
                        : 'transparent',
                      color: isActive
                        ? `hsl(var(--primary-h), var(--primary-s), var(--primary-l))`
                        : 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))',
                      fontWeight: isActive ? '600' : '500',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'hsl(var(--muted-h), var(--muted-s), var(--muted-l))';
                        e.currentTarget.style.color = 'hsl(var(--foreground-h), var(--foreground-s), var(--foreground-l))';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground-h), var(--muted-foreground-s), var(--muted-foreground-l))';
                      }
                    }}
                  >
                    <span>{item}</span>
                    <ArrowRight size={16} />
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t" style={{ borderColor: 'hsl(var(--border-h), var(--border-s), var(--border-l))' }}>
                <button
                  onClick={() => { /* Handle Get Started */ }}
                  className="w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary-h), var(--primary-s), var(--primary-l)), hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l)))`,
                    color: 'white',
                    boxShadow: `0 4px 15px hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.3)`,
                  }}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

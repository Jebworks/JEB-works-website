import React from 'react';
import { Linkedin, Instagram, Twitter, ShieldCheck } from 'lucide-react';

const Footer = () => {
  // Gold/Saffron highlight color for consistency
  const highlightColor = 'hsl(42, 90%, 70%)';

  const categories = ["Explore", "Product"];
  
  const categoryItems = {
    Explore: [
      { label: "Home", href: "#home" },
      { label: "Mission", href: "#mission" },
      { label: "Services", href: "#services" },
    ],
    Product: [
      { label: "Mobile App", href: "#mobile" },
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "How It Works", href: "#howitworks" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer
      className="relative pt-20 pb-10 bg-black border-t border-gray-800"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start animate-on-scroll">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="container.png" 
                alt="Jeb Works Logo" 
                // Increased size from h-10 to h-14
                className="h-14 w-auto object-contain" 
              />
              {/* Slightly increased text size to balance with larger logo */}
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Jeb<span style={{ color: highlightColor }}>Works</span>
              </span>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xs">
              Making personal finance simple, smart, and rewarding for every Indian.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link Categories */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div key={category} className="animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h4 className="font-bold text-white mb-6">{category}</h4>
                <ul className="space-y-3">
                  {categoryItems[category].map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[hsl(42,90%,70%)] transition-all duration-300"></span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-on-scroll">
          <p className="text-sm text-gray-500">
            © 2025 JEB Works. All rights reserved.
          </p>
          
          {/* Trust Badge / Credits */}
          <div className="flex flex-col md:flex-row items-center gap-4">
             <span className="text-xs text-gray-600">
               Designed and Developed By Aitch Nu Global Technologies
             </span>
             <div 
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50"
             >
               <ShieldCheck size={14} style={{ color: highlightColor }} />
               <span className="text-xs font-medium text-gray-300">
                Secured & Trusted
               </span>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
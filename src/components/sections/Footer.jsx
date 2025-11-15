import React from 'react';
// Removed MessageCircle, HeadphonesIcon, HelpCircle, BookOpen
import { IndianRupee, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  // Updated categories list
  const categories = ["Product", "Company", "Support", "Legal"];
  const categoryItems = {
    Product: ["Features", "Pricing", "Security", "Roadmap"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    // Renamed "Resources" to "Support" and updated links
    Support: ["Help Center", "Contact Us", "Live Chat", "Documentation"], 
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"]
  };

  // Removed the supportIcons object
  // const supportIcons = { ... };

  return (
    <footer
      className="py-16 px-6 border-t"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main grid: Updated to 6 cols to fit 4 link cols */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12 mb-12">
          
          {/* Logo/Socials Section: Spans 2 cols */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black mb-4 flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <IndianRupee size={16} />
              </div>
              <span className="text-gradient">Jeb</span>
              <span>Works</span>
            </div>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Making personal finance simple, smart, and rewarding for every
              Indian.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-xl flex items-center justify-center glass-effect hover:scale-110 transition-transform group"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link Categories Wrapper: Spans 4 cols */}
          <div className="md:col-span-4">
            {/* Inner grid: 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="font-bold mb-6 text-lg">{category}</h4>
                  <div
                    className="space-y-3"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {categoryItems[category].map((item, i) => {
                      // Removed all icon logic
                      return (
                        <div
                          key={i}
                          // Removed flex, items-center, gap-2
                          className="hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-1 transform group"
                        >
                          {/* Removed IconComponent */}
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Copyright Section */}
        <div
          className="pt-8 border-t text-center"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-muted)",
          }}
        >
          <p>
            © 2025 JEB Works. All rights reserved. Designed and Developed by Aitch Nu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
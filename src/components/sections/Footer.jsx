import React from 'react';
import { IndianRupee, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const categories = ["Product", "Company", "Legal"];
  const categoryItems = {
    Product: ["Features", "Pricing", "Security", "Roadmap"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"]
  };

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
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

          {categories.map((category, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6 text-lg">{category}</h4>
              <div
                className="space-y-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {categoryItems[category].map((item, i) => (
                  <div
                    key={i}
                    className="hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
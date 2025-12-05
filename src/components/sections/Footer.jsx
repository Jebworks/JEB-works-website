import React, { useState } from 'react';
import { Linkedin, Instagram, Twitter, ArrowRight, Download, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 2000);
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Twitter, href: "#twitter", label: "Twitter" }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column - Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="container.png" 
                alt="Jeb Works Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#1EB8A9] font-bold to-[#073F3A] bg-clip-text text-transparent">JEB Works</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Making personal finance simple, smart, and rewarding for every Indian.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="group p-2 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary/50 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon
                      size={16}
                      className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links - Middle */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-1.5 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe & Download - Right */}
          <div>
            {/* Subscribe Section */}
            <div className="mb-8">
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
              <div className="flex gap-2 items-stretch mb-3">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <button
                  onClick={handleSubscribe}
                  className="group relative px-4 py-2.5 rounded-lg font-bold text-white overflow-hidden flex items-center gap-1.5 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #0cb6c2 0%, #0c8ec2 100%)",
                    boxShadow: "0 5px 15px rgba(12, 182, 194, 0.3)"
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-primary font-medium">✓ Subscribed!</p>
              )}
            </div>

            {/* Download Section */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Download Now</h4>
              <div className="grid grid-cols-2 gap-3">
                {/* App Store */}
                <a
                  href="#"
                  className="flex group p-3 gap-2 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-900/90"
                >
                  <img src="app-store.svg" alt="App Store" className='w-8 h-8' />
                  <div>
                    <p className="text-xs font-bold text-white">App Store</p>
                    <p className="text-xs text-gray-400">iOS</p>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  className="flex group p-3 gap-2 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-900/90"
                >
                  <img src="google-play.svg" alt="Play Store" className='w-8 h-8' />
                  <div>
                    <p className="text-xs font-bold text-white">Play Store</p>
                    <p className="text-xs text-gray-400">Android</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            <p>© 2025 Jeb Works. All rights reserved.</p>
            <p className="text-gray-600 mt-1">Designed by <span className="text-[#1EB8A9] font-semibold">Aitch Nu Global Technologies</span></p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/50 border border-gray-800">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs">256-bit Secure</span>
            </div>
            
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-primary fill-primary" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

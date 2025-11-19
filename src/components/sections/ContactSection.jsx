import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactSection = ({ sectionRef }) => {
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have questions? We're here to help. Reach out and we'll respond
            quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - Simplified */}
          <div className="glass-effect p-8 rounded-3xl animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none transition-all"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none transition-all"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  placeholder="Last Name"
                />
              </div>

              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none transition-all"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="Email Address"
              />

              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none transition-all"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="Phone Number"
              />

              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-xl glass-effect focus:outline-none transition-all resize-none"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="Your Message"
              />

              <button
                onClick={(e) => e.preventDefault()}
                className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
                }}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info - Simplified */}
          <div className="space-y-6 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            {/* Contact Methods */}
            <div className="glass-effect p-6 rounded-3xl">
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      support@jebworks.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      +91 7892853739
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      Bangalore, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, color: "#0077b5", label: "LinkedIn" },
                  { icon: Instagram, color: "#e4405f", label: "Instagram" },
                  { icon: Twitter, color: "#1da1f2", label: "Twitter" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex-1 glass-effect p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    <social.icon
                      size={20}
                      className="mx-auto mb-2"
                      style={{ color: social.color }}
                    />
                    <span className="text-xs font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="glass-effect p-6 rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Support Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Mon - Fri
                  </span>
                  <span className="font-medium">9AM - 6PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Saturday
                  </span>
                  <span className="font-medium">10AM - 4PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Sunday
                  </span>
                  <span className="font-medium">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
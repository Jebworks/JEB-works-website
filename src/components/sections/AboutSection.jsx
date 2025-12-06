import React, { useState } from 'react';
import { Zap, TrendingUp, Lock } from 'lucide-react';

const AboutSection = ({ sectionRef }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-10 md:py-10 overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Centered */}
        <div className="text-center mt-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(12, 182, 194, 0.1)",
              color: "hsla(173, 89%, 28%, 1.00)",
              border: "1px solid rgba(12, 182, 194, 0.2)",
              animation: "slideUp 0.8s ease-out"
            }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            About Jeb Works
          </div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            style={{
              animation: "slideUp 0.8s ease-out 0.1s both"
            }}
          >
            Take Charge of Your <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent
              from-[#1EB8A9]  to-[#000]">
                Financial Future
            </span>
          </h2>

          <p 
            className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            style={{
              animation: "slideUp 0.8s ease-out 0.2s both"
            }}
          >
            Jeb Works makes personal finance simple, smart, and rewarding. Track your expenses, optimise your savings, plan investments, and get AI-driven insights — all from one intuitive platform.
          </p>
        </div>

        {/* Main Content - Asymmetrical Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* LEFT: Showcase with Animated Elements */}
          <div 
            className="relative h-[600px] flex items-center justify-center"
            style={{
              animation: "slideLeft 0.9s ease-out 0.3s both"
            }}
          >
            {/* Large Floating Card */}
            <div className="absolute w-full h-full flex items-center justify-center">
              <div 
                className="relative w-96 h-96 rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(12, 182, 194, 0.15) 0%, rgba(12, 142, 194, 0.1) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(12, 182, 194, 0.2)",
                  boxShadow: "0 20px 60px rgba(12, 182, 194, 0.1)",
                  animation: "float 6s ease-in-out infinite"
                }}
              >
                <img
                  src="about1.png"
                  alt="Jeb Works"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

               {/* Floating Badge - Top Right */}
              <div 
                className="
                  absolute 
                  right-10        /* mobile */
                  md:-right-10    /* tablet & desktop */
                  top-20 
                  px-6 py-4 
                  rounded-2xl 
                  backdrop-blur-md 
                  group-hover:shadow-2xl 
                  transition-all
                "
                style={{
                  background: "linear-gradient(135deg, #1EB8A9 0%, #073F3A 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: "floatRight 5s ease-in-out infinite",
                  boxShadow: "0 15px 40px rgba(12, 182, 194, 0.3)"
                }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-xs font-medium opacity-90">Users Worldwide</div>
                </div>
              </div>


              {/* Floating Badge - Bottom Left */}
              <div 
                className="
                  absolute 
                  left-10          /* mobile */
                  md:-left-10      /* from md and above */
                  md:-bottom-10
                  -bottom-0
                  px-6 py-4 
                  rounded-2xl 
                  backdrop-blur-md 
                  transition-all
                "
                style={{
                  background: "linear-gradient(135deg, #1EB8A9 0%, #073F3A)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: "floatLeft 5s ease-in-out infinite",
                  boxShadow: "0 15px 40px rgba(12, 182, 194, 0.3)"
                }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-xs font-medium opacity-90">Highly Rated</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story with Interactive Elements */}
          <div 
            className="relative"
            style={{
              animation: "slideRight 0.9s ease-out 0.3s both"
            }}
          >
            <div className="space-y-2">
              
              {/* Story Title */}
              <div className='px-6'>
                <span 
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{
                    color: "hsla(173, 89%, 28%, 1.00)",
                    animation: "fadeIn 0.8s ease-out 0.4s both"
                  }}
                >
                  ✨ Our Story
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3" style={{
                  animation: "slideUp 0.8s ease-out 0.5s both"
                }}>
                  Built for <br />
                  <span className="bg-gradient-to-r from-[#1EB8A9] to-[#073F3A] bg-clip-text text-transparent">
                    Financial Freedom
                  </span>
                </h3>
              </div>

              {/* Content Paragraphs with Hover Effect */}
              <div className="space-y-2" style={{
                animation: "slideUp 0.8s ease-out 0.6s both"
              }}>
                <p className="leading-relaxed text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 border-l-4 border-primary/30 pl-6 hover:border-primary/60 hover:pl-8 py-3 transition-all">
                  Built with a goal to make everyday money management simple,
                  our expense tracking app is designed to help users gain
                  clarity and control over their spending habits. We started
                  with a simple vision — to create a tool that makes financial
                  awareness easy, accessible, and stress-free for everyone.
                </p>

                <p className="leading-relaxed text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 border-l-4 border-primary/30 pl-6 hover:border-primary/60 hover:pl-8 py-3 transition-all">
                  Right now, our team is focused on building a clean,
                  intuitive, and reliable platform that supports smart
                  budgeting and effortless expense tracking. Every feature is
                  being crafted to ensure users can manage their finances with
                  confidence once the app is officially launched.
                </p>

                {/* <p className="leading-relaxed text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 border-l-4 border-primary/30 pl-6 hover:border-primary/60 hover:pl-8 py-3 transition-all">
                  We are preparing to release the app soon on both the{" "}
                  <strong className="text-primary font-bold">Google Play Store</strong> and the{" "}
                  <strong className="text-primary font-bold">Apple App Store</strong>. Our goal is to deliver a
                  smooth, user-friendly experience from day one, and we're
                  excited to bring this powerful tool to users across India
                  and beyond.
                </p> */}

                {/* CTA Button */}
                <div className="text-center" style={{
                  animation: "slideUp 0.8s ease-out 0.8s both"
                }}>
                  <button 
                    className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-lg overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #1EB8A9 0%, #073F3A 100%)",
                      boxShadow: "0 15px 40px rgba(12, 182, 194, 0.4)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span className="relative z-10">Get Notified for Launch</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-4 pt-6" style={{
                animation: "slideUp 0.8s ease-out 0.7s both"
              }}>
                {[
                  { icon: Zap, label: 'Fast' },
                  { icon: TrendingUp, label: 'Smart' },
                  { icon: Lock, label: 'Secure' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(12, 182, 194, 0.1) 0%, rgba(12, 142, 194, 0.05) 100%)",
                        border: "1px solid rgba(12, 182, 194, 0.2)",
                      }}
                      onMouseEnter={() => setHoveredFeature(idx)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <Icon className={`w-6 h-6 text-primary mx-auto transition-transform ${hoveredFeature === idx ? 'scale-125 rotate-12' : ''}`} />
                      <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-20px) rotateX(5deg);
          }
        }

        @keyframes floatRight {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(15px);
          }
        }

        @keyframes floatLeft {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

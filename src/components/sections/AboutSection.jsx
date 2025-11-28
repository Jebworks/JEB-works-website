import React from 'react';
import { Users, Award, Heart } from 'lucide-react';


const AboutSection = ({ sectionRef }) => {

  // Reusable "Glass" style optimized for the Light Background
  const glassStyle = {
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: `
      0 20px 40px -10px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(0, 0, 0, 0.02),
      inset 0 2px 4px 0 rgba(255, 255, 255, 0.8)
    `
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-background"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* Background Blobs - Kept for theme consistency */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-18 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(194, 65, 12, 0.08)",
              color: "hsl(18, 60%, 45%)",
              border: "1px solid rgba(194, 65, 12, 0.1)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            About Jeb Works
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Take Charge of Your <br />
            <span className="text-gradient-primary">Financial Future</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jeb Works makes personal finance simple, smart, and rewarding. Track
            your expenses, optimise your savings, plan investments, and get
            AI-driven insights — all from one intuitive platform.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT COLUMN: Image Only (Clean) === */}
          <div className="animate-on-scroll w-full flex justify-center">
            <img
              src="about.png"
              alt="Jeb Works Team"
              className="w-full h-[600px] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* === RIGHT COLUMN: Story Content (Glass Card) === */}
          <div
            className="animate-on-scroll h-full flex flex-col justify-center p-8 md:p-10 rounded-3xl relative overflow-hidden"
            style={glassStyle}
          >
            {/* Internal decorative blobs for depth */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl -z-10" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed text-base sm:text-lg">
                  Built with a goal to make everyday money management simple,
                  our expense tracking app is designed to help users gain
                  clarity and control over their spending habits. We started
                  with a simple vision — to create a tool that makes financial
                  awareness easy, accessible, and stress-free for everyone.
                </p>

                <p className="leading-relaxed text-base sm:text-lg">
                  Right now, our team is focused on building a clean,
                  intuitive, and reliable platform that supports smart
                  budgeting and effortless expense tracking. Every feature is
                  being crafted to ensure users can manage their finances with
                  confidence once the app is officially launched.
                </p>

                <p className="leading-relaxed text-base sm:text-lg">
                  We are preparing to release the app soon on both the{" "}
                  <strong className="text-primary">Google Play Store</strong> and the{" "}
                  <strong className="text-primary">Apple App Store</strong>. Our goal is to deliver a
                  smooth, user-friendly experience from day one, and we're
                  excited to bring this powerful tool to users across India
                  and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
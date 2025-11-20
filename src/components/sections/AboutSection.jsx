import React from "react";
import { Users, Award, Heart } from "lucide-react";

/**
 * About Us Section with Glass Morphism and Image
 * Layout: Image Left | Content Right
 */
const AboutSection = ({ sectionRef }) => {
  const teamStats = [
    { icon: Users, value: "10+", label: "Team Members" },
    { icon: Award, value: "50K+", label: "Active Users" },
    { icon: Heart, value: "5+", label: "Industry Awards" },
    { icon: Users, value: "99%", label: "User Satisfaction" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-black"
      style={{
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            style={{
              backgroundColor: "hsl(18, 60%, 20%)",
              color: "hsl(18, 100%, 80%)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            About Jeb Works
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Take Charge of Your <br />
            <span className="text-gradient-primary">Financial Future</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Jeb Works makes personal finance simple, smart, and rewarding. Track
            your expenses, optimise your savings, plan investments, and get
            AI-driven insights — all from one intuitive platform.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-stretch">
          {/* === LEFT COLUMN: Image Section === */}
          <div className="animate-on-scroll h-full">
            <div
              className="h-full min-h-[400px] rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 group relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.36),
                  inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              {/* Replace with your actual image path, e.g., "about.png" */}
              <img
                src="about.png"
                alt="Jeb Works Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Glass overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* === RIGHT COLUMN: Story Content === */}
          <div
            className="animate-on-scroll"
            style={{ transitionDelay: "0.1s" }}
          >
            <div
              className="h-full p-8 md:p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(25px) saturate(180%)",
                WebkitBackdropFilter: "blur(25px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.36),
                  inset 0 1px 1px 0 rgba(255, 255, 255, 0.2),
                  inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Built with a goal to make everyday money management simple,
                    our expense tracking app is designed to help users gain
                    clarity and control over their spending habits. We started
                    with a simple vision — to create a tool that makes financial
                    awareness easy, accessible, and stress-free for everyone.
                  </p>

                  <p className="leading-relaxed">
                    Right now, our team is focused on building a clean,
                    intuitive, and reliable platform that supports smart
                    budgeting and effortless expense tracking. Every feature is
                    being crafted to ensure users can manage their finances with
                    confidence once the app is officially launched.
                  </p>

                  <p className="leading-relaxed">
                    We are preparing to release the app soon on both the{" "}
                    <strong>Google Play Store</strong> and the
                    <strong>Apple App Store</strong>. Our goal is to deliver a
                    smooth, user-friendly experience from day one, and we’re
                    excited to bring this powerful tool to users across India
                    and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

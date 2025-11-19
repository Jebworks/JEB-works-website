import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Receipt,
  TrendingUp,
  Brain,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Smartphone // Added for the header badge
} from 'lucide-react';

/**
 * MobileScreens Component
 * * A handcrafted carousel section showcasing the mobile app interface.
 * * Compact design with tighter spacing and responsive sizing.
 */
const MobileScreens = ({ sectionRef }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Data for the 4 screens
  const screens = [
    {
      id: 0,
      title: 'Dashboard',
      subtitle: 'Overview & Balance',
      description: 'Get a complete bird\'s-eye view of your financial health. Track your total balance, daily spending, and quick actions all in one glance.',
      icon: BarChart3,
      image: 'screen1.png',
      color: 'hsl(var(--primary))',
    },
    {
      id: 1,
      title: 'Transactions',
      subtitle: 'Track Every Rupee',
      description: 'Real-time transaction updates with intelligent categorization. Know exactly where your money goes with detailed merchant info.',
      icon: Receipt,
      image: 'screen2.png',
      color: 'hsl(var(--secondary))',
    },
    {
      id: 2,
      title: 'Investments',
      subtitle: 'Portfolio Growth',
      description: 'Watch your wealth grow. Track stocks, mutual funds, and FDs in real-time with performance analytics and projection graphs.',
      icon: TrendingUp,
      image: 'screen3.png',
      color: 'hsl(var(--accent))',
    },
    {
      id: 3,
      title: 'AI Insights',
      subtitle: 'Smart Recommendations',
      description: 'Receive personalized tips to save more. Our AI analyzes your spending patterns to find subscription leaks and savings opportunities.',
      icon: Brain,
      image: 'screen4.png',
      color: 'hsl(var(--primary))',
    },
  ];

  // Handle tab switching
  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % screens.length);
    setIsAutoPlaying(false); // Stop auto-play on interaction
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + screens.length) % screens.length);
    setIsAutoPlaying(false);
  };

  // Optional: Auto-rotate tabs
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % screens.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeScreen = screens[activeTab];

  return (
    <section
      id="mobile"
      ref={sectionRef}
      // Reduced padding for a more compact section height
      className="relative py-16 md:py-24 overflow-hidden bg-muted/30"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Updated to match Start Journey Section styling */}
        <div className="text-center mb-16 animate-on-scroll">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
            <Smartphone size={14} />
            <span>Mobile Experience</span>
          </div>

          {/* Headline - Increased Size */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Powerful Features in{' '}
            <span className="text-gradient-primary">Your Pocket</span>
          </h2>
        </div>

        {/* * === Split Layout Content ===
         * Reduced gap from 12 to 8 (lg:gap-10) to bring content closer
         */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* --- LEFT COLUMN: Content --- */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-8">
            
            {/* Animated Text Container */}
            <div key={activeTab} className="animate-fade-in-up">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-5"
                style={{ 
                  backgroundColor: `hsl(var(--background))`,
                  border: '1px solid hsl(var(--border))',
                  color: activeScreen.color 
                }}
              >
                <activeScreen.icon size={16} />
                <span>{activeScreen.subtitle}</span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                {activeScreen.title}
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                {activeScreen.description}
              </p>

              <button 
                className="group inline-flex items-center text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: activeScreen.color }}
              >
                Learn more about {activeScreen.title}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prevTab}
                className="p-2.5 rounded-full border border-border bg-background hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Previous screen"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              
              <div className="flex gap-2">
                {screens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeTab ? 'w-8' : 'w-2 bg-border'
                    }`}
                    style={{ 
                      backgroundColor: idx === activeTab ? activeScreen.color : undefined 
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTab}
                className="p-2.5 rounded-full border border-border bg-background hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Next screen"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Phone Mockup --- */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            {/* Decorative background blobs */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl -z-10 opacity-20 transition-colors duration-700"
              style={{ backgroundColor: activeScreen.color }}
            />

            {/* Phone Frame - Reduced Dimensions 
               Height reduced from 580/640 to 480/560
               Width reduced from 280/320 to 240/280
            */}
            <div 
              className="relative w-[240px] md:w-[280px] h-[480px] md:h-[560px] bg-background rounded-[2.5rem] shadow-2xl border-[6px] border-foreground/10 z-10 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-xl z-20 backdrop-blur-md" />

              {/* Screen Image Area */}
              <div className="w-full h-full bg-muted relative">
                <img 
                  key={activeTab}
                  src={activeScreen.image} 
                  alt={`${activeScreen.title} Screen`}
                  className="w-full h-full object-cover animate-in fade-in slide-in-from-right-4 duration-500"
                />
                
                {/* Fallback Overlay (Visible only if image fails/missing) */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-black/5 opacity-0">
                   <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                      {activeScreen.image}
                   </span>
                </div>
              </div>
            </div>
            
            {/* Floating badge decoration - Repositioned closer */}
            <div 
               className="absolute bottom-16 -right-2 md:-right-6 bg-card p-3 rounded-xl shadow-lg border border-border animate-float hidden md:block"
               style={{ animationDelay: '1s' }}
            >
               <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-background"
                    style={{ color: activeScreen.color }}
                  >
                     <activeScreen.icon size={16} />
                  </div>
                  <div>
                     <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Feature</p>
                     <p className="text-xs font-bold text-foreground">{activeScreen.title}</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileScreens;
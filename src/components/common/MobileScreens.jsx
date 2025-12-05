import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Receipt,
  TrendingUp,
  Brain,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Smartphone,
  LayoutDashboard,
  Calendar, 
  Target, 
  Settings,
  Briefcase,
  DollarSign,
  Wallet,
  PieChart,
  CreditCard,
  Bell,
  Shield,
  Zap,
  TrendingDown,
  LineChart,
  BadgeIndianRupee,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

const MobileScreens = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const screens = [
    {
      id: 0,
      title: 'Dashboard',
      subtitle: 'Overview & Balance',
      description: 'Get a complete bird\'s-eye view of your financial health. Track your total balance, daily spending, and quick actions all in one glance.',
      icon: LayoutDashboard,
      image: '/screen1.png',
      color: 'hsl(var(--primary-h), var(--primary-s), 35%)',
      features: [
        { icon: Wallet, label: 'Total Balance' },
        { icon: PieChart, label: 'Spending Pie' },
        { icon: CreditCard, label: 'Quick Actions' },
        { icon: Bell, label: 'Smart Alerts' },
      ],
    },
    {
      id: 1,
      title: 'Transactions',
      subtitle: 'Track Every Rupee',
      description: 'Real-time transaction updates with intelligent categorization. Know exactly where your money goes with detailed merchant info.',
      icon: Receipt,
      image: '/screen2.png',
      color: 'hsl(var(--primary-h), var(--primary-s), 35%)',
      features: [
        { icon: Zap, label: 'Real-time Updates' },
        { icon: Target, label: 'Auto Categories' },
        { icon: Shield, label: 'Secure Sync' },
        { icon: BadgeIndianRupee, label: 'Merchant Info' },
      ],
    },
    {
      id: 2,
      title: 'Budget Goals',
      subtitle: 'Smart Financial Planning',
      description:
        'Set clear financial goals and stay on track with intelligent budgeting tools. Monitor your spending, optimize categories, and visualize your progress toward short-term and long-term goals.',
      icon: TrendingUp,
      image: '/screen3.png',
      color: 'hsl(var(--primary-h), var(--primary-s), 35%)',
      features: [
        { icon: LineChart, label: 'Goal Tracking' },
        { icon: BarChart3, label: 'Spending Insights' },
        { icon: TrendingUp, label: 'Progress Graphs' },
        { icon: TrendingDown, label: 'Budget Alerts' },
      ],
    },

    {
      id: 3,
      title: 'AI Insights',
      subtitle: 'Smart Recommendations',
      description: 'Receive personalized tips to save more. Our AI analyzes your spending patterns to find subscription leaks and savings opportunities.',
      icon: Brain,
      image: '/screen4.png',
      color: 'hsl(var(--primary-h), var(--primary-s), 35%)',
      features: [
        { icon: Sparkles, label: 'AI Tips' },
        { icon: AlertCircle, label: 'Leak Detection' },
        { icon: CheckCircle, label: 'Save More' },
        { icon: Target, label: 'Smart Goals' },
      ],
    },
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % screens.length);
    setIsAutoPlaying(false);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + screens.length) % screens.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, screens.length]);

  const activeScreen = screens[activeTab];

  return (
    <section
      id="mobile"
      className="relative py-6 md:py-8 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, hsl(var(--primary-h), var(--primary-s), 98%) 0%, hsl(var(--secondary-h), var(--secondary-s), 96%) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div 
          className="bg-white p-6 sm:p-10 lg:p-14 xl:p-20 rounded-[2rem] md:rounded-[3rem] shadow-xl border max-w-7xl mx-auto relative overflow-hidden"
          style={{ 
            backgroundColor: 'white',
            borderColor: 'rgba(0,0,0,0.05)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)'
          }}
        >
          
          {/* Decorative Floating Icons */}
          <Briefcase size={60} className="absolute top-8 left-12 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '0.5s', transform: 'rotate(-10deg)', color: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' }} />
          <Calendar size={32} className="absolute top-24 left-4 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '2s', color: 'hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l))' }} />
          <Target size={40} className="absolute top-10 right-10 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '0s', color: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' }} />
          <Receipt size={70} className="absolute top-1/4 right-8 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '1s', color: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' }} />
          <Settings size={45} className="absolute bottom-12 left-12 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '4s', color: 'hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l))' }} />
          <Brain size={45} className="absolute bottom-20 right-20 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '3s', color: 'hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l))' }} />
          <DollarSign size={80} className="absolute bottom-10 right-0 opacity-5 z-0 animate-pulse-slow" style={{ animationDelay: '5s', transform: 'translate(40%, -50%) rotate(10deg)', color: 'hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l))' }} />

          {/* Section Header */}
          <div className="text-center mb-4 md:mb-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 shadow-xl"
              style={{ 
                backgroundColor: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l) / 0.2)', 
                color: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' 
              }}
            >
              <Smartphone size={16} />
              <span>Mobile Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug"
              style={{ color: 'hsl(var(--background-h), var(--background-s), 12%)' }}
            >
              Powerful Features in{' '} <br />
              <span style={{ color: 'hsl(var(--primary-h), var(--primary-s), var(--primary-l))' }}>
                Your Pocket
              </span> 
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Phone Mockup */}
            <div className="order-1 lg:order-1 flex justify-center items-center relative py-0" style={{ isolation: 'isolate' }}>
              
              {/* Single Large Gradient Circle Behind Phone - Purple to Black gradient */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
                style={{ 
                  background: 'radial-gradient(circle at center, #8bfaf3ff 0%, #5cf6ecff 20%, #3ae1edff 35%, #12b2adff 50%, #21b6b1ff 65%, #c0fbffff 78%, #116879ff 88%, #008592ff 95%)',
                  opacity: 0.95,
                  zIndex: 0,
                }} 
              />

              <div className="relative">
                <img 
                  key={activeTab}
                  src={activeScreen.image} 
                  alt={`${activeScreen.title} Screen`}
                  className="w-[280px] h-[560px] md:w-[400px] md:h-[700px] object-cover rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500"
                  style={{
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}
                />
              </div>

              {/* Floating Feature Badge */}
              <div 
                className="absolute bottom-8 right-8 md:bottom-16 md:right-0 bg-white p-3 rounded-xl shadow-lg border hidden sm:block animate-float"
                style={{ 
                  animationDelay: '0.8s',
                  borderColor: 'rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-inner"
                    style={{ 
                      color: activeScreen.color, 
                      backgroundColor: `${activeScreen.color}15` 
                    }}
                  >
                    <activeScreen.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(0,0,0,0.5)' }}>
                      Feature
                    </p>
                    <p className="text-xs font-bold" style={{ color: 'rgba(0,0,0,0.9)' }}>
                      {activeScreen.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="order-2 lg:order-2 flex flex-col justify-center">
              
              <div key={activeTab} style={{ animation: 'fadeInUp 0.7s ease-out' }}>
                
                {/* Subtitle Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ 
                    backgroundColor: `${activeScreen.color}15`,
                    color: activeScreen.color 
                  }}
                >
                  <activeScreen.icon size={16} />
                  <span>{activeScreen.subtitle}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-4xl font-extrabold mb-4 leading-tight"
                  style={{ color: 'rgba(0,0,0,0.9)' }}
                >
                  {activeScreen.title}
                </h3>
                
                <p className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: 'rgba(0,0,0,0.6)' }}
                >
                  {activeScreen.description}
                </p>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                  {activeScreen.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="group flex items-center gap-3 p-4 rounded-2xl border bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden"
                      style={{ 
                        borderColor: `${activeScreen.color}30`,
                        animation: `fadeInUp ${0.5 + idx * 0.1}s ease-out`
                      }}
                    >
                      {/* Gradient Background on Hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${activeScreen.color}08 0%, ${activeScreen.color}15 100%)`
                        }}
                      />
                      
                      {/* Icon Container with Gradient */}
                      <div 
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${activeScreen.color}20 0%, ${activeScreen.color}35 100%)`,
                          color: activeScreen.color 
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${activeScreen.color}40 0%, transparent 70%)`
                          }}
                        />
                        <feature.icon size={22} className="relative z-10" strokeWidth={2.5} />
                      </div>
                      
                      {/* Label */}
                      <span className="relative z-10 text-sm font-semibold group-hover:translate-x-0.5 transition-transform duration-300" 
                        style={{ color: 'rgba(0,0,0,0.85)' }}
                      >
                        {feature.label}
                      </span>
                      
                      {/* Shine Effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                          transform: 'translateX(-100%)',
                          animation: 'shine 1.5s ease-in-out infinite'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button 
                  className="group inline-flex items-center text-base font-semibold transition-all hover:opacity-80 mt-2"
                  style={{ color: activeScreen.color }}
                >
                  Learn more about {activeScreen.title}
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Navigation Controls */}
              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={prevTab}
                  className="p-3 rounded-full border bg-white transition-all hover:shadow-md"
                  style={{ 
                    borderColor: `${activeScreen.color}30`, 
                    color: activeScreen.color, 
                    boxShadow: `0 0 0 2px ${activeScreen.color}10`,
                  }}
                  aria-label="Previous screen"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {screens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => {
                        setActiveTab(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeTab ? 'w-8' : 'w-2'
                      }`}
                      style={{ 
                        backgroundColor: idx === activeTab ? activeScreen.color : 'rgba(0,0,0,0.2)' 
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTab}
                  className="p-3 rounded-full border bg-white transition-all hover:shadow-md"
                  style={{ 
                    borderColor: `${activeScreen.color}30`, 
                    color: activeScreen.color,
                    boxShadow: `0 0 0 2px ${activeScreen.color}10`,
                  }}
                  aria-label="Next screen"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0.5deg); }
          50% { transform: translateY(-5px) rotate(-0.5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default MobileScreens;

import React, { useState } from 'react';
import { CheckCircle, Calendar, FileText, BarChart, ChevronRight, Shield, Bell, Wallet } from 'lucide-react';

/**
 * Redesigned FeaturesSection to match image layout
 */
const FeaturesSection = ({ sectionRef }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const highlightColor = 'hsl(174, 72%, 42%)';
  const backgroundColor = 'hsl(240, 10%, 4%)';
  const cardBackground = 'hsl(240, 10%, 8%)';

  const features = [
    {
      id: 'navigate',
      icon: ChevronRight,
      title: 'Navigate through the app features',
      shortTitle: 'App Navigation',
      description: 'The JEB Works App is packed with all you need to set your bills on the right track without missing anyone.',
      color: 'hsl(174, 100%, 42%)',
    },
    {
      id: 'reminders',
      icon: Calendar,
      title: 'Set Reminders',
      shortTitle: 'Reminders',
      description: 'Stay alerted on your bills by creating personalized reminders that would appear in your calendar to avoid paying late fee.',
      details: [
        'Create personalized reminders',
        'Calendar integration',
        'Avoid late fees',
        'Custom notification times'
      ],
      color: 'hsl(174, 85%, 65%)',
    },
    {
      id: 'manage',
      icon: FileText,
      title: 'Manage Bills',
      shortTitle: 'Bill Management',
      description: 'Keep all your bills in one place - from electricity, internet, fuel to child support bills. Take control and track them easily.',
      details: [
        'All bills centralized',
        'Multiple bill types',
        'Easy tracking system',
        'Payment history'
      ],
      color: 'hsl(280, 85%, 65%)',
    },
    {
      id: 'reports',
      icon: BarChart,
      title: 'Get Powerful Reports',
      shortTitle: 'Reports & Analytics',
      description: 'Comprehensive reports that give you insights into your spending patterns and help you optimize your finances.',
      details: [
        'Spending analytics',
        'Monthly/yearly reports',
        'Trend identification',
        'Export to PDF/Excel'
      ],
      color: 'hsl(40, 90%, 65%)',
    },
  ];

  const activeFeatureData = features[activeFeature];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-12 md:py-20 bg-black min-h-screen"
      style={{
        backgroundColor: backgroundColor,
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Main Two Column Layout === */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* === Left Column: Features List (Smaller) === */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
                style={{
                  backgroundColor: 'hsla(174, 61%, 10%, 1.00)',
                  color: 'hsl(174, 100%, 80%)',
                }}
              >
                <Bell size={14} />
                HOW IT WORKS
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All In One <span style={{ color: highlightColor }}>Place</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                The JEB Works App is packed with all you need to set your bills on the right track without missing any.
              </p>
            </div>

            {/* Features Navigation List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeFeature === index 
                      ? 'transform -translate-y-1 shadow-2xl' 
                      : 'hover:bg-white/5'
                  }`}
                  style={{
                    backgroundColor: activeFeature === index ? cardBackground : 'transparent',
                    border: activeFeature === index ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                    boxShadow: activeFeature === index 
                      ? `0 10px 40px -10px ${feature.color}30` 
                      : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeFeature === index ? 'scale-110' : ''
                    }`}
                    style={{
                      backgroundColor: activeFeature === index ? `${feature.color}20` : 'rgba(255, 255, 255, 0.05)',
                      color: activeFeature === index ? feature.color : 'rgba(255, 255, 255, 0.6)',
                    }}
                    >
                      <feature.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                        activeFeature === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {feature.shortTitle}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {feature.description.substring(0, 50)}...
                      </p>
                    </div>
                    {activeFeature === index && (
                      <ChevronRight size={16} className="text-gray-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Get Started Button (Mobile only) */}
            {/* <div className="lg:hidden mt-8">
              <button
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${highlightColor} 0%, hsl(174, 80%, 80%) 100%)`,
                  color: 'rgba(0, 0, 0, 0.9)',
                  boxShadow: `0 8px 32px 0 ${highlightColor}40`,
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Comming Soon
                  <ChevronRight size={20} />
                </span>
              </button>
            </div> */}
          </div>

          {/* === Right Column: Feature Details (Larger) === */}
          <div className="lg:col-span-8">
            <div className="h-full p-6 md:p-8 rounded-3xl"
              style={{
                backgroundColor: cardBackground,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.5)',
                minHeight: '600px',
              }}
            >
              <div className="flex flex-col h-full">
                
                {/* Feature Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${activeFeatureData.color}20`,
                        color: activeFeatureData.color,
                      }}
                    >
                      <activeFeatureData.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {activeFeatureData.title}
                      </h3>
                      <p className="text-gray-400 mt-2">
                        {activeFeatureData.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Content Area */}
                <div className="flex-1">
                  {activeFeatureData.id === 'navigate' ? (
                    // Navigation Feature - App Preview
                    <div className="h-full flex flex-col">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-sm text-gray-300">
                            Real-time app interface preview
                          </span>
                        </div>
                      </div>

                      {/* App Mockup */}
                      <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/3 to-black/50">
                        <div className="p-6 h-full flex flex-col">
                          {/* App Header */}
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg">
                                <img src='/container.png' />
                              </div>
                              <span className="text-white font-semibold">JEB Workss</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white/10" />
                              <div className="w-8 h-8 rounded-full bg-white/10" />
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {features.slice(1).map((feature, idx) => (
                              <div 
                                key={idx}
                                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                                onClick={() => setActiveFeature(idx + 1)}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{
                                      backgroundColor: `${feature.color}20`,
                                      color: feature.color,
                                    }}
                                  >
                                    <feature.icon size={18} />
                                  </div>
                                  <span className="text-white font-medium text-sm">
                                    {feature.shortTitle}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-400">
                                  {feature.description.substring(0, 60)}...
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Stats Preview */}
                          <div className="mt-auto">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-sm text-gray-400">Monthly Summary</p>
                                  <p className="text-2xl font-bold text-white mt-1">$1,250.00</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-gray-400">Upcoming Bills</p>
                                  <p className="text-2xl font-bold text-white mt-1">3</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Other Features - Details View
                    <div className="h-full flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {activeFeatureData.details?.map((detail, idx) => (
                          <div 
                            key={idx}
                            className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle 
                                size={18} 
                                style={{ color: activeFeatureData.color }}
                                className="mt-0.5 flex-shrink-0"
                              />
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Feature Visualization */}
                      <div className="mt-auto">
                        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-black/30 to-white/5">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-semibold mb-2">
                                How it helps you
                              </h4>
                              <p className="text-gray-400 text-sm">
                                This feature saves you time and money by automating your bill management process
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white mb-1"
                                style={{ color: activeFeatureData.color }}
                              >
                                {activeFeature === 1 ? '40%' : activeFeature === 2 ? '60%' : '85%'}
                              </div>
                              <p className="text-xs text-gray-400">
                                Efficiency increase
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Get Started Button (Desktop only) */}
                <div className="hidden lg:flex justify-center mt-8">
                  <button
                    className="px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: `linear-gradient(135deg, ${highlightColor} 0%, hsl(174, 80%, 80%) 100%)`,
                      color: 'rgba(0, 0, 0, 0.9)',
                      boxShadow: `0 8px 32px 0 ${highlightColor}40`,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Comming Soon
                      <ChevronRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

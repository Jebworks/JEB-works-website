import React, { useState, useEffect, useRef } from "react";
import { Menu, X, TrendingUp, Shield, Zap, Target, Award, ChevronDown, BarChart3, Wallet, Brain,
   Gift, Users, Mail, Phone, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle2, Star, Sparkles,
    Lock, PieChart, LineChart, Repeat, CreditCard, Smartphone, Cpu, Rocket, ShieldCheck, Coins, IndianRupee,
     BarChart4, WalletCards, TargetIcon, Calendar, FileText, MessageCircle, MapPin, Send, Download, 
     Eye, Filter, Search, Bell, Settings, CreditCard as CreditCardIcon, PiggyBank, Landmark, 
     ArrowUpRight, CircleDollarSign, LineChart as ChartLine, PieChart as ChartPie, Database, Cloud, Server, 
     Workflow, Bot, BadgeCheck, Clock, ShieldAlert, Users2, Globe, DownloadCloud, UploadCloud, Calculator, CalendarDays,
      Receipt, ShoppingBag, Utensils, Plus, User } from "lucide-react";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDashboardTab, setActiveDashboardTab] = useState("overview");

  const sectionRefs = {
    home: useRef(null),
    mission: useRef(null),
    services: useRef(null),
    features: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "mission",
        "services",
        "features",
        "pricing",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = sectionRefs[section]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-view");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (counter < 50000) {
      const timer = setTimeout(
        () => setCounter((prev) => Math.min(prev + 1000, 50000)),
        50
      );
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const scrollToSection = (id) => {
    const element = sectionRefs[id]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Dashboard data
  const dashboardData = {
    overview: {
      cards: [
        {
          title: "Total Balance",
          value: "₹1,45,670",
          change: "+12.5%",
          icon: Wallet,
          color: "var(--color-primary)",
        },
        {
          title: "Monthly Income",
          value: "₹85,420",
          change: "+8.2%",
          icon: TrendingUp,
          color: "var(--color-secondary)",
        },
        {
          title: "Monthly Expenses",
          value: "₹45,230",
          change: "-3.1%",
          icon: Receipt,
          color: "var(--color-accent)",
        },
        {
          title: "Savings Rate",
          value: "47.2%",
          change: "+5.3%",
          icon: PiggyBank,
          color: "var(--color-primary)",
        },
      ],
      recentTransactions: [
        {
          name: "Amazon Shopping",
          amount: "-₹2,499",
          date: "Today",
          category: "Shopping",
          icon: ShoppingBag,
        },
        {
          name: "Salary Credit",
          amount: "+₹85,420",
          date: "Today",
          category: "Income",
          icon: CircleDollarSign,
        },
        {
          name: "Zomato Order",
          amount: "-₹845",
          date: "Yesterday",
          category: "Food",
          icon: Utensils,
        },
        {
          name: "Mutual Fund SIP",
          amount: "-₹10,000",
          date: "2 days ago",
          category: "Investment",
          icon: ChartLine,
        },
      ],
    },
  };

  return (
    <>
      <style>{`
        :root {
          --color-primary: #8B5CF6;
          --color-primary-dark: #7C3AED;
          --color-primary-light: #A78BFA;
          --color-secondary: #06B6D4;
          --color-secondary-dark: #0891B2;
          --color-secondary-light: #22D3EE;
          --color-accent: #EC4899;
          --color-accent-dark: #DB2777;
          --color-background: #0F0A1E;
          --color-surface: #1A1232;
          --color-surface-light: #251A3F;
          --color-text-primary: #FFFFFF;
          --color-text-secondary: #A8A29E;
          --color-text-muted: #78716C;
          --color-border: rgba(139, 92, 246, 0.2);
          --color-border-hover: rgba(139, 92, 246, 0.5);
          --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          --gradient-accent: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
          --gradient-surface: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-light) 100%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-2deg); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes rotate3d {
          from { transform: perspective(1000px) rotateY(0deg); }
          to { transform: perspective(1000px) rotateY(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-rotate-3d {
          animation: rotate3d 20s linear infinite;
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .glass-effect {
          background: rgba(26, 18, 50, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid var(--color-border);
        }

        .text-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .card-shine {
          position: relative;
          overflow: hidden;
        }

        .card-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.7s;
        }

        .card-shine:hover::before {
          left: 100%;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animate-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-animation > * {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .stagger-animation.animate-in-view > * {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-animation.animate-in-view > *:nth-child(1) { transition-delay: 0.1s; }
        .stagger-animation.animate-in-view > *:nth-child(2) { transition-delay: 0.2s; }
        .stagger-animation.animate-in-view > *:nth-child(3) { transition-delay: 0.3s; }
        .stagger-animation.animate-in-view > *:nth-child(4) { transition-delay: 0.4s; }
        .stagger-animation.animate-in-view > *:nth-child(5) { transition-delay: 0.5s; }

        .parallax-bg {
          transform: translateY(calc(var(--scroll-y) * 0.5px));
        }

        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-border {
          position: relative;
          background: var(--color-surface);
          border-radius: 16px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: var(--gradient-primary);
          border-radius: 18px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }

        .typewriter {
          overflow: hidden;
          border-right: 3px solid var(--color-primary);
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s both;
        }

        .financial-chart {
          background: linear-gradient(45deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          mask: radial-gradient(circle at center, black 0%, transparent 70%);
          opacity: 0.1;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .transaction-item {
          transition: all 0.3s ease;
        }

        .transaction-item:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <div
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text-primary)",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* Animated Background with Particles */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                background: "var(--color-primary)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Floating Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float animate-glow"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
              filter: "blur(80px)",
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full animate-float animate-glow"
            style={{
              background:
                "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
              filter: "blur(80px)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full animate-float animate-glow"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              filter: "blur(80px)",
              animationDelay: "4s",
            }}
          />
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrollY > 50 ? "glass-effect shadow-2xl" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black tracking-tight flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <IndianRupee size={16} />
                </div>
                <span className="text-gradient">Jeb</span>
                <span style={{ color: "var(--color-text-primary)" }}>
                  Works
                </span>
              </div>

              <div className="hidden lg:flex items-center space-x-12">
                {[
                  "Home",
                  "Mission",
                  "Services",
                  "Features",
                  "Pricing",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative group"
                    style={{
                      color:
                        activeSection === item.toLowerCase()
                          ? "var(--color-primary)"
                          : "var(--color-text-secondary)",
                    }}
                  >
                    <span className="relative z-10 font-medium transition-colors group-hover:text-white flex items-center gap-1">
                      {item}
                      {activeSection === item.toLowerCase() && (
                        <div className="w-1 h-1 rounded-full bg-current animate-pulse-glow" />
                      )}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    />
                  </button>
                ))}
                <button
                  className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  Get Started
                </button>
              </div>

              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="lg:hidden mt-6 pb-6 space-y-4 glass-effect rounded-2xl p-6 mt-4 animate-slide-up">
                {[
                  "Home",
                  "Mission",
                  "Services",
                  "Features",
                  "Pricing",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-3 px-4 rounded-xl transition-all hover:bg-white/5 flex items-center justify-between"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-8 animate-slide-up hover-lift">
              <Sparkles size={20} style={{ color: "var(--color-primary)" }} />
              <span
                style={{ color: "var(--color-text-secondary)" }}
                className="text-sm font-medium"
              >
                India's Most Intelligent Finance Platform
              </span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1
              className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Take Charge of
              <br />
              <span className="text-gradient typewriter">Your Money</span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up"
              style={{
                color: "var(--color-text-secondary)",
                animationDelay: "0.2s",
              }}
            >
              Experience the future of personal finance. Track expenses,
              optimize savings, plan investments, and unlock AI-driven insights
              — all from one beautiful, intuitive platform.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                className="group px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden animate-pulse-glow"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.4)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer" />
              </button>
              <button className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 glass-effect hover:bg-white/10 border border-transparent hover:border-white/20">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                </span>
              </button>
            </div>

            {/* Animated Stats */}
            <div
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 animate-slide-up stagger-animation"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                {
                  value: `${counter.toLocaleString()}+`,
                  label: "Active Users",
                  icon: Users,
                },
                { value: "₹100Cr+", label: "Money Managed", icon: Coins },
                { value: "4.9/5", label: "User Rating", icon: Star },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile App Screens Preview */}
            <div className="relative mt-20 w-full px-6">
              {" "}
              {/* Changed to full width with padding */}
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden w-full">
                {" "}
                {/* Added w-full */}
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-black mb-4">
                    Mobile App Experience
                  </h3>
                  <p
                    style={{ color: "var(--color-text-secondary)" }}
                    className="text-xl"
                  >
                    Beautiful, intuitive, and powerful - all in your pocket
                  </p>
                </div>
                {/* Mobile Screens Grid - Updated to use larger widths */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {" "}
                  {/* Increased gap */}
                  {/* Screen 1 - Dashboard */}
                  <div className="flex justify-center">
                    <div className="w-56 h-[28rem] rounded-[2.5rem] border-8 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl">
                      {" "}
                      {/* Increased width and height */}
                      {/* Status Bar */}
                      <div className="h-7 bg-gray-800 flex items-center justify-between px-5 pt-1">
                        {" "}
                        {/* Increased padding */}
                        <span className="text-white text-sm">9:41</span>{" "}
                        {/* Larger text */}
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 bg-gray-600 rounded-full"></div>{" "}
                          {/* Slightly larger */}
                          <div className="w-5 h-1.5 bg-gray-600 rounded-full"></div>{" "}
                          {/* Slightly larger */}
                        </div>
                      </div>
                      {/* App Content - Dashboard */}
                      <div className="h-[25.5rem] bg-gradient-to-br from-purple-900 to-blue-900 p-5">
                        {" "}
                        {/* Increased padding */}
                        {/* Header */}
                        <div className="flex items-center justify-between mb-7">
                          {" "}
                          {/* Increased margin */}
                          <div className="flex items-center gap-3">
                            {" "}
                            {/* Increased gap */}
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                              {" "}
                              {/* Larger icon */}
                              <IndianRupee
                                size={20}
                                className="text-white"
                              />{" "}
                              {/* Larger icon */}
                            </div>
                            <span className="text-white font-bold text-lg">
                              Jeb Works
                            </span>{" "}
                            {/* Larger text */}
                          </div>
                          <Bell size={20} className="text-white" />{" "}
                          {/* Larger icon */}
                        </div>
                        {/* Balance Card */}
                        <div className="bg-white/10 rounded-2xl p-4 mb-5">
                          {" "}
                          {/* Increased padding */}
                          <p className="text-white/60 text-sm mb-2">
                            Total Balance
                          </p>{" "}
                          {/* Larger text */}
                          <h3 className="text-white font-bold text-xl mb-3">
                            ₹1,45,670
                          </h3>{" "}
                          {/* Larger text */}
                          <div className="flex gap-3">
                            {" "}
                            {/* Increased gap */}
                            <div className="flex-1 bg-white/20 rounded-lg py-2 text-center">
                              {" "}
                              {/* Larger button */}
                              <span className="text-white text-sm">
                                Add
                              </span>{" "}
                              {/* Larger text */}
                            </div>
                            <div className="flex-1 bg-white/20 rounded-lg py-2 text-center">
                              {" "}
                              {/* Larger button */}
                              <span className="text-white text-sm">
                                Send
                              </span>{" "}
                              {/* Larger text */}
                            </div>
                          </div>
                        </div>
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          {" "}
                          {/* Increased gap and margin */}
                          <div className="bg-white/5 rounded-xl p-3">
                            {" "}
                            {/* Increased padding */}
                            <div className="flex items-center gap-2 mb-2">
                              {" "}
                              {/* Increased gap */}
                              <TrendingUp
                                size={16}
                                className="text-green-400"
                              />{" "}
                              {/* Larger icon */}
                              <span className="text-white/60 text-sm">
                                Income
                              </span>{" "}
                              {/* Larger text */}
                            </div>
                            <p className="text-white font-semibold text-base">
                              ₹85,420
                            </p>{" "}
                            {/* Larger text */}
                          </div>
                          <div className="bg-white/5 rounded-xl p-3">
                            {" "}
                            {/* Increased padding */}
                            <div className="flex items-center gap-2 mb-2">
                              {" "}
                              {/* Increased gap */}
                              <Receipt
                                size={16}
                                className="text-red-400"
                              />{" "}
                              {/* Larger icon */}
                              <span className="text-white/60 text-sm">
                                Expenses
                              </span>{" "}
                              {/* Larger text */}
                            </div>
                            <p className="text-white font-semibold text-base">
                              ₹45,230
                            </p>{" "}
                            {/* Larger text */}
                          </div>
                        </div>
                        {/* Recent Transaction */}
                        <div className="bg-white/5 rounded-xl p-3">
                          {" "}
                          {/* Increased padding */}
                          <div className="flex items-center justify-between mb-3">
                            {" "}
                            {/* Increased margin */}
                            <span className="text-white text-sm font-medium">
                              Recent
                            </span>{" "}
                            {/* Larger text */}
                            <span className="text-white/40 text-sm">
                              View All
                            </span>{" "}
                            {/* Larger text */}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {" "}
                              {/* Increased gap */}
                              <div className="w-8 h-8 bg-blue-400/20 rounded flex items-center justify-center">
                                {" "}
                                {/* Larger icon container */}
                                <ShoppingBag
                                  size={16}
                                  className="text-blue-400"
                                />{" "}
                                {/* Larger icon */}
                              </div>
                              <div>
                                <p className="text-white text-sm">Amazon</p>{" "}
                                {/* Larger text */}
                                <p className="text-white/40 text-sm">
                                  2:30 PM
                                </p>{" "}
                                {/* Larger text */}
                              </div>
                            </div>
                            <span className="text-red-400 text-sm font-semibold">
                              -₹2,499
                            </span>{" "}
                            {/* Larger text */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat the same width/height increases for the other 3 screens */}
                  {/* Screen 2 - Transactions */}
                  <div className="flex justify-center">
                    <div className="w-56 h-[28rem] rounded-[2.5rem] border-8 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl">
                      {/* Status Bar */}
                      <div className="h-7 bg-gray-800 flex items-center justify-between px-5 pt-1">
                        <span className="text-white text-sm">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-5 h-1.5 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* App Content - Transactions */}
                      <div className="h-[25.5rem] bg-gradient-to-br from-blue-900 to-purple-900 p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <ArrowRight
                              size={20}
                              className="text-white rotate-180"
                            />
                            <span className="text-white font-bold text-lg">
                              Transactions
                            </span>
                          </div>
                          <Filter size={20} className="text-white" />
                        </div>

                        {/* Transaction List */}
                        <div className="space-y-4">
                          {[
                            {
                              name: "Salary Credit",
                              amount: "+₹85,420",
                              icon: CircleDollarSign,
                              color: "text-green-400",
                              bg: "bg-green-400/20",
                            },
                            {
                              name: "Amazon Shopping",
                              amount: "-₹2,499",
                              icon: ShoppingBag,
                              color: "text-blue-400",
                              bg: "bg-blue-400/20",
                            },
                            {
                              name: "Zomato Order",
                              amount: "-₹845",
                              icon: Utensils,
                              color: "text-red-400",
                              bg: "bg-red-400/20",
                            },
                            {
                              name: "Netflix",
                              amount: "-₹649",
                              icon: TrendingUp,
                              color: "text-purple-400",
                              bg: "bg-purple-400/20",
                            },
                          ].map((transaction, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${transaction.bg}`}
                                >
                                  <transaction.icon
                                    size={18}
                                    className={transaction.color}
                                  />
                                </div>
                                <div>
                                  <p className="text-white text-base">
                                    {transaction.name}
                                  </p>
                                  <p className="text-white/40 text-sm">Today</p>
                                </div>
                              </div>
                              <span
                                className={`text-base font-semibold ${transaction.color}`}
                              >
                                {transaction.amount}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Screen 3 - Investments */}
                  <div className="flex justify-center">
                    <div className="w-56 h-[28rem] rounded-[2.5rem] border-8 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl">
                      {/* Status Bar */}
                      <div className="h-7 bg-gray-800 flex items-center justify-between px-5 pt-1">
                        <span className="text-white text-sm">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-5 h-1.5 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* App Content - Investments */}
                      <div className="h-[25.5rem] bg-gradient-to-br from-green-900 to-blue-900 p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <ArrowRight
                              size={20}
                              className="text-white rotate-180"
                            />
                            <span className="text-white font-bold text-lg">
                              Investments
                            </span>
                          </div>
                          <Plus size={20} className="text-white" />
                        </div>

                        {/* Portfolio Value */}
                        <div className="bg-white/10 rounded-xl p-4 mb-5">
                          <p className="text-white/60 text-sm mb-2">
                            Portfolio Value
                          </p>
                          <h3 className="text-white font-bold text-xl mb-2">
                            ₹8,42,150
                          </h3>
                          <p className="text-green-400 text-sm">
                            +12.8% this month
                          </p>
                        </div>

                        {/* Investment List */}
                        <div className="space-y-4">
                          {[
                            {
                              name: "Mutual Funds",
                              value: "₹4,25,000",
                              return: "+8.2%",
                            },
                            {
                              name: "Stocks",
                              value: "₹2,18,450",
                              return: "+15.3%",
                            },
                            {
                              name: "Fixed Deposit",
                              value: "₹1,98,700",
                              return: "+6.5%",
                            },
                          ].map((investment, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between"
                            >
                              <div>
                                <p className="text-white text-base">
                                  {investment.name}
                                </p>
                                <p className="text-white/40 text-sm">
                                  {investment.value}
                                </p>
                              </div>
                              <span className="text-green-400 text-sm font-semibold">
                                {investment.return}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Screen 4 - Analytics */}
                  <div className="flex justify-center">
                    <div className="w-56 h-[28rem] rounded-[2.5rem] border-8 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl">
                      {/* Status Bar */}
                      <div className="h-7 bg-gray-800 flex items-center justify-between px-5 pt-1">
                        <span className="text-white text-sm">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-5 h-1.5 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>

                      {/* App Content - Analytics */}
                      <div className="h-[25.5rem] bg-gradient-to-br from-orange-900 to-red-900 p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <ArrowRight
                              size={20}
                              className="text-white rotate-180"
                            />
                            <span className="text-white font-bold text-lg">
                              Analytics
                            </span>
                          </div>
                          <Calendar size={20} className="text-white" />
                        </div>

                        {/* Spending Chart */}
                        <div className="bg-white/10 rounded-xl p-4 mb-5">
                          <p className="text-white/60 text-sm mb-3">
                            Spending This Month
                          </p>
                          <div className="space-y-3">
                            {[
                              {
                                category: "Food",
                                amount: "₹8,420",
                                percentage: 40,
                                color: "bg-red-400",
                              },
                              {
                                category: "Shopping",
                                amount: "₹6,150",
                                percentage: 30,
                                color: "bg-blue-400",
                              },
                              {
                                category: "Entertainment",
                                amount: "₹3,280",
                                percentage: 15,
                                color: "bg-green-400",
                              },
                              {
                                category: "Bills",
                                amount: "₹2,750",
                                percentage: 15,
                                color: "bg-purple-400",
                              },
                            ].map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-3 h-3 rounded-full ${item.color}`}
                                  ></div>
                                  <span className="text-white text-sm">
                                    {item.category}
                                  </span>
                                </div>
                                <span className="text-white text-sm">
                                  {item.amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* AI Insights */}
                        <div className="bg-white/10 rounded-xl p-4">
                          <p className="text-white/60 text-sm mb-3">
                            AI Insights
                          </p>
                          <p className="text-white text-base">
                            You're spending 25% more on food this month.
                            Consider meal planning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Screen Labels */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-center">
                  <div>
                    <h4 className="font-bold text-xl mb-2">Dashboard</h4>
                    <p
                      style={{ color: "var(--color-text-secondary)" }}
                      className="text-base"
                    >
                      Overview & Balance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Transactions</h4>
                    <p
                      style={{ color: "var(--color-text-secondary)" }}
                      className="text-base"
                    >
                      Track Spending
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Investments</h4>
                    <p
                      style={{ color: "var(--color-text-secondary)" }}
                      className="text-base"
                    >
                      Portfolio Growth
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Analytics</h4>
                    <p
                      style={{ color: "var(--color-text-secondary)" }}
                      className="text-base"
                    >
                      AI Insights
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown
                size={32}
                style={{ color: "var(--color-primary)" }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          id="mission"
          ref={sectionRefs.mission}
          className="py-32 px-6 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-on-scroll">
              <span
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                Our Purpose
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Driven by <span className="text-gradient">Innovation</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 stagger-animation">
              <div className="group card-shine glass-effect p-12 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-icon"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Target size={32} />
                  </div>
                  <h3 className="text-4xl font-black mb-6">Our Mission</h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    To democratize financial intelligence by delivering
                    cutting-edge, accessible tools that empower everyone to
                    manage, grow, and optimize their wealth with confidence and
                    clarity.
                  </p>
                </div>
              </div>

              <div className="group card-shine glass-effect p-12 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating-icon"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Rocket size={32} />
                  </div>
                  <h3 className="text-4xl font-black mb-6">Our Vision</h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    To become India's most trusted personal finance ecosystem —
                    where innovation meets financial wellness, and technology
                    transforms how millions achieve their financial dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          ref={sectionRefs.services}
          className="py-32 px-6 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-on-scroll">
              <span
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                What We Offer
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Powerful <span className="text-gradient">Financial Tools</span>
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Everything you need to master your finances, all in one place
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {[
                {
                  icon: BarChart3,
                  title: "Smart Budgeting",
                  desc: "Track every rupee with intelligent categorization and real-time alerts",
                  color: "var(--color-primary)",
                },
                {
                  icon: TrendingUp,
                  title: "Investment Planning",
                  desc: "SIP, ELSS, EMI planning with AI-powered predictive simulations",
                  color: "var(--color-secondary)",
                },
                {
                  icon: Target,
                  title: "Goal Tracking",
                  desc: "Gamified savings goals with streaks, rewards, and milestones",
                  color: "var(--color-accent)",
                },
                {
                  icon: Brain,
                  title: "AI Insights",
                  desc: "Personalized recommendations based on your spending patterns",
                  color: "var(--color-primary)",
                },
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  desc: "Military-grade encryption for all your financial data",
                  color: "var(--color-secondary)",
                },
                {
                  icon: PieChart,
                  title: "Advanced Analytics",
                  desc: "Premium dashboards with trend analysis and forecasting",
                  color: "var(--color-accent)",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
                >
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 transition-all duration-500 group-hover:opacity-10 group-hover:scale-150"
                    style={{
                      background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, var(--color-primary-light))`,
                      }}
                    >
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section
          id="features"
          ref={sectionRefs.features}
          className="py-32 px-6 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-on-scroll">
              <span
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                Why Choose Us
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Built for <span className="text-gradient">Excellence</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-20 stagger-animation">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Experience blazing-fast performance with real-time updates and instant insights",
                  features: [
                    "Real-time sync",
                    "Instant notifications",
                    "Zero lag interface",
                  ],
                },
                {
                  icon: Brain,
                  title: "AI-Powered Intelligence",
                  desc: "Advanced machine learning algorithms that learn your financial behavior",
                  features: [
                    "Smart predictions",
                    "Personalized advice",
                    "Automated insights",
                  ],
                },
                {
                  icon: ShieldCheck,
                  title: "Fort Knox Security",
                  desc: "Bank-grade encryption and compliance with all financial regulations",
                  features: [
                    "256-bit encryption",
                    "RBI compliant",
                    "Biometric auth",
                  ],
                },
                {
                  icon: Repeat,
                  title: "Seamless Integration",
                  desc: "Connect all your accounts, cards, and wallets in one place",
                  features: [
                    "Multi-bank support",
                    "UPI integration",
                    "Automatic sync",
                  ],
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group card-shine glass-effect p-10 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <feature.icon size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-3">
                        {feature.title}
                      </h3>
                      <p
                        className="text-lg mb-6"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {feature.desc}
                      </p>
                      <div className="space-y-2">
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2
                              size={18}
                              style={{ color: "var(--color-secondary)" }}
                              className="flex-shrink-0"
                            />
                            <span
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advanced Features Grid */}
            <div className="glass-effect p-12 rounded-3xl relative overflow-hidden animate-on-scroll">
              <div className="absolute top-0 left-0 w-full h-1 shimmer" />
              <h3 className="text-3xl font-black mb-10 text-center">
                Advanced Capabilities
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "AI-powered dashboards",
                  "Predictive simulations",
                  "Habit tracking & streaks",
                  "OTT platform rewards",
                  "Goal-based planning",
                  "Corporate analytics",
                  "Tax optimization tools",
                  "Multi-currency support",
                  "Export & reporting",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    />
                    <span
                      style={{ color: "var(--color-text-secondary)" }}
                      className="group-hover:text-white transition-colors"
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          ref={sectionRefs.pricing}
          className="py-32 px-6 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-on-scroll">
              <span
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                Simple Pricing
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Start free and upgrade as you grow. No hidden fees, no
                surprises.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-animation">
              {/* Free Plan */}
              <div className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
                <div className="text-center mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Wallet size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                  <div className="text-4xl font-black text-gradient mb-2">
                    ₹0
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Forever free
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Track expenses & income",
                    "Basic financial insights",
                    "Goal tracking & reminders",
                    "3 connected bank accounts",
                    "Community support",
                    "Basic reporting",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--color-secondary)" }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span
                        style={{ color: "var(--color-text-secondary)" }}
                        className="text-sm"
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold transition-all duration-300 glass-effect hover:bg-white/10 border border-gray-600">
                  Get Started Free
                </button>
              </div>

              {/* Premium Plan - Featured */}
              <div className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll gradient-border scale-105">
                <div
                  className="absolute top-0 left-0 right-0 text-center py-3 text-sm font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                >
                  <Sparkles size={14} className="inline mr-2" />
                  MOST POPULAR
                  <Sparkles size={14} className="inline ml-2" />
                </div>

                <div className="text-center mb-8 mt-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Award size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                  <div className="text-4xl font-black text-gradient mb-2">
                    ₹299
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    per month
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Everything in Free plan",
                    "Advanced analytics & insights",
                    "AI-driven recommendations",
                    "Exclusive reward offers",
                    "Priority customer support",
                    "Unlimited bank accounts",
                    "Advanced goal planning",
                    "Tax optimization features",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--color-secondary)" }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span
                        style={{ color: "var(--color-text-secondary)" }}
                        className="text-sm"
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <span className="relative z-10">Start 14-Day Free Trial</span>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="group card-shine glass-effect p-8 rounded-3xl hover-lift relative overflow-hidden animate-on-scroll">
                <div className="text-center mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Users2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise Plan</h3>
                  <div className="text-4xl font-black text-gradient mb-2">
                    Custom
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Tailored for your business
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Everything in Premium plan",
                    "Custom dashboards & reporting",
                    "Team analytics & collaboration",
                    "Data-driven advisory tools",
                    "Dedicated account manager",
                    "API access & integrations",
                    "White-label solutions",
                    "SLA guarantee",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        style={{ color: "var(--color-secondary)" }}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span
                        style={{ color: "var(--color-text-secondary)" }}
                        className="text-sm"
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold transition-all duration-300 glass-effect hover:bg-white/10 border border-gray-600">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          ref={sectionRefs.testimonials}
          className="py-32 px-6 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-on-scroll">
              <span
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                Testimonials
              </span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Loved by <span className="text-gradient">Thousands</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 stagger-animation">
              {[
                {
                  name: "Ananya R.",
                  role: "Software Engineer",
                  text: "Jeb Works completely transformed how I handle my finances. The AI insights are incredibly accurate!",
                  rating: 5,
                  avatar: "A",
                },
                {
                  name: "Rahul M.",
                  role: "Entrepreneur",
                  text: "The investment planning tools helped me optimize my portfolio. Best finance app I've used.",
                  rating: 5,
                  avatar: "R",
                },
                {
                  name: "Priya S.",
                  role: "Product Manager",
                  text: "Tracking goals has never been this engaging. The gamification keeps me motivated!",
                  rating: 5,
                  avatar: "P",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="group card-shine glass-effect p-8 rounded-3xl hover-lift animate-on-scroll"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="var(--color-primary)"
                        style={{ color: "var(--color-primary)" }}
                        className="transition-transform group-hover:scale-110"
                      />
                    ))}
                  </div>
                  <p
                    className="text-lg mb-6 leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold transition-transform group-hover:scale-110 group-hover:rotate-12"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Contact Section */}
        <section
          id="contact"
          ref={sectionRefs.contact}
          className="py-20 px-6 relative"
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
              <div className="glass-effect p-8 rounded-3xl">
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
              <div className="space-y-6">
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

        {/* Footer */}
        <footer
          className="py-16 px-6 border-t"
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

              {["Product", "Company", "Legal"].map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-bold mb-6 text-lg">{category}</h4>
                  <div
                    className="space-y-3"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {["Features", "Pricing", "Security", "Roadmap"].map(
                      (item, i) => (
                        <div
                          key={i}
                          className="hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200"
                        >
                          {item}
                        </div>
                      )
                    )}
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
                © 2024 Jeb Works. All rights reserved. Built with ❤️ in India.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;

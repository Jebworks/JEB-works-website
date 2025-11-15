import React from 'react';
import { 
  IndianRupee, Bell, TrendingUp, Receipt, ShoppingBag, 
  ArrowRight, Filter, CircleDollarSign, Utensils, Plus, 
  Calendar 
} from 'lucide-react';

const MobileScreens = ({ sectionRef }) => { // Added sectionRef

  // Data for the four mobile screens
  const screens = [
    {
      title: "Dashboard",
      description: "Overview & Balance",
      content: (
        <div className="h-[25.5rem] bg-gradient-to-br from-purple-900 to-blue-900 p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <IndianRupee size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">Jeb Works</span>
            </div>
            <Bell size={20} className="text-white" />
          </div>
          {/* Balance Card */}
          <div className="bg-white/10 rounded-2xl p-4 mb-5">
            <p className="text-white/60 text-sm mb-2">Total Balance</p>
            <h3 className="text-white font-bold text-xl mb-3">₹1,45,670</h3>
            <div className="flex gap-3">
              <div className="flex-1 bg-white/20 rounded-lg py-2 text-center">
                <span className="text-white text-sm">Add</span>
              </div>
              <div className="flex-1 bg-white/20 rounded-lg py-2 text-center">
                <span className="text-white text-sm">Send</span>
              </div>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-white/5 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-white/60 text-sm">Income</span>
              </div>
              <p className="text-white font-semibold text-base">₹85,420</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Receipt size={16} className="text-red-400" />
                <span className="text-white/60 text-sm">Expenses</span>
              </div>
              <p className="text-white font-semibold text-base">₹45,230</p>
            </div>
          </div>
          {/* Recent Transaction */}
          <div className="bg-white/5 rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-sm font-medium">Recent</span>
              <span className="text-white/40 text-sm">View All</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400/20 rounded flex items-center justify-center">
                  <ShoppingBag size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm">Amazon</p>
                  <p className="text-white/40 text-sm">2:30 PM</p>
                </div>
              </div>
              <span className="text-red-400 text-sm font-semibold">-₹2,499</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Transactions",
      description: "Track Spending",
      content: (
        <div className="h-[25.5rem] bg-gradient-to-br from-blue-900 to-purple-900 p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ArrowRight size={20} className="text-white rotate-180" />
              <span className="text-white font-bold text-lg">Transactions</span>
            </div>
            <Filter size={20} className="text-white" />
          </div>
          {/* Transaction List */}
          <div className="space-y-4">
            {[
              { name: "Salary Credit", amount: "+₹85,420", icon: CircleDollarSign, color: "text-green-400", bg: "bg-green-400/20" },
              { name: "Amazon Shopping", amount: "-₹2,499", icon: ShoppingBag, color: "text-blue-400", bg: "bg-blue-400/20" },
              { name: "Zomato Order", amount: "-₹845", icon: Utensils, color: "text-red-400", bg: "bg-red-400/20" },
              { name: "Netflix", amount: "-₹649", icon: TrendingUp, color: "text-purple-400", bg: "bg-purple-400/20" },
            ].map((transaction, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${transaction.bg}`}>
                    <transaction.icon size={18} className={transaction.color} />
                  </div>
                  <div>
                    <p className="text-white text-base">{transaction.name}</p>
                    <p className="text-white/40 text-sm">Today</p>
                  </div>
                </div>
                <span className={`text-base font-semibold ${transaction.color}`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Investments",
      description: "Portfolio Growth",
      content: (
        <div className="h-[25.5rem] bg-gradient-to-br from-green-900 to-blue-900 p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ArrowRight size={20} className="text-white rotate-180" />
              <span className="text-white font-bold text-lg">Investments</span>
            </div>
            <Plus size={20} className="text-white" />
          </div>
          {/* Portfolio Value */}
          <div className="bg-white/10 rounded-xl p-4 mb-5">
            <p className="text-white/60 text-sm mb-2">Portfolio Value</p>
            <h3 className="text-white font-bold text-xl mb-2">₹8,42,150</h3>
            <p className="text-green-400 text-sm">+12.8% this month</p>
          </div>
          {/* Investment List */}
          <div className="space-y-4">
            {[
              { name: "Mutual Funds", value: "₹4,25,000", return: "+8.2%" },
              { name: "Stocks", value: "₹2,18,450", return: "+15.3%" },
              { name: "Fixed Deposit", value: "₹1,98,700", return: "+6.5%" },
            ].map((investment, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="text-white text-base">{investment.name}</p>
                  <p className="text-white/40 text-sm">{investment.value}</p>
                </div>
                <span className="text-green-400 text-sm font-semibold">{investment.return}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Analytics",
      description: "AI Insights",
      content: (
        <div className="h-[25.5rem] bg-gradient-to-br from-orange-900 to-red-900 p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ArrowRight size={20} className="text-white rotate-180" />
              <span className="text-white font-bold text-lg">Analytics</span>
            </div>
            <Calendar size={20} className="text-white" />
          </div>
          {/* Spending Chart */}
          <div className="bg-white/10 rounded-xl p-4 mb-5">
            <p className="text-white/60 text-sm mb-3">Spending This Month</p>
            <div className="space-y-3">
              {[
                { category: "Food", amount: "₹8,420", color: "bg-red-400" },
                { category: "Shopping", amount: "₹6,150", color: "bg-blue-400" },
                { category: "Entertainment", amount: "₹3,280", color: "bg-green-400" },
                { category: "Bills", amount: "₹2,750", color: "bg-purple-400" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-white text-sm">{item.category}</span>
                  </div>
                  <span className="text-white text-sm">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
          {/* AI Insights */}
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-sm mb-3">AI Insights</p>
            <p className="text-white text-base">
              You're spending 25% more on food this month. Consider meal planning.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      id="mobile"
      ref={sectionRef}
      className="py-32 px-6 relative bg-gray-50" // Changed background to light gray
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Same as FeaturesSection */}
        <div className="text-center mb-20 animate-on-scroll">
          <span
            className="text-sm font-bold tracking-wider uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Mobile Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-slate-900"> {/* Changed text to dark */}
            Beautifully <span className="text-gradient">Designed</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto text-slate-600" // Changed text to dark
          >
            Intuitive, powerful, and seamless - all in your pocket
          </p>
        </div>

        {/* Mobile Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {screens.map((screen, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6 animate-on-scroll">
              {/* Phone Mockup */}
              <div className="flex justify-center w-full">
                <div className="w-full max-w-xs mx-auto h-[28rem] rounded-[2.5rem] border-8 border-gray-800 bg-gray-900 overflow-hidden shadow-2xl hover-lift transition-transform duration-300">
                  {/* Status Bar */}
                  <div className="h-7 bg-gray-800 flex items-center justify-between px-5 pt-1">
                    <span className="text-white text-sm">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-1.5 bg-gray-600 rounded-full"></div>
                      <div className="w-5 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  {/* App Content */}
                  {screen.content}
                </div>
              </div>
              
              {/* Label for this screen */}
              <div className="text-center">
                <h4 className="font-bold text-lg md:text-xl mb-1 text-slate-900">{screen.title}</h4> {/* Changed text to dark */}
                <p className="text-sm md:text-base text-slate-600"> {/* Changed text to dark */}
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileScreens;
import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated Background with Particles */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border-h), var(--border-s), var(--border-l)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border-h), var(--border-s), var(--border-l)) 1px, transparent 1px)",
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
              background: `hsl(${Math.random() > 0.5 ? '174' : '220'}, ${Math.random() > 0.5 ? '77%' : '40%'}, 50%)`,
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
        {/* Primary Teal Orb */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(174, 77%, 50%) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.3,
            animationDelay: "0s",
          }}
        />
        
        {/* Secondary Navy Orb */}
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(220, 40%, 20%) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.25,
            animationDelay: "2s",
          }}
        />
        
        {/* Accent Teal Variant Orb */}
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(174, 70%, 45%) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.2,
            animationDelay: "4s",
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;

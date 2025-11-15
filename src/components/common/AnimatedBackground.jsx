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
    </>
  );
};

export default AnimatedBackground;
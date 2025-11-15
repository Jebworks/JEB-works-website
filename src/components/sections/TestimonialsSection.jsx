import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ sectionRef }) => {
  const testimonials = [
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
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-10 px-6 relative"
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
          {testimonials.map((testimonial, idx) => (
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
  );
};

export default TestimonialsSection;
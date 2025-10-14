"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function ClientTestimonialsSection() {
  const brand = "#0094D9";

  const testimonials = [
    {
      name: "Michael Chen",
      role: "General Contractor",
      company: "Chen Construction Ltd.",
      image: "/professional-contractor-headshot.png",
      rating: 5,
      feedback:
        "PPS Group has been our go-to for post-construction cleaning for over 3 years. They consistently deliver spotless results and never miss a deadline. Highly recommended for any construction project.",
    },
    {
      name: "Sarah Thompson",
      role: "Property Developer",
      company: "Thompson Urban Homes",
      image: "/developer-headshot.png",
      rating: 5,
      feedback:
        "Outstanding service! Their attention to detail and professionalism is unmatched. Our clients are always impressed with how clean the spaces are after PPS finishes.",
    },
    {
      name: "David Patel",
      role: "Project Manager",
      company: "Skyline Builders Inc.",
      image: "/project-manager-headshot.png",
      rating: 5,
      feedback:
        "We rely on PPS Group for every project handover. They’re reliable, thorough, and always deliver beyond expectations. A top-tier team!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Auto change every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // ✅ Manual change resets timer
  const handleManualChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-[#E6F4FB] transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: brand }}
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#1C3B45]/80 max-w-3xl mx-auto leading-relaxed">
            Trusted by contractors, developers, and property owners across the GTA
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-[#0094D9]/20 shadow-sm hover:shadow-lg transition-all duration-700 p-8 md:p-12">
            <div className="space-y-6 fade-in">
              {/* Profile Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full border border-[#0094D9]/30"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1C3B45]">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-[#0094D9]/80">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-sm text-[#0094D9]/60">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-lg leading-relaxed italic text-[#1C3B45]/90 transition-all duration-500">
                “{testimonials[activeIndex].feedback}”
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#0094D9]"
                    : "w-2 bg-gray-400/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

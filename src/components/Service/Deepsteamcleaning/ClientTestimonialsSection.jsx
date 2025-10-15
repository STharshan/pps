"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ClientTestimonialsSection() {
  const brand = "#0094D9";

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      company: "Golden Dragon Restaurant",
      image: "/professional-asian-man-restaurant-owner.jpg",
      rating: 5,
      feedback:
        "The steam cleaning transformed our kitchen! No harsh chemical smells, and everything looks brand new. Our health inspector was impressed with the level of cleanliness.",
    },
    {
      name: "Sarah Thompson",
      role: "Hotel Operations Manager",
      company: "The Pearl Suites",
      image: "/hotel-manager-professional-female.jpg",
      rating: 5,
      feedback:
        "Incredible results! The team handled our guest areas with precision and care. Steam cleaning gave our hotel that fresh, chemical-free feel that our guests appreciate.",
    },
    {
      name: "David Patel",
      role: "Factory Supervisor",
      company: "Skyline Foods Inc.",
      image: "/industrial-cleaning-supervisor.jpg",
      rating: 5,
      feedback:
        "We rely on PPS Group for deep cleaning our production floors. Their steam cleaning process ensures hygiene standards are always met without downtime.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0094D9" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Trusted by businesses across the GTA for chemical-free, deep
            cleaning excellence.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-[#0094D9]/20 shadow-sm hover:shadow-lg transition-all duration-300 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/tab.png"
                  className="w-24 h-24 -mt-2 object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#0094D9] text-[#0094D9]"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-lg md:text-xl mb-6 italic text-[#1C3B45]/80 leading-relaxed">
                  “{activeTestimonial.feedback}”
                </p>

                {/* Name */}
                <div>
                  <div
                    className="font-semibold text-lg"
                    style={{ color: "#1C3B45" }}
                  >
                    {activeTestimonial.name}
                  </div>
                  <div className="text-sm text-[#0094D9]/80">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#0094D9]/30 text-[#0094D9] hover:bg-[#0094D9]/10 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                      ? "w-8 bg-[#0094D9]"
                      : "w-2 bg-gray-400/30"
                    }`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#0094D9]/30 text-[#0094D9] hover:bg-[#0094D9]/10 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

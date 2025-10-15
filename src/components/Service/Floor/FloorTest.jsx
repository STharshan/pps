"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const brandPrimary = "#0094D9";
  const brandText = "#1C3B45";

  const testimonials = [
  {
    "name": "Michael Chen",
    "role": "Facilities Manager, Tech Campus Toronto",
    "image": "/placeholder.svg?height=100&width=100",
    "quote": "PPS transformed our office floors from dull and worn to absolutely stunning. The shine is incredible and has lasted months. Their team was professional, efficient, and caused zero disruption to our operations.",
    "rating": 5
  },
  {
    "name": "David Martinez",
    "role": "School Administrator, Oakville School District",
    "image": "/placeholder.svg?height=100&width=100",
    "quote": "Our school hallways see thousands of students daily. PPS's floor restoration not only made them look brand new but also created a safer, more hygienic environment. The quick-dry finish meant minimal downtime during summer break.",
    "rating": 5
  },
  {
    "name": "Sarah Thompson",
    "role": "Property Manager, Retail Plaza Management",
    "image": "/placeholder.svg?height=100&width=100",
    "quote": "We manage multiple retail locations and PPS has become our go-to for floor restoration. Their strip and wax service consistently delivers showroom-quality results. Highly recommend for any commercial property.",
    "rating": 5
  }
]


  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[current];

  return (
    <section className="py-1 px-6 lg:px-12 bg-[#F9FBFD]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]"

          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by restaurants across the GTA
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm p-8 md:p-12 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
           <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0094D9]/10">
              <img
                src="/tab.png"
                className="w-18 h-16 -mt-1 object-cover"
              />
            </div>
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill={brandPrimary}
                      stroke={brandPrimary}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  “{t.quote}”
                </p>

                {/* Name */}
                <div>
                  <p
                    className="font-semibold text-lg"
                    style={{ color: brandText }}
                  >
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="size-9 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="h-4 w-4 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    current === i
                      ? "w-8 h-2 bg-[#0094D9]"
                      : "w-2 h-2 bg-gray-400/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="size-9 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-all"
            >
              <ChevronRight className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

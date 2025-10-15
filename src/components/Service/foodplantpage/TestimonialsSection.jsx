"use client";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      title: "Quality Assurance Lead",
      company: "Artisan Bakery Group",
      img: "/professional-woman-quality-assurance.jpg",
      quote:
        "Switching to PPS Group was the best decision for our facility. Their eco-friendly approach and certified technicians give us peace of mind that our bakery meets all safety regulations.",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      title: "Operations Manager",
      company: "Premium Dairy Co.",
      img: "/operations-manager-woman.png",
      quote:
        "PPS Group has been instrumental in maintaining our HACCP compliance. Their attention to detail and flexible scheduling means we never have to compromise on production time or safety standards.",
    },
    {
      id: 3,
      name: "James Chen",
      title: "Plant Director",
      company: "GTA Food Processing",
      img: "/professional-man-plant-director.jpg",
      quote:
        "The team's expertise in both wet and dry environments is unmatched. They understand the unique challenges of food manufacturing and deliver consistent, audit-ready results every time.",
    },
  ];

  const [active, setActive] = useState(testimonials[0]);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-white dark:bg-[#0C1416] relative overflow-hidden px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* ---------- Header ---------- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3B45] dark:text-white mb-4">
            Trusted by <span className="text-[#0094D9]">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            See what our clients say about our food plant sanitation services.
          </p>
        </div>

        {/* ---------- Main Testimonial Card ---------- */}
        <div className="relative bg-white dark:bg-[#111A1D] border border-[#0094D9]/40 rounded-2xl shadow-lg p-10 md:p-14 text-center max-w-4xl mx-auto transition-all duration-500">
          {/* Quote Icon */}
          <Quote className="absolute top-6 left-6 w-10 h-10 text-[#0094D9]/20" />

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-[#0094D9] text-[#0094D9]"
              />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-lg md:text-xl text-[#40565C] dark:text-gray-100 leading-relaxed mb-10">
            “{active.quote}”
          </p>

          {/* Author */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0094D9]/10">
              <img
                src="/tab.png"
                alt={active.name}
                className="w-18 h-16 -mt-1 object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-[#1C3B45] dark:text-white text-lg">
                {active.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {active.title}
              </div>
              <div className="text-sm text-[#0094D9]">{active.company}</div>
            </div>
          </div>
        </div>

        {/* ---------- Slider Dots ---------- */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              aria-label={`View testimonial ${t.id}`}
              className={`h-2 rounded-full transition-all duration-300 ${active.id === t.id
                  ? "w-8 bg-[#0094D9]"
                  : "w-2 bg-[#0094D9]/40 hover:bg-[#0094D9]/70"
                }`}
            ></button>
          ))}
        </div>

        {/* ---------- Bottom Cards ---------- */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              onClick={() => setActive(t)}
              className={`rounded-xl border p-6 bg-white dark:bg-[#111A1D] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${active.id === t.id
                  ? "border-2 border-[#0094D9] scale-105"
                  : "border-gray-200 dark:border-gray-700"
                }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#0094D9] text-[#0094D9]"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#0094D9]/10">
                  <img
                    src="/tab.png"
                    alt={active.name}
                    className="w-10 h-10 -mt-1 object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1C3B45] dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

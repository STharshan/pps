"use client";
import React, { useState } from "react";
import {
  CircleCheck,
  Users,
  Sparkles,
  Clock,
  Shield,
  MapPin,
} from "lucide-react";

export default function WhyChooseSection() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
  };

  const cards = [
    {
      title: "Comprehensive Post-Construction Cleaning",
      desc: "From drywall dust to paint marks, we handle all aspects of post-build cleanup.",
      img: "/construction-site-dust-removal-professional-cleani.jpg",
      icon: <CircleCheck className="h-16 w-16 text-[#0094D9]" />,
    },
    {
      title: "Trained & Equipped Teams",
      desc: "Our professionals use industrial-grade vacuums, scrubbers, and polishers for deep and efficient cleaning.",
      img: "/professional-cleaning-team-with-industrial-equipme.jpg",
      icon: <Users className="h-16 w-16 text-[#0094D9]" />,
    },
    {
      title: "Attention to Detail",
      desc: "Every surface, fixture, and corner is meticulously cleaned, ensuring no trace of construction debris remains.",
      img: "/detailed-cleaning-of-construction-site-spotless-fi.jpg",
      icon: <Sparkles className="h-16 w-16 text-[#0094D9]" />,
    },
    {
      title: "Flexible Scheduling",
      desc: "Available for same-day, after-hours, or phased cleanups based on your project timeline.",
      img: "/flexible-scheduling-calendar-construction-cleaning.jpg",
      icon: <Clock className="h-16 w-16 text-[#0094D9]" />,
    },
    {
      title: "Health & Safety Compliant",
      desc: "We follow all Ontario Health and Safety standards on every job site.",
      img: "/safety-compliance-construction-site-cleaning-stand.jpg",
      icon: <Shield className="h-16 w-16 text-[#0094D9]" />,
    },
    {
      title: "Trusted Across the GTA",
      desc: "Serving contractors, property developers, real estate agents, and homeowners alike.",
      img: "/greater-toronto-area-map-service-coverage.jpg",
      icon: <MapPin className="h-16 w-16 text-[#0094D9]" />,
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section id="why-choose" className="py-20 bg-white px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl text-[#0094D9] md:text-5xl font-bold mb-4"
          >
            Why Choose PPS Group Inc.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional post-construction cleaning that brings the final polish
            to your project
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-200 shadow-sm relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl"
            >
              {/* Hover Image */}
              <div
                className={`transition-all duration-700 overflow-hidden ${
                  hovered === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  {/* Icon Centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-8">
                <h3
                  className="text-xl font-semibold mb-3 transition-colors"
                  style={{
                    color:
                      hovered === index ? brand.primary : brand.text,
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                  hovered === index
                    ? "bg-gradient-to-r from-[#0094D9] to-sky-400 opacity-100"
                    : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
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

  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: brand.text }}
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
              className="bg-white text-gray-800 flex flex-col rounded-xl border border-gray-200 shadow-sm group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Image + Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 brightness-90"
                />
                <div className="absolute inset-0 bg-[#0094D9]/10 transition-opacity duration-500 group-hover:opacity-20"></div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-3 transition-colors group-hover:text-[#0094D9]"
                  style={{ color: brand.text }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { Sparkles, Shield, Leaf, Clock, Award, Zap } from "lucide-react";

export default function PPSAdvantageSection() {
  const brand = "#0094D9";

  const cards = [
    {
      title: "Revive Natural Shine",
      desc: "Restore your floor's original beauty and color with our professional restoration process.",
      extra:
        "Our multi-coat wax application brings back the deep, lustrous shine that makes floors look brand new.",
      icon: <Sparkles className="h-6 w-6" />,
      image: "/glossy-shiny-floor-surface-reflection.jpg",
    },
    {
      title: "Extend Floor Lifespan",
      desc: "Prevent costly replacements by protecting your floors from wear, scratches, and damage.",
      extra:
        "With our specialized sealing process, you can preserve durability and cut long-term maintenance costs.",
      icon: <Shield className="h-6 w-6" />,
      image: "/protected-durable-floor-coating-layer.jpg",
    },
    {
      title: "Eco-Safe Products",
      desc: "Low-odor, quick-dry waxes that are safe for your space and the environment.",
      extra:
        "Our eco-friendly cleaning solutions meet strict environmental standards without sacrificing quality.",
      icon: <Leaf className="h-6 w-6" />,
      image: "/eco-friendly-green-cleaning-products.jpg",
    },
    {
      title: "Minimal Disruption",
      desc: "Quick-dry finishes and flexible scheduling to keep your business running smoothly.",
      extra:
        "Our efficient process and fast-drying products minimize downtime for your home or business.",
      icon: <Clock className="h-6 w-6" />,
      image: "/fast-efficient-floor-cleaning-service.jpg",
    },
    {
      title: "Hygienic & Safe",
      desc: "Create slip-resistant surfaces that are both stunning and safe for daily use.",
      extra:
        "Our anti-slip coatings enhance safety while maintaining a sleek, polished finish.",
      icon: <Award className="h-6 w-6" />,
      image: "/clean-hygienic-safe-floor-surface.jpg",
    },
    {
      title: "Moisture Protection",
      desc: "Seal and protect against moisture, scuffs, and daily wear for lasting beauty.",
      extra:
        "Our water-resistant coatings defend against spills, humidity, and long-term floor damage.",
      icon: <Zap className="h-6 w-6" />,
      image: "/water-resistant-protected-floor-coating.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCard = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1C3B45]">
            The PPS Advantage
          </h2>
          <p className="text-xl text-[#1C3B45]/80">
            We go beyond surface cleaning to deliver flawless results with
            minimal disruption to your home or business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`group relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-500 cursor-pointer ${
                  isActive ? "border-[#0094D9] shadow-md" : "hover:shadow-md"
                }`}
              >
                {/* Icon + Text */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="p-2.5 rounded-md"
                      style={{ backgroundColor: "#E6F4FB", color: brand }}
                    >
                      {card.icon}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Click to expand</p>
                  </div>

                  <h3 className="text-base font-bold mb-1 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">{card.desc}</p>
                </div>

                {/* Hover Image — takes space only when hovered */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-56 px-6 pb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-48 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                  />
                </div>

                {/* Expanded Section */}
                <div
                  className={`transition-all duration-700 overflow-hidden px-6 pb-6 ${
                    isActive ? "max-h-32 opacity-100 border-t pt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-snug">{card.extra}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

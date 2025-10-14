"use client";
import React from "react";
import {
  Droplets,
  Shield,
  Sparkles,
  Leaf,
  DollarSign,
  Zap,
} from "lucide-react";

export default function WhyChooseSteamCleaningSection() {
  const brand = "#0094D9";

  const cards = [
    {
      title: "Chemical-Free & Food-Safe",
      description:
        "Safe for kitchens, catering environments, and sensitive equipment.",
      image: "/food-safe-steam-cleaning-in-commercial-kitchen.jpg",
      icon: <Droplets className="h-16 w-16" stroke={brand} />,
    },
    {
      title: "Kills Germs Naturally",
      description:
        "Steam penetrates deep into pores to eliminate bacteria, viruses, and allergens.",
      image: "/microscopic-view-of-steam-killing-bacteria-and-ger.jpg",
      icon: <Shield className="h-16 w-16" stroke={brand} />,
    },
    {
      title: "Restores Surfaces",
      description:
        "Lifts tough grease and grime to restore brightness and hygiene.",
      image: "/before-and-after-steam-cleaning-showing-restored-s.jpg",
      icon: <Sparkles className="h-16 w-16" stroke={brand} />,
    },
    {
      title: "Eco-Friendly",
      description:
        "No harsh chemicals, minimal water usage, and completely biodegradable.",
      image: "/eco-friendly-green-steam-cleaning-with-nature-back.jpg",
      icon: <Leaf className="h-16 w-16" stroke={brand} />,
    },
    {
      title: "Cost-Effective",
      description:
        "Refresh and sanitise equipment instead of replacing it.",
      image: "/cost-savings-from-equipment-restoration-vs-replace.jpg",
      icon: <DollarSign className="h-16 w-16" stroke={brand} />,
    },
    {
      title: "Fast & Efficient",
      description:
        "Quick drying time means minimal downtime for your business.",
      image: "/fast-efficient-steam-cleaning-process-in-commercia.jpg",
      icon: <Zap className="h-16 w-16" stroke={brand} />,
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-[#E6F4FB]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1C3B45" }}
          >
            Why Choose Steam Cleaning?
          </h2>
          <p className="text-xl text-[#1C3B45]/80 max-w-3xl mx-auto">
            Experience the power of chemical-free cleaning that's safe,
            effective, and environmentally responsible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-xl border border-[#0094D9]/20 py-6 shadow-sm group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image + Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* 🔹 Image fades in only on hover */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />

                {/* 🔹 Gradient + Icon (fades out when hovered) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/20 to-[#0094D9]/10 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:opacity-0">
                  <div className="text-[#0094D9] transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2 transition-colors group-hover:text-[#0094D9]"
                  style={{ color: "#1C3B45" }}
                >
                  {card.title}
                </h3>
                <p className="text-[#1C3B45]/70">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import {
  ChefHat,
  Droplets,
  Wind,
  Wrench,
  Sofa,
  ChevronDown,
} from "lucide-react";

export default function IdealAreasMaterialsSection() {
  const brand = "#0094D9";

  const cards = [
    {
      title: "Commercial Kitchens & Food Production",
      subtitle: "Deep sanitization for food preparation areas",
      description:
        "Our steam cleaning service is perfect for commercial kitchens, food production facilities, and catering environments. We eliminate grease, bacteria, and food residue from all surfaces, ensuring complete food safety compliance without any chemical residues.",
      icon: <ChefHat className="h-6 w-6" />,
    },
    {
      title: "Washrooms & Tiled Surfaces",
      subtitle: "Hygienic cleaning for high-traffic areas",
      description:
        "Steam cleaning is ideal for washrooms, shower areas, and tiled surfaces. The high-temperature steam kills bacteria and mould while removing soap scum, limescale, and stains, leaving surfaces sparkling clean and sanitized.",
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      title: "Ovens, Grills & Extractor Fans",
      subtitle: "Restore equipment to like-new condition",
      description:
        "Heavy-duty equipment like ovens, grills, and extractor fans accumulate stubborn grease and carbon buildup. Our steam cleaning penetrates deep to dissolve these deposits, restoring equipment efficiency and extending its lifespan.",
      icon: <Wind className="h-6 w-6" />,
    },
    {
      title: "Equipment, Machinery & Countertops",
      subtitle: "Safe cleaning for sensitive equipment",
      description:
        "Steam cleaning is gentle yet effective on sensitive equipment and machinery. We can safely clean countertops, food processing equipment, and industrial machinery without the risk of chemical damage or corrosion.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Upholstery, Carpets & Flooring",
      subtitle: "Deep clean soft furnishings and floors",
      description:
        "Our steam cleaning service extends to upholstery, carpets, and various flooring types. We remove deep-seated dirt, allergens, and odours while sanitizing fabrics and surfaces, leaving them fresh and hygienic.",
      icon: <Sofa className="h-6 w-6" />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0094D9" }}
          >
            Ideal for These Areas &amp; Materials
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our steam cleaning service is versatile and effective across a wide
            range of applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white text-[#1C3B45] flex flex-col rounded-xl border border-[#0094D9]/20 py-6 shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <div className="p-6">
                  {/* Icon + Chevron */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`rounded-full p-3 transition-colors ${
                        isOpen
                          ? "bg-[#0094D9] text-white"
                          : "bg-[#0094D9]/10 text-[#0094D9]"
                      }`}
                    >
                      {card.icon}
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 text-[#1C3B45]/50 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors ${
                      isOpen ? "text-[#0094D9]" : "text-[#1C3B45]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p className="text-[#1C3B45]/70 text-sm mb-4">
                    {card.subtitle}
                  </p>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-[#0094D9]/10">
                      <p className="text-sm text-[#1C3B45]/80 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

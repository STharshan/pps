"use client";
import React from "react";
import {
  Shield,
  Users,
  Award,
  Leaf,
  Clock,
  MapPin,
} from "lucide-react";

export default function WhyChooseSection() {
  const cards = [
    {
      id: 1,
      title: "HACCP-Compliant Cleaning",
      desc: "All sanitation procedures follow strict food safety and hygiene regulations.",
      icon: <Shield className="w-6 h-6" />,
      image: "/haccp-compliance-certification-and-food-safety-che.jpg",
    },
    {
      id: 2,
      title: "Specialists in Wet & Dry Plant Environments",
      desc: "Adaptable cleaning solutions for every type of food processing facility.",
      icon: <Users className="w-6 h-6" />,
      image: "/industrial-food-plant-cleaning-team-in-protective-.jpg",
    },
    {
      id: 3,
      title: "Trained & Certified Teams",
      desc: "Every PPS technician is trained in HACCP, WHMIS, and CFIA-aligned sanitation practices.",
      icon: <Award className="w-6 h-6" />,
      image: "/professional-training-certification-for-food-safet.jpg",
    },
    {
      id: 4,
      title: "Eco-Friendly Products",
      desc: "We only use non-toxic, food-grade cleaning agents that protect your staff and your production line.",
      icon: <Leaf className="w-6 h-6" />,
      image: "/eco-friendly-green-cleaning-products-for-food-indu.jpg",
    },
    {
      id: 5,
      title: "Flexible Scheduling",
      desc: "Cleaning available during off-hours, overnight, or weekends to minimize production downtime.",
      icon: <Clock className="w-6 h-6" />,
      image: "/24-7-clock-showing-flexible-scheduling-options.jpg",
    },
    {
      id: 6,
      title: "Trusted Across the GTA",
      desc: "Proudly serving some of Ontario's leading food manufacturers and processors.",
      icon: <MapPin className="w-6 h-6" />,
      image: "/greater-toronto-area-map-with-service-locations.jpg",
    },
  ];

  return (
    <section id="why-choose" className="py-10 bg-white px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ===== Header ===== */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Why Choose <span className="text-[#0094D9]">PPS Group</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver comprehensive cleaning for both wet and dry environments,
            ensuring every surface meets the highest hygiene and HACCP / CFIA standards.
          </p>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group border border-gray-200 bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden"
            >
              {/* Background image overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/80"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col gap-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 
                             bg-[#0094D9]/10 text-[#0094D9] 
                             group-hover:bg-[#0094D9] group-hover:text-white 
                             group-hover:scale-110 transition-all duration-300"
                >
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#0094D9] transition-colors">
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

"use client";
import React from "react";
import {
  Shield,
  Sparkles,
  Users,
  Clock,
  Leaf,
  MapPin,
} from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      title: "Health Department–Compliant Cleaning",
      description:
        "We follow all sanitation guidelines to meet and maintain inspection-ready standards.",
      icon: <Shield className="h-8 w-8 text-[#0094D9]" />,
      image: "/health-department-inspection-checklist-and-complia.jpg",
    },
    {
      id: 2,
      title: "Comprehensive Deep Cleaning",
      description:
        "Every surface, fixture, and appliance is cleaned and disinfected, including kitchen hoods, grills, ovens, and freezers.",
      icon: <Sparkles className="h-8 w-8 text-[#0094D9]" />,
      image: "/deep-cleaning-commercial-kitchen-hood-and-exhaust-.jpg",
    },
    {
      id: 3,
      title: "Trained & Certified Teams",
      description:
        "Our cleaning professionals are experienced in restaurant and food-service sanitation.",
      icon: <Users className="h-8 w-8 text-[#0094D9]" />,
      image: "/professional-cleaning-team-training-certification-.jpg",
    },
    {
      id: 4,
      title: "Flexible Scheduling",
      description:
        "Cleaning available overnight or during off-hours to avoid disruption to service.",
      icon: <Clock className="h-8 w-8 text-[#0094D9]" />,
      image: "/24-hour-clock-showing-overnight-cleaning-schedule.jpg",
    },
    {
      id: 5,
      title: "Safe, Food-Grade Products",
      description:
        "We use only non-toxic, food-safe disinfectants suitable for commercial kitchens.",
      icon: <Leaf className="h-8 w-8 text-[#0094D9]" />,
      image: "/eco-friendly-food-safe-cleaning-products-for-comme.jpg",
    },
    {
      id: 6,
      title: "Trusted Across the GTA",
      description:
        "Supporting restaurants, cafés, franchises, and hospitality venues throughout Toronto and surrounding cities.",
      icon: <MapPin className="h-8 w-8 text-[#0094D9]" />,
      image: "/greater-toronto-area-map-with-restaurant-locations.jpg",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-16 md:py-24 bg-[#E8F6FD]/40 relative overflow-hidden px-6 lg:px-12"
    >
      {/* Background gradient for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/10 via-white to-[#1C3B45]/5"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]">
            Why Choose PPS Group
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide comprehensive restaurant cleaning services across the
            Greater Toronto Area, ensuring your facility meets and exceeds local
            Health Department regulations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              {/* Image / Icon Transition Area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={item.title}
                  src={item.image}
                  className="w-full h-full object-cover transition-all duration-500 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/20 to-[#1C3B45]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
                  <div className="w-16 h-16 rounded-full bg-[#0094D9]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#1C3B45] group-hover:text-[#0094D9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

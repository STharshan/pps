"use client";
import React from "react";

export default function IndustriesSection() {
  const industries = [
    {
      id: "01",
      title: "Food & Beverage Manufacturing",
      desc: "Complete sanitation for production lines, packaging areas, and storage facilities.",
      img: "/modern-food-and-beverage-manufacturing-facility-pr.jpg",
    },
    {
      id: "02",
      title: "Meat & Poultry Processing",
      desc: "Specialized cleaning protocols for high-risk food processing environments.",
      img: "/meat-and-poultry-processing-plant-with-stainless-s.jpg",
    },
    {
      id: "03",
      title: "Bakeries & Confectionery Plants",
      desc: "Thorough cleaning of ovens, mixers, and production surfaces.",
      img: "/commercial-bakery-with-industrial-ovens-and-mixing.jpg",
    },
    {
      id: "04",
      title: "Dairy & Cheese Production",
      desc: "Sanitation solutions for dairy processing and cheese aging facilities.",
      img: "/dairy-production-facility-with-milk-processing-equ.jpg",
    },
    {
      id: "05",
      title: "Beverage Bottling & Canning Lines",
      desc: "Deep cleaning of bottling equipment, conveyors, and filling stations.",
      img: "/beverage-bottling-and-canning-production-line.jpg",
    },
    {
      id: "06",
      title: "Ready-Meal & Frozen Food Facilities",
      desc: "Temperature-controlled environment cleaning and sanitation.",
      img: "/frozen-food-processing-and-packaging-facility.jpg",
    },
  ];

  return (
    <section
      id="industries"
      className="py-20 lg:py-32 bg-[#E8F6FD]/40 relative overflow-hidden px-6 sm:px-8 lg:px-12"
    >
      {/* ===== Header ===== */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Industries <span className="text-[#0094D9]">We Serve</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Specialized sanitation solutions for diverse food processing
          environments across the GTA.
        </p>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {industries.map((item) => (
          <div
            key={item.id}
            className="group relative border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

              {/* Number Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0094D9] flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-white">{item.id}</span>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0094D9] transition-colors">
                {item.title}
              </h3>

              {/* Hover Reveal Description */}
              <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-200">
                  {item.desc}
                </p>
              </div>

              <div className="text-xs text-[#0094D9] mt-2 group-hover:underline transition-all">
                Click to learn more
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

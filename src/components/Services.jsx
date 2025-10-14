"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Food Plant Sanitation",
      description:
        "Professional sanitation solutions tailored for food processing facilities",
      image: "/s1.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning services for businesses and commercial spaces",
      image: "/s2.jpg",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Office Cleaning",
      description:
        "Maintain a clean and productive workspace with our office solutions",
      image: "/s3.jpg",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Restaurant Cleaning",
      description:
        "Specialized cleaning to ensure health and safety standards compliance",
      image: "/s4.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Construction Cleaning",
      description:
        "Post-construction debris removal and site cleaning expertise",
      image: "/s5.jpg",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "Strip and Wax",
      description:
        "Professional floor stripping and waxing for lasting shine",
      image: "/s6.jpg",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      title: "Deep/Steam Cleaning",
      description:
        "Intensive deep cleaning and steam treatment for stubborn dirt",
      image: "/s7.jpg",
      color: "from-teal-500 to-cyan-500",
    },
    {
      id: 8,
      title: "Powerwash",
      description:
        "High-pressure cleaning for exterior surfaces and tough grime",
      image: "/s8.jpg",
      color: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins scroll-m-10"
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-4">
          <h2 className="text-[#0094D9] font-bold text-lg tracking-widest uppercase mb-2">
            • Our Services
          </h2>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-6 max-w-3xl mx-auto">
          Key benefits that set us apart from other cleaning services
        </h2>
      </div>

      {/* Services Grid (Flexbox Layout) */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="mb-6 flex items-center justify-center w-full h-52 md:h-64 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3
              className={`text-lg md:text-xl font-bold text-gray-900 mb-3 text-center transition-all duration-300 ${
                hoveredIndex === index
                  ? "bg-gradient-to-r bg-clip-text text-transparent from-[#0094D9] to-[#36afe7]"
                  : ""
              }`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center flex-grow group-hover:text-gray-700 transition-colors duration-300">
              {service.description}
            </p>

            {/* Learn More Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-[#0094D9] hover:bg-[#36afe7] text-white px-6 py-2 rounded-md uppercase tracking-widest text-sm font-semibold transition flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
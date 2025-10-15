"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function OurServicesSection() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
  };

  const services = [
    {
      title: "Complete Kitchen & Washroom Cleaning",
      summary:
        "Thorough cleaning of all kitchen and bathroom surfaces, fixtures, and appliances.",
      details:
        "We remove construction dust, adhesive residue, and debris from countertops, cabinets, sinks, toilets, showers, and all fixtures. Every surface is sanitized and polished to perfection.",
    },
    {
      title: "Carpet Vacuuming & Steam Cleaning",
      summary:
        "Deep cleaning of carpets to remove construction dust and debris.",
      details:
        "Using industrial-grade equipment, we extract embedded dust, dirt, and particles from carpet fibers. Steam cleaning ensures carpets are fresh, clean, and ready for occupancy.",
    },
    {
      title: "Spot Cleaning of Walls, Doors & Fixtures",
      summary:
        "Removal of paint splatter, marks, and residue from all surfaces.",
      details:
        "We carefully clean walls, doors, door frames, and fixtures to remove paint overspray, adhesive marks, and construction residue without damaging finishes.",
    },
    {
      title: "Light Fixture & Vent Cleaning",
      summary: "Detailed cleaning of lighting fixtures and ventilation systems.",
      details:
        "All light fixtures, ceiling fans, and air vents are cleaned inside and out to remove dust accumulation and ensure optimal performance and appearance.",
    },
    {
      title: "Power Washing & Concrete Floor Scrubbing",
      summary: "Heavy-duty cleaning of concrete and hard surfaces.",
      details:
        "We use power washing and industrial scrubbers to remove concrete dust, paint, adhesive, and other construction materials from floors and exterior surfaces.",
    },
    {
      title: "Floor Sealing & Polishing",
      summary: "Professional finishing of hardwood, tile, and concrete floors.",
      details:
        "After thorough cleaning, we seal and polish floors to protect surfaces and create a beautiful, lasting finish that enhances the space.",
    },
    {
      title: "Window, Frame & Sill Detailing",
      summary: "Complete cleaning of all windows and surrounding areas.",
      details:
        "We clean windows inside and out, remove stickers and labels, clean frames and tracks, and detail sills to ensure crystal-clear views and pristine appearance.",
    },
    {
      title: "Dusting of Ceilings, Baseboards & Trim",
      summary: "Meticulous removal of dust from all architectural details.",
      details:
        "Every ceiling, baseboard, crown molding, and trim piece is carefully dusted and wiped down to remove all traces of construction dust and debris.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="industries" className="py-24" style={{ backgroundColor: brand.primary }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services Include
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive post-construction cleaning solutions for every
            surface and space
          </p>
        </div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-white/30 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-semibold mb-2 transition-colors"
                      style={{
                        color:
                          openIndex === index ? brand.primary : brand.text,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.summary}</p>
                  </div>

                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#0094D9]" : ""
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {service.details}
                    </p>
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

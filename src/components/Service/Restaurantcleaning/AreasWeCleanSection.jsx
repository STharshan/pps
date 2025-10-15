"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AreasWeCleanSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const areas = [
    {
      id: 1,
      title: "Kitchens & Food Preparation Areas",
      description:
        "Complete sanitation of all food prep surfaces, equipment, and storage areas.",
      image: "/commercial-restaurant-kitchen-food-preparation-are.jpg",
      details: [
        "Deep cleaning of countertops, cutting boards, and prep stations",
        "Sanitization of food contact surfaces",
        "Cleaning and degreasing of cooking equipment",
        "Floor and wall cleaning with food-safe products",
      ],
    },
    {
      id: 2,
      title: "Dining Rooms & Bar Areas",
      description:
        "Thorough cleaning of customer-facing spaces to maintain a welcoming atmosphere.",
      image: "/elegant-restaurant-dining-room-with-clean-tables-a.jpg",
      details: [
        "Table, chair, and booth cleaning and sanitization",
        "Floor cleaning and polishing",
        "Window and glass cleaning",
        "Bar counter and equipment sanitization",
      ],
    },
    {
      id: 3,
      title: "Kitchen Hoods, Gas Stoves & Ovens",
      description:
        "Specialized deep cleaning to reduce fire hazards and maintain efficiency.",
      image: "/commercial-kitchen-hood-exhaust-system-cleaning-an.jpg",
      details: [
        "Exhaust hood and filter degreasing",
        "Oven and range deep cleaning",
        "Gas line and burner cleaning",
        "Ventilation system maintenance",
      ],
    },
    {
      id: 4,
      title: "Refrigerators, Freezers & Dishwashers",
      description:
        "Complete cleaning and sanitization of all cold storage and washing equipment.",
      image: "/commercial-walk-in-refrigerator-and-freezer-cleani.jpg",
      details: [
        "Interior and exterior cleaning of refrigeration units",
        "Freezer defrosting and sanitization",
        "Dishwasher cleaning and descaling",
        "Gasket and seal maintenance",
      ],
    },
    {
      id: 5,
      title: "Walls, Floors & Ceilings",
      description:
        "Top-to-bottom cleaning of all surfaces to maintain hygiene standards.",
      image: "/restaurant-kitchen-floor-wall-and-ceiling-deep-cle.jpg",
      details: [
        "Wall washing and degreasing",
        "Floor scrubbing and sanitization",
        "Ceiling and vent cleaning",
        "Tile and grout deep cleaning",
      ],
    },
    {
      id: 6,
      title: "Washrooms & Employee Break Areas",
      description:
        "Complete sanitization of restrooms and staff areas for health compliance.",
      image: "/clean-commercial-restaurant-restroom-and-employee-.jpg",
      details: [
        "Toilet, sink, and fixture sanitization",
        "Floor and wall cleaning",
        "Break room and locker area cleaning",
        "Touchpoint disinfection",
      ],
    },
    {
      id: 7,
      title: "Exhaust Fans, Sinks & Service Counters",
      description: "Detailed cleaning of high-use areas and equipment.",
      image: "/restaurant-service-counter-and-sink-area-professio.jpg",
      details: [
        "Exhaust fan cleaning and maintenance",
        "Sink and drain sanitization",
        "Service counter and pass-through cleaning",
        "Equipment surface sanitization",
      ],
    },
  ];

  return (
    <section id="areas" className="py-16 md:py-24 bg-[#F9FBFD] px-6 lg:px-12">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]">
            Areas We Clean
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our trained technicians clean and sanitize every inch of your
            restaurant, keeping your establishment hygienic, safe, and always
            ready for inspection.
          </p>
        </div>

        {/* ✅ Cards Container - FIXED VERSION */}
        <div className="flex flex-wrap justify-center gap-6">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg w-full md:w-[48%] max-w-[550px]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-[#1C3B45]">
                  {area.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>

                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center gap-2 text-[#0094D9] font-medium hover:underline transition-all"
                >
                  <span>
                    {openIndex === index ? "Show Less" : "Learn More"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0094D9] mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
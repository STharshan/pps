import React from "react";
import {
  Building2,
  ShoppingBag,
  GraduationCap,
  Heart,
  Warehouse,
  Coffee,
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Corporate Offices & Head Offices",
      image: "/modern-corporate-office-building-interior-with-cle.jpg",
      icon: <Building2 className="h-6 w-6 text-white" />,
      description:
        "We maintain pristine corporate environments that reflect your company's professionalism.",
      short: "Professional cleaning for corporate environments",
      services: [
        "Daily office cleaning",
        "Boardroom maintenance",
        "Kitchen & break room sanitation",
        "Restroom deep cleaning",
      ],
    },
    {
      title: "Retail Stores & Shopping Centres",
      image: "/clean-modern-retail-store-interior-with-bright-lig.jpg",
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      description:
        "First impressions matter in retail. We provide comprehensive cleaning for pristine stores.",
      short: "Keep your retail spaces inviting and clean",
      services: [
        "Floor care & polishing",
        "Window cleaning",
        "Display maintenance",
        "High-traffic area focus",
      ],
    },
    {
      title: "Educational Institutions",
      image: "/clean-school-classroom-with-desks-and-bright-windo.jpg",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      description:
        "Schools and universities require specialized cleaning protocols for healthy environments.",
      short: "Safe, clean learning environments",
      services: [
        "Classroom cleaning",
        "Cafeteria sanitation",
        "Gymnasium maintenance",
        "Library care",
      ],
    },
    {
      title: "Medical & Healthcare Facilities",
      image: "/clean-medical-clinic-waiting-room-with-sanitized-s.jpg",
      icon: <Heart className="h-6 w-6 text-white" />,
      description:
        "Healthcare facilities demand the highest cleaning standards and medical-grade sanitation.",
      short: "Hospital-grade cleaning standards",
      services: [
        "Medical-grade disinfection",
        "Biohazard handling",
        "Waiting room maintenance",
        "Compliance with health regulations",
      ],
    },
    {
      title: "Industrial & Warehouse Buildings",
      image: "/clean-industrial-warehouse-with-organized-storage.jpg",
      icon: <Warehouse className="h-6 w-6 text-white" />,
      description:
        "Industrial facilities require robust cleaning solutions and heavy-duty equipment.",
      short: "Heavy-duty cleaning for industrial spaces",
      services: [
        "Floor scrubbing & maintenance",
        "Loading dock cleaning",
        "Office area maintenance",
        "Dust control",
      ],
    },
    {
      title: "Restaurants & Hospitality",
      image: "/clean-modern-restaurant-dining-area-with-tables-se.jpg",
      icon: <Coffee className="h-6 w-6 text-white" />,
      description:
        "The hospitality industry demands impeccable cleanliness across all spaces.",
      short: "Maintain the highest hygiene standards",
      services: [
        "Dining area cleaning",
        "Kitchen deep cleaning",
        "Restroom sanitation",
        "Front-of-house maintenance",
      ],
    },
  ];

  return (
    <section
      id="industries"
      className="py-20 md:py-32 bg-white dark:bg-neutral-950 transition-colors"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-[#0094D9]">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-pretty">
            Specialized cleaning solutions tailored to your industry's unique
            requirements and standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                  <div className="h-12 w-12 rounded-lg bg-[#0094D9]/80 backdrop-blur-sm flex items-center justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{industry.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-[#0094D9]">
                    Our Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#0094D9] mt-1.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-4 pt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {industry.short}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

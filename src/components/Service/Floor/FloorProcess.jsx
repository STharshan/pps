"use client";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Strip Old Wax",
    description:
      "We remove all old wax, dirt, and buildup using professional-grade stripping solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-eraser h-8 w-8 text-gray-500"
      >
        <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
        <path d="M22 21H7"></path>
        <path d="m5 11 9 9"></path>
      </svg>
    ),
    extraContent:
      "Old wax removal is essential for ensuring that the new wax adheres perfectly to the floor surface.",
  },
  {
    id: 2,
    title: "Deep Clean & Neutralize",
    description:
      "Intensive cleaning and pH neutralization ensures a perfect surface for wax application.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-droplets h-8 w-8 text-[#0094D9]"
      >
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
      </svg>
    ),
    extraContent:
      "We use non-toxic cleaning agents that are safe for both your floors and the environment.",
  },
  {
    id: 3,
    title: "Apply Premium Wax",
    description:
      "Multiple coats of premium-grade wax are applied for maximum protection and shine.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-brush h-8 w-8 text-gray-500"
      >
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
      </svg>
    ),
    extraContent:
      "Premium waxes protect against wear and tear while providing a beautiful, long-lasting shine.",
  },
  {
    id: 4,
    title: "Polish to Perfection",
    description:
      "Industrial-grade buffers create a flawless, high-gloss finish that lasts.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sparkles h-8 w-8 text-gray-500"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>
    ),
    extraContent:
      "Polishing helps enhance the finish, making your floors look brand new with added durability.",
  },
];

const FloorProcess = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0094D9]">
            Our 4-Step Process
          </h2>
          <p className="text-xl text-[#1C3B45]/80">
            A systematic approach to floor restoration that delivers consistent,
            exceptional results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              onMouseEnter={() => setHovered(step.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg cursor-pointer ${
                hovered === step.id ? "ring-2 ring-[#0094D9]" : ""
              }`}
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                      hovered === step.id
                        ? "bg-[#0094D9] text-white"
                        : "bg-[#E6F4FB] text-[#0094D9]"
                    }`}
                  >
                    {step.id}
                  </div>
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Expandable content on hover */}
              <div
                className={`transition-all duration-700 overflow-hidden px-8 pb-8 ${
                  hovered === step.id
                    ? "max-h-40 opacity-100 border-t pt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.extraContent}
                </p>
              </div>

              {/* Bottom highlight bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                  hovered === step.id
                    ? "bg-gradient-to-r from-[#0094D9] to-sky-400 opacity-100"
                    : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-[#1C3B45]">
              Recommended frequency:
            </span>{" "}
            Every 6–12 months depending on traffic level and floor type
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloorProcess;

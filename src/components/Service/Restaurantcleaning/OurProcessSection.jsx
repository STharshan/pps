"use client";
import React, { useState } from "react";
import {
  ClipboardCheck,
  Calendar,
  Sparkles,
  FileCheck,
} from "lucide-react";

export default function OurProcessSection() {
  const brandPrimary = "#0094D9";
  const brandText = "#1C3B45";
  const bgLight = "#F9FBFD";

  const steps = [
    {
      id: 1,
      title: "Initial Assessment",
      subtitle: "Step 1",
      description:
        "We conduct a thorough walkthrough of your restaurant to understand your specific cleaning needs and health department requirements.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      image: "/restaurant-manager-discussing-cleaning-requirement.jpg",
    },
    {
      id: 2,
      title: "Custom Schedule",
      subtitle: "Step 2",
      description:
        "We create a flexible cleaning schedule that works around your operating hours, with overnight and off-hour options available.",
      icon: <Calendar className="h-6 w-6" />,
      image: "/img.png",
    },
    {
      id: 3,
      title: "Deep Cleaning Service",
      subtitle: "Step 3",
      description:
        "Our certified team performs comprehensive cleaning using food-safe products, covering every surface from kitchen to dining areas.",
      icon: <Sparkles className="h-6 w-6" />,
      image: "/img.png",
    },
    {
      id: 4,
      title: "Documentation & Follow-up",
      subtitle: "Step 4",
      description:
        "We provide detailed cleaning reports and documentation for health inspections, with regular follow-ups to ensure continued compliance.",
      icon: <FileCheck className="h-6 w-6" />,
      image: "/img.png",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="our-process"
      className="py-16 md:py-24 px-6 lg:px-12"
      style={{ backgroundColor: bgLight }}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]"

          >
            Our Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A systematic approach to restaurant cleaning that ensures compliance
            and excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-8 items-center">
          {/* Left Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 shadow-sm ${activeStep === index
                    ? "scale-105 bg-[#0094D9]/10 border-[#0094D9] shadow-lg"
                    : "hover:bg-gray-100 border-gray-200 bg-white"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${activeStep === index
                        ? "bg-[#0094D9] text-white"
                        : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-sm font-semibold ${activeStep === index
                            ? "text-[#0094D9]"
                            : "text-gray-500"
                          }`}
                      >
                        {step.subtitle}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{
                        color: activeStep === index ? brandText : "#111",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image & Info */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700">
              <img
                key={steps[activeStep].image}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-auto object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3B45]/60 to-transparent"></div>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: brandText }}
                  >
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {steps[activeStep].subtitle} of {steps.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import {
  ClipboardCheck,
  Droplets,
  Sparkles,
  CircleCheckBig,
} from "lucide-react";

export default function SteamCleaningProcessSection() {
  const brand = "#0094D9";

  const steps = [
    {
      step: "Step 1",
      title: "Site Assessment",
      description:
        "We perform a detailed walkthrough to assess surfaces, contamination levels, and cleaning requirements before starting the steam cleaning process.",
      icon: <ClipboardCheck className="h-8 w-8" />,
    },
    {
      step: "Step 2",
      title: "Steam Application",
      description:
        "We apply high-temperature steam precisely to target grease, grime, and bacteria — removing dirt effectively without chemicals.",
      icon: <Droplets className="h-8 w-8" />,
    },
    {
      step: "Step 3",
      title: "Deep Sanitization",
      description:
        "The steam penetrates deep into surfaces, killing 99.9% of bacteria, viruses, and allergens without any harsh chemicals.",
      icon: <Sparkles className="h-8 w-8" />,
    },
    {
      step: "Step 4",
      title: "Final Inspection",
      description:
        "We carry out a comprehensive final inspection to ensure every area meets our strict hygiene and quality standards.",
      icon: <CircleCheckBig className="h-8 w-8" />,
    },
  ];

  const [activeStep, setActiveStep] = useState(2); // Default highlight Step 3

  return (
    <section id="process" className="py-20 md:py-32 bg-[#E6F4FB]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1C3B45" }}
          >
            Our Steam Cleaning Process
          </h2>
          <p className="text-xl text-[#1C3B45]/80 max-w-3xl mx-auto">
            A systematic approach to delivering chemical-free, deep sanitization.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col gap-6 rounded-xl border py-6 shadow-sm cursor-pointer transition-all duration-300 text-center ${
                    isActive
                      ? "ring-2 ring-[#0094D9] shadow-xl scale-105 bg-white"
                      : "hover:shadow-lg bg-white border-[#0094D9]/20"
                  }`}
                >
                  <div className="p-6 flex flex-col items-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                        isActive
                          ? "bg-[#0094D9] text-white"
                          : "bg-[#0094D9]/10 text-[#0094D9]"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div
                      className={`text-sm font-semibold mb-2 ${
                        isActive
                          ? "text-[#0094D9]"
                          : "text-[#1C3B45]/60"
                      }`}
                    >
                      {step.step}
                    </div>
                    <h3
                      className={`text-lg font-semibold transition-colors ${
                        isActive
                          ? "text-[#0094D9]"
                          : "text-[#1C3B45]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Detail Box */}
          <div className="bg-gradient-to-br from-[#0094D9]/5 to-[#0094D9]/10 border border-[#0094D9]/20 rounded-xl shadow-sm p-8">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-[#0094D9]/10 p-3 flex-shrink-0">
                <div className="text-[#0094D9]">
                  {steps[activeStep].icon}
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#1C3B45" }}
                >
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-[#1C3B45]/80 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

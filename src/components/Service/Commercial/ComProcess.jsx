"use client";
import React, { useState } from "react";
import { ClipboardCheck, Calendar, Sparkles, ChartColumn } from "lucide-react";

export default function ProcessSection() {
  // 🔹 Step data
  const steps = [
    {
      id: 1,
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Initial Consultation",
      description:
        "We assess your facility and understand your specific cleaning needs and schedule requirements.",
      number: "01",
    },
    {
      id: 2,
      icon: <Calendar className="h-6 w-6" />,
      title: "Custom Plan Creation",
      description:
        "We design a tailored cleaning program that fits your budget and operational hours.",
      number: "02",
    },
    {
      id: 3,
      icon: <Sparkles className="h-6 w-6" />,
      title: "Professional Execution",
      description:
        "Our trained teams deliver consistent, high-quality cleaning using advanced equipment.",
      number: "03",
    },
    {
      id: 4,
      icon: <ChartColumn className="h-6 w-6" />,
      title: "Quality Monitoring",
      description:
        "Regular inspections and reporting ensure we maintain excellence in every visit.",
      number: "04",
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section
      id="process"
      className="bg-[#E8F6FD]/40 dark:bg-[#0C1416] relative overflow-hidden px-6 lg:px-12"
    >


      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C3B45] dark:text-white">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A systematic approach to delivering exceptional commercial cleaning
            services.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`flex flex-col gap-6 rounded-xl border shadow-sm p-6 cursor-pointer transition-all duration-300 hover:shadow-md ${
                activeStep.id === step.id
                  ? "ring-2 ring-[#0094D9] shadow-lg scale-105 bg-white dark:bg-[#111A1D]"
                  : "bg-white dark:bg-[#111A1D] border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors ${
                      activeStep.id === step.id
                        ? "bg-[#0094D9] text-white"
                        : "bg-[#0094D9]/10 text-[#0094D9]"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-300">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1C3B45] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Main Box */}
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border shadow-md p-8 bg-white dark:bg-[#111A1D] max-w-3xl mx-auto transition-all duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-[#0094D9]/10 flex items-center justify-center">
              <ChartColumn className="h-8 w-8 text-[#0094D9]" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Step {activeStep.number} of 4
              </div>
              <h3 className="text-2xl font-bold text-[#1C3B45] dark:text-white">
                {activeStep.title}
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {activeStep.description}
          </p>
        </div>
      </div>
    </section>
  );
}
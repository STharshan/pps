"use client";
import React from "react";
import {
  ClipboardList,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function FourStepProcess() {
  const steps = [
    {
      id: 1,
      title: "Assessment",
      desc: "We conduct a thorough facility assessment to understand your specific sanitation needs and compliance requirements.",
      gradient: "from-[#0094D9]/20 to-cyan-500/20",
      icon: <ClipboardList className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Custom Plan",
      desc: "Our team develops a tailored cleaning protocol that fits your production schedule and regulatory standards.",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Deep Clean",
      desc: "Certified technicians execute comprehensive sanitation using food-grade products and HACCP-compliant procedures.",
      gradient: "from-orange-500/20 to-red-500/20",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Verification",
      desc: "Quality inspection and detailed documentation ensure your facility meets all safety and compliance standards.",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-32 bg-[#E8F6FD]/40 relative overflow-hidden px-6 sm:px-8 lg:px-12"
    >
      {/* Background Accent Circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0094D9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#36AFE7]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Our <span className="text-[#0094D9]">4-Step Process</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From initial assessment to final verification, we ensure every
            detail meets the highest standards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={step.id} className="relative h-full">
              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-[#0094D9] animate-pulse" />
                </div>
              )}

              {/* Step Card */}
              <div
                className="relative bg-white border-2 border-gray-200 text-gray-900 
                rounded-xl p-6 shadow-sm group hover:shadow-xl transition-all 
                duration-300 cursor-pointer hover:scale-105 flex flex-col justify-between h-full"
              >
                {/* Step Number Bubble */}
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full 
                  bg-[#0094D9] flex items-center justify-center shadow-lg 
                  group-hover:scale-110 transition-transform"
                >
                  <span className="text-xl font-bold text-white">{step.id}</span>
                </div>

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start gap-4 flex-grow">
                  <div
                    className="w-16 h-16 rounded-xl bg-[#0094D9]/10 flex items-center justify-center 
                    group-hover:bg-[#0094D9] group-hover:scale-110 transition-all duration-300"
                  >
                    {React.cloneElement(step.icon, {
                      className:
                        "w-8 h-8 text-[#0094D9] group-hover:text-white transition-colors",
                    })}
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#0094D9] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed opacity-80 flex-grow">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

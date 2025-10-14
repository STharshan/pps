"use client";
import React from "react";
import { ClipboardCheck, Book, Sparkles, ThumbsUp } from "lucide-react";

export default function OurProcessSection() {
  const brand = "#0094D9";

  const steps = [
    {
      number: "1",
      title: "Site Assessment",
      description:
        "We conduct a thorough walkthrough to assess the scope of work and identify all areas requiring attention.",
      icon: <ClipboardCheck className="h-8 w-8" />,
    },
    {
      number: "2",
      title: "Rough Clean",
      description:
        "Initial cleanup removes large debris, dust, and construction materials from all surfaces and areas.",
      icon: <Book className="h-8 w-8" />,
    },
    {
      number: "3",
      title: "Detail Clean",
      description:
        "Meticulous cleaning of every surface, fixture, and corner to remove all traces of construction residue.",
      icon: <Sparkles className="h-8 w-8" />,
    },
    {
      number: "4",
      title: "Final Inspection",
      description:
        "Quality check ensures every area meets our high standards before handover to you.",
      icon: <ThumbsUp className="h-8 w-8" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0094D9]">
            Our Process
          </h2>
          <p className="text-xl text-[#0094D9]/80 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to transforming construction sites into
            pristine spaces
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#0094D9]/60"
            >
              <div className="p-8 space-y-4">
                {/* Header (number + icon) */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold opacity-20 text-[#0094D9]">
                    {step.number}
                  </div>
                  <div
                    className="text-[#0094D9] transition-transform duration-300 group-hover:scale-110"
                    style={{ color: brand }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

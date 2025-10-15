"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const brandPrimary = "#0094D9";
  const brandText = "#1C3B45";
  const bgLight = "#F9FBFD";

  const faqs = [
    {
      question: "Do you provide cleaning after restaurant hours?",
      answer:
        "Yes — we specialize in overnight and off-hour cleaning to ensure zero interference with your daily operations. We work around your schedule to minimize disruption.",
    },
    {
      question: "Are your cleaning products food-safe?",
      answer:
        "Absolutely. PPS Group uses only approved, non-toxic, and food-grade sanitizing solutions suitable for kitchen environments. All our products meet health department standards.",
    },
    {
      question: "Do you clean exhaust systems and hoods?",
      answer:
        "Yes. Our restaurant cleaning includes deep cleaning of kitchen hoods, vents, and exhaust systems to reduce fire hazards and maintain ventilation efficiency.",
    },
    {
      question: "How often should a restaurant be deep cleaned?",
      answer:
        "We recommend deep cleaning services weekly or bi-weekly, depending on your restaurant size and volume. We can create a custom schedule that meets your specific needs and health department requirements.",
    },
    {
      question: "Do you provide documentation for health inspections?",
      answer:
        "Yes, we provide detailed cleaning reports and documentation that can be presented during health inspections, demonstrating your commitment to maintaining sanitation standards.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-6 lg:px-12"
      style={{ backgroundColor: bgLight }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our restaurant cleaning services
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
            >
              {/* Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center hover:text-[#0094D9] justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span
                  className="font-semibold text-lg "
                  style={{ color: brandText }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-[#0094D9]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
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

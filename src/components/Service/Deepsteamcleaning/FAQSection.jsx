"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const brand = "#0094D9";

  const faqs = [
    {
      question: "What is steam cleaning and how does it work?",
      answer:
        "Steam cleaning uses high-temperature steam to remove dirt, grease, and bacteria from surfaces without harsh chemicals. The heat penetrates deep into pores, killing germs and dissolving contaminants naturally.",
    },
    {
      question: "Is steam cleaning safe for food preparation areas?",
      answer:
        "Yes! Steam cleaning is ideal for food environments since it eliminates bacteria and grease using only water. No chemical residues are left behind, ensuring full compliance with food safety standards.",
    },
    {
      question: "What surfaces can be steam cleaned?",
      answer:
        "Our steam cleaning works on stainless steel, tiles, concrete, sealed wood, glass, fabric, and machinery surfaces. It’s safe and effective across most commercial and industrial materials.",
    },
    {
      question: "How long does the steam cleaning process take?",
      answer:
        "It depends on the area size and contamination level. Smaller areas may take 1–2 hours, while large kitchens or production sites may require several hours for a thorough clean.",
    },
    {
      question: "How often should I schedule steam cleaning?",
      answer:
        "We recommend scheduling steam cleaning every 2–3 months for maintenance, or monthly for high-traffic or food service environments to ensure ongoing hygiene.",
    },
    {
      question: "Is steam cleaning environmentally friendly?",
      answer:
        "Absolutely! Steam cleaning uses minimal water and no harsh chemicals, making it a safe, sustainable, and eco-friendly cleaning method that supports a greener planet.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#E6F4FB]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0094D9" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Everything you need to know about our deep steam cleaning services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left focus:outline-none"
                >
                  <span
                    className={`font-semibold text-base transition-colors ${
                      isOpen ? "text-[#0094D9]" : "text-[#1C3B45]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#1C3B45]/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0094D9]" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-4 text-[#1C3B45]/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

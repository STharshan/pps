"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ComFAQSection() {
  // 🔹 FAQ Data
  const faqs = [
    {
      id: 1,
      question: "Do you offer cleaning after business hours?",
      answer:
        "Yes — we provide flexible scheduling, including evening, overnight, and weekend cleaning services, to avoid disruption during work hours. We work around your schedule to ensure minimal impact on your business operations.",
    },
    {
      id: 2,
      question: "Can PPS Group handle large commercial buildings?",
      answer:
        "Absolutely. We have the staff, equipment, and expertise to manage everything from small offices to multi-storey commercial properties. Our scalable approach ensures consistent quality regardless of facility size.",
    },
    {
      id: 3,
      question: "Are your cleaning products safe and eco-friendly?",
      answer:
        "Yes — all cleaning agents used by PPS Group are non-toxic, biodegradable, and compliant with Canadian environmental regulations. We prioritize the health of your employees and the environment without compromising cleaning effectiveness.",
    },
     {
      id: 4,
      question: "How do you ensure quality and consistency?",
      answer:
        "We implement a comprehensive quality assurance program that includes regular site inspections, detailed checklists, supervisor oversight, and client feedback systems. Our team leaders conduct routine audits to ensure our high standards are maintained.",
    },
     {
      id: 5,
      question: "What areas of the GTA do you serve?",
      answer:
        "We proudly serve the entire Greater Toronto Area, including Toronto, Markham, Mississauga, Brampton, Oshawa, and Pickering. Our strategically located teams ensure prompt service across all regions.",
    },
     {
      id: 6,
      question: "How quickly can you start service?",
      answer:
        "We can typically begin service within 48-72 hours of completing the initial consultation and agreement. For urgent needs, we can often accommodate faster start times depending on our current capacity.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-[#E8F6FD]/40 dark:bg-[#0C1416] relative overflow-hidden px-6 lg:px-12"
    >
      {/* Background Circles for Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0094D9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C3B45]/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0094D9] dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Common questions about our food plant sanitation services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#111A1D] border border-[#0094D9]/30 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left text-lg font-semibold text-[#1C3B45] dark:text-white hover:text-[#0094D9] transition-all"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={22}
                  className={`text-[#0094D9] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Answer Content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const brand = "#0094D9";

  const faqs = [
    {
      question: "When should post-construction cleaning be scheduled?",
      answer:
        "Ideally, once all major construction work is complete — before final inspections or client walkthroughs. This ensures the space is pristine and ready for handover or occupancy.",
    },
    {
      question: "Do you provide cleaning for both residential and commercial projects?",
      answer:
        "Yes — we service everything from single-family homes to large commercial and industrial properties. Our team is equipped to handle projects of any size across the Greater Toronto Area.",
    },
    {
      question: "Do you offer phased cleaning (rough and final clean)?",
      answer:
        "Absolutely. PPS Group provides both rough clean (during construction) and final clean (pre-handover) options based on your needs. Phased cleaning helps maintain site cleanliness throughout the construction process.",
    },
    {
      question: "What areas do you service in the GTA?",
      answer:
        "We provide post-construction cleaning services throughout the Greater Toronto Area, including Toronto, Markham, Mississauga, Brampton, Oshawa, Pickering, and surrounding communities.",
    },
    {
      question: "How long does post-construction cleaning take?",
      answer:
        "The duration depends on the size and condition of the space. A typical residential property takes 1-2 days, while larger commercial projects may require several days. We provide accurate timelines during our initial assessment.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 bg-[#E6F4FB]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: brand }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#1C3B45]/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our post-construction cleaning services
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`bg-white border border-[#0094D9]/20 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                openIndex === index ? "border-[#0094D9]" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-lg font-semibold flex-1 transition-colors"
                    style={{
                      color: openIndex === index ? brand : "#1C3B45",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-[#0094D9]"
                        : "text-gray-500"
                    }`}
                  />
                </div>

                {/* Expandable Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-[#1C3B45]/80 leading-relaxed border-t border-[#0094D9]/10 pt-4">
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

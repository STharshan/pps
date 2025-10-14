"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Phone } from "lucide-react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

export default function CivitasFAQ() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      question: "Do You Perform Disinfection/Sanitization for COVID-19?",
      answer:
        "Yes, we recognize the severity of COVID-19 and its effects, and therefore take all disinfection and sanitization jobs very seriously. Our employees are equipped with appropriate PPE to protect you and themselves while complying with all safety measures.",
    },
    {
      question: "What Size Facilities Do You Clean?",
      answer:
        "No job is too big or too small for us. We have the best equipment to tackle facilities of all sizes ranging from individual homes to airports. PPS Group consists of professionally trained employees who excel in any task put in front of them, regardless of the size.",
    },
    {
      question: "Is a long-term contract required for cleaning services?",
      answer:
        "Long-term contracts are not a requirement for our cleaning services. PPS Group would love to work with you to develop a plan and schedule to meet your needs at the best price.",
    },
    {
      question: "Do I need to provide any supplies or equipment for your cleaning services?",
      answer:
        "No, you will not need to provide cleaning supplies or equipment. PPS Group will bring all the necessary equipment to serve you. Cleaning supplies and equipment charges will be included within the cleaning quotation amount.",
    },
  ];

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-poppins" id="faq">
      {/* Main Container */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Section */}
          <div className="flex flex-col justify-start lg:sticky lg:top-20" data-aos="fade-right">
            <span className="inline-block text-[#0094D9] font-semibold tracking-wide">• FAQ</span>

            <h1 className="text-4xl mt-5 font-serif font-bold text-black mb-8 leading-tight">
              Your questions, answered effortlessly with us
            </h1>

            <button className="inline-flex items-center justify-center gap-2 w-fit bg-[#0094D9] hover:bg-[#0980b8] text-slate-900 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-105 active:shadow-xl group">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Book a call</span>
            </button>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="space-y-4" data-aos="fade-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl hover:shadow-[#0094D9] active:shadow-[#0094D9] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden"
                data-aos="fade-up" // Add AOS animation to each FAQ item
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                >
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900 pr-4 group-hover:text-[#0980b8] transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                      expanded === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 sm:py-5 bg-blue-50/30 border-t border-slate-100">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

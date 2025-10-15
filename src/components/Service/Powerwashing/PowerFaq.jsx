"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PowerFAQSection() {
    // 🔹 FAQ Data
    const faqs = [
        {
            id: 1,
            question: "What's the difference between power washing and pressure washing?",
            answer:
                "The terms are often used interchangeably. Power washing typically uses heated water, while pressure washing uses regular temperature water. Both use high-pressure water jets to clean surfaces effectively.",
        },
        {
            id: 2,
            question: "Is power washing safe for all surfaces?",
            answer:
                "When performed by professionals, yes. We adjust pressure settings based on the surface material. Delicate surfaces like wood or painted areas require lower pressure, while concrete can handle higher pressure.",
        },
        {
            id: 3,
            question: "How often should I have my property power washed?",
            answer:
                "Most properties benefit from annual power washing. High-traffic areas or properties in humid climates may need more frequent cleaning to prevent mold and algae buildup.",
        },
        {
            id: 4,
            question: "Will power washing damage my landscaping?",
            answer:
                "Our experienced team takes precautions to protect your landscaping. We cover delicate plants, control water direction, and use appropriate pressure levels to minimize any impact on surrounding vegetation.",
        },
        {
            id: 5,
            question: "Do you use chemicals in your power washing?",
            answer:
                "We primarily use high-pressure water alone, making our service eco-friendly. For stubborn stains or specific situations, we may use biodegradable, environmentally safe cleaning solutions.",
        },
        {
            id: 6,
            question: "How long does a typical power washing job take?",
            answer:
                "It depends on the size and condition of the area. A residential driveway might take 1-2 hours, while a large commercial property could take a full day or more. We provide time estimates during our initial assessment.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="py-10 bg-[#E8F6FD]/40 dark:bg-[#0C1416] relative overflow-hidden px-6 lg:px-12"
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
                        Everything you need to know about our strip and wax floor restoration service.
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
                                    className={`text-[#0094D9] transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`px-6 overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 py-3" : "max-h-0"
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

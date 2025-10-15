"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FloorFAQSection() {
    // 🔹 FAQ Data
    const faqs = [
        {
            id: 1,
            question: "How often should I get strip and wax service?",
            answer:
                "We recommend a full strip and wax service every 6–12 months, depending on your traffic level and floor type. High-traffic commercial spaces may benefit from more frequent service, while residential or low-traffic areas can go longer between treatments.",
        },
        {
            id: 2,
            question: "How long does the process take?",
            answer:
                "The timeline depends on the size of the area and floor condition. Most commercial spaces can be completed in 1-2 days. We use quick-dry waxes that minimize downtime, and we can work during off-hours to avoid disrupting your business operations.",
        },
        {
            id: 3,
            question: "Will the wax smell or cause disruption?",
            answer:
                "We use low-odor, eco-safe waxes specifically designed for occupied spaces. Our quick-dry formulas mean minimal disruption to your home or business. Most areas can be walked on within a few hours of completion.",
        },
        {
            id: 4,
            question: "What types of floors can you service?",
            answer:
                "We specialize in VCT (Vinyl Composite Tile), linoleum, hardwood, marble, and concrete floors. Each surface type requires specific techniques and products, which our trained specialists are expert in applying.",
        },
        {
            id: 5,
            question: "How do I maintain my floors between services?",
            answer:
                "Regular dust mopping and damp mopping with pH-neutral cleaners will help maintain your floor's shine. Avoid harsh chemicals or abrasive cleaning tools. We can provide specific maintenance recommendations based on your floor type and traffic level.",
        },
        {
            id: 6,
            question: "Is strip and wax better than just buffing?",
            answer:
                "Yes, for long-term results. While buffing can temporarily restore shine, strip and wax removes all old buildup and applies fresh protective layers. This provides better protection, longer-lasting shine, and prevents permanent damage to your flooring.",
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

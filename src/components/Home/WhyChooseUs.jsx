"use client";
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  const items = [
    {
      id: "01",
      title: "10+ Years of Experience",
      desc: "We have over 10 years of proven experience in the cleaning industry, delivering consistent quality and reliability.",
    },
    {
      id: "02",
      title: "Trained Professionals",
      desc: "Our cleaning staff are fully trained, background-checked, and equipped to handle all environments with care.",
    },
    {
      id: "03",
      title: "Customized Schedules",
      desc: "We create cleaning plans tailored to your specific needs and timing preferences for maximum convenience.",
    },
    {
      id: "04",
      title: "Transparent Pricing",
      desc: "We offer fixed, competitive rates with no hidden charges — ensuring clarity and trust from day one.",
    },
    {
      id: "05",
      title: "Comprehensive Coverage",
      desc: "We carry complete insurance coverage and WSIB protection for safety and peace of mind.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-white py-20 px-6 md:px-12 lg:px-20 font-poppins"
      id="whychooseus"
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2
          className="text-[#0094D9] font-bold text-lg tracking-widest uppercase mb-2"
          data-aos="fade-up"
        >
          • Why Choose Us
        </h2>
        <p
          className="text-gray-800 font-semibold text-2xl leading-relaxed"
          data-aos="fade-up"
        >
          We provide reliable cleaning, maintenance, and renovation services at
          competitive prices tailored to your budget. We deliver with
          professional equipment, ensuring efficiency and high standards — always
          customized to your needs.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#0094D9] text-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm"
            data-aos="fade-up"
          >
            {/* Number Circle */}
            <div className="absolute -top-4 -left-4 bg-white text-[#0094D9] w-10 h-10 flex items-center justify-center rounded-full font-semibold shadow-md">
              {item.id}
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-white w-6 h-6" />
              <h4 className="text-xl font-semibold">{item.title}</h4>
            </div>

            {/* Description */}
            <p className="text-white/90 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

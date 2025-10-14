"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

export default function RestaurantHeroSection() {
  return (
    <section
      id="restaurant-hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden px-6 lg:px-12"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/10 via-white to-[#1C3B45]/5"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-block px-4 py-2 bg-[#0094D9]/10 rounded-full">
              <span className="text-sm font-semibold text-[#0094D9]">
                Restaurant Cleaning Experts
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1C3B45]">
              Hygiene That Protects Your{" "}
              <span className="text-[#0094D9]">Reputation</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              At PPS Group, we understand that cleanliness in a restaurant isn’t
              optional — it’s essential. A spotless dining and kitchen
              environment protects your customers’ health and strengthens your
              reputation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 font-medium transition-all bg-[#0094D9] text-white hover:bg-[#0094D9]/90 h-12 rounded-md px-6 text-base shadow-md">
                Get a Free Quote
              </button>

              <button className="inline-flex items-center justify-center gap-2 font-medium transition-all border-2 border-[#0094D9] text-[#0094D9] hover:bg-[#0094D9]/10 h-12 rounded-md px-6 text-base">
                View Our Services
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Health Department Compliant",
                "Food-Safe Products",
                "Overnight Service",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0094D9]" />
                  <span className="text-sm font-medium text-[#1C3B45]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Professional restaurant kitchen cleaning"
                className="w-full h-auto"
                src="/professional-restaurant-kitchen-cleaning-with-stai.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
            </div>

            {/* Stats Boxes */}
            <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Pass Rate" },
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Restaurants" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg backdrop-blur-sm text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#0094D9]">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

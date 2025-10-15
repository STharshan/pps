"use client";
import React from "react";
import { CircleCheck, ArrowRight } from "lucide-react";

export default function TechnologyHeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0094D9]/10 text-black text-sm font-medium">
              <CircleCheck className="h-4 w-4 text-[#0094D9]" />
              <span>Custom in-house technology built for excellence</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0094D9] leading-tight">
              We invested in technology so you get the best service
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              While others cut corners, we built custom software from the ground
              up. Our in-house platform ensures you receive unmatched
              transparency, accountability, and service quality that other
              cleaning companies simply can't match.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <button className="inline-flex items-center justify-center gap-2 bg-[#0094D9] text-white text-lg font-medium px-8 py-3 rounded-md shadow-md hover:bg-[#007db7] transition-all duration-300">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              {/* Secondary Button */}
              <button className="inline-flex items-center justify-center gap-2 text-[#0094D9] border border-[#0094D9] text-lg font-medium px-8 py-3 rounded-md hover:bg-[#0094D9] hover:text-white transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
              <img
                src="/modern-cleaning-software-dashboard-interface-with-.jpg"
                alt="CleanTech Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F9FBFD]/40 to-transparent"></div>
            </div>

            {/* Soft Accent Glows */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0094D9]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0094D9]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
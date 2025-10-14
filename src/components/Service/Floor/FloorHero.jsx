"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { MdOutlineStarRate } from "react-icons/md";

export default function FloorHeroSection() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#E8F6FD] to-white overflow-hidden px-6 sm:px-8 lg:px-12">
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0094D9]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0094D9]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== Left Text Section ===== */}
          <div className="text-center lg:text-left z-10">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0094D9]/10 text-[#0094D9] text-sm font-medium mb-6 hover:bg-[#0094D9]/20 transition-colors">
              <CheckCircle className="w-4 h-4" />
              Strip. Shine. Seal.
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
             Floor Restoration That {" "}
              <span className="text-[#0094D9]">Brings Back the Shine</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
              Professional strip and wax services that revive your floors to brand-new condition. From VCT to hardwood, we restore the beauty and extend the life of every surface.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#0094D9] mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#0094D9] mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Floors Restored</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#0094D9] mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-[#0094D9] hover:bg-[#36AFE7] text-white text-base px-8 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all group">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 border border-[#0094D9]/40 text-[#0094D9] hover:bg-[#0094D9]/10 text-base px-8 py-3 rounded-md font-medium transition-all">
                View Services
              </button>
            </div>
          </div>

          {/* ===== Right Image Section ===== */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/polished-glossy-floor-reflection-commercial-space.jpg"
                alt="Professional food plant sanitation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#0094D9] rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0094D9]/10 flex items-center justify-center">
                  <MdOutlineStarRate  className="w-6 h-6 text-[#0094D9]" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                   The PPS Promise
                  </div>
                  <div className="text-sm text-gray-600">
                   Perfection in every shine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

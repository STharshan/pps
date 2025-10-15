"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
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
              Trusted Across the GTA
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Creating Healthier, Safer, and More{" "}
              <span className="text-[#0094D9]">Productive Workplaces</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
               Comprehensive commercial cleaning services across the Greater Toronto Area. We deliver tailored janitorial programs designed around your business hours and budget.
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
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#0094D9] mb-1">
                  99%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <HashLink to="#get" className="inline-block">
                
              <button className="inline-flex items-center justify-center gap-2 bg-[#0094D9] hover:bg-[#36AFE7] text-white text-base px-8 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all group">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
               </HashLink>

              <HashLink to="#industries" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 border border-[#0094D9]/40 text-[#0094D9] hover:bg-[#0094D9]/10 text-base px-8 py-3 rounded-md font-medium transition-all">
                View Services
              </button>
              </HashLink>
            </div>
          </div>

          {/* ===== Right Image Section ===== */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-clean-corporate-office-space-with-glass-win.jpg"
                alt="Professional food plant sanitation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#0094D9] rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0094D9]/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#0094D9]" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                   Eco-Friendly Products
                  </div>
                  <div className="text-sm text-gray-600">
                   Safe for your team
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

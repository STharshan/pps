"use client";
import React from "react";
import { Hash, Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function GetAQuoteSection() {
  return (
    <section
      id="getquote"
      className="py-15 bg-[#0094D9] text-white relative overflow-hidden px-6 lg:px-12"
    >
      {/* Background Accent Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1C3B45]/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
          Get a Free Quote
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
          Ensure your facility meets the highest hygiene and compliance
          standards. Contact PPS Group today to schedule a site visit or request
          a free food plant sanitation quote across the GTA.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <HashLink to="tel:(416) 471-4465">
            <button
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0094D9] hover:bg-white/90 font-medium text-base px-8 h-12 rounded-md shadow-md transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Contact Us Today
            </button>
          </HashLink>

          {/* Secondary Button */}
          <HashLink to="/#contact">
            <button
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-medium text-base px-8 h-12 rounded-md transition-all duration-300"
            >
              Schedule Site Visit
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}

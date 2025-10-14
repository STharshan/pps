"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CallToActionSection() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
    bg: "#F9FBFD",
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden px-6 lg:px-12"
      style={{ backgroundColor: brand.bg }}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/10 via-[#F9FBFD] to-[#0094D9]/5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: brand.text }}
          >
            Keep Your Restaurant Spotless, Compliant, and Ready to Serve
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Contact PPS Group today for a free restaurant cleaning quote anywhere in the GTA
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Call Us Button */}
            <button
              className="inline-flex items-center justify-center gap-2 font-medium transition-all bg-[#0094D9] text-white hover:bg-[#0094D9]/90 h-10 rounded-md px-6"
              onClick={() => (window.location.href = 'tel:+14165550123')}
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </button>

            {/* Email Button */}
            <button
              className="inline-flex items-center justify-center gap-2 font-medium transition-all border border-gray-300 text-[#1C3B45] hover:bg-gray-100 h-10 rounded-md px-6"
              onClick={() => (window.location.href = 'mailto:info@ppsgroup.ca')}
            >
              <Mail className="h-5 w-5" />
              Email for Quote
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0094D9]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5" stroke={brand.primary} />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: brand.text }}>
                  Phone
                </p>
                <p className="text-sm text-gray-600">(416) 555-0123</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0094D9]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5" stroke={brand.primary} />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: brand.text }}>
                  Email
                </p>
                <p className="text-sm text-gray-600">info@ppsgroup.ca</p>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0094D9]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" stroke={brand.primary} />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: brand.text }}>
                  Service Area
                </p>
                <p className="text-sm text-gray-600">Greater Toronto Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

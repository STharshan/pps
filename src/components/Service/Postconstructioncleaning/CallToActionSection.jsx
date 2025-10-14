"use client";
import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  const brand = {
    primary: "#0094D9",
    text: "#FFFFFF",
  };

  return (
    <section
      className="py-24 text-white"
      style={{ backgroundColor: brand.primary }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Make Your New Space Shine from Floor to Ceiling
          </h2>

          {/* Subtext */}
          <p className="text-xl opacity-90 leading-relaxed">
            Contact PPS Group Inc. today for a free post-construction cleaning
            quote anywhere in the GTA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Button */}
            <button
              onClick={() => (window.location.href = "tel:+14165551234")}
              className="inline-flex items-center justify-center gap-2 font-medium transition-all bg-white text-[#0094D9] hover:bg-white/90 h-12 rounded-md px-8 py-3 text-lg shadow-md"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </button>

            {/* Email Button */}
            <button
              onClick={() =>
                (window.location.href = "mailto:info@ppsgroupinc.ca")
              }
              className="inline-flex items-center justify-center gap-2 font-medium transition-all border border-white/40 text-white hover:bg-white/10 h-12 rounded-md px-8 py-3 text-lg"
            >
              <Mail className="h-5 w-5" />
              Email for Quote
              <ArrowRight className="h-5 w-5 ml-1" />
            </button>
          </div>

          {/* Service Area Note */}
          <div className="pt-8 text-sm opacity-80">
            Serving Toronto, Markham, Mississauga, Brampton, Oshawa, Pickering,
            and surrounding areas
          </div>
        </div>
      </div>
    </section>
  );
}

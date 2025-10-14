"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ExperienceTheDifferenceSection() {
  const brand = "#0094D9";

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="flex flex-col gap-6 rounded-xl border shadow-sm relative overflow-hidden text-white bg-gradient-to-br from-[#0094D9] to-[#0094D9]/80"
        >
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Experience the Difference
            </h2>

            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Imagine a space that not only looks spotless but feels fresh —
              purified, sanitised, and safe. That's the PPS Deep Clean.
            </p>

            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Before you throw away stained, greasy, or "beyond repair"
              equipment — call PPS Group. You'll be amazed at what true deep
              cleaning can do.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="h-12 px-8 rounded-md text-lg font-medium transition-all bg-white text-[#0094D9] hover:bg-[#E6F4FB] hover:shadow-md"
              >
                Get Free Quote
              </button>

              <button
                className="h-12 px-8 rounded-md text-lg font-medium border border-white text-white hover:bg-white hover:text-[#0094D9] transition-all"
              >
                Call Us Now
              </button>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-white" />
                <div className="font-semibold">Phone</div>
                <div className="text-sm opacity-90">(416) 555-0123</div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-white" />
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-90">info@ppsgroup.ca</div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-white" />
                <div className="font-semibold">Service Area</div>
                <div className="text-sm opacity-90">Greater Toronto Area</div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay (optional subtle effect) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0094D9]/30 to-[#0094D9]/10 blur-[1px]"></div>
        </div>
      </div>
    </section>
  );
}

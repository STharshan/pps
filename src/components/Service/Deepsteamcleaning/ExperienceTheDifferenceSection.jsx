"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function ExperienceTheDifferenceSection() {
  const brand = "#0094D9";

  return (
    <section className="py-20" id="get">
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
       <HashLink to="/#contact">
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 bg-[#0094D9] hover:bg-[#007bb5] text-white"
                    >
                      Get Free Quote Today
                    </button>
                  </HashLink>
                  <HashLink to="tel:(416) 471-4465" className="inline-block">
                    <button
                      data-slot="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      Call Us Now
                    </button>
                  </HashLink>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-white" />
                <div className="font-semibold">Phone</div>
                <div className="text-sm opacity-90">(416) 471-4465

</div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-white" />
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-90">info@ppsgroupinc.ca</div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-white" />
                <div className="font-semibold">Service Area</div>
                <div className="text-sm opacity-90">PPS Group Inc. <br/>5635 Finch Ave E Unit #7 Toronto, ON, M1B 5K9
</div>
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

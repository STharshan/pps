"use client";
import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function CallToActionSection() {
  const brand = {
    primary: "#0094D9",
    text: "#FFFFFF",
  };

  return (
    <section
    id="get"
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
            <HashLink to="tel:(416) 471-4465">
              <button
                data-slot="button"
                class="inline-flex hover:text-white items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[&gt;svg]:px-4 text-lg px-8 py-6 bg-white text-[#0094D9] hover:bg-[#0094D9]/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2 h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </button>
            </HashLink>

            <HashLink to="mailto:info@ppsgroupinc.ca">

              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 h-5 w-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email Us
              </button>
            </HashLink>
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

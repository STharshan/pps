"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function CallToActionSection() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
    bg: "#F9FBFD",
  };

  return (
    <section
    id="call"
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
            
          >
            Keep Your Restaurant Spotless, Compliant, and Ready to Serve
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Contact PPS Group today for a free restaurant cleaning quote anywhere in the GTA
          </p>

      {/* Buttons */}
             <div className="flex flex-wrap gap-4 justify-center pt-4">
               {/* Call Button */}
                <HashLink to="tel:(416) 471-4465">
   
               <button
                 className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all
                 disabled:pointer-events-none disabled:opacity-50
                 outline-none focus-visible:ring-2 focus-visible:ring-white/50
                 bg-white text-[#0094D9] hover:bg-white/90
                 h-10 rounded-md px-6 gap-2 group"
               >
                 {/* Phone Icon */}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                 </svg>
                 Call for Free Quote
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 12h14" />
                   <path d="m12 5 7 7-7 7" />
                 </svg>
               </button>
                </HashLink>
   
               {/* Email Button */}
               
                <HashLink to="mailto:info@ppsgroupinc.ca">
               <button
                 className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all
                 border border-white/30 text-white hover:bg-white/10
                 h-10 rounded-md px-6 gap-2"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <rect width="20" height="16" x="2" y="4" rx="2" />
                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                 </svg>
                 Email Us
               </button>
               </HashLink>
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

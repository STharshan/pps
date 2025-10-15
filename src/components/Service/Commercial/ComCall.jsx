import { HashLink } from "react-router-hash-link";

export default function CallToActionSection() {
  return (
    <section id="get" className="py-13 bg-gradient-to-br from-[#0094D9] to-[#0094D9]/80 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Ready to Transform Your Workplace?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 text-pretty max-w-2xl mx-auto">
            Get a free, no-obligation quote for commercial cleaning services across the Greater Toronto Area.
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

          {/* Footer Note */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80">
              Serving Toronto, Markham, Mississauga, Brampton, Oshawa, and Pickering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

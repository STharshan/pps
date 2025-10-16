import React from "react";

export default function KeyPartnerSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-4xl mx-auto bg-[#0094D9] rounded-2xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 px-6 sm:px-10 py-5">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Primary Partner of
            </h2>
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              alt="Toronto Pearson Airport"
              width="400"
              height="80"
              decoding="async"
              className="w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto rounded-lg mx-auto md:mx-0"
              style={{ color: "transparent" }}
              src="/toronto-pearson-logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

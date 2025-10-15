import React from "react";

export default function KeyPartnerSection() {
  return (
    <div className="relative max-w-4xl mx-auto bg-[#0094D9] rounded-lg overflow-hidden shadow-xl">
      <div className="px-12  py-8 flex items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Primary Partner of
          </h2>
        </div>
        <div className="flex-shrink-0">
          <img
            alt="Toronto Pearson Airport"
            width="400"
            height="80"
            decoding="async"
            data-nimg="1"
            className="w-auto h-16 md:h-20 rounded-lg"
            style={{ color: "transparent" }}
            src="/toronto-pearson-logo.png"
          />
        </div>
      </div>
    </div>
  );
}

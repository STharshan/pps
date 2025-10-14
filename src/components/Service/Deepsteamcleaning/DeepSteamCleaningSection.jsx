"use client";
import React from "react";
import { Droplets, Leaf } from "lucide-react";

export default function DeepSteamCleaningSection() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-[#0094D9]/5 via-[#E6F4FB] to-[#0094D9]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            {/* Label */}
            <div
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium"
              style={{
                color: brand.primary,
                backgroundColor: `${brand.primary}1A`, // ~10% opacity
                borderColor: `${brand.primary}33`, // ~20% opacity
              }}
            >
              <Droplets className="mr-2 h-4 w-4" stroke={brand.primary} />
              Pure Steam Power
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              style={{ color: brand.text }}
            >
              Deep &amp; Steam Cleaning
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-[#1C3B45]/80"
              style={{ color: brand.text }}
            >
              Pure Power. Zero Chemicals. 100% Food-Safe Clean.
            </p>

            {/* Description */}
            <p className="text-lg text-[#1C3B45]/70 leading-relaxed">
              When ordinary cleaning isn't enough, PPS Group's Deep &amp; Steam
              Cleaning delivers a level of cleanliness you can see, feel, and
              trust. Using the natural power of high-temperature steam, we cut
              through grease, grime, and bacteria — without a single harsh
              chemical.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {[
                { value: "99.9%", label: "Bacteria Killed" },
                { value: "100%", label: "Food-Safe" },
                { value: "0", label: "Chemicals" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: brand.primary }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#1C3B45]/70 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = "#contact"}
                className="inline-flex items-center justify-center gap-2 font-medium transition-all bg-[#0094D9] text-white hover:bg-[#007bb6] h-12 rounded-md px-8 py-3 text-lg shadow-lg"
              >
                Get Free Quote
              </button>

              <button
                onClick={() => window.location.href = "#learn-more"}
                className="inline-flex items-center justify-center gap-2 font-medium transition-all border border-[#0094D9]/40 text-[#0094D9] hover:bg-[#0094D9]/10 h-12 rounded-md px-8 py-3 text-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with Overlay Card */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/commercial-steam-cleaning-equipment-in-action-with.jpg"
                alt="Steam cleaning in action"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-[#0094D9]/20 rounded-xl p-6 shadow-lg max-w-xs">
              <div className="flex items-start space-x-4">
                <div
                  className="rounded-full p-3"
                  style={{
                    backgroundColor: `${brand.primary}1A`,
                  }}
                >
                  <Leaf className="h-6 w-6" stroke={brand.primary} />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: brand.text }}>
                    Eco-Friendly
                  </div>
                  <div className="text-sm text-[#1C3B45]/70">
                    No harsh chemicals, minimal water usage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

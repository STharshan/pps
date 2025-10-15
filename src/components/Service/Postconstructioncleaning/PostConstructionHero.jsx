"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function PostConstructionHero() {
  const brand = {
    primary: "#0094D9",
    text: "#1C3B45",
  };

  return (
    <section
      className="relative h-[120vh] flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "6rem" }} // ✅ Prevents navbar overlap
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-construction-site-being-cleaned-professiona.jpg"
          alt="Post-construction cleaning"
          className="object-cover w-full h-full brightness-[0.45]" // ✅ slightly darker for better contrast
        />
        {/* ✅ Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white space-y-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Turning Construction Sites into{" "}
            <span style={{ color: brand.primary }}>Move-In Ready Spaces</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
            Professional post-construction cleaning services across the Greater Toronto Area
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            {/* Primary CTA */}
            <HashLink to="#get" className="inline-block">

              <button className="inline-flex items-center justify-center gap-2 bg-[#0094D9] hover:bg-[#36AFE7] text-white text-base px-8 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all group">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </HashLink>

            <HashLink to="#industries" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 border border-[#0094D9]/40 text-[#0094D9] hover:bg-[#0094D9]/10 text-base px-8 py-3 rounded-md font-medium transition-all">
                View Services
              </button>
            </HashLink>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "15+", label: "Years Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center shadow-md hover:bg-white/20 transition-all"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: brand.primary }}
                >
                  {item.value}
                </div>
                <div className="text-white/80 text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

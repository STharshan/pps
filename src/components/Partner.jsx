import React from "react";

export default function PartnersCarousel() {
  const logos = [
    "/l1.jpg",
    "/l2.jpg",
    "/l3.jpg",
    "/l4.jpg",
    "/l5.jpg",
    "/l6.jpg",
    "/l7.jpg",
    "/l8.jpg",
    "/l9.jpg",
    "/l10.jpg",
    "/l11.jpg",
    "/l12.jpg",
    "/l13.jpg",
    "/l14.jpg",
    "/l15.jpg",
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="text-center mb-6">
        <h2 className="text-[#0094D9] text-xl font-semibold">
          We’ve partnered with
        </h2>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll space-x-12">
          {/* Duplicate logos for seamless infinite scroll */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-15 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

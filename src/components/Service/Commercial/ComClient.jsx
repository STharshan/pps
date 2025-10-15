import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Facilities Manager",
    company: "Tech Corp Toronto",
    image: "/professional-woman-facilities-manager.jpg",
    quote:
      "PPS Group has been maintaining our corporate office for over 3 years. Their attention to detail and flexible scheduling has been invaluable. Our employees consistently comment on how clean and fresh the office feels.",
  },
  {
    name: "David Chen",
    role: "FStore Manager",
    company: "Retail Excellence Inc.",
    image: "/professional-man-store-manager.jpg",
    quote:
      "As a retail manager, I need my store to look perfect every day. PPS Group delivers consistently excellent results. Their team is professional, reliable, and uses eco-friendly products that align with our brand values.",
  },
  {
    name: "Jennifer Thompson",
    role: "Operations Director",
    company: "Healthcare Solutions",
    image: "/img.png",
    quote:
      "Working in healthcare, we have strict sanitation requirements. PPS Group not only meets but exceeds our standards. Their medical-grade cleaning protocols give us complete confidence in the safety of our facility.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-10 bg-[#0094D9]/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0094D9]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-pretty">
            Trusted by businesses across the Greater Toronto Area.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-neutral-800 shadow-md p-8 md:p-12 relative overflow-hidden transition-all duration-500 ease-in-out">
            {/* Decorative quote mark */}
            <div className="absolute top-0 right-0 text-[200px] font-serif text-[#0094D9]/5 leading-none select-none">
              "
            </div>

            {/* Client Info */}
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                   <img
                src="/tab.png"
                className="w-22 h-20 -mt-2 object-cover"
              />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl">{current.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {current.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {current.company}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#0094D9] text-[#0094D9]"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300 transition-opacity duration-500 ease-in-out">
                {current.quote}
              </blockquote>

              {/* Navigation & Dots */}
              <div className="flex items-center justify-between">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === index
                          ? "w-8 bg-[#0094D9]"
                          : "w-2 bg-gray-400/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="size-9 inline-flex items-center justify-center border rounded-md bg-white dark:bg-neutral-800 hover:bg-[#0094D9]/10 text-[#0094D9] transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="size-9 inline-flex items-center justify-center border rounded-md bg-white dark:bg-neutral-800 hover:bg-[#0094D9]/10 text-[#0094D9] transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

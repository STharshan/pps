import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      position: 'Facilities Manager, Tech Campus Toronto',
      image: '/professional-man-facilities-manager.jpg',
      quote:
        '"PPS transformed our office floors from dull and worn to absolutely stunning. The shine is incredible and has lasted months. Their team was professional, efficient, and caused zero disruption to our operations."',
    },
    // Add more testimonials here if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0094D9]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Trusted by businesses across the region for exceptional floor
            restoration results.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  alt={testimonials[currentIndex].name}
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  src={testimonials[currentIndex].image}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    color: 'transparent',
                  }}
                />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-star h-5 w-5 ${
                        index < 5 ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-[#0094D9] hover:text-white rounded-full bg-transparent"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-[#0094D9]' : 'bg-slate-300'
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-[#0094D9] hover:text-white rounded-full bg-transparent"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React, { useState, useEffect } from "react";

const PowerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "Facilities Director",
      company: "Retail Plaza Inc.",
      quote: `"Their power washing service restored our parking lot and walkways beautifully. Professional, efficient, and the results speak for themselves."`,
      img: "/professional-woman-facilities-director.jpg",
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "Operations Manager",
      company: "Greenfield Mall",
      quote: `"Excellent service! Our exterior looks brand new, and the team was prompt and courteous. Highly recommend."`,
      img: "/professional-man-operations-manager.jpg",
    },
    {
      id: 3,
      name: "Sarah Lee",
      position: "Property Manager",
      company: "Oakridge Towers",
      quote: `"A seamless experience from start to finish. They exceeded our expectations in both quality and timeliness."`,
      img: "/professional-woman-property-manager.jpg",
    },
  ];

  // Auto change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle click on arrows
  const handleArrowClick = (direction) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (direction === "prev") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results from satisfied customers across the GTA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-8 md:p-12 relative overflow-hidden">
            {/* Testimonial content */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                <img
                  alt={testimonials[activeIndex].name}
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  src="/logo.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
              <div className="flex gap-1 mb-4">
                {/* Star rating */}
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
                      index < 5 ? "fill-yellow-400 text-yellow-400" : ""
                    }`}
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-pretty">
                {testimonials[activeIndex].quote}
              </blockquote>
              <div>
                <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-muted-foreground">
                  {testimonials[activeIndex].position} • {testimonials[activeIndex].company}
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-[#0094D9]" : "w-2 bg-muted-foreground/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerTestimonials;

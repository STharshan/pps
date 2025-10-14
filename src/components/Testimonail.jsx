"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rony Pal",
      text: "We have been using PPS for 8+ years and they have always provided an exemplary job. Whenever there is a concern, they are quick to act upon it and resolve it for us immediately. What we learned is that PPS provides a competitve rate, and an excellent cleaning job. You could try looking elsewhere for cleaning services, but you won't find the same quality of work for the price. I am more than happy with their services and would love to support them with continued business for many more years to come.",
      rating: 5,
    },
    {
      name: "Primo Nardini",
      text: "We have been using PPS Group for more than 3 years for Specialized High Dusting, Cleaning of drains & detailed deep cleaning for our Manufacturing Plant and Warehouses. PPS staff members are highly experienced and can be relied upon for completing their responsibilities attributed to them in a timely manner. Their professionalism, experience, dedication and courtesy goes without saying. I am pleased to recommend them for all of your specialized cleaning projects & regular janitorial services.",
      rating: 5,
    },
    {
      name: "Richard Sparks",
      text: "I have been using PPS Group for more than 5 years and they consistently do a great job in my office building, manufacturing plant, and warehouses. Their employees are professional, punctual, and thorough. In addition, PPS has great rates and a range of options that allows me to select only the services I require. I have never been anything less than completely satisfied by the work that PPS has done, so I confidently recommend them for all your company's cleaning requirements.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section
      className="bg-white text-black scroll-m-10 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-poppins"
      id="testimonials"
    >
      {/* Testimonial Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-500 ease-in-out">
        {/* Left Side - Text Content (Your image content here) */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left -mt-25"
          data-aos="fade-right" // Add AOS animation to left side
        >
          <h2 className="uppercase font-semibold text-[#0094D9] mb-3">• What Our Clients Say</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">TRUSTED BY MANY, LOVED BY ALL</h3>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Our clients' success stories reflect our commitment to excellence. See how we've helped them find their dream homes, sustainable investments, and perfect getaways.
          </p>
        </div>

        {/* Right Side - Testimonial Card */}
        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-left" // Add AOS animation to right side
        >
          <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white rounded-2xl shadow-2xl p-6 sm:p-10 hover:shadow-[#0094D9] active:shadow-[#0094D9] cursor-pointer">
            {/* Quote mark inside card */}
            <div className="absolute top-4 right-4 text-red-500/30 text-6xl font-serif select-none">
              &rdquo;
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {testimonial.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Bottom Controls (Arrows + Dots) */}
          <div className="mt-10 flex flex-col items-center">
            {/* Arrows */}
            <div className="flex justify-center items-center gap-4 mb-5">
              <button
                onClick={handlePrev}
                className="bg-[#0094D9] hover:bg-[#0980b8] text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#0094D9] hover:bg-[#0980b8] text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-[#0094D9] w-8 "
                      : "bg-zinc-700 w-2 hover:bg-zinc-600 "
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

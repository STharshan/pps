import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration and "once" trigger
  }, []);

  return (
    <section className="py-20 bg-white scroll-m-10" id="about">
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="flex justify-center items-center relative"
            data-aos="fade-right" // Animation when image scrolls into view
          >
            <div className="relative group">
              <img
                src="/image.png"
                alt="ATB Motor Engineers"
                className="rounded-2xl shadow-lg h-110 w-120 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-[#1E3A8A]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>

          {/* Text Content */}
          <div
            data-aos="fade-left" // Animation for text when it comes into view
          >
            <h2 className="uppercase font-semibold text-[#0094D9]">• About Us</h2>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Let us take care of the cleaning while you build your business
            </h4>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              We are a cleaning company offering comprehensive and customized janitorial services for commercial, industrial, retail, and residential properties within the Greater Toronto Area (GTA), Markham, Mississauga, Brampton, Oshawa, and Pickering. We work with you every step of the way to develop the best cleaning program and provide daily, weekly, or monthly schedules that suit your needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#0094D9] hover:bg-[#4bbbf0] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

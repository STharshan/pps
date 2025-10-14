import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-poppins" id="home">
      {/* Background video or image */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/856193/856193-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h2 className="text-7xl font-light tracking-widest mb-2 text-[#0094D9]">
          PPS GROUP
        </h2>
        <p className="text-xl uppercase mt-5 mb-6 font-light text-black">
          Reliable Team Professional Service
        </p>
        <a href="#contact">
          <button className="bg-[#0094D9] hover:bg-[#36afe7] text-white px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold transition">
            Contact us
          </button>
        </a>
      </div>
    </div>
  );
}

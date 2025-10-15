import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-poppins z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="ARCON Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-10 text-black font-medium uppercase tracking-wider absolute left-1/2 transform -translate-x-1/2">
          <Link to="/#home" className="hover:text-[#0094D9] transition">
            Home
          </Link>
          <Link to="/#about" className="hover:text-[#0094D9] transition">
            About
          </Link>

          {/* Click-to-open Services Menu */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#0094D9] transition uppercase"
              onClick={() => setShowServices((prev) => !prev)}
            >
              Services
              <FiChevronDown
                className={`transition-transform ${
                  showServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {showServices && (
              <div className="absolute left-0 mt-3 w-60 bg-white shadow-lg rounded-md py-3 z-40">
                <RouterLink
                  to="/Foodplante"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Food Plant Cleaning
                </RouterLink>
                <RouterLink
                  to="/commercial-cleaning"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Commercial Cleaning
                </RouterLink>
                <RouterLink
                  to="/Restaurantcleaning"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Restaurant Cleaning
                </RouterLink>
                <RouterLink
                  to="/strip-and-wax"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Strip & Wax
                </RouterLink>
                <RouterLink
                  to="/power-washing"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Power Washing
                </RouterLink>
                <RouterLink
                  to="/Postconstructioncleaning"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Post Construction Cleaning
                </RouterLink>
                <RouterLink
                  to="/Deepsteamcleaning"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0094D9]/10 hover:text-[#0094D9]"
                  onClick={() => setShowServices(false)}
                >
                  Deep Steam Cleaning
                </RouterLink>
              </div>
            )}
          </div>
           <Link to="/PPS-Digtal" className="hover:text-[#0094D9] transition">
            PPS Digtal
          </Link>
          
          <Link to="/#testimonials" className="hover:text-[#0094D9] transition">
            Client
          </Link>
          <Link to="/#contact" className="hover:text-[#0094D9] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-black text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden fixed top-0 left-0 p-3 mt-20 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold uppercase tracking-wider transition-transform duration-300 ${
          isOpen ? "translate-x-0 max-h-[80vh] overflow-y-auto" : "-translate-x-full"
        }`}
      >
        <Link to="/#home" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/#about" onClick={() => setIsOpen(false)}>
          About
        </Link>

        {/* Click-to-open Services on Mobile */}
        <details className="w-full text-center">
          <summary className="cursor-pointer select-none">Services</summary>
          <div className="mt-3 flex flex-col space-y-3 text-sm">
            <RouterLink to="/Foodplante" onClick={() => setIsOpen(false)}>
              Food Plant Cleaning
            </RouterLink>
            <RouterLink to="/commercial-cleaning" onClick={() => setIsOpen(false)}>
              Commercial Cleaning
            </RouterLink>
            <RouterLink to="/Restaurantcleaning" onClick={() => setIsOpen(false)}>
              Restaurant Cleaning
            </RouterLink>
            <RouterLink to="/strip-and-wax" onClick={() => setIsOpen(false)}>
              Strip & Wax
            </RouterLink>
            <RouterLink to="/power-washing" onClick={() => setIsOpen(false)}>
              Power Washing
            </RouterLink>
            <RouterLink to="/Postconstructioncleaning" onClick={() => setIsOpen(false)}>
              Post Construction Cleaning
            </RouterLink>
            <RouterLink to="/Deepsteamcleaning" onClick={() => setIsOpen(false)}>
              Deep Steam Cleaning
            </RouterLink>
          </div>
        </details>
          <Link to="/PPS-Digtal" className="hover:text-[#0094D9] transition">
            PPS Digtal
          </Link>

        <Link to="/#testimonials" onClick={() => setIsOpen(false)}>
          Client
        </Link>
        <Link to="/#contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}

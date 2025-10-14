import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-poppins z-30 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="ARCON Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex space-x-10 text-black font-medium uppercase tracking-wider absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/#home"
            className="hover:text-[#0094D9] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-[#0094D9] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/#services"
            className="hover:text-[#0094D9] transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/#testimonials"
            className="hover:text-[#0094D9] transition"
            onClick={() => setIsOpen(false)}
          >
            Client
          </Link>
          <Link
            to="/#contact"
            className="hover:text-[#0094D9] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div
          className="lg:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="text-black" /> : <FiMenu className="text-black" />}
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 p-3 mt-20 w-full bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold uppercase tracking-wider transition-transform duration-300 ${
          isOpen ? "translate-x-0 max-h-[80vh] overflow-y-auto" : "-translate-x-full"
        }`}
      >
        <Link
          to="/#home"
          className="hover:text-[#0094D9] transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/#about"
          className="hover:text-[#0094D9] transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/#services"
          className="hover:text-[#0094D9] transition"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/#testimonials"
          className="hover:text-[#0094D9] transition"
          onClick={() => setIsOpen(false)}
        >
          Client
        </Link>
        <Link
          to="/#contact"
          className="hover:text-[#0094D9] transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

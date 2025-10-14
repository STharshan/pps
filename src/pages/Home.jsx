import React from 'react'
import AboutSection from "../components/About"
import ContactSection from "../components/Contact"
import CivitasFAQ from "../components/FAQ"
import HeroSection from "../components/Header"
import PartnersCarousel from "../components/Partner"
import ServicesSection from "../components/Services"
import TestimonialsSection from "../components/Testimonail"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnersCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <CivitasFAQ />
      <ContactSection />
    </div>
  )
}

export default Home

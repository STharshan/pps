import React from 'react'
import AboutSection from "../components/Home/About"
import ContactSection from "../components/Home/Contact"
import CivitasFAQ from "../components/Home/FAQ"
import HeroSection from "../components/Home/Header"
import PartnersCarousel from "../components/Home/Partner"
import ServicesSection from "../components/Home/Services"
import TestimonialsSection from "../components/Home/Testimonail"
import WhyChooseUs from "../components/Home/WhyChooseUs"
import KeyPartnerSection from '../components/Primary'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnersCarousel />
      <AboutSection />
      <WhyChooseUs />
      <KeyPartnerSection />
      <ServicesSection />
      <TestimonialsSection />
      <CivitasFAQ />
      <ContactSection />
    </div>
  )
}

export default Home

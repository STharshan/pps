import AboutSection from "./components/About"
import ContactSection from "./components/Contact"
import CivitasFAQ from "./components/FAQ"
import Footer from "./components/Footer"
import HeroSection from "./components/Header"
import Navbar from "./components/Navbar"
import PartnersCarousel from "./components/Partner"
import ServicesSection from "./components/Services"
import TestimonialsSection from "./components/Testimonail"
import WhyChooseUs from "./components/WhyChooseUs"


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <CivitasFAQ />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App

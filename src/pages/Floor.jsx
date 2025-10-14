import React from 'react'
import FloorHeroSection from '../components/Service/Floor/FloorHero'
import FloorWhyChooseSection from '../components/Service/Floor/FloorWhy'
import IdealSurfacesSection from '../components/Service/Floor/SurFace'
import FloorProcess from '../components/Service/Floor/FloorProcess'
import FloorFAQSection from '../components/Service/Floor/FloorFaq'
import ContactSection from '../components/Service/Floor/FloorContact'
import TestimonialSection from '../components/Service/Floor/FloorTest'

const Floor = () => {
  return (
    <div>
      <FloorHeroSection />
      <FloorWhyChooseSection />
      <IdealSurfacesSection />
      <FloorProcess />
      <TestimonialSection />
      <FloorFAQSection />
      <ContactSection />
    </div>
  )
}

export default Floor

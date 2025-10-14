import React from 'react'
import ComHeroSection from '../components/Service/Commercial/ComHero'
import ComWhyChooseSection from '../components/Service/Commercial/ComWhy'
import ComIndustriesSection from '../components/Service/Commercial/ComServe'
import ProcessSection from '../components/Service/Commercial/ComProcess'
import TestimonialsSection from '../components/Service/Commercial/ComClient'
import ComFAQSection from '../components/Service/Commercial/ComFaq'
import CallToActionSection from '../components/Service/Commercial/ComCall'

const Commercial = () => {
  return (
    <div>
      <ComHeroSection />
      <ComWhyChooseSection />
      <ComIndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ComFAQSection />
      <CallToActionSection />
    </div>
  )
}

export default Commercial

import React from 'react'
import PowerHeroSection from '../components/Service/Powerwashing/PowerHero'
import WhyPowerWashingMatters from '../components/Service/Powerwashing/PowerWhy'
import IdealSurfaces from '../components/Service/Powerwashing/PowerIdeal'
import PowerWashingProcess from '../components/Service/Powerwashing/PowerProcess'
import PowerFAQSection from '../components/Service/Powerwashing/PowerFaq'
import PowerTestimonials from '../components/Service/Powerwashing/PowerTest'
import PowerContact from '../components/Service/Powerwashing/PowerContact'

const Powerwashing = () => {
  return (
    <div>
      <PowerHeroSection />
      <WhyPowerWashingMatters />
      <IdealSurfaces />
      <PowerWashingProcess />
      <PowerTestimonials />
      <PowerFAQSection />
      <PowerContact />
    </div>
  )
}

export default Powerwashing

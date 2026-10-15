import React from 'react'
import Hero from '../components/hero/Hero'
import Highlights from '../components/sections/Highlights'
import AboutSection from '../components/sections/AboutSection'
import VisionMission from '../components/sections/VisionMission'
import LeadershipSection from '../components/sections/LeadershipSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import AcademicsSection from '../components/sections/AcademicsSection'
import FacilitiesSection from '../components/sections/FacilitiesSection'
import HostelSection from '../components/sections/HostelSection'
import AchievementsSection from '../components/sections/AchievementsSection'
import GalleryPreview from '../components/sections/GalleryPreview'
import AdmissionCTA from '../components/sections/AdmissionCTA'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <AboutSection />
      <VisionMission />
      <LeadershipSection />
      <WhyChooseUs />
      <AcademicsSection />
      <FacilitiesSection />
      <HostelSection />
      <AchievementsSection />
      <GalleryPreview />
      <AdmissionCTA />
      <ContactSection />
    </div>
  )
}

export default Home
import React from 'react'
import { motion } from 'framer-motion'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'
import AboutSection from '../components/sections/AboutSection'
import VisionMission from '../components/sections/VisionMission'
import LeadershipSection from '../components/sections/LeadershipSection'

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About Our Institution
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Learn about Saraswati Vidya Niketan Inter College's legacy, vision, and leadership
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />
      <VisionMission />
      <LeadershipSection />
    </div>
  )
}

export default About
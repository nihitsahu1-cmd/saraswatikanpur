import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'

const VisionMission = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Vision & Mission"
          description="Guiding principles that shape our educational journey"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-deepNavy rounded-lg p-8 text-white cursor-pointer hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
            <div className="relative z-10 group-hover:text-white transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-antiqueGold/20 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Target size={24} className="text-antiqueGold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-antiqueGold group-hover:text-white transition-colors duration-300">
                  Vision
                </h3>
              </div>
              <p className="text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                {schoolData.vision}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-softPeach rounded-lg p-8 cursor-pointer hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
            <div className="relative z-10 group-hover:text-white transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Compass size={24} className="text-warmOrange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-deepNavy group-hover:text-white transition-colors duration-300">
                  Mission
                </h3>
              </div>
              <ul className="space-y-3">
                {schoolData.mission.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-warmOrange rounded-full mt-2 flex-shrink-0 group-hover:bg-white transition-colors duration-300" />
                    <span className="text-mutedText group-hover:text-white/90 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission
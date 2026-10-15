import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'

const AchievementsSection = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20 bg-softPeach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Excellence"
          title="Our Achievements"
          description="Celebrating success in academics, sports, and cultural activities"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {schoolData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-antiqueGold/20 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-warmOrange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    {index % 2 === 0 ? (
                      <Trophy size={20} className="text-warmOrange group-hover:text-white transition-colors duration-300" />
                    ) : (
                      <Star size={20} className="text-warmOrange group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <p className="text-mutedText text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
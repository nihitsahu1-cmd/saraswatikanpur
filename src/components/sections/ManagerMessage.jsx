import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'

const ManagerMessage = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Manager's Message"
          description="Guiding the institution towards excellence"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-softPeach to-warmIvory rounded-lg p-8 md:p-12 shadow-lg"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-deepNavy rounded-full flex items-center justify-center">
                <Award size={32} className="text-antiqueGold" />
              </div>
            </div>

            <p className="text-lg text-mutedText leading-relaxed text-center mb-8">
              {schoolData.manager.message}
            </p>

            <div className="text-center pt-6 border-t border-antiqueGold/20">
              <h4 className="text-xl font-serif font-semibold text-deepNavy">
                {schoolData.manager.name}
              </h4>
              <p className="text-sm text-warmOrange font-medium">
                {schoolData.manager.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ManagerMessage
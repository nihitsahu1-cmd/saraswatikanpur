import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

const AcademicsSection = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Excellence"
          title="Our Academic Programs"
          description="Comprehensive education from pre-primary to senior secondary"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {schoolData.academics.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-warmIvory rounded-lg p-6 border border-antiqueGold/20 hover:border-warmOrange/50 transition-all duration-300 cursor-pointer hover:shadow-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap size={24} className="text-warmOrange group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-serif font-semibold text-deepNavy group-hover:text-white transition-colors duration-300">
                    {program.level}
                  </h3>
                </div>
                <div className="space-y-2">
                  {program.classes.map((className, classIndex) => (
                    <div key={classIndex} className="text-sm text-mutedText group-hover:text-white/90 transition-colors duration-300">
                      {className}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="tertiary" className="group" asChild>
            <a href="/academics">
              Explore Academics
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AcademicsSection
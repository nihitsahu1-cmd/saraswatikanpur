import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'
import campus1 from '../../assets/Images/campus1.jpeg'
import classroom1 from '../../assets/Images/classroom1.jpg'
import laboratory1 from '../../assets/Images/laboratory1.jpg'
import library1 from '../../assets/Images/library1.jpg'

const FacilitiesSection = () => {
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
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Campus & Facilities"
          description="Modern facilities supporting holistic education"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-lg aspect-square">
            <img src={campus1} alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/80 via-deepNavy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-serif font-semibold text-lg">Campus</h3>
              <p className="text-white/80 text-sm">Spacious and well-maintained campus</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-lg aspect-square">
            <img src={classroom1} alt="Classrooms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/80 via-deepNavy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-serif font-semibold text-lg">Classrooms</h3>
              <p className="text-white/80 text-sm">Modern and well-equipped classrooms</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-lg aspect-square">
            <img src={laboratory1} alt="Laboratories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/80 via-deepNavy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-serif font-semibold text-lg">Laboratories</h3>
              <p className="text-white/80 text-sm">Science and computer laboratories</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-lg aspect-square">
            <img src={library1} alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/80 via-deepNavy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-serif font-semibold text-lg">Library</h3>
              <p className="text-white/80 text-sm">Well-stocked library with diverse resources</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="tertiary" className="group" asChild>
            <a href="/facilities">
              View All Facilities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FacilitiesSection
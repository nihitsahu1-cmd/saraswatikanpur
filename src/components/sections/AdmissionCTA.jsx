import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { Button } from '../common/Button'

const AdmissionCTA = () => {
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
    initial: { opacity: 0, y: 20 },
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
    <section id="admissions" className="py-20 bg-warmOrange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap size={40} className="text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4"
          >
            Join Our Institution
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Take the first step towards quality education. Admissions are open for the upcoming academic session.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg" className="group" asChild>
              <a href="/admissions">
                Admission Enquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="navy" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdmissionCTA
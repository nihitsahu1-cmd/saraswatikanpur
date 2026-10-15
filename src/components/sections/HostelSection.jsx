import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

const HostelSection = () => {
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
    <section className="py-20 bg-deepNavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Residential Life"
          title="Hostel Facilities"
          description="A supportive environment beyond the classroom"
          className="text-white"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/hostel1.jpg"
                alt="Hostel Facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-antiqueGold/30 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-antiqueGold/20 rounded-lg flex items-center justify-center">
                <Home size={32} className="text-antiqueGold" />
              </div>
              <h3 className="text-3xl font-serif font-semibold text-antiqueGold">
                Home Away From Home
              </h3>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              Our hostel provides a safe, comfortable, and nurturing environment where students can focus on their academic and personal growth. With dedicated wardens and a supportive community, we ensure every student feels at home.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-antiqueGold rounded-full" />
                <span className="text-white/90">Safe and secure environment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-antiqueGold rounded-full" />
                <span className="text-white/90">Nutritious meals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-antiqueGold rounded-full" />
                <span className="text-white/90">Study-friendly atmosphere</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-antiqueGold rounded-full" />
                <span className="text-white/90">Recreational facilities</span>
              </div>
            </div>

            <Button variant="gold" size="lg" className="group" asChild>
              <a href="/hostel">
                Hostel Enquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HostelSection
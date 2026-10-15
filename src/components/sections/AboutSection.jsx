import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'
import aboutImage from '../../assets/Images/students1.jpeg'

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Welcome to Saraswati Vidya Niketan"
          description="A place where knowledge meets character building"
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
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="School Campus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-antiqueGold/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-mutedText leading-relaxed">
              {schoolData.about.description}
            </p>

            <div className="space-y-4">
              {schoolData.about.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warmOrange rounded-full" />
                  <span className="text-mutedText">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="tertiary" className="group" asChild>
              <a href="/about">
                Discover Our Institution
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
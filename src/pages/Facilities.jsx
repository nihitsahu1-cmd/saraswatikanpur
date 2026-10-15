import React from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'
import campus1 from '../assets/Images/campus1.jpeg'
import campus2 from '../assets/Images/campus2.jpeg'
import classroom1 from '../assets/Images/classroom1.jpg'
import classroom2 from '../assets/Images/classroom2.jpg'
import laboratory1 from '../assets/Images/laboratory1.jpg'
import laboratory2 from '../assets/Images/laboratory2.jpg'
import library1 from '../assets/Images/library1.jpg'
import library2 from '../assets/Images/library2.jpg'
import sports from '../assets/Images/sports.jpeg'
import sports1 from '../assets/Images/sports1.jpeg'
import hostel1 from '../assets/Images/hostel1.jpg'
import hostel2 from '../assets/Images/hostel2.jpg'
import conference from '../assets/Images/conference.jpg'

const Facilities = () => {
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
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="w-16 h-16 bg-antiqueGold/20 rounded-lg flex items-center justify-center">
              <Building2 size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Campus & Facilities
              </h1>
              <p className="text-xl text-white/80">
                Modern infrastructure supporting holistic education
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Our Facilities"
            description="State-of-the-art facilities for comprehensive development"
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {schoolData.facilities.map((facility, index) => {
              const facilityImages = [
                campus1,
                classroom1,
                laboratory1,
                library1,
                sports,
                conference,
                hostel1,
                campus2
              ]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img
                      src={facilityImages[index]}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/80 via-deepNavy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-serif font-semibold text-xl">
                        {facility.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-mutedText">
                    {facility.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-softPeach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Environment"
            title="Campus Overview"
            description="A safe and inspiring learning environment"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-lg text-mutedText leading-relaxed mb-6">
                Our campus is designed to provide a safe, stimulating, and supportive environment for learning. With spacious classrooms, well-equipped laboratories, a comprehensive library, sports facilities, and dedicated activity spaces, we ensure that students have access to everything they need for their holistic development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warmOrange mb-2">50+</div>
                  <div className="text-sm text-mutedText">Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warmOrange mb-2">Modern</div>
                  <div className="text-sm text-mutedText">Labs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warmOrange mb-2">Large</div>
                  <div className="text-sm text-mutedText">Library</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warmOrange mb-2">Sports</div>
                  <div className="text-sm text-mutedText">Complex</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Facilities
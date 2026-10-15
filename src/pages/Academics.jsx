import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'

const Academics = () => {
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
              <GraduationCap size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Academics
              </h1>
              <p className="text-xl text-white/80">
                Comprehensive education from pre-primary to senior secondary
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Programs"
            title="Academic Structure"
            description="Structured learning pathways for every stage of education"
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {schoolData.academics.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-warmIvory rounded-lg p-8 border border-antiqueGold/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center">
                    <GraduationCap size={24} className="text-warmOrange" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-deepNavy">
                    {program.level}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {program.classes.map((className, classIndex) => (
                    <div
                      key={classIndex}
                      className="bg-white rounded-md p-4 text-center border border-antiqueGold/10"
                    >
                      <span className="text-deepNavy font-medium">{className}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20 bg-softPeach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Academic Philosophy"
            description="Building strong foundations for lifelong learning"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-lg text-mutedText leading-relaxed mb-6">
                At Saraswati Vidya Niketan Inter College, we believe in providing quality and meaningful education that builds strong academic foundations. Our approach focuses on:
              </p>
              <ul className="space-y-3">
                {schoolData.mission.slice(0, 6).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warmOrange rounded-full mt-2 flex-shrink-0" />
                    <span className="text-mutedText">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Academics
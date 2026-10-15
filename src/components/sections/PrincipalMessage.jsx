import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import cultural7 from '../../assets/Images/cultural7.jpeg'

const PrincipalMessage = () => {
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
    <section className="py-20 bg-softPeach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Principal's Message"
          description="Words of wisdom from our educational leader"
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
            <div className="aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-deepNavy/10">
              <img
                src={cultural7}
                alt="Principal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Quote size={48} className="text-antiqueGold/30" />
            
            <p className="text-lg text-mutedText leading-relaxed italic">
              {schoolData.principal.message}
            </p>

            <div className="pt-6 border-t border-antiqueGold/20">
              <h4 className="text-xl font-serif font-semibold text-deepNavy">
                {schoolData.principal.name}
              </h4>
              <p className="text-sm text-warmOrange font-medium">
                {schoolData.principal.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrincipalMessage
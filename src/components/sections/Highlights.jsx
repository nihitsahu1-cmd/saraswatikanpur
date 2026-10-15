import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Users, Trophy, Home, Bus } from 'lucide-react'

const Highlights = () => {
  const highlights = [
    { icon: BookOpen, title: 'Quality Education', description: 'Strong academic foundations' },
    { icon: Heart, title: 'Character & Discipline', description: 'Moral values and character building' },
    { icon: Users, title: 'Holistic Development', description: 'Overall personality growth' },
    { icon: Trophy, title: 'Sports & Activities', description: 'Extra-curricular excellence' },
    { icon: Home, title: 'Hostel Facility', description: 'Comfortable accommodation' },
    { icon: Bus, title: 'Safe Transport', description: 'Reliable bus service' }
  ]

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
    <section className="py-16 bg-softPeach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-antiqueGold/20 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-warmOrange" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-mutedText">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
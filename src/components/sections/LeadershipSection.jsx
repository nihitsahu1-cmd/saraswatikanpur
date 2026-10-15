import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import TilakSingh from '../../assets/Images/Tilak_Singh.jpeg'
import JyotiSrivastava from '../../assets/Images/Jyoti_Srivastava.jpeg'
import RajeshPal from '../../assets/Images/Rajesh_Pal.jpeg'

const LeadershipSection = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const leadershipImages = {
    'Tilak_Singh.jpeg': TilakSingh,
    'Jyoti_Srivastava.jpeg': JyotiSrivastava,
    'Rajesh_Pal.jpeg': RajeshPal
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-softPeach/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-antiqueGold/20 to-warmOrange/20 text-warmOrange text-sm font-semibold uppercase tracking-widest rounded-full border border-antiqueGold/30">
              Leadership
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deepNavy mb-6"
          >
            <span className="bg-gradient-to-r from-deepNavy via-antiqueGold to-warmOrange bg-clip-text text-transparent">
              Meet Our Leadership
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">& Administration</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-mutedText max-w-2xl mx-auto"
          >
            The dedicated team guiding our institution towards excellence
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-antiqueGold to-transparent mx-auto mt-8"
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-0"
        >
          {schoolData.leadership.map((leader, index) => {
            const isEven = index % 2 === 0
            const bgColor = isEven ? 'bg-softPeach' : 'bg-warmIvory'
            const imageOrder = isEven ? 'lg:order-first' : 'lg:order-last'
            const contentOrder = isEven ? 'lg:order-last' : 'lg:order-first'

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${bgColor} py-16 lg:py-20`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                      variants={imageVariants}
                      className={`${imageOrder} relative`}
                    >
                      <div className="relative max-w-sm mx-auto lg:mx-0">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          {/* Animated border */}
                          <motion.div
                            className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-antiqueGold via-warmOrange to-antiqueGold opacity-75 blur`}
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            style={{
                              backgroundSize: '200% 200%',
                            }}
                          />
                          
                          {/* Photo container */}
                          <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ${leader.photoBg}`}>
                            <img
                              src={leadershipImages[leader.image]}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                        {/* Decorative elements */}
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-antiqueGold/60 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-warmOrange/60 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-warmOrange/60 rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-antiqueGold/60 rounded-br-lg" />
                        
                        {/* Glowing orbs */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-antiqueGold/30 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-warmOrange/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                        
                        {/* Sparkle dots */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-antiqueGold rounded-full animate-ping" />
                        <div className="absolute bottom-8 left-8 w-2 h-2 bg-warmOrange rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      variants={itemVariants}
                      className={`${contentOrder} space-y-6`}
                    >
                      <div className="inline-block">
                        <span className="text-sm font-semibold text-warmOrange uppercase tracking-wider">
                          {leader.role}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-serif font-bold text-deepNavy">
                        {leader.name}
                      </h3>
                      
                      <div className="flex items-center space-x-2">
                        <div className="h-px w-12 bg-antiqueGold" />
                        <span className="text-sm text-mutedText font-medium">
                          Education: {leader.education}
                        </span>
                      </div>

                      <div className="relative">
                        <Quote size={32} className="text-antiqueGold/30 mb-4" />
                        <p className="text-lg text-mutedText leading-relaxed">
                          {leader.message}
                        </p>
                      </div>

                      <div className="pt-4">
                        <div className="inline-flex items-center space-x-2 bg-deepNavy text-white px-4 py-2 rounded-full text-sm font-medium">
                          <span>{leader.role}</span>
                          <span className="text-antiqueGold">•</span>
                          <span>Saraswati Vidya Niketan Inter College</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection

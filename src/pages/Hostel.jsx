import React from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Shield, Utensils, BookOpen, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/common/SectionHeading'
import { Button } from '../components/common/Button'

const Hostel = () => {
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

  const facilities = [
    { icon: Shield, title: 'Safe Environment', description: '24/7 security and supervision' },
    { icon: Users, title: 'Comfortable Rooms', description: 'Well-ventilated and clean living spaces' },
    { icon: Utensils, title: 'Nutritious Meals', description: 'Balanced diet prepared in hygienic kitchen' },
    { icon: BookOpen, title: 'Study Hours', description: 'Dedicated time for self-study and learning' }
  ]

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
              <Home size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Hostel Life
              </h1>
              <p className="text-xl text-white/80">
                A supportive environment beyond the classroom
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-warmIvory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/hostel2.jpg"
                  alt="Hostel Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-antiqueGold/20 rounded-lg -z-10" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-deepNavy">
                Home Away From Home
              </h2>
              <p className="text-lg text-mutedText leading-relaxed">
                Our hostel provides a safe, comfortable, and nurturing environment where students can focus on their academic and personal growth. With dedicated wardens and a supportive community, we ensure every student feels at home.
              </p>
              <Button variant="primary" size="lg" className="group" asChild>
                <a href="#enquiry">
                  Hostel Enquiry
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Amenities"
            title="Hostel Facilities"
            description="Everything needed for comfortable stay and focused study"
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-softPeach rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-warmOrange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-warmOrange" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-mutedText">
                    {facility.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry" className="py-20 bg-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Hostel Enquiry"
            description="Contact us for hostel admission information"
            className="text-white"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-white/80 mb-8">
              For detailed information about hostel facilities, fees, and admission process, please contact our school office or fill out the enquiry form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="/contact">Contact School Office</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:9935244883">Call: 9935244883</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hostel
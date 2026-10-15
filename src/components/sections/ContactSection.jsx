import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

const ContactSection = () => {
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
    <section className="py-20 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="We're here to answer your questions"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-warmOrange" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                    Phone
                  </h3>
                  <div className="space-y-1">
                    {schoolData.phone.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="block text-mutedText hover:text-warmOrange transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-warmOrange" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${schoolData.email}`}
                    className="text-mutedText hover:text-warmOrange transition-colors"
                  >
                    {schoolData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-warmOrange" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                    Address
                  </h3>
                  <p className="text-mutedText">
                    {schoolData.address}
                  </p>
                </div>
              </div>
            </div>

            <Button variant="tertiary" className="group" asChild>
              <a href="/contact">
                Send Us a Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.755336792901!2d80.1611105871582!3d26.239298299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c531420b36147%3A0x179d628b2beef493!2sSaraswati%20Vidya%20Niketan%20Inter%20College%20Patara%20Kanpur!5e0!3m2!1sen!2sus!4v1787306228952!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="School Location"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
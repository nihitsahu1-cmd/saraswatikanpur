import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'
import ContactForm from '../components/forms/ContactForm'

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              Get in touch with Saraswati Vidya Niketan Inter College
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Information"
            description="Reach out to us through any of these channels"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-softPeach rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-warmOrange" />
              </div>
              <h3 className="font-semibold text-deepNavy mb-2">Phone</h3>
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

            <div className="bg-softPeach rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-warmOrange" />
              </div>
              <h3 className="font-semibold text-deepNavy mb-2">Email</h3>
              <a
                href={`mailto:${schoolData.email}`}
                className="text-mutedText hover:text-warmOrange transition-colors break-all"
              >
                {schoolData.email}
              </a>
            </div>

            <div className="bg-softPeach rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-warmOrange" />
              </div>
              <h3 className="font-semibold text-deepNavy mb-2">Address</h3>
              <p className="text-mutedText text-sm">
                {schoolData.address}
              </p>
            </div>

            <div className="bg-softPeach rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-warmOrange" />
              </div>
              <h3 className="font-semibold text-deepNavy mb-2">Office Hours</h3>
              <p className="text-mutedText text-sm">
                Mon - Sat: 8:00 AM - 4:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-warmIvory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Send a Message"
            title="Contact Form"
            description="Fill out the form below and we'll get back to you"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Location"
            title="Find Us"
            description="Visit our campus at the following location"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-softPeach rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.755336792901!2d80.1611105871582!3d26.239298299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c531420b36147%3A0x179d628b2beef493!2sSaraswati%20Vidya%20Niketan%20Inter%20College%20Patara%20Kanpur!5e0!3m2!1sen!2sus!4v1787306228952!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="School Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
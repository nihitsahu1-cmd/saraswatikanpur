import React from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Phone, Mail } from 'lucide-react'
import { feeData } from '../data/feeData'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'
import { Button } from '../components/common/Button'

const Fees = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
              <IndianRupee size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Fee Structure
              </h1>
              <p className="text-xl text-white/80">
                Transparent and affordable education fees
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment in Education"
            title="Monthly Fee Structure"
            description="Quality education at affordable rates"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-softPeach rounded-lg overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-deepNavy text-white">
                      <th className="text-left py-4 px-6 font-serif font-semibold">Class</th>
                      <th className="text-right py-4 px-6 font-serif font-semibold">Monthly Fee</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={containerVariants}
                  >
                    {feeData.classes.map((classInfo, index) => (
                      <motion.tr
                        key={index}
                        variants={itemVariants}
                        className="border-b border-antiqueGold/20 last:border-0 hover:bg-white/50 transition-colors"
                      >
                        <td className="py-4 px-6 font-medium text-deepNavy">{classInfo.class}</td>
                        <td className="py-4 px-6 text-right font-bold text-warmOrange">₹{classInfo.monthlyFee}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-8 bg-warmIvory rounded-lg p-6 border-l-4 border-warmOrange">
              <h3 className="font-serif font-semibold text-deepNavy mb-2">Important Note</h3>
              <p className="text-mutedText mb-4">{feeData.note}</p>
              <p className="text-sm text-mutedText">
                Fees are payable monthly. Please contact the school office for complete fee details including admission fees, examination fees, and other applicable charges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Fee Details */}
      <section className="py-20 bg-softPeach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Need More Information?"
            title="Contact School Office"
            description="Our staff is available to answer all your fee-related queries"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-warmOrange" />
                </div>
                <div>
                  <h3 className="font-semibold text-deepNavy">Call Us</h3>
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

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warmOrange/10 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-warmOrange" />
                </div>
                <div>
                  <h3 className="font-semibold text-deepNavy">Email Us</h3>
                  <a
                    href={`mailto:${schoolData.email}`}
                    className="text-mutedText hover:text-warmOrange transition-colors"
                  >
                    {schoolData.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-antiqueGold/20">
                <Button variant="primary" size="lg" className="w-full" asChild>
                  <a href="/contact">Send Enquiry</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Fees
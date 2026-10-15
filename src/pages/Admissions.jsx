import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { feeData } from '../data/feeData'
import { SectionHeading } from '../components/common/SectionHeading'
import { Button } from '../components/common/Button'
import AdmissionForm from '../components/forms/AdmissionForm'

const Admissions = () => {
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
              <FileText size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Admissions
              </h1>
              <p className="text-xl text-white/80">
                Join our institution and shape your future
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Welcome"
            title="Admission Information"
            description="Everything you need to know about joining Saraswati Vidya Niketan"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-softPeach rounded-lg p-8">
              <p className="text-lg text-mutedText leading-relaxed mb-6">
                At Saraswati Vidya Niketan Inter College, we welcome students who are eager to learn, grow, and contribute to our community. Our admission process is designed to be transparent and accessible to all families.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-warmOrange mt-1 flex-shrink-0" />
                  <span className="text-mutedText">Quality education in a disciplined environment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-warmOrange mt-1 flex-shrink-0" />
                  <span className="text-mutedText">Focus on character and moral development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-warmOrange mt-1 flex-shrink-0" />
                  <span className="text-mutedText">Holistic approach to student growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Classes Available */}
      <section className="py-20 bg-warmIvory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="Classes Available"
            description="From pre-primary to senior secondary education"
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {feeData.classes.map((classInfo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 text-center border border-antiqueGold/20 hover:border-warmOrange/50 transition-colors"
              >
                <h3 className="text-lg font-serif font-semibold text-deepNavy mb-2">
                  {classInfo.class}
                </h3>
                <p className="text-sm text-mutedText">
                  Admissions Open
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fee Structure Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment"
            title="Fee Structure"
            description="Affordable quality education"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-softPeach rounded-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-antiqueGold/30">
                      <th className="text-left py-3 px-4 font-serif font-semibold text-deepNavy">Class</th>
                      <th className="text-right py-3 px-4 font-serif font-semibold text-deepNavy">Monthly Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeData.classes.map((classInfo, index) => (
                      <tr key={index} className="border-b border-antiqueGold/10 last:border-0">
                        <td className="py-3 px-4 text-mutedText">{classInfo.class}</td>
                        <td className="py-3 px-4 text-right font-medium text-deepNavy">₹{classInfo.monthlyFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-mutedText mt-4 text-center">
                * Additional charges such as admission fees, examination fees, and other charges should be confirmed with the school office.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button variant="tertiary" className="group" asChild>
                <a href="/fees">
                  View Complete Fee Structure
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-20 bg-softPeach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply Now"
            title="Admission Enquiry Form"
            description="Fill out the form below to enquire about admission"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <AdmissionForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warmOrange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our school office for admission assistance
            </p>
            <Button variant="secondary" size="lg" className="group" asChild>
              <a href="/contact">
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
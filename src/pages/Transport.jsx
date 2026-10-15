import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bus, ChevronDown, Phone, MapPin } from 'lucide-react'
import { transportData } from '../data/transportData'
import { schoolData } from '../data/schoolData'
import { SectionHeading } from '../components/common/SectionHeading'
import { Button } from '../components/common/Button'

const Transport = () => {
  const [expandedBus, setExpandedBus] = useState(null)
  const [language, setLanguage] = useState('en')

  const toggleBus = (busId) => {
    setExpandedBus(expandedBus === busId ? null : busId)
  }

  const switchLanguage = (lang) => {
    setLanguage(lang)
  }

  const getText = (textObj) => {
    return textObj[language] || textObj.en
  }

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
              <Bus size={32} className="text-antiqueGold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                {getText(transportData.title)}
              </h1>
              <p className="text-xl text-white/80">
                {language === 'en' ? 'Safe and reliable transport service' : 'सुरक्षित और विश्वसनीय परिवहन सेवा'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Language Switcher */}
      <section className="py-8 bg-warmIvory border-b border-antiqueGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-mutedText">
              {getText(transportData.languageNote)}
            </p>
            <div 
              className="flex bg-white rounded-lg p-1 shadow-sm"
              role="group"
              aria-label="Select transport language"
            >
              <button
                onClick={() => switchLanguage('en')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-warmOrange text-white shadow-sm'
                    : 'text-mutedText hover:text-deepNavy'
                }`}
                aria-pressed={language === 'en'}
              >
                English
              </button>
              <button
                onClick={() => switchLanguage('hi')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  language === 'hi'
                    ? 'bg-warmOrange text-white shadow-sm'
                    : 'text-mutedText hover:text-deepNavy'
                }`}
                aria-pressed={language === 'hi'}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'en' ? 'Transport Service' : 'परिवहन सेवा'}
            title={language === 'en' ? 'Bus Routes & Information' : 'बस मार्ग और जानकारी'}
            description={language === 'en' ? 'Comprehensive transport network covering multiple areas' : 'विभिन्न क्षेत्रों को कवर करने वाला व्यापक परिवहन नेटवर्क'}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-softPeach rounded-lg p-8"
            >
              <p className="text-lg text-mutedText leading-relaxed mb-6">
                {getText(transportData.description)}
              </p>
              <p className="text-sm text-mutedText">
                {getText(transportData.note)}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bus Routes */}
      <section className="py-20 bg-warmIvory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'en' ? 'Route Information' : 'मार्ग जानकारी'}
            title={language === 'en' ? 'Bus Routes' : 'बस मार्ग'}
            description={language === 'en' ? 'Click on each bus to view detailed route information' : 'विस्तृत मार्ग जानकारी देखने के लिए प्रत्येक बस पर क्लिक करें'}
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {transportData.buses.map((bus) => (
              <motion.div
                key={bus.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleBus(bus.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-softPeach transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-warmOrange/10 rounded-lg flex items-center justify-center">
                      <Bus size={20} className="text-warmOrange" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-deepNavy">{getText(bus.name)}</h3>
                      <p className="text-sm text-mutedText">
                        {bus.routes.length} {language === 'en' ? 'route(s)' : 'मार्ग'}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-mutedText transition-transform ${
                      expandedBus === bus.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedBus === bus.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-antiqueGold/20"
                    >
                      <motion.div
                        key={language}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="p-6 space-y-4"
                      >
                        {bus.routes.map((route) => (
                          <div key={route.id} className="bg-softPeach rounded-lg p-4">
                            <h4 className="font-medium text-deepNavy mb-2">{getText(route.label)}</h4>
                            <div className="flex flex-wrap gap-2">
                              {route.locations[language].map((stop, index) => (
                                <React.Fragment key={index}>
                                  <span className="text-sm text-mutedText">{stop}</span>
                                  {index < route.locations[language].length - 1 && (
                                    <span className="text-warmOrange">→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transport Fees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'en' ? 'Pricing' : 'मूल्य निर्धारण'}
            title={language === 'en' ? 'Transport Fees' : 'परिवहन शुल्क'}
            description={language === 'en' ? 'Route-based fee structure' : 'मार्ग-आधारित शुल्क संरचना'}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-softPeach rounded-lg p-8"
            >
              <div className="space-y-4">
                {transportData.transportFees.map((fee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-antiqueGold/20 last:border-0"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin size={18} className="text-warmOrange" />
                      <span className="font-medium text-deepNavy">{getText(fee.route)}</span>
                    </div>
                    <span className="text-warmOrange font-semibold">{getText(fee.fee)}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-mutedText mt-6 text-center">
                {language === 'en' 
                  ? '* Please contact the school office for current transport fee information and exact charges for your location.'
                  : '* वर्तमान परिवहन शुल्क की जानकारी और आपके स्थान के लिए सटीक शुल्क के लिए कृपया विद्यालय कार्यालय से संपर्क करें।'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Transport */}
      <section className="py-20 bg-deepNavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              {language === 'en' ? 'Need Transport Information?' : 'परिवहन जानकारी चाहिए?'}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Contact our school office for detailed route information and fee details'
                : 'विस्तृत मार्ग जानकारी और शुल्क विवरण के लिए हमारे विद्यालय कार्यालय से संपर्क करें'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href={`tel:${schoolData.phone[0]}`}>
                  <Phone size={18} className="mr-2" />
                  {schoolData.phone[0]}
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">
                  {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Transport
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Calendar } from 'lucide-react'
import { schoolData } from '../../data/schoolData'

const TopStrip = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-deepNavy text-white h-10 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 h-full relative z-10">
        <div className="flex items-center justify-between h-full">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-6 text-sm"
          >
            <motion.a 
              href={`tel:${schoolData.phone[0]}`} 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={16} className="text-antiqueGold" />
                <motion.div 
                  className="absolute inset-0 bg-antiqueGold/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <span className="font-bold">{schoolData.phone[0]}</span>
            </motion.a>
            <motion.a 
              href={`mailto:${schoolData.email}`} 
              className="hidden xl:flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: -15 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={16} className="text-antiqueGold" />
                <motion.div 
                  className="absolute inset-0 bg-antiqueGold/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <span className="font-bold">{schoolData.email}</span>
            </motion.a>
          </motion.div>

          {/* Academic Session */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden sm:flex items-center gap-2 text-xs sm:text-sm"
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Calendar size={16} className="text-antiqueGold" />
              <motion.div 
                className="absolute inset-0 bg-antiqueGold/20 rounded-full blur-md opacity-0 hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <span className="text-white/90 font-bold whitespace-nowrap">
              Academic Session 2026–27
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-antiqueGold to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  )
}

export default TopStrip
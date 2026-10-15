import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'
import { navigationData } from '../../data/navigationData'
import { schoolData } from '../../data/schoolData'
import { Button } from '../common/Button'
import schoolLogo from '../../assets/Images/school_logo_english_Saraswati.png'
import TopStrip from './TopStrip'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem('school-theme') === 'night' ? 'night' : 'day'
  ))
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('school-theme', theme)
  }, [theme])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLoginDropdownOpen && !event.target.closest('.login-dropdown')) {
        setIsLoginDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLoginDropdownOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  }

  return (
    <>
      <TopStrip />
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 bg-warmIvory transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 h-20 sm:h-24">
          <div className="flex items-center justify-between h-full">
            {/* Logo and Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/" className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1 xl:flex-none xl:w-[280px]">
                <motion.img
                  src={schoolLogo}
                  alt="Saraswati Vidya Niketan Logo"
                  className="h-10 sm:h-14 w-auto rounded-full"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex min-w-0 flex-col">
                  <h1 className="text-deepNavy font-extrabold text-[clamp(12px,3.5vw,22px)] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    Saraswati Vidya Niketan
                  </h1>
                  <h2 className="text-deepNavy font-bold text-[clamp(11px,2.4vw,15px)] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    Inter College
                  </h2>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden xl:flex items-center gap-2 2xl:gap-4 ml-auto"
            >
              {navigationData.main.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="relative text-[14px] font-medium text-deepNavy hover:text-warmOrange transition-colors px-2 py-2 block"
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-warmOrange"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden xl:flex items-center gap-3 2xl:gap-6 ml-4 2xl:ml-8"
            >
              {/* Vertical Divider */}
              <div className="h-8 w-px bg-deepNavy/20" />
              
              {/* Login Dropdown */}
              <div className="relative login-dropdown">
                <motion.button
                  onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                  className="flex items-center gap-1 text-[14px] font-medium text-deepNavy hover:text-warmOrange transition-colors px-2 py-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Login</span>
                  <motion.div
                    animate={{ rotate: isLoginDropdownOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                {isLoginDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-antiqueGold/20 py-2 z-50"
                  >
                    <motion.a
                      href=""
                      onClick={() => setIsLoginDropdownOpen(false)}
                      className="block px-4 py-3 text-[14px] font-medium text-deepNavy hover:bg-warmIvory hover:text-warmOrange transition-colors"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Admin / Staff Login
                    </motion.a>
                    <motion.a
                      href=""
                      onClick={() => setIsLoginDropdownOpen(false)}
                      className="block px-4 py-3 text-[14px] font-medium text-deepNavy hover:bg-warmIvory hover:text-warmOrange transition-colors"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Student / Parent Login
                    </motion.a>
                  </motion.div>
                )}
              </div>

              {/* Admission CTA */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Button 
                  variant="primary" 
                  className="font-medium text-white bg-warmOrange hover:bg-terracotta px-3 py-2 rounded-[6px] text-[13px] whitespace-nowrap"
                  asChild
                >
                  <Link to="/admissions">Admission</Link>
                </Button>
              </motion.div>

              <button
                type="button"
                onClick={() => setTheme(current => current === 'day' ? 'night' : 'day')}
                className="p-2 text-deepNavy hover:text-warmOrange rounded-lg transition-colors"
                aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
                title={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
              >
                {theme === 'day' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
              <button
                type="button"
                onClick={() => setTheme(current => current === 'day' ? 'night' : 'day')}
                className="p-2 sm:p-3 text-deepNavy hover:text-warmOrange rounded-lg transition-colors"
                aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
                title={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
              >
                {theme === 'day' ? <Moon size={22} /> : <Sun size={22} />}
              </button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 sm:p-3 text-deepNavy hover:bg-deepNavy/5 rounded-lg transition-colors"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-50 xl:hidden"
          >
            <div className="absolute inset-0 bg-deepNavy/95 backdrop-blur-sm" />
            <div className="relative h-full flex flex-col bg-gradient-to-b from-warmIvory to-softPeach">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-deepNavy/10">
                <div className="flex items-center gap-3">
                  <img 
                    src={schoolLogo} 
                    alt="Saraswati Vidya Niketan Logo" 
                    className="h-10 sm:h-12 w-auto"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-deepNavy font-semibold text-[15px] sm:text-[18px] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      Saraswati Vidya Niketan
                    </h1>
                    <h2 className="text-deepNavy font-medium text-[12px] sm:text-[14px] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      Inter College
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-deepNavy hover:bg-deepNavy/5 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  {navigationData.main.map((item, index) => (
                    <motion.div
                      key={item.path}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        className={`block px-4 py-4 rounded-lg text-[18px] font-medium transition-colors
                          ${location.pathname === item.path
                            ? 'text-warmOrange bg-warmOrange/10'
                            : 'text-deepNavy hover:bg-deepNavy/5'
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Login Section */}
                <motion.div
                  custom={navigationData.main.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-6 pt-6 border-t border-deepNavy/10"
                >
                  <div className="px-4 py-2 text-antiqueGold font-semibold text-[16px]">Login</div>
                  <a
                    href=""
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-4 rounded-lg text-[18px] font-medium text-deepNavy hover:bg-deepNavy/5 transition-colors"
                  >
                    Admin / Staff Login
                  </a>
                  <a
                    href=""
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-4 rounded-lg text-[18px] font-medium text-deepNavy hover:bg-deepNavy/5 transition-colors"
                  >
                    Student / Parent Login
                  </a>
                </motion.div>

                <motion.div
                  custom={navigationData.main.length + 3}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-8"
                >
                  <Button 
                    variant="primary" 
                    className="w-full font-medium text-white bg-warmOrange hover:bg-terracotta px-6 py-4 rounded-[8px] text-[18px]"
                    asChild
                  >
                    <Link to="/admissions">Admission Enquiry</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
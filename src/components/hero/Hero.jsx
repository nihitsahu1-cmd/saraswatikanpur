import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUp, Phone } from 'lucide-react'
import { Button } from '../common/Button'
import { schoolData } from '../../data/schoolData'
import students1 from '../../assets/Images/students1.jpeg'
import studentscampus from '../../assets/Images/Studentscampus.jpeg'
import schoolBuilding from '../../assets/Images/school-building.jpg'
import campus2 from '../../assets/Images/campus2.jpeg'
import students3 from '../../assets/Images/students3.jpeg'

const heroImages = [
  students1,
  studentscampus,
  schoolBuilding,
  campus2,
  students3
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(current => (current + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const showPreviousImage = () => {
    setCurrentImage(current => (current - 1 + heroImages.length) % heroImages.length)
  }

  const showNextImage = () => {
    setCurrentImage(current => (current + 1) % heroImages.length)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero-slider" aria-label="School highlights">
      <div className="hero-slider-images" aria-live="off">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="School Campus"
            className={`hero-slider-image ${index === currentImage ? 'is-active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            aria-hidden={index !== currentImage}
          />
        ))}
      </div>
      <div className="hero-slider-overlay" />

      <div className="hero-slider-content">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Saraswati Vidya Niketan Inter College
          </h1>

          <p className="text-xl md:text-2xl text-antiqueGold font-medium mb-6 tracking-wide">
            Knowledge · Character · Discipline · Growth
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Shaping minds, building character, and preparing students for a brighter future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" asChild>
              <a href="#about">
                Explore Our Institution
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#admissions">
                Admission Enquiry
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-previous"
        onClick={showPreviousImage}
        aria-label="Show previous slide"
      >
        <ArrowLeft size={22} />
      </button>
      <button
        type="button"
        className="hero-slider-arrow hero-slider-arrow-next"
        onClick={showNextImage}
        aria-label="Show next slide"
      >
        <ArrowRight size={22} />
      </button>

      <div className="hero-slider-dots" aria-label="Choose a slide">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`hero-slider-dot ${index === currentImage ? 'is-active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === currentImage ? 'true' : undefined}
          />
        ))}
      </div>

      </section>

      <a
        href={`tel:${schoolData.phone[0]}`}
        className="floating-action-button hero-call-button"
        aria-label={`Call the school at ${schoolData.phone[0]}`}
        title="Call the school"
      >
        <Phone size={21} />
      </a>
      <button
        type="button"
        className="floating-action-button hero-top-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp size={21} />
      </button>
    </>
  )
}

export default Hero

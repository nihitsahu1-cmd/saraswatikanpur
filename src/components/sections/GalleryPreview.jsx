import React from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon, ArrowRight } from 'lucide-react'
import { galleryData } from '../../data/galleryData'
import { SectionHeading } from '../common/SectionHeading'
import { Button } from '../common/Button'

const GalleryPreview = () => {
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
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  // Display first 8 images for preview
  const previewImages = galleryData.images.slice(0, 8)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="Gallery"
          description="Glimpses of life at Saraswati Vidya Niketan"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {previewImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deepNavy/0 group-hover:bg-deepNavy/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ImageIcon size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="tertiary" className="group" asChild>
            <a href="/gallery">
              View Full Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryPreview
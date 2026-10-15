import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryData } from '../data/galleryData'
import { SectionHeading } from '../components/common/SectionHeading'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const filteredImages = selectedCategory === 'all'
    ? showAllImages ? galleryData.images : galleryData.images.slice(0, 8)
    : galleryData.images.filter(img => img.category.includes(selectedCategory))

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
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
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
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
              Gallery
            </h1>
            <p className="text-xl text-white/80">
              Glimpses of life at Saraswati Vidya Niketan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-antiqueGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-warmOrange text-white'
                    : 'bg-softPeach text-deepNavy hover:bg-warmOrange hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-warmIvory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Life"
            title="Our Gallery"
            description={`Showing ${filteredImages.length} ${selectedCategory === 'all' ? '' : selectedCategory + ' '}images`}
          />

          <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deepNavy/0 group-hover:bg-deepNavy/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={32} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-deepNavy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-mutedText">No images found in this category.</p>
            </div>
          )}

          {selectedCategory === 'all' && !showAllImages && galleryData.images.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllImages(true)}
                className="px-8 py-3 bg-warmOrange text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                View More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deepNavy/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-antiqueGold transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [galleryItems, setGalleryItems] = useState([])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch gallery items
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        setGalleryItems(data)
      } catch (error) {
        console.error('Error fetching gallery:', error)
        setGalleryItems(getFallbackGalleryData())
      }
      setLoading(false)
    }

    fetchGallery()
  }, [])

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food' },
    { id: 'interior', label: 'Interior' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'events', label: 'Events' },
    { id: 'ambiance', label: 'Ambiance' },
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  return (
    <div className="min-h-screen bg-luxury-black pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-luxury-dark-brown to-luxury-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-luxury-cream mb-4"
          >
            Our <span className="text-luxury-gold">Gallery</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Discover the visual beauty of Nana Swahili Restaurant through our lens
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-luxury-black py-8 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded font-semibold text-sm transition ${
                  selectedCategory === cat.id
                    ? 'bg-luxury-gold text-luxury-black'
                    : 'bg-luxury-dark-brown text-luxury-gold border border-luxury-gold border-opacity-50 hover:bg-luxury-gold hover:text-luxury-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-luxury-cream">Loading gallery...</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => openLightbox(item.imageUrl)}
                className="relative h-64 bg-luxury-dark-brown rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition">
                    <span className="text-4xl text-luxury-gold">🔍</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-black to-transparent p-4">
                  <h3 className="text-luxury-cream font-semibold text-sm">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={lightboxImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-luxury-gold text-4xl hover:text-luxury-amber transition"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Instagram Integration Section */}
      <section className="py-20 bg-luxury-dark-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-6">
            Follow Us on <span className="text-luxury-gold">Instagram</span>
          </h2>
          <p className="text-luxury-cream text-opacity-70 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest dishes, events, and special moments
          </p>
          <a
            href="https://instagram.com/nanaswahilirestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            @nanaswahilirestaurant
          </a>
        </div>
      </section>
    </div>
  )
}

function getFallbackGalleryData() {
  return [
    { _id: '1', title: 'Pweza wa Samaki', category: 'food', imageUrl: 'https://via.placeholder.com/400x300?text=Pweza+wa+Samaki' },
    { _id: '2', title: 'Restaurant Interior', category: 'interior', imageUrl: 'https://via.placeholder.com/400x300?text=Interior' },
    { _id: '3', title: 'Signature Cocktails', category: 'drinks', imageUrl: 'https://via.placeholder.com/400x300?text=Cocktails' },
    { _id: '4', title: 'Jazz Night', category: 'events', imageUrl: 'https://via.placeholder.com/400x300?text=Jazz+Night' },
    { _id: '5', title: 'Dinner Ambiance', category: 'ambiance', imageUrl: 'https://via.placeholder.com/400x300?text=Ambiance' },
    { _id: '6', title: 'Seafood Platter', category: 'food', imageUrl: 'https://via.placeholder.com/400x300?text=Seafood' },
  ]
}

export default Gallery

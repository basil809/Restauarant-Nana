import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch menu items from API
    const fetchMenu = async () => {
      try {
        const response = await fetch('/api/menu')
        const data = await response.json()
        setMenuItems(data)
      } catch (error) {
        console.error('Error fetching menu:', error)
        // Fallback menu data
        setMenuItems(getFallbackMenuData())
      }
      setLoading(false)
    }

    fetchMenu()
  }, [])

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'swahili', label: 'Swahili Dishes' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'grilled', label: 'Grilled Platters' },
    { id: 'rice', label: 'Rice & Pilau' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'wines', label: 'Wines' },
    { id: 'desserts', label: 'Desserts' },
  ]

  const filteredItems = menuItems.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

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
            Our <span className="text-luxury-gold">Menu</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Swahili cuisine and premium beverages
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <div className="bg-luxury-black py-8 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <FiSearch className="absolute left-4 top-3 text-luxury-gold" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:outline-none focus:border-luxury-gold"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
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

      {/* Menu Items Grid */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-luxury-cream">Loading menu...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-luxury-dark-brown rounded-lg overflow-hidden border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition group"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden bg-luxury-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-luxury-cream">
                      {item.name}
                    </h3>
                    <span className="text-luxury-gold font-bold text-lg">
                      {item.price} {item.currency}
                    </span>
                  </div>
                  <p className="text-luxury-amber text-sm mb-3 font-semibold">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-luxury-cream text-opacity-70 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    {item.isVegetarian && (
                      <span className="text-xs bg-luxury-gold text-luxury-black px-2 py-1 rounded">
                        🌱 Vegetarian
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="text-xs bg-luxury-amber text-luxury-black px-2 py-1 rounded">
                        🌶️ Spicy
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-luxury-cream text-lg">
              No menu items found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function getFallbackMenuData() {
  return [
    {
      _id: '1',
      name: 'Pweza wa Samaki',
      category: 'seafood',
      description: 'Grilled octopus with coconut, lime and Swahili spices',
      price: 1800,
      currency: 'KES',
      image: 'https://via.placeholder.com/300x200?text=Pweza+wa+Samaki',
      isVegetarian: false,
      isSpicy: true,
    },
    {
      _id: '2',
      name: 'Biryani ya Kuku',
      category: 'rice',
      description: 'Fragrant basmati rice with tender chicken and aromatic spices',
      price: 1200,
      currency: 'KES',
      image: 'https://via.placeholder.com/300x200?text=Biryani+ya+Kuku',
      isVegetarian: false,
      isSpicy: false,
    },
    {
      _id: '3',
      name: 'Samaki wa Kupaka',
      category: 'seafood',
      description: 'Fish fillet in creamy coconut sauce',
      price: 1700,
      currency: 'KES',
      image: 'https://via.placeholder.com/300x200?text=Samaki+wa+Kupaka',
      isVegetarian: false,
      isSpicy: false,
    },
  ]
}

export default Menu

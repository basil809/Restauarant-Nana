import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(139, 111, 71, 0.5) 100%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Video Background Fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-dark-brown to-luxury-brown">
          {/* Animated background shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-amber opacity-5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-luxury-cream mb-6"
        >
          Experience Authentic
          <span className="block text-luxury-gold">Swahili Fine Dining</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-luxury-cream mb-8 font-light"
        >
          Luxury Swahili Cuisine, Jazz Nights, Private Dining & Memorable Experiences
        </motion.p>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 inline-block"
        >
          <div className="border border-luxury-gold border-opacity-50 rounded-lg px-6 py-3 backdrop-blur-sm">
            <p className="text-luxury-gold font-semibold">Open Daily: 11 AM – 10 PM</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <Link
            to="/reservations"
            className="inline-flex items-center justify-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition transform hover:scale-105"
          >
            Reserve a Table <FiArrowRight className="ml-2" />
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition"
          >
            View Menu
          </Link>
          <Link
            to="/experiences"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-luxury-amber text-luxury-amber font-bold rounded hover:bg-luxury-amber hover:text-luxury-black transition"
          >
            Explore Experiences
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="text-luxury-gold text-3xl">↓</div>
      </motion.div>
    </section>
  )

  // Featured Experiences Section
  const ExperiencesPreview = () => (
    <section className="py-20 bg-luxury-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-4"
          >
            Our <span className="text-luxury-gold">Signature Experiences</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Jazz Thursdays',
              description: 'Live music in an intimate setting with premium cocktails and fine Swahili cuisine',
              icon: '🎷',
              color: 'border-luxury-gold',
            },
            {
              title: 'Wine Experience',
              description: 'Curated wine pairings with our signature dishes from around the world',
              icon: '🍷',
              color: 'border-luxury-amber',
            },
            {
              title: 'Private Dining',
              description: 'Exclusive spaces for romantic dinners, family gatherings, and corporate events',
              icon: '👥',
              color: 'border-luxury-gold',
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`border-l-4 ${exp.color} bg-luxury-dark-brown p-8 rounded hover:shadow-lg transition`}
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-3">
                {exp.title}
              </h3>
              <p className="text-luxury-cream text-opacity-80">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/experiences"
            className="inline-flex items-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            Explore All Experiences <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )

  // Featured Menu Section
  const FeaturedMenu = () => (
    <section className="py-20 bg-luxury-dark-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-4"
          >
            Culinary <span className="text-luxury-gold">Masterpieces</span>
          </motion.h2>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Discover our signature Swahili dishes crafted with premium ingredients and authentic recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: 'Pweza wa Samaki',
              category: 'Seafood',
              price: '1,800 KES',
              description: 'Grilled octopus with coconut, lime and traditional Swahili spices',
            },
            {
              name: 'Biryani ya Kuku',
              category: 'Rice',
              price: '1,200 KES',
              description: 'Fragrant basmati rice with tender chicken and aromatic spices',
            },
            {
              name: 'Nyama Choma',
              category: 'Grilled',
              price: '1,500 KES',
              description: 'Premium grilled beef with our signature pepper sauce and greens',
            },
            {
              name: 'Samaki wa Kupaka',
              category: 'Seafood',
              price: '1,700 KES',
              description: 'Fish fillet in creamy coconut sauce with turmeric and coriander',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-luxury-black rounded-lg p-6 hover:shadow-lg transition border border-luxury-gold border-opacity-20"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-luxury-cream">{item.name}</h3>
                <span className="text-luxury-gold font-bold">{item.price}</span>
              </div>
              <p className="text-luxury-amber text-sm mb-2 font-semibold">{item.category}</p>
              <p className="text-luxury-cream text-opacity-70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            View Full Menu <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )

  // Testimonials Section
  const Testimonials = () => (
    <section className="py-20 bg-luxury-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-4"
          >
            What Our <span className="text-luxury-gold">Guests Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              rating: 5,
              text: 'One of the best fine dining experiences in Nairobi. The ambiance, food, and service were exceptional.',
            },
            {
              name: 'Michael Kipchoge',
              rating: 5,
              text: 'The Swahili cuisine is authentic and delicious. Perfect for romantic evenings and special occasions.',
            },
            {
              name: 'Amina Hassan',
              rating: 5,
              text: 'Nana has become our favorite restaurant. The jazz nights are amazing and the staff is incredibly attentive.',
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-lg">⭐</span>
                ))}
              </div>
              <p className="text-luxury-cream mb-6 italic">"{testimonial.text}"</p>
              <p className="text-luxury-gold font-bold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  // CTA Section
  const CTASection = () => (
    <section className="py-20 bg-gradient-to-r from-luxury-dark-brown to-luxury-brown">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-6"
        >
          Ready to Experience Luxury?
        </motion.h2>
        <p className="text-luxury-cream mb-8 text-lg max-w-2xl mx-auto">
          Book your table now and join us for an unforgettable Swahili culinary journey
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/reservations"
            className="inline-flex items-center justify-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            Reserve Now
          </Link>
          <a
            href="https://wa.me/254700123456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-luxury-black">
      <HeroSection />
      <ExperiencesPreview />
      <FeaturedMenu />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home

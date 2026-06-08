import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('jazz')

  const experiences = {
    jazz: {
      title: 'Jazz Thursdays',
      icon: '🎷',
      description: 'Immerse yourself in smooth jazz melodies while enjoying premium Swahili cuisine and cocktails.',
      details: [
        '🎵 Live Jazz performances every Thursday',
        '🍷 Curated cocktails and wine selection',
        '🍽️ Special dinner menu pairings',
        '👥 Intimate dining atmosphere',
        '⏰ 7 PM - 11 PM',
      ],
      highlights: [
        'Award-winning jazz musicians from East Africa',
        'Premium cocktails crafted by expert mixologists',
        'Special plated dinner menu',
        'Dance floor available',
      ],
    },
    wine: {
      title: 'Wine Experience',
      icon: '🍷',
      description: 'Discover the art of wine pairing with our curated selection from African and international vineyards.',
      details: [
        '🍇 Premium wine selection from around the world',
        '👨‍🍳 Expert wine sommelier guidance',
        '🍽️ Specially crafted wine pairing menus',
        '📚 Wine education sessions',
        '⏰ By reservation',
      ],
      highlights: [
        'Exclusive wine import partnerships',
        'Wine tasting flights available',
        'Private wine cellar tours',
        'Sommelier consultation included',
      ],
    },
    private: {
      title: 'Private Dining',
      icon: '👥',
      description: 'Exclusive dining experiences for your most important occasions in our private venue spaces.',
      details: [
        '💑 Perfect for romantic dinners',
        '🎂 Ideal for birthdays and anniversaries',
        '💼 Executive private dining rooms',
        '👰 Wedding receptions and ceremonies',
        '📞 Custom menu options available',
      ],
      highlights: [
        'Customizable private rooms',
        'Personalized menu creation',
        'Dedicated event coordinator',
        'Premium service and attention',
      ],
    },
    events: {
      title: 'Special Events',
      icon: '🎉',
      description: 'Create unforgettable memories with our comprehensive event planning and catering services.',
      details: [
        '💒 Weddings and engagements',
        '🎊 Corporate events and conferences',
        '🎈 Birthday and celebration events',
        '🍽️ Full catering services available',
        '🎯 Complete event coordination',
      ],
      highlights: [
        'Full event planning service',
        'Professional catering team',
        'Customizable menus',
        'Elegant venue styling',
      ],
    },
  }

  const activeExp = experiences[activeTab]

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
            Premium <span className="text-luxury-gold">Experiences</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Elevate your dining with our curated collection of exclusive experiences
          </p>
        </div>
      </section>

      {/* Experiences */}
      <div className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(experiences).map(([key, exp]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === key
                  ? 'bg-luxury-gold text-luxury-black'
                  : 'bg-luxury-dark-brown text-luxury-gold border border-luxury-gold border-opacity-50 hover:border-opacity-100'
              }`}
            >
              <span className="mr-2">{experiences[key].icon}</span>
              {experiences[key].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Experience Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <div className="text-6xl mb-6">{activeExp.icon}</div>
            <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-4">
              {activeExp.title}
            </h2>
            <p className="text-luxury-cream text-opacity-80 text-lg mb-8">
              {activeExp.description}
            </p>

            <div className="space-y-3 mb-8">
              {activeExp.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-luxury-gold flex-shrink-0">✓</span>
                  <span className="text-luxury-cream">{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                to="/reservations"
                className="px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
              >
                Book Now
              </Link>
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition"
              >
                Ask About This
              </a>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {activeExp.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-luxury-dark-brown rounded-lg p-6 border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition"
              >
                <p className="text-luxury-cream font-semibold text-sm">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-luxury-dark-brown">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-4">
              Why Choose <span className="text-luxury-gold">Nana</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Award-winning culinary professionals' },
              { icon: '🏆', title: 'Premium Service', desc: 'Exceptional hospitality standards' },
              { icon: '🌟', title: 'Ambiance', desc: 'Elegant luxury atmosphere' },
              { icon: '📍', title: 'Prestige Location', desc: 'Heart of Westlands, Nairobi' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-luxury-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-luxury-cream text-opacity-70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-dark-brown to-luxury-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-luxury-cream mb-8 max-w-2xl mx-auto">
            Reserve your table or contact us for customized experience planning
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Experiences

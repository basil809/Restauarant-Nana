import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PrivateDining = () => {
  const [selectedPackage, setSelectedPackage] = useState('intimate')

  const packages = {
    intimate: {
      title: 'Intimate Dinner',
      capacity: '2-6 guests',
      price: 'Starting from 8,000 KES',
      duration: '3 hours',
      description: 'Perfect for romantic dinners, anniversaries, and special celebrations',
      features: [
        '✓ Private dining room with luxury ambiance',
        '✓ Customized 4-course menu',
        '✓ Premium wine selection',
        '✓ Dedicated sommelier',
        '✓ Personal server',
        '✓ Floral arrangements',
        '✓ Champagne toast',
        '✓ Photography service',
      ],
      menu: [
        'Cocktail & canapés welcome',
        'Appetizer course',
        'Main course (2 options)',
        'Dessert & petit fours',
        'Coffee & liqueurs',
      ],
    },
    family: {
      title: 'Family Gathering',
      capacity: '6-12 guests',
      price: 'Starting from 15,000 KES',
      duration: '3.5 hours',
      description: 'Celebrate with loved ones in an elegant setting',
      features: [
        '✓ Semi-private dining area',
        '✓ Customized menu options',
        '✓ Beverage selection (wine, non-alcoholic)',
        '✓ Dedicated event coordinator',
        '✓ Private bar service',
        '✓ Special occasion decorations',
        '✓ Birthday cake option',
        '✓ DJ/Entertainment (optional)',
      ],
      menu: [
        'Welcome reception',
        'Appetizers & cocktails',
        'Main course (3 options)',
        'Vegetarian alternative',
        'Special occasion cake',
        'Coffee & desserts',
      ],
    },
    corporate: {
      title: 'Corporate Dinner',
      capacity: '12-30 guests',
      price: 'Starting from 25,000 KES',
      duration: '4 hours',
      description: 'Impress clients and colleagues with fine dining excellence',
      features: [
        '✓ Fully private dining rooms',
        '✓ Customized multi-course menu',
        '✓ Premium wine pairing',
        '✓ Dedicated event manager',
        '✓ Professional staff',
        '✓ Audio-visual setup available',
        '✓ Cocktail hour',
        '✓ Valet parking',
      ],
      menu: [
        'Pre-dinner reception & cocktails',
        'Appetizer course',
        'Soup course',
        'Main course (3 options)',
        'Vegetarian option',
        'Dessert & cheese board',
        'Coffee & petit fours',
      ],
    },
    wedding: {
      title: 'Wedding Celebration',
      capacity: '30-100 guests',
      price: 'Custom pricing',
      duration: '5+ hours',
      description: 'Make your wedding reception unforgettable',
      features: [
        '✓ Multiple private/semi-private spaces',
        '✓ Full customization of menu',
        '✓ Premium wine & champagne selection',
        '✓ Full event planning service',
        '✓ Ceremony coordination',
        '✓ Decor & floral arrangements',
        '✓ DJ & entertainment',
        '✓ Photography & videography',
      ],
      menu: [
        'Cocktail hour & canapés',
        'Appetizer course',
        'Soup course',
        'Fish course',
        'Main course (3-4 options)',
        'Vegetarian course',
        'Wedding cake cutting',
        'Dessert selection',
      ],
    },
  }

  const activePackage = packages[selectedPackage]

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
            Private <span className="text-luxury-gold">Dining</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Exclusive dining experiences for your most special occasions
          </p>
        </div>
      </section>

      {/* Packages */}
      <div className="container mx-auto px-4 py-16">
        {/* Package Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {Object.entries(packages).map(([key, pkg]) => (
            <button
              key={key}
              onClick={() => setSelectedPackage(key)}
              className={`p-4 rounded-lg font-bold transition ${
                selectedPackage === key
                  ? 'bg-luxury-gold text-luxury-black'
                  : 'bg-luxury-dark-brown text-luxury-gold border border-luxury-gold border-opacity-50 hover:border-opacity-100'
              }`}
            >
              {pkg.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Package Details */}
        <motion.div
          key={selectedPackage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-2">
              {activePackage.title}
            </h2>
            <p className="text-luxury-gold font-semibold mb-6 text-lg">
              {activePackage.price}
            </p>
            <p className="text-luxury-cream text-opacity-80 text-lg mb-8">
              {activePackage.description}
            </p>

            <div className="space-y-3 mb-8">
              <div>
                <strong className="text-luxury-gold">Guest Capacity:</strong>
                <p className="text-luxury-cream">{activePackage.capacity}</p>
              </div>
              <div>
                <strong className="text-luxury-gold">Duration:</strong>
                <p className="text-luxury-cream">{activePackage.duration}</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {activePackage.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-luxury-gold flex-shrink-0">✓</span>
                  <span className="text-luxury-cream">{feature.replace('✓ ', '')}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
              >
                Get More Info
              </Link>
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition"
              >
                Chat With Us
              </a>
            </div>
          </div>

          {/* Right Content - Menu Sample */}
          <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
            <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-6">
              Sample Menu
            </h3>
            <div className="space-y-4">
              {activePackage.menu.map((course, idx) => (
                <div key={idx} className="pb-4 border-b border-luxury-gold border-opacity-20">
                  <p className="text-luxury-cream font-semibold">{course}</p>
                </div>
              ))}
            </div>
            <p className="text-luxury-amber text-sm mt-6 italic">
              * Fully customizable menu available upon request
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <section className="py-20 bg-luxury-dark-brown">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-12 text-center">
            Why Choose <span className="text-luxury-gold">Nana</span> for Private Dining
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '👨‍🍳',
                title: 'Expert Culinary Team',
                description: 'Award-winning chefs with decades of fine dining experience',
              },
              {
                icon: '🎭',
                title: 'Ambiance & Aesthetics',
                description: 'Carefully designed spaces that exude luxury and elegance',
              },
              {
                icon: '📋',
                title: 'Full Customization',
                description: 'Menus, décor, and service tailored to your vision',
              },
              {
                icon: '🎯',
                title: 'Flawless Execution',
                description: 'Every detail managed with precision and care',
              },
              {
                icon: '🏆',
                title: 'Proven Excellence',
                description: 'Trusted by Nairobi\'s most discerning hosts',
              },
              {
                icon: '🔒',
                title: 'Privacy & Discretion',
                description: 'Completely private spaces for confidential occasions',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex space-x-6"
              >
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-luxury-cream mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-luxury-cream text-opacity-70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-dark-brown to-luxury-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-luxury-cream mb-8 max-w-2xl mx-auto">
            Contact our private dining specialists to discuss your requirements and create a customized experience
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
            >
              Contact Us Now
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivateDining

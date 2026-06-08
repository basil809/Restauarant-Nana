import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-luxury-black pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-luxury-dark-brown to-luxury-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-cream mb-6">
                Our <span className="text-luxury-gold">Story</span>
              </h1>
              <p className="text-luxury-cream text-opacity-80 text-lg mb-6 leading-relaxed">
                Nana Swahili Restaurant was founded on a passion for authentic Swahili cuisine and the belief that dining is more than just food—it's an experience, a journey, a celebration.
              </p>
              <p className="text-luxury-cream text-opacity-80 text-lg mb-6 leading-relaxed">
                Located in the heart of Westlands, Nairobi, our restaurant celebrates the rich cultural heritage of Swahili coastal traditions while embracing modern fine dining excellence.
              </p>
              <p className="text-luxury-cream text-opacity-80 text-lg leading-relaxed">
                From our carefully crafted menu to our warm hospitality, every element at Nana reflects our commitment to creating unforgettable memories for our guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-luxury-gold via-luxury-amber to-luxury-brown rounded-lg p-2"
            >
              <div className="bg-luxury-black rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-luxury-gold font-serif text-2xl">Authentic Swahili Heritage</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-luxury-dark-brown">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-4"
            >
              Our <span className="text-luxury-gold">Values</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We honor Swahili culinary traditions while innovating for modern palates',
                icon: '🌍',
              },
              {
                title: 'Excellence',
                description: 'Premium ingredients, meticulous preparation, and exceptional service',
                icon: '⭐',
              },
              {
                title: 'Hospitality',
                description: 'Every guest is treated like family—with warmth, respect, and genuine care',
                icon: '❤️',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center p-8 bg-luxury-black rounded-lg border border-luxury-gold border-opacity-20"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-luxury-cream text-opacity-70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-luxury-cream mb-4"
            >
              Our <span className="text-luxury-gold">Team</span>
            </motion.h2>
            <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
              Passionate culinary professionals and hospitality experts dedicated to your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Chef Amina Hassan', role: 'Executive Chef', expertise: 'Traditional Swahili Cuisine' },
              { name: 'Omar Jamal', role: 'Head Sommelier', expertise: 'Wine Curation' },
              { name: 'Zainab Mohamed', role: 'General Manager', expertise: 'Premium Hospitality' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-luxury-amber rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="text-xl font-serif font-bold text-luxury-cream mb-1">{member.name}</h3>
                <p className="text-luxury-gold font-semibold mb-2">{member.role}</p>
                <p className="text-luxury-cream text-opacity-70 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-dark-brown to-luxury-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-luxury-cream mb-6">
            Join Us for an Experience
          </h2>
          <p className="text-luxury-cream mb-8 max-w-2xl mx-auto">
            Discover what makes Nana Swahili Restaurant the preferred fine dining destination in Nairobi
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center px-8 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition"
          >
            Book Your Table
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

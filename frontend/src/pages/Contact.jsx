import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'other',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'other',
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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
            Get in <span className="text-luxury-gold">Touch</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or special requests.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-serif font-bold text-luxury-cream mb-3">
                Location
              </h3>
              <p className="text-luxury-cream text-opacity-70">
                Westlands Road<br />
                Four Greenway<br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Phone */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-serif font-bold text-luxury-cream mb-3">
                Phone
              </h3>
              <a
                href="tel:+254700123456"
                className="text-luxury-gold hover:text-luxury-amber transition font-semibold"
              >
                +254 700 123 456
              </a>
            </div>

            {/* Email */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-serif font-bold text-luxury-cream mb-3">
                Email
              </h3>
              <a
                href="mailto:info@nanaswahili.com"
                className="text-luxury-gold hover:text-luxury-amber transition font-semibold"
              >
                info@nanaswahili.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-serif font-bold text-luxury-cream mb-3">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-luxury-amber transition font-semibold"
              >
                Chat Now
              </a>
            </div>

            {/* Hours */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-serif font-bold text-luxury-cream mb-3">
                Hours
              </h3>
              <p className="text-luxury-cream text-opacity-70">
                Monday - Sunday<br />
                11:00 AM – 10:00 PM
              </p>
              <p className="text-luxury-amber text-sm mt-2 font-semibold">
                Last seating: 9:30 PM
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="bg-luxury-dark-brown border-2 border-luxury-gold rounded-lg p-12 text-center">
                <FiCheckCircle className="text-luxury-gold text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-2">
                  Message Sent!
                </h3>
                <p className="text-luxury-cream text-opacity-70">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
                {error && (
                  <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-400 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-luxury-cream font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-cream font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-luxury-cream font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-cream font-semibold mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                    >
                      <option value="other" className="bg-luxury-black">Other</option>
                      <option value="reservation" className="bg-luxury-black">Reservation</option>
                      <option value="event" className="bg-luxury-black">Private Event</option>
                      <option value="catering" className="bg-luxury-black">Catering</option>
                      <option value="feedback" className="bg-luxury-black">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-cream font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-luxury-cream font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-black text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none h-32 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-luxury-dark-brown">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-luxury-cream mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="bg-luxury-black rounded-lg overflow-hidden h-96 border border-luxury-gold border-opacity-20">
            <iframe
              title="Nana Swahili Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.783124563266!2d36.80313031087306!3d-1.2830863888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDYuNyJTIDM2wrA0OCcxNy4zIkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

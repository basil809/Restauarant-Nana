import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfGuests: '2',
    reservationDate: '',
    reservationTime: '19:00',
    occasion: 'casual',
    specialRequests: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  const occasions = [
    { value: 'casual', label: 'Casual Dining' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'proposal', label: 'Proposal' },
    { value: 'romantic', label: 'Romantic Dinner' },
    { value: 'business', label: 'Business Meeting' },
    { value: 'other', label: 'Other' },
  ]

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
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Reservation failed. Please try again.')
      }

      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        numberOfGuests: '2',
        reservationDate: '',
        reservationTime: '19:00',
        occasion: 'casual',
        specialRequests: '',
      })

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const minDate = new Date().toISOString().split('T')[0]

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
            Book Your <span className="text-luxury-gold">Table</span>
          </motion.h1>
          <p className="text-luxury-cream text-opacity-70 max-w-2xl mx-auto">
            Reserve a table at Nana Swahili Restaurant and experience exceptional dining
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-luxury-dark-brown border-2 border-luxury-gold rounded-lg p-8 text-center">
                  <FiCheckCircle className="text-luxury-gold text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-luxury-cream text-opacity-70 mb-4">
                    Check your email for confirmation details. We look forward to welcoming you!
                  </p>
                  <p className="text-luxury-amber font-semibold">
                    📧 Confirmation sent to {formData.email}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-400 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="reservationDate"
                        value={formData.reservationDate}
                        onChange={handleChange}
                        min={minDate}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Time *
                      </label>
                      <select
                        name="reservationTime"
                        value={formData.reservationTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time} className="bg-luxury-dark-brown">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests & Occasion */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Number of Guests *
                      </label>
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num} className="bg-luxury-dark-brown">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-luxury-cream font-semibold mb-2">
                        Occasion
                      </label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none"
                      >
                        {occasions.map((occ) => (
                          <option key={occ.value} value={occ.value} className="bg-luxury-dark-brown">
                            {occ.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-luxury-cream font-semibold mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Allergies, dietary restrictions, special occasions, etc."
                      className="w-full px-4 py-3 bg-luxury-dark-brown text-luxury-cream rounded border border-luxury-gold border-opacity-30 focus:border-luxury-gold focus:outline-none h-24 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : 'Confirm Reservation'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Restaurant Hours
                </h3>
                <p className="text-luxury-cream text-opacity-70">
                  <strong>Open Daily:</strong> 11:00 AM – 10:00 PM
                </p>
                <p className="text-luxury-cream text-opacity-70 mt-2">
                  <strong>Last Seating:</strong> 9:30 PM
                </p>
              </div>

              <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Location
                </h3>
                <p className="text-luxury-cream text-opacity-70 mb-2">
                  📍 Westlands Road
                </p>
                <p className="text-luxury-cream text-opacity-70">
                  Four Greenway, Nairobi, Kenya
                </p>
              </div>

              <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Contact Us
                </h3>
                <p className="text-luxury-cream text-opacity-70 mb-3">
                  <strong>📞 Phone:</strong><br />
                  <a href="tel:+254700123456" className="text-luxury-gold hover:text-luxury-amber">
                    +254 700 123 456
                  </a>
                </p>
                <p className="text-luxury-cream text-opacity-70">
                  <strong>💬 WhatsApp:</strong><br />
                  <a
                    href="https://wa.me/254700123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-luxury-amber"
                  >
                    Chat Now
                  </a>
                </p>
              </div>

              <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
                <h3 className="text-2xl font-serif font-bold text-luxury-cream mb-4">
                  Policies
                </h3>
                <ul className="text-luxury-cream text-opacity-70 space-y-2 text-sm">
                  <li>✓ Minimum 24-hour notice for cancellations</li>
                  <li>✓ 15-minute grace period for arrival</li>
                  <li>✓ Dress code: Smart casual</li>
                  <li>✓ Dietary requirements welcomed</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservations

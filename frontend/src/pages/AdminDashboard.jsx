import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AdminDashboard = () => {
  const [stats, setStats] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch admin stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
        setStats({
          reservations: { total: 48, pending: 5, confirmed: 43 },
          contacts: { total: 12, unread: 3 },
          menu: { items: 24 },
        })
      }
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-black pt-24 flex items-center justify-center">
        <p className="text-luxury-cream text-lg">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-black pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-luxury-dark-brown to-luxury-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-luxury-cream mb-2">
            Admin <span className="text-luxury-gold">Dashboard</span>
          </h1>
          <p className="text-luxury-cream text-opacity-70">
            Manage your restaurant operations
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'reservations', label: 'Reservations' },
            { id: 'contacts', label: 'Messages' },
            { id: 'menu', label: 'Menu' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded font-bold text-sm whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-luxury-gold text-luxury-black'
                  : 'bg-luxury-dark-brown text-luxury-gold border border-luxury-gold border-opacity-50 hover:border-opacity-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Reservations Card */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-luxury-cream text-opacity-70 text-sm font-semibold mb-2">
                    RESERVATIONS
                  </p>
                  <p className="text-4xl font-bold text-luxury-gold mb-4">
                    {stats.reservations.total}
                  </p>
                  <div className="space-y-2 text-sm text-luxury-cream text-opacity-70">
                    <p>✓ Confirmed: <span className="text-luxury-gold">{stats.reservations.confirmed}</span></p>
                    <p>⏳ Pending: <span className="text-luxury-amber">{stats.reservations.pending}</span></p>
                  </div>
                </div>
                <div className="text-5xl">📅</div>
              </div>
            </div>

            {/* Contacts Card */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-luxury-cream text-opacity-70 text-sm font-semibold mb-2">
                    MESSAGES
                  </p>
                  <p className="text-4xl font-bold text-luxury-gold mb-4">
                    {stats.contacts.total}
                  </p>
                  <div className="space-y-2 text-sm text-luxury-cream text-opacity-70">
                    <p>Unread: <span className="text-luxury-amber font-bold">{stats.contacts.unread}</span></p>
                    <p>Response time: &lt; 24h</p>
                  </div>
                </div>
                <div className="text-5xl">💬</div>
              </div>
            </div>

            {/* Menu Items Card */}
            <div className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-luxury-cream text-opacity-70 text-sm font-semibold mb-2">
                    MENU ITEMS
                  </p>
                  <p className="text-4xl font-bold text-luxury-gold mb-4">
                    {stats.menu.items}
                  </p>
                  <div className="space-y-2 text-sm text-luxury-cream text-opacity-70">
                    <p>Categories: 8</p>
                    <p>Last updated: Today</p>
                  </div>
                </div>
                <div className="text-5xl">🍽️</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-luxury-dark-brown rounded-lg overflow-hidden border border-luxury-gold border-opacity-20"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-luxury-black">
                  <tr className="border-b border-luxury-gold border-opacity-20">
                    <th className="px-6 py-4 text-left text-luxury-gold font-semibold">Guest</th>
                    <th className="px-6 py-4 text-left text-luxury-gold font-semibold">Date & Time</th>
                    <th className="px-6 py-4 text-left text-luxury-gold font-semibold">Guests</th>
                    <th className="px-6 py-4 text-left text-luxury-gold font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-luxury-gold font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'John Doe', date: 'June 15, 7:00 PM', guests: 2, status: 'confirmed' },
                    { name: 'Jane Smith', date: 'June 16, 8:30 PM', guests: 4, status: 'pending' },
                    { name: 'Ahmed Hassan', date: 'June 18, 7:30 PM', guests: 6, status: 'confirmed' },
                  ].map((res, idx) => (
                    <tr key={idx} className="border-b border-luxury-gold border-opacity-10 hover:bg-luxury-black transition">
                      <td className="px-6 py-4 text-luxury-cream">{res.name}</td>
                      <td className="px-6 py-4 text-luxury-cream text-sm">{res.date}</td>
                      <td className="px-6 py-4 text-luxury-cream">{res.guests}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded text-xs font-bold ${
                          res.status === 'confirmed'
                            ? 'bg-green-900 text-green-300'
                            : 'bg-yellow-900 text-yellow-300'
                        }`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-luxury-gold hover:text-luxury-amber transition text-sm font-semibold">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {[
              {
                name: 'Sarah Johnson',
                subject: 'Private Dining Inquiry',
                message: 'Interested in booking a private room for 20 people...',
                unread: true,
              },
              {
                name: 'Michael Brown',
                subject: 'Menu Question',
                message: 'Do you have any gluten-free options?',
                unread: false,
              },
              {
                name: 'Zainab Ahmed',
                subject: 'Wedding Reception',
                message: 'Looking for venue options for our wedding...',
                unread: true,
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className={`bg-luxury-dark-brown rounded-lg p-6 border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition cursor-pointer ${
                  contact.unread ? 'border-opacity-100' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-luxury-cream">{contact.name}</h3>
                    <p className="text-luxury-gold font-semibold">{contact.subject}</p>
                  </div>
                  {contact.unread && (
                    <span className="bg-luxury-gold text-luxury-black px-3 py-1 rounded text-xs font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-luxury-cream text-opacity-70 mb-3 line-clamp-2">{contact.message}</p>
                <button className="text-luxury-gold hover:text-luxury-amber transition text-sm font-semibold">
                  Reply →
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-luxury-dark-brown rounded-lg p-8 border border-luxury-gold border-opacity-20"
          >
            <div className="text-center">
              <p className="text-luxury-gold text-lg font-bold mb-4">Menu Management</p>
              <p className="text-luxury-cream text-opacity-70 mb-8">
                Manage your restaurant's menu items, categories, and pricing
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-luxury-gold text-luxury-black font-bold rounded hover:bg-luxury-amber transition">
                  Add New Item
                </button>
                <button className="px-6 py-3 border-2 border-luxury-gold text-luxury-gold font-bold rounded hover:bg-luxury-gold hover:text-luxury-black transition">
                  View All Items
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Security Notice */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-luxury-cream text-opacity-50 text-sm">
          ⚠️ This dashboard requires authentication. Add login system for production.
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard

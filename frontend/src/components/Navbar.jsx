import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-luxury-black bg-opacity-95 backdrop-blur-md z-50 border-b border-luxury-gold border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-luxury-gold text-3xl font-serif font-bold">
              N
            </div>
            <span className="text-luxury-cream font-serif text-lg font-bold">
              Nana
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-luxury-cream hover:text-luxury-gold transition duration-300 font-medium text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-cream hover:text-luxury-gold transition"
            >
              <span className="text-xl">📱</span>
            </a>
            <Link
              to="/reservations"
              className="px-6 py-2 bg-luxury-gold text-luxury-black rounded font-bold text-sm hover:bg-luxury-amber transition"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-luxury-gold text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-luxury-cream hover:text-luxury-gold transition py-2 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/reservations"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 bg-luxury-gold text-luxury-black rounded font-bold text-center hover:bg-luxury-amber transition"
              >
                Reserve Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxury-dark-brown border-t border-luxury-gold border-opacity-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-luxury-gold font-serif text-xl font-bold mb-4">
              Nana Swahili
            </h3>
            <p className="text-luxury-cream text-sm leading-relaxed">
              Experience authentic Swahili fine dining in the heart of Westlands, Nairobi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold font-serif text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'Experiences', path: '/experiences' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Private Dining', path: '/private-dining' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-luxury-cream hover:text-luxury-gold transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-luxury-gold font-serif text-lg font-bold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-luxury-gold mt-1 flex-shrink-0" />
                <span className="text-luxury-cream text-sm">
                  Westlands Road, Four Greenway, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-luxury-gold flex-shrink-0" />
                <a
                  href="tel:+254700123456"
                  className="text-luxury-cream hover:text-luxury-gold transition text-sm"
                >
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-luxury-gold flex-shrink-0" />
                <a
                  href="mailto:info@nanaswahili.com"
                  className="text-luxury-cream hover:text-luxury-gold transition text-sm"
                >
                  info@nanaswahili.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-luxury-gold font-serif text-lg font-bold mb-4">
              Hours
            </h4>
            <p className="text-luxury-cream text-sm mb-4">
              Open Daily<br />
              11:00 AM – 10:00 PM
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nanaswahilirestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-luxury-amber transition text-xl"
              >
                <FiInstagram />
              </a>
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-luxury-amber transition text-xl"
              >
                💬
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gold border-opacity-10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3">
            <p className="text-luxury-cream text-xs text-opacity-60">
              © {currentYear} Nana Swahili Restaurant. All rights reserved.
            </p>
            <p className="text-luxury-cream text-xs text-opacity-60">
              Crafted with ❤️ in Nairobi, Kenya
            </p>
            <a
              href="https://portfolio-swart-delta-f63zoke0po.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold hover:text-luxury-amber transition text-xs"
            >
              Designed and developed by Baschelle5
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

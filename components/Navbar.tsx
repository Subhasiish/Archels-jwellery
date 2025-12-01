'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* T Logo */}
          <div className="text-white text-2xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="6" y1="2" x2="18" y2="2" />
            </svg>
          </div>

          {/* Centered SHUUVORA */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider uppercase">
              SHUUVORA
            </h1>
          </div>

          {/* Hamburger Menu */}
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black border-t border-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-white hover:text-gray-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="block text-white hover:text-gray-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
              <a href="#features" className="block text-white hover:text-gray-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
              <button className="w-full px-6 py-2 bg-white text-black rounded-lg font-semibold border border-black">
                SCHEDULE A CALL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}



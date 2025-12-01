'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Line Above - Partial Width */}
        <div className="border-t border-gray-700 mb-8 max-w-xs"></div>

        {/* ABOUT US Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-white text-xs md:text-sm uppercase tracking-widest font-light">
            ABOUT US
          </p>
        </motion.div>

        {/* Horizontal Line Below ABOUT US - Partial Width */}
        <div className="border-t border-gray-700 mb-16 max-w-xs"></div>

        {/* Main Headline - Two Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
            }}
          >
            <span className="block pl-6 md:pl-12">Tomorrow's Growth</span>
            <span className="block">Starts Today.</span>
          </h2>
        </motion.div>

        {/* Body Text - Left Aligned, 1/3 Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mb-8"
        >
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don't just meet today's needs—they anticipate tomorrow's possibilities.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-all"
        >
          <span>SCHEDULE A CALL</span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        {/* Horizontal Line at Bottom */}
        <div className="border-t border-gray-700 mt-20"></div>
      </div>
    </section>
  )
}


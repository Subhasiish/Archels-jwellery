'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 'web-design',
    buttonText: 'WEB DESIGN / UIUX',
    title: 'Web Design / UIUX',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/web-design.jpg', // Placeholder - you'll need to add actual images
  },
  {
    id: 'mlm-1',
    buttonText: 'web-apps',
    title: 'MLM Solutions',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/mlm.jpg',
  },
  {
    id: 'mlm-2',
    buttonText: 'SaaS',
    title: 'MLM Platform',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/mlm-2.jpg',
  },
  {
    id: 'mlm-3',
    buttonText: 'Application Development',
    title: 'SEO Services',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/seo.jpg',
  },
  {
    id: 'mlm-4',
    buttonText: 'ERP, CRM, MIS',
    title: 'MLM Development',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/mlm-3.jpg',
  },
  {
    id: 'mlm-5',
    buttonText: 'AI/ML',
    title: 'MLM Consulting',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/mlm-4.jpg',
  },
  {
    id: 'mlm-6',
    buttonText: 'MLM',
    title: 'MLM Strategy',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: '/images/mlm-5.jpg',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* OUR SERVICES Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-white text-xs md:text-sm uppercase tracking-widest font-light">
            OUR SERVICES
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xl md:text-2xl lg:text-3xl mb-12 font-serif italic"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: 'italic',
          }}
        >
          Your business, our innovation — we design digital experiences that inspire and perform.
        </motion.p>

        {/* Service Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 md:gap-4 mb-16"
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setSelectedService(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 md:px-7 md:py-3 rounded-full text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                selectedService.id === service.id
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
              }`}
            >
              {service.buttonText}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {selectedService.title}
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed font-light mb-8">
              {selectedService.description}
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-white hover:text-black transition-all"
            >
              <span>VIEW MORE</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button> */}
          </motion.div>

          {/* Right Column - Tablet Image */}
          <motion.div
            key={`image-${selectedService.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Tablet Frame with Wooden Surface Effect */}
            <div className="relative">
              {/* Wooden Surface Background */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-900/30 rounded-2xl blur-xl"></div>
              
              {/* Tablet Frame */}
              <div className="relative bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl">
                {/* Tablet Screen */}
                <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/3]">
                  {/* Tablet Interface - Web Design Preview */}
                  {selectedService.id === 'web-design' ? (
                    <div className="w-full h-full bg-black p-4 md:p-6 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-white text-lg md:text-xl font-bold">VELMORA</div>
                        <div className="flex items-center space-x-4 text-white text-xs md:text-sm">
                          <span>Home</span>
                          <span>About Us</span>
                          <span>Products</span>
                          <span>Help Center</span>
                          <button className="bg-white/10 px-3 py-1 rounded">Sign In</button>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 flex flex-col justify-center relative">
                        {/* MORA LAMP Text with Lamp Illustration */}
                        <div className="relative mb-8">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            MORA LAMP
                          </h1>
                          {/* Lamp Illustration Overlay */}
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                            <div className="relative">
                              {/* Lamp Base */}
                              <div className="w-16 h-32 bg-gray-700 rounded-t-full"></div>
                              {/* Lamp Shade with Glow */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl"></div>
                              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-300 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Order Now Button */}
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold w-fit mb-6">
                          Order Now
                        </button>
                        
                        {/* Bottom Section */}
                        <div className="flex justify-between items-end">
                          <p className="text-white text-sm md:text-base">
                            Elevate your space with elegance and smart technology.
                          </p>
                          <div className="flex flex-col space-y-2 text-right">
                            <div className="text-white text-xs">Smart Light Control</div>
                            <div className="text-white text-xs">Voice Control Support</div>
                            <div className="text-white text-xs">Login Platform With Alexa</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-white text-2xl md:text-3xl font-bold mb-4">
                          {selectedService.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Service Preview
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

import aiImage from './img/AI-image.webp'
import amoterImage from './img/amoter-image.webp'
import beaqueImage from './img/beaque-image.webp'
import bertoozImage from './img/bertooz-image.webp'
import blurImage from './img/blur-image.webp'
import bwImage from './img/bw-image.webp'
import chocolateImage from './img/chocolate-image.webp'
import danceImage from './img/dance-image.webp'
import derImage from './img/der-image.webp'
import desklampImage from './img/desklamp-image.png'
import downloadImage from './img/download.jpg'
import exarciseImage from './img/exarcise-image.webp'
import greenImage from './img/green-image.webp'
import heroImage from './img/hero-image.webp'
import heroexerciseImage from './img/heroexercise-image.webp'
import homeImage from './img/home-image.webp'
import houseImage from './img/house-image.webp'
import jwelleryImage from './img/jwellery-image.webp'
import lampImage from './img/Lamp-image.jpg'
import lamptabImage from './img/lamptab-image.png'
import laptopImage from './img/laptop-image.webp'
import laptopheroImage from './img/laptophero-image.webp'
import laptoplampImage from './img/laptoplamp-image.webp'
import musicImage from './img/music-image.webp'
import navelyImage from './img/navely-image.webp'
import nikeImage from './img/nike-image.jpg'
import norvanImage from './img/norvan-image.webp'
import orangeImage from './img/orange-image.webp'
import organicImage from './img/organic-image.webp'
import skincareImage from './img/skincare-image.webp'
import solarImage from './img/solar-image.webp'
import symbolImage from './img/symbol-image.webp'
import viImage from './img/vi-image.webp'
import yellowImage from './img/yellow-image.webp'

const services = [
  {
    id: 'web-design',
    buttonText: 'WEB DESIGN / UIUX',
    title: 'Web Design / UIUX',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: aiImage,
  },
  {
    id: 'mlm-1',
    buttonText: 'web-apps',
    title: 'MLM Solutions',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: amoterImage,
  },
  {
    id: 'mlm-2',
    buttonText: 'SaaS',
    title: 'MLM Platform',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: beaqueImage,
  },
  {
    id: 'mlm-3',
    buttonText: 'Application Development',
    title: 'SEO Services',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: bertoozImage,
  },
  {
    id: 'mlm-4',
    buttonText: 'ERP, CRM, MIS',
    title: 'MLM Development',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: blurImage,
  },
  {
    id: 'mlm-5',
    buttonText: 'AI/ML',
    title: 'MLM Consulting',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: bwImage,
  },
  {
    id: 'mlm-6',
    buttonText: 'MLM',
    title: 'MLM Strategy',
    description: 'At Shuuvora Tech, we are a collective of passionate technologists, designers, and strategists who believe in the transformative power of innovation. Founded on the principle that technology should enhance human experiences, we create digital solutions that don\'t just meet today\'s needs—they anticipate tomorrow\'s possibilities.',
    image: chocolateImage,
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
                <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


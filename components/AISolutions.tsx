'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const aiTags = [
  'Chatbot & Virtual Assistant Development',
  'AI for Content & Media',
  'Custom AI Project Development',
  'Predictive Analytics & Automation',
  'AI Integration for Existing Systems',
]

export default function AISolutions() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top divider line & label */}
        <div className="border-t border-white/20 pt-6 mb-10">
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/60">
            Shuuvora Tech – AI Studio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column – Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white mb-3 text-3xl md:text-4xl lg:text-[2.7rem] leading-tight"
            >
              <span
                className="block italic"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Transforming Ideas
              </span>
              <span className="block font-semibold md:mt-1">
                Into Intelligent AI Solutions
              </span>
            </motion.h2>

            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-wrap gap-3 mt-6 mb-10"
            >
              {aiTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/40 text-[11px] md:text-xs text-white/80 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Body copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-4 text-sm md:text-base text-white/80 max-w-xl"
            >
              <p>
                At Shuuvora Tech, we build future-ready AI projects tailored for your
                business growth.
              </p>
              <p>
                From automation to advanced decision–making tools, we integrate
                Artificial Intelligence into your systems to help you operate
                smarter, faster, and more efficiently.
              </p>
              <p>
                We blend innovation, strategy, and deep technical expertise to craft
                AI solutions that don&apos;t just work — they transform the way you
                operate.
              </p>
            </motion.div>

            {/* CTA button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-xs md:text-sm tracking-[0.18em] uppercase text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Book a free consultation
            </motion.button>
          </div>

          {/* Right Column – Tablet style image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Soft background block */}
              <div className="absolute -inset-x-6 -inset-y-6 rounded-[32px] bg-white/5 blur-xl" />

              {/* Tablet frame */}
              <div className="relative rounded-[32px] overflow-hidden bg-black shadow-[0_32px_80px_rgba(0,0,0,0.7)] border border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&h=1600&fit=crop"
                    alt="AI interface on tablet"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 480px"
                  />

                  {/* Simple overlay text to echo reference layout */}
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 mb-2">
                      Shuuvora AI
                    </p>
                    <p className="text-xl md:text-2xl font-semibold leading-snug">
                      Elevate your digital products with intelligent, human–centred AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandingStudios() {
  return (
    <section className="bg-black py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-md">
              {/* Soft warm glow behind tablet */}
              <div className="absolute -inset-x-6 -inset-y-6 rounded-[32px] bg-orange-400/15 blur-2xl" />

              <div className="relative rounded-[32px] overflow-hidden bg-black shadow-[0_28px_70px_rgba(0,0,0,0.8)] border border-white/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=1600&fit=crop"
                    alt="Branding design on tablet"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 420px"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-sm md:text-base text-orange-300/90 mb-2"
              style={{ fontFamily: 'Georgia, \"Times New Roman\", serif', fontStyle: 'italic' }}
            >
              Premium Branding Solutions by
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Shuuvora Studios
            </h2>

            <div className="space-y-4 text-sm md:text-base text-white/80 max-w-lg">
              <p>
                Your brand deserves more than a logo — it deserves a timeless identity that
                speaks for you.
              </p>
              <p>
                Through Shuuvora Studios, we craft powerful brand visuals that connect with
                audiences, inspire trust, and elevate your market presence.
              </p>
            </div>

            <motion.a
              href="/branding"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/60 bg-white text-black text-[11px] md:text-xs tracking-[0.18em] uppercase px-6 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:bg-orange-400 hover:border-orange-300 hover:text-black transition-colors"
            >
              Explore our services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



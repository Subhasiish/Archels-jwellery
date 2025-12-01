'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Samuel Cipta',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'You can really feel the different vibes as you getaway from jakarta\'s busy streets. For you who want to experience a cozy and fun minimalist cabin, you should try Bobocabin.',
    number: '01'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'The experience was absolutely amazing. The cabin was clean, comfortable, and the location was perfect for a weekend getaway.',
    number: '02'
  },
  {
    id: 3,
    name: 'Michael Chen',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    content: 'Best cabin experience I\'ve ever had. The minimalist design and natural surroundings made it a perfect escape from city life.',
    number: '03'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    content: 'Highly recommend Bobocabin for anyone looking for a peaceful retreat. The service was excellent and the views were breathtaking.',
    number: '04'
  },
  {
    id: 5,
    name: 'David Kim',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    content: 'A wonderful experience from start to finish. The cabin had everything we needed and the location was serene and beautiful.',
    number: '05'
  },
  {
    id: 6,
    name: 'Lisa Wang',
    location: 'Bobocabin Ranca Upas',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    content: 'Perfect blend of comfort and nature. We loved every moment of our stay and will definitely be back.',
    number: '06'
  },
]

type Testimonial = (typeof testimonials)[number]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Subtle background glow that responds to scroll
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.7])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute -top-32 -left-24 w-72 h-72 md:w-96 md:h-96 bg-purple-500/25 blur-3xl rounded-full" />
        <div className="absolute bottom-[-6rem] right-[-4rem] w-80 h-80 md:w-[22rem] md:h-[22rem] bg-amber-400/25 blur-3xl rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/50 mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem] font-semibold text-white leading-tight">
            What our clients say
            <br className="hidden md:block" /> about working with Shuuvora.
          </h2>
        </motion.div>

        {/* Desktop / large screen 3D cards */}
        <div className="relative">
          <div className="hidden md:flex justify-center space-x-8 lg:space-x-10">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <DesktopTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Mobile / tablet horizontal scroll */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 snap-x snap-mandatory pb-2">
              {testimonials.map((testimonial, index) => (
                <MobileTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DesktopTestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  return (
    <motion.div
      className="relative w-full max-w-sm lg:max-w-md snap-center"
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
    >
      <div className="relative [perspective:1200px]">
        <motion.div
          whileHover={{ rotateX: -6, rotateY: 8, translateY: -10 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          className="relative rounded-3xl bg-white/5 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-amber-400 via-purple-500 to-sky-400" />

          <div className="p-6 md:p-7 lg:p-8 flex flex-col gap-6">
            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/40">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm md:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs md:text-sm text-white/60">
                  {testimonial.location}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <div className="absolute -top-6 -left-2 text-5xl text-white/10 font-serif">
                “
              </div>
              <p className="relative text-sm md:text-[0.95rem] leading-relaxed text-white/80">
                {testimonial.content}
              </p>
            </div>

            {/* Footer line */}
            <div className="flex items-center justify-between pt-2 text-[11px] md:text-xs text-white/50">
              <span className="uppercase tracking-[0.22em]">
                Client #{testimonial.number}
              </span>
              <span className="h-px flex-1 mx-3 bg-white/15" />
              <span>Shuuvora Studio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function MobileTestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  return (
    <motion.div
      className="relative min-w-[82%] max-w-xs snap-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="rounded-3xl bg-white/5 border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-xl">
        <div className="h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-sky-400" />
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/40">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                {testimonial.name}
              </p>
              <p className="text-[11px] text-white/60">
                {testimonial.location}
              </p>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-white/80">
            {testimonial.content}
          </p>

          <div className="flex justify-between items-center pt-1 text-[10px] text-white/50">
            <span>Client #{testimonial.number}</span>
            <span className="h-px flex-1 mx-2 bg-white/15" />
            <span>Shuuvora</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

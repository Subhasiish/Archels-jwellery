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

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Transform vertical scroll to horizontal movement
  // Scroll down = move left to right (content moves from left to right)
  // Scroll up = move right to left (content moves from right to left)
  // Start at left (negative) and move to right (positive) as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%'])

  return (
    <section 
      ref={containerRef} 
      className="bg-gray-100 relative overflow-hidden"
      style={{ minHeight: '300vh' }} // Make section tall enough for scroll interaction
    >
      <div className="sticky top-0 h-screen w-full flex items-center">
        {/* Section Header - Fixed Position */}
        <div className="absolute top-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs md:text-sm uppercase tracking-widest font-light text-gray-600 mb-4">
              Testimonials
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-3xl md:text-5xl font-bold text-black">
                Visitors about our cabin
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-md">
                Find the Perfect Solution for Your Every Need
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Container - Full Viewport */}
        <div className="w-full h-full overflow-hidden">
          <motion.div
            className="flex h-full w-full"
            style={{ x }}
          >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index}
                  isCenter={index === 0}
                />
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`dup-${testimonial.id}`} 
                  testimonial={testimonial} 
                  index={index + testimonials.length}
                  isCenter={false}
                />
              ))}
            </motion.div>
          </div>
      </div>
    </section>
  )
}

function TestimonialCard({ 
  testimonial, 
  index, 
  isCenter 
}: { 
  testimonial: typeof testimonials[0]; 
  index: number; 
  isCenter: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <motion.div
      ref={cardRef}
      className={`flex-shrink-0 w-screen h-full relative ${
        isCenter ? 'bg-white' : 'bg-gray-200'
      }`}
      style={{ scale, opacity }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image - Full Fill */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index < 2}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Profile Section */}
          <div className="flex items-center mb-8 md:mb-12">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mr-6 flex-shrink-0 border-4 border-white">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-2xl md:text-3xl text-white mb-2">
                {testimonial.name}
              </h4>
              <p className="text-base md:text-lg text-white/80">
                {testimonial.location}
              </p>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white/30">
              |{testimonial.number}|
            </div>
          </div>

          {/* Content */}
          <div className="relative mb-8">
            <div className="absolute -top-8 -left-8 text-9xl md:text-[12rem] text-white/20 font-serif">
              "
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-white relative z-10 leading-relaxed font-light">
              {testimonial.content}
            </p>
          </div>

          {/* First Badge */}
          {isCenter && (
            <div className="inline-block px-6 py-3 bg-orange-500 text-white text-sm md:text-base font-semibold rounded-full">
              FIRST
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import aiImage from './img/AI-image.webp'
import nikeImage from './img/nike-image.jpg'
import houseImage from './img/house-image.webp'
import lampImage from './img/Lamp-image.jpg'
import musicImage from './img/music-image.webp'
import solarImage from './img/solar-image.webp'
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
import jwelleryImage from './img/jwellery-image.webp'
import lamptabImage from './img/lamptab-image.png'
import laptopImage from './img/laptop-image.webp'
import laptopheroImage from './img/laptophero-image.webp'
import laptoplampImage from './img/laptoplamp-image.webp'
import navelyImage from './img/navely-image.webp'
import norvanImage from './img/norvan-image.webp'
import orangeImage from './img/orange-image.webp'
import organicImage from './img/organic-image.webp'
import skincareImage from './img/skincare-image.webp'
import symbolImage from './img/symbol-image.webp'
import viImage from './img/vi-image.webp'
import yellowImage from './img/yellow-image.webp'

const projects = [
  { id: 1, title: 'AI Innovation', image: aiImage, description: 'Shaping the Future of AI.', size: 'big' },
  { id: 2, title: 'Nike Campaign', image: nikeImage, description: 'Minimalist luxury product showcase', size: 'small' },
  { id: 3, title: 'Modern House', image: houseImage, description: 'Unforgettable stays await on dream stays', size: 'rectangle' },
  { id: 4, title: 'Lamp Design', image: lampImage, description: 'Visitors about our cabin', size: 'square' },
  { id: 5, title: 'Music Vibes', image: musicImage, description: 'Exclusive Travel, Designed with You in Mind', size: 'small' },
  { id: 6, title: 'Solar Power', image: solarImage, description: 'We Build More Than Homes - We Build Legacies', size: 'big' },
  { id: 7, title: 'Amoter', image: amoterImage, description: 'Amoter project description', size: 'rectangle' },
  { id: 8, title: 'Beaque', image: beaqueImage, description: 'Beaque project description', size: 'square' },
  { id: 9, title: 'Bertooz', image: bertoozImage, description: 'Bertooz project description', size: 'small' },
  { id: 10, title: 'Blur', image: blurImage, description: 'Blur project description', size: 'big' },
  { id: 11, title: 'Black & White', image: bwImage, description: 'BW project description', size: 'rectangle' },
  { id: 12, title: 'Chocolate', image: chocolateImage, description: 'Chocolate project description', size: 'square' },
  { id: 13, title: 'Dance', image: danceImage, description: 'Dance project description', size: 'small' },
  { id: 14, title: 'Der', image: derImage, description: 'Der project description', size: 'big' },
  { id: 15, title: 'Desk Lamp', image: desklampImage, description: 'Desk Lamp project description', size: 'rectangle' },
  { id: 16, title: 'Download', image: downloadImage, description: 'Download project description', size: 'square' },
  { id: 17, title: 'Exercise', image: exarciseImage, description: 'Exercise project description', size: 'small' },
  { id: 18, title: 'Green', image: greenImage, description: 'Green project description', size: 'big' },
  { id: 19, title: 'Hero', image: heroImage, description: 'Hero project description', size: 'rectangle' },
  { id: 20, title: 'Hero Exercise', image: heroexerciseImage, description: 'Hero Exercise project description', size: 'square' },
  { id: 21, title: 'Home', image: homeImage, description: 'Home project description', size: 'small' },
  { id: 22, title: 'Jewellery', image: jwelleryImage, description: 'Jewellery project description', size: 'big' },
  { id: 23, title: 'Lamp Tab', image: lamptabImage, description: 'Lamp Tab project description', size: 'rectangle' },
  { id: 24, title: 'Laptop', image: laptopImage, description: 'Laptop project description', size: 'square' },
  { id: 25, title: 'Laptop Hero', image: laptopheroImage, description: 'Laptop Hero project description', size: 'small' },
  { id: 26, title: 'Laptop Lamp', image: laptoplampImage, description: 'Laptop Lamp project description', size: 'big' },
  { id: 27, title: 'Navely', image: navelyImage, description: 'Navely project description', size: 'rectangle' },
  { id: 28, title: 'Norvan', image: norvanImage, description: 'Norvan project description', size: 'square' },
  { id: 29, title: 'Orange', image: orangeImage, description: 'Orange project description', size: 'small' },
  { id: 30, title: 'Organic', image: organicImage, description: 'Organic project description', size: 'big' },
  { id: 31, title: 'Skincare', image: skincareImage, description: 'Skincare project description', size: 'rectangle' },
  { id: 32, title: 'Symbol', image: symbolImage, description: 'Symbol project description', size: 'square' },
  { id: 33, title: 'VI', image: viImage, description: 'VI project description', size: 'small' },
  { id: 34, title: 'Yellow', image: yellowImage, description: 'Yellow project description', size: 'big' },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const autoScrollX = useMotionValue(0)
  const [rowWidth, setRowWidth] = useState(2000) // Default fallback width
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Measure actual row width for seamless infinite scroll
  useEffect(() => {
    const measureRowWidth = () => {
      if (topRowRef.current) {
        const firstChild = topRowRef.current.firstElementChild as HTMLElement
        if (firstChild) {
          // Measure width of one complete set (first 3 projects)
          const firstSetWidth = Array.from(topRowRef.current.children)
            .slice(0, 3)
            .reduce((sum, child) => {
              const rect = child.getBoundingClientRect()
              return sum + rect.width + 16 // width + gap
            }, 0)
          setRowWidth(firstSetWidth)
        }
      }
    }

    // Measure after initial render
    const timeout = setTimeout(measureRowWidth, 100)
    
    // Re-measure on window resize
    window.addEventListener('resize', measureRowWidth)
    
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', measureRowWidth)
    }
  }, [])

  // Auto-scroll from right to left with infinite loop
  useEffect(() => {
    const animate = () => {
      const currentX = autoScrollX.get()
      const newX = currentX - 0.5 // Scroll speed
      
      // Reset to 0 when we've scrolled one full set width (seamless loop)
      if (Math.abs(newX) >= rowWidth) {
        autoScrollX.set(newX % rowWidth)
      } else {
        autoScrollX.set(newX)
      }
      
      requestAnimationFrame(animate)
    }
    
    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [autoScrollX, rowWidth])

  // Parallax effect based on scroll
  const parallaxX = useTransform(scrollYProgress, [0, 1], [0, -300])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Combine auto-scroll with scroll-based parallax
  const combinedX = useTransform(
    [autoScrollX, parallaxX],
    ([auto, parallax]: number[]) => (auto || 0) + (parallax || 0)
  )

  // Handle scroll wheel interaction
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView) {
          // Apply scroll velocity to auto-scroll
          const currentX = autoScrollX.get()
          let newX = currentX - e.deltaY * 0.3
          
          // Handle infinite loop wrapping
          if (Math.abs(newX) >= rowWidth) {
            newX = newX % rowWidth
          }
          
          autoScrollX.set(newX)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [autoScrollX, rowWidth])

  // Handle touch interaction
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let isTouching = false

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0 && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView) {
          touchStartX = e.touches[0].clientX
          touchStartY = e.touches[0].clientY
          isTouching = true
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isTouching && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - touchStartX
        const deltaY = e.touches[0].clientY - touchStartY
        
        // Apply horizontal movement
        const currentX = autoScrollX.get()
        let newX = currentX - deltaX * 0.5
        
        // Handle infinite loop wrapping
        if (Math.abs(newX) >= rowWidth) {
          newX = newX % rowWidth
        }
        
        autoScrollX.set(newX)
        
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      }
    }

    const handleTouchEnd = () => {
      isTouching = false
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [autoScrollX, rowWidth])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-black overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <h2 className="text-white text-xs md:text-sm uppercase tracking-widest font-light mr-4">
              PROJECTS
            </h2>
            <div className="flex-1 h-px bg-white"></div>
          </div>
        </div>

        {/* Projects Grid Container with Auto-scroll */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="flex flex-col gap-4 md:gap-6"
            style={{
              x: combinedX,
              y: parallaxY,
            }}
          >
            {/* Top Row - Infinite scroll with multiple duplicates */}
            <div ref={topRowRef} className="flex gap-4 md:gap-6 min-w-max">
              {/* Render multiple sets for seamless infinite scroll */}
              {Array.from({ length: 4 }).map((_, setIndex) =>
                projects.slice(0, 3).map((project, index) => (
                  <ProjectCard 
                    key={`top-set${setIndex}-${project.id}`} 
                    project={project} 
                    index={index + setIndex * 3} 
                    row={0} 
                  />
                ))
              )}
            </div>
            
            {/* Bottom Row - Infinite scroll with multiple duplicates */}
            <div className="flex gap-4 md:gap-6 min-w-max">
              {/* Render multiple sets for seamless infinite scroll */}
              {Array.from({ length: 4 }).map((_, setIndex) =>
                projects.slice(3, 6).map((project, index) => (
                  <ProjectCard 
                    key={`bottom-set${setIndex}-${project.id}`} 
                    project={project} 
                    index={index + setIndex * 3} 
                    row={1} 
                  />
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, row }: { project: typeof projects[0]; index: number; row: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Individual card parallax
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  // Define sizes based on project.size
  const getSizeClasses = () => {
    switch (project.size) {
      case 'small':
        return 'w-[200px] md:w-[250px] h-[150px] md:h-[180px]'
      case 'big':
        return 'w-[350px] md:w-[400px] h-[280px] md:h-[320px]'
      case 'rectangle':
        return 'w-[400px] md:w-[500px] h-[200px] md:h-[250px]'
      case 'square':
        return 'w-[250px] md:w-[300px] h-[250px] md:h-[300px]'
      default:
        return 'w-[300px] md:w-[350px] h-[250px] md:h-[300px]'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`flex-shrink-0 ${getSizeClasses()} rounded-xl overflow-hidden cursor-pointer group`}
      style={{ 
        y: cardY,
        opacity: cardOpacity,
        scale: cardScale,
      }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 200px, 400px"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h3 className="text-white text-sm md:text-lg font-bold mb-1 md:mb-2">{project.title}</h3>
            <p className="text-white/80 text-xs md:text-sm">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


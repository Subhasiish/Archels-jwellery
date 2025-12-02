'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const purpleBoxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Scroll animation removed — headline transition disabled per request

  // Motion values for 3D interaction
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Transform mouse position to rotation values
  const rotateXValue = useTransform(y, [-0.5, 0.5], [15, -15])
  const rotateYValue = useTransform(x, [-0.5, 0.5], [-15, 15])
  
  // Smooth spring animations
  const rotateX = useSpring(rotateXValue, { stiffness: 150, damping: 15 })
  const rotateY = useSpring(rotateYValue, { stiffness: 150, damping: 15 })

  // Subscribe to rotation changes
  useEffect(() => {
    const unsubscribeX = rotateX.on('change', (latest) => {
      setRotation(prev => ({ ...prev, x: latest }))
    })
    const unsubscribeY = rotateY.on('change', (latest) => {
      setRotation(prev => ({ ...prev, y: latest }))
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [rotateX, rotateY])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (purpleBoxRef.current) {
        const rect = purpleBoxRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        // Normalize mouse position to -0.5 to 0.5
        const normalizedX = (e.clientX - centerX) / rect.width
        const normalizedY = (e.clientY - centerY) / rect.height
        
        x.set(normalizedX)
        y.set(normalizedY)
        setMousePosition({ x: normalizedX, y: normalizedY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden pt-20 flex items-center justify-center">
      {/* Headline transition removed — watermark used instead */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-[80vh]">
          {/* 3D Interactive Purple Gradient Container - Centered, Smaller */}
          <motion.div
            ref={purpleBoxRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {/* Base Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 20%, #7c3aed 40%, #6d28d9 60%, #5b21b6 80%, #4c1d95 100%)',
              }}
            />

            {/* Large full-width title inside the square (remains visually upright) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="w-full text-white font-extrabold text-center leading-none select-none"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 7rem)',
                  letterSpacing: '-0.02em',
                  textShadow: '0 10px 60px rgba(0,0,0,0.6), 0 0 80px rgba(140,82,255,0.14)',
                  transform: `translateZ(80px) rotateX(${ -rotation.x }deg) rotateY(${ -rotation.y }deg)`,
                }}
                animate={{ scale: [1, 1.03, 1], rotate: [0, 0.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                Shuuvora Tech
              </motion.h2>
            </motion.div>

            {/* 3D Flowing/Wavy Shapes - Layer 1 */}
            <motion.div
              className="absolute inset-0"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(167, 139, 250, 0.6)" />
                    <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
                    <stop offset="100%" stopColor="rgba(124, 58, 237, 0.6)" />
                  </linearGradient>
                  <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(109, 40, 217, 0.7)" />
                    <stop offset="50%" stopColor="rgba(91, 33, 182, 0.8)" />
                    <stop offset="100%" stopColor="rgba(76, 29, 149, 0.6)" />
                  </linearGradient>
                  <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(196, 181, 253, 0.5)" />
                    <stop offset="100%" stopColor="rgba(167, 139, 250, 0.7)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,300 Q150,200 300,300 T600,300 L600,600 L0,600 Z"
                  fill="url(#wave1)"
                  animate={{
                    d: [
                      "M0,300 Q150,200 300,300 T600,300 L600,600 L0,600 Z",
                      "M0,300 Q150,400 300,300 T600,300 L600,600 L0,600 Z",
                      "M0,300 Q150,200 300,300 T600,300 L600,600 L0,600 Z",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                  d="M0,350 Q200,250 400,350 T600,350 L600,600 L0,600 Z"
                  fill="url(#wave2)"
                  animate={{
                    d: [
                      "M0,350 Q200,250 400,350 T600,350 L600,600 L0,600 Z",
                      "M0,350 Q200,450 400,350 T600,350 L600,600 L0,600 Z",
                      "M0,350 Q200,250 400,350 T600,350 L600,600 L0,600 Z",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.path
                  d="M0,250 Q100,150 200,250 T400,250 T600,250 L600,600 L0,600 Z"
                  fill="url(#wave3)"
                  animate={{
                    d: [
                      "M0,250 Q100,150 200,250 T400,250 T600,250 L600,600 L0,600 Z",
                      "M0,250 Q100,350 200,250 T400,250 T600,250 L600,600 L0,600 Z",
                      "M0,250 Q100,150 200,250 T400,250 T600,250 L600,600 L0,600 Z",
                    ],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
              </svg>
            </motion.div>

            {/* 3D Flowing/Wavy Shapes - Layer 2 (Deeper) */}
            <motion.div
              className="absolute inset-0"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="none">
                <motion.path
                  d="M0,400 Q250,300 500,400 T600,400 L600,600 L0,600 Z"
                  fill="rgba(139, 92, 246, 0.4)"
                  animate={{
                    d: [
                      "M0,400 Q250,300 500,400 T600,400 L600,600 L0,600 Z",
                      "M0,400 Q250,500 500,400 T600,400 L600,600 L0,600 Z",
                      "M0,400 Q250,300 500,400 T600,400 L600,600 L0,600 Z",
                    ],
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </motion.div>

            {/* 3D Depth Effect - Additional Layers */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(167, 139, 250, 0.3) 0%, transparent 70%)`,
                transform: `translateZ(10px)`,
              }}
            />


            {/* Text - Middle Bottom of Square */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center z-10 pb-8 md:pb-12 w-full px-4"
              style={{
                transform: `translate3d(-50%, 0, 50px)`,
              }}
            >
              <motion.div
                className="space-y-2 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  Grow Your Business with Shuuvora Tech.
                </p>
                <p className="text-indigo-100/90 text-sm md:text-base font-medium">
                  End-to-end product design, AI-enabled tooling, and scalable engineering — all under one roof.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA removed per request (was centered below the square) */}

            {/* 3D Shadow Effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: `
                  ${20 + mousePosition.x * 30}px ${20 + mousePosition.y * 30}px 60px rgba(139, 92, 246, 0.4),
                  ${-20 - mousePosition.x * 30}px ${-20 - mousePosition.y * 30}px 60px rgba(76, 29, 149, 0.4),
                  inset 0 0 100px rgba(139, 92, 246, 0.2)
                `,
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const purpleBoxRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

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
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-20 flex items-center justify-center">
      {/* Main Headline - Spanning Left to Right Corner of Hero Section, Outside Square */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute left-0 right-0 text-center z-30 w-full px-4 sm:px-6 lg:px-8"
        style={{
          top: 'calc(50vh)',
          transform: 'translateY(-50%)',
        }}
      >
        <span
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white block w-full"
          style={{
            fontFamily: 'var(--font-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            textShadow: '0 0 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)',
          }}
        >
          Shuuvora Tech.
        </span>
      </motion.h1>

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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed"
              >
                Grow Your Business with Shuuvora Tech.
              </motion.p>
            </motion.div>

            {/* Circular CTA Button - Bottom Right Corner of Square */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              transition={{ 
                delay: 0.7, 
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center z-30 shadow-xl hover:shadow-2xl transition-all group"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                transform: `translateZ(50px)`,
              }}
              aria-label="Schedule a Call"
            >
              {/* Pulsing Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
              </motion.div>
            </motion.button>

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

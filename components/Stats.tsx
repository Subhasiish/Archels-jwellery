'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    value: 17,
    suffix: '+',
    title: 'Clients Worldwide',
    description: 'Trusted by brands and businesses across the globe.',
  },
  {
    value: 35,
    suffix: '+',
    title: 'Websites Delivered',
    description: 'Successfully crafted and launched numerous digital experiences.',
  },
  {
    value: 7,
    suffix: '+',
    title: 'Years of Experience',
    description: 'Successfully crafted and launched numerous digital experiences.',
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counters, setCounters] = useState([0, 0, 0])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const timers: NodeJS.Timeout[] = []

    stats.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentStep++
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value)
        
        setCounters(prev => {
          const newCounters = [...prev]
          newCounters[index] = newValue
          return newCounters
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
      
      timers.push(timer)
    })

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* <p
            className="text-white text-xl md:text-2xl lg:text-3xl italic"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
            }}
          >
            Turning ideas into impactful digital realities.
          </p> */}
        </motion.div>

        {/* Stats Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Large Number */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                {counters[index]}{stat.suffix}
              </div>

              {/* Title in Italic Serif */}
              <h3
                className="text-lg md:text-xl lg:text-2xl text-white mb-4"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                }}
              >
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm md:text-base font-light leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

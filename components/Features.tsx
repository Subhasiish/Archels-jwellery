'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Globe, Cpu, Lock, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Built with Next.js for optimal speed and scalability. Experience blazing-fast load times.',
    color: 'text-neon-blue',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to keep your data safe and secure.',
    color: 'text-neon-purple',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy anywhere in the world with our distributed infrastructure and CDN network.',
    color: 'text-neon-pink',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Insights',
    description: 'Leverage advanced AI and machine learning to make data-driven decisions.',
    color: 'text-neon-blue',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data belongs to you. We never sell or share your information with third parties.',
    color: 'text-neon-purple',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description: 'Monitor your business metrics in real-time with beautiful, interactive dashboards.',
    color: 'text-neon-pink',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to scale your business and stay ahead of the competition
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-neon-blue/50 transition-all group"
            >
              <div className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



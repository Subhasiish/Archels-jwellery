'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const processSteps = [
  {
    number: '01.',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your vision, understanding your goals, audience, and market to craft a strategic roadmap for success.',
  },
  {
    number: '02.',
    title: 'Design & Build',
    description:
      'Our designers and engineers work in sync to prototype, iterate, and develop experiences that feel refined, fast, and future-ready.',
  },
  {
    number: '03.',
    title: 'Launch & Elevate',
    description:
      'We deploy, measure, and continuously optimise your product so it keeps performing long after launch day.',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Transform scroll progress for each step (for sticky cards)
  const step2Y = useTransform(scrollYProgress, [0.25, 0.5], [120, 0])
  const step2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])

  const step3Y = useTransform(scrollYProgress, [0.5, 0.75], [120, 0])
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])

  // Background rail glow responds to scroll
  const railScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1])

  return (
    <section ref={containerRef} className="relative bg-black py-20 md:py-32 w-full overflow-hidden">
      {/* Vertical glowing rail behind cards */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 hidden md:block"
        style={{ scaleY: railScale }}
      >
        <div className="w-px h-full bg-gradient-to-b from-amber-400/0 via-amber-400/50 to-amber-400/0" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* OUR PROCESS Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white text-xs md:text-sm uppercase tracking-widest font-light">
            OUR PROCESS
          </p>
        </motion.div>

        {/* Hero Section - "From Idea to Execution" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-16 h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {/* Background Image with Blur Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-900/40 to-yellow-900/40"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'800\' height=\'600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'a\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23f59e0b;stop-opacity:0.3\'/%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23d97706;stop-opacity:0.3\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'800\' height=\'600\' fill=\'url(%23a)\'/%3E%3C/svg%3E")',
              filter: 'blur(2px)',
            }}
          />
          
          {/* Overlay Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                From Idea to Execution
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-all"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Bottom Section */}
            <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-light">
              Our proven methodology ensures every project is delivered with precision, creativity, and measurable results that exceed expectations.
            </p>
          </div>
        </motion.div>

        {/* Process Steps Container - Sticky scroll with 3D cards */}
        <div className="relative" style={{ minHeight: '230vh' }}>
          {/* Step 1 - Fixed/Visible Initially */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 30,
            }}
            className="mb-8"
          >
            <ProcessCard step={processSteps[0]}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Side - Text Content */}
                <ProcessText step={processSteps[0]} />

                {/* Right Side - Tablet Image */}
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-900/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl">
                    <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/3]">
                      <div className="w-full h-full bg-black p-4 md:p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center relative">
                          <div className="relative mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                              MORA LAMP
                            </h1>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                              <div className="relative">
                                <div className="w-12 h-24 bg-gray-700 rounded-t-full"></div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-white text-sm md:text-base">
                              Elevate your space with elegance and smart technology.
                            </p>
                            <div className="flex flex-col space-y-2 text-right">
                              <div className="text-white text-xs">Smart Control</div>
                              <div className="text-white text-xs">Ambiance Modes</div>
                              <div className="text-white text-xs">Energy Efficient</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProcessCard>
          </div>

          {/* Step 2 - Slides up from bottom and overlaps Step 1 */}
          <motion.div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 20,
              y: step2Y,
              opacity: step2Opacity,
            }}
            className="mb-8"
          >
            <ProcessCard step={processSteps[1]}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <ProcessText step={processSteps[1]} />
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-900/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl">
                    <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/3]">
                      <div className="w-full h-full bg-black p-4 md:p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center relative">
                          <div className="relative mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                              MORA LAMP
                            </h1>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                              <div className="relative">
                                <div className="w-12 h-24 bg-gray-700 rounded-t-full"></div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-white text-sm md:text-base">
                              Elevate your space with elegance and smart technology.
                            </p>
                            <div className="flex flex-col space-y-2 text-right">
                              <div className="text-white text-xs">Smart Control</div>
                              <div className="text-white text-xs">Ambiance Modes</div>
                              <div className="text-white text-xs">Energy Efficient</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProcessCard>
          </motion.div>

          {/* Step 3 - Slides up from bottom and overlaps Step 2 */}
          <motion.div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              y: step3Y,
              opacity: step3Opacity,
            }}
            className="mb-8"
          >
            <ProcessCard step={processSteps[2]}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <ProcessText step={processSteps[2]} />
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-900/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-3 md:p-4 shadow-2xl">
                    <div className="relative bg-black rounded-lg overflow-hidden aspect-[4/3]">
                      <div className="w-full h-full bg-black p-4 md:p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center relative">
                          <div className="relative mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                              MORA LAMP
                            </h1>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                              <div className="relative">
                                <div className="w-12 h-24 bg-gray-700 rounded-t-full"></div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl"></div>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-white text-sm md:text-base">
                              Elevate your space with elegance and smart technology.
                            </p>
                            <div className="flex flex-col space-y-2 text-right">
                              <div className="text-white text-xs">Smart Control</div>
                              <div className="text-white text-xs">Ambiance Modes</div>
                              <div className="text-white text-xs">Energy Efficient</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProcessCard>
          </motion.div>
        </div>

        {/* Bottom Footer Statement - appears right after last card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p
            className="text-white text-xl md:text-2xl lg:text-3xl italic"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
            }}
          >
            Turning ideas into impactful digital realities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

type ProcessStep = (typeof processSteps)[number]

function ProcessCard({
  step,
  children,
}: {
  step: ProcessStep
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-[0_28px_70px_rgba(0,0,0,0.6)]"
      initial={{ opacity: 0.9, rotateY: -6, translateY: 20 }}
      whileInView={{ opacity: 1, rotateY: 0, translateY: 0 }}
      viewport={{ once: true }}
      whileHover={{ rotateX: -5, rotateY: 6, translateY: -10 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 170, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative">
        {/* Step badge in corner */}
        <div className="absolute -top-6 right-0 flex items-center gap-2 text-xs md:text-sm text-amber-600 font-medium tracking-[0.25em] uppercase">
          <span className="h-px w-8 bg-amber-500" />
          <span>{step.number}</span>
        </div>
        {children}
      </div>
    </motion.div>
  )
}

function ProcessText({ step }: { step: ProcessStep }) {
  return (
    <div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
        {step.title}
      </h3>
      <p className="text-black text-base md:text-lg leading-relaxed font-light">
        {step.description}
      </p>
    </div>
  )
}

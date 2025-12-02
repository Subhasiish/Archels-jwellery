'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    number: '01.',
    name: 'Gold Plan',
    price: '40k',
    currency: 'INR',
    features: [
      'Website Design',
      'Regular Updates',
      'Custom Coded Website',
    ],
    highlighted: false,
  },
  {
    number: '02.',
    name: 'Platinum Plan',
    price: '60k',
    currency: 'INR',
    features: [
      'Custom Website Design',
      'Regular Update & Meetings',
      'Custom Coded Website',
      '4-5 Integrations',
    ],
    highlighted: true,
  },
  {
    number: '03.',
    name: 'Elite Pass Plan',
    price: '80k',
    currency: 'INR',
    features: [
      'Custom Website Design',
      'Regular Update & Meetings',
      'Custom Coded Website',
      '4-5 Integrations',
      'AI Integration',
      'Tech Support',
      'Cybersecurity Report',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <p className="text-[#8c52ff] text-sm uppercase tracking-wide font-semibold">Pricing</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Plans built for impact</h3>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Transparent pricing, clear outcomes — pick the plan that accelerates your growth. Limited onboarding slots available each month.</p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className={`rounded-2xl p-6 md:p-8 relative overflow-hidden border ${plan.highlighted ? 'border-[#8c52ff]' : 'border-white/10'} bg-[#07040f]`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 right-3 bg-[#8c52ff] text-black px-3 py-1 rounded-full text-sm font-semibold">Popular</div>
              )}

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-white/70">{plan.number}</div>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white mt-2">{plan.name}</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/60">Starts at</div>
                  <div className="text-2xl font-bold text-white">{plan.price}</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2 bg-[#8c52ff]" />
                    <div className="text-white/80 text-sm">{f}</div>
                  </li>
                ))}
              </ul>

              {/* CTA & Badges */}
              <div className="mt-4 flex flex-col gap-3">
                <button className={`w-full rounded-lg py-3 font-semibold ${plan.highlighted ? 'bg-[#8c52ff] text-black' : 'bg-white text-black'}`}>
                  {plan.highlighted ? 'Get Started' : 'Select Plan'}
                </button>
                {plan.highlighted ? (
                  <div className="text-xs text-white/70">Only a few onboarding spots left — secure your slot</div>
                ) : (
                  <div className="text-xs text-white/40">Monthly payment estimates shown</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof / urgency */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-6">
          <div className="text-white/70 text-sm">Trusted by startups & enterprises</div>
          <div className="h-px w-8 bg-white/10" />
          <div className="text-white/70 text-sm">Limited onboarding each month — act now</div>
        </div>
      </div>
    </section>
  )
}

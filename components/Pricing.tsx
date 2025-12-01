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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-white text-xs md:text-sm uppercase tracking-widest font-light">
            PLANS
          </h2>
        </motion.div>

        {/* Horizontally Scrollable Plans */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
  <div className="flex gap-6 md:gap-8 min-w-max">
    {plans.map((plan, index) => {
      // Determine custom card width for each plan
      let cardWidth = "w-[280px] md:w-[320px] lg:w-[380px]";
      if (plan.name === 'Gold Plan') cardWidth = "w-[220px] md:w-[260px] lg:w-[300px]";
      if (plan.name === 'Platinum Plan') cardWidth = "w-[330px] md:w-[400px] lg:w-[470px]";

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className={
            `flex-shrink-0 ${cardWidth} rounded-xl p-7 md:p-10 border-2 border-white bg-black group hover:bg-white hover:border-white transition-all duration-300`
          }
        >
          <div>
            <div className={`
              text-xs mb-2 font-light 
              group-hover:text-black transition-all duration-300
              text-white
            `}>
              {plan.number}
            </div>
            <h3 className={`
              text-xl md:text-2xl font-bold mb-4
              group-hover:text-black transition-all duration-300
              text-white
            `}>
              {plan.name}
            </h3>
            <p className={`
              text-xs mb-7 font-light
              group-hover:text-black/70 transition-all duration-300
              text-white/70
            `}>
              ( starts from <span className="font-bold">{plan.price}</span> {plan.currency} )
            </p>

            {/* Features */}
            <div className="border border-white rounded-lg p-4 bg-transparent group-hover:border-black transition-all duration-300">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`
                      text-xs md:text-sm
                      group-hover:text-black transition-all duration-300
                      text-white
                      flex items-center
                    `}
                  >
                    <span className={`
                      text-base mr-2
                      group-hover:text-black
                      text-white
                    `}>
                      →
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  )
}

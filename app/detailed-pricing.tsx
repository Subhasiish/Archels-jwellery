"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// removed tiered 'plans' — focusing on single services list for small-screen accessibility

export default function DetailedPricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const [listView, setListView] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div ref={ref} className="min-h-screen bg-black px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 w-full flex flex-col items-center">
      {/* Top label */}
      <div className="w-full max-w-7xl mx-auto mb-6">
        <div className="inline-block px-3 py-1 rounded-full bg-black/50 border border-white/10 text-white text-xs tracking-widest uppercase">Pricing</div>
      </div>

      {/* Hero */}
      <div className="w-full max-w-7xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Plans that match ambition — results you can measure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-4 text-white/70 max-w-3xl mx-auto"
        >
          Limited onboarding each month — our focus is quality, not quantity. Secure your slot and start scaling.
        </motion.p>
      </div>


      {/* Services controls removed (toggle included in services header) */}

      {/* Social proof & urgency */}
      <div className="w-full max-w-7xl mx-auto mt-8 text-center">
        <div className="text-white/70">Trusted by ambitious teams — limited slots open every month.</div>
        <div className="mt-4 inline-flex items-center gap-3 bg-black/40 border border-white/6 px-4 py-2 rounded-full">
          <div className="text-[#8c52ff] font-semibold">20+ clients onboarded this month</div>
          <div className="h-px w-6 bg-white/6" />
          <div className="text-white/60">Next batch starts soon</div>
        </div>
      </div>
      
      {/* Services: search + horizontal single-line scroller */}
      <div className="w-full max-w-7xl mx-auto mt-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-2xl font-bold">Our Services & Pricing</h3>
          <div className="text-white/70 text-sm">Scroll horizontally to browse — tap a card to book.</div>
        </div>

        <div className="w-full mb-4">
          <label className="relative block">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, features or categories..."
              className="w-full rounded-lg bg-[#0b0710] border border-white/8 text-white px-4 py-3 placeholder:text-white/40"
              aria-label="Search services"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2 top-2 bottom-2 inline-flex items-center px-2 text-white/60"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </label>
        </div>

        <div className="overflow-x-auto scrollbar-hide py-3 -mx-4 px-4" role="list" aria-label="Services carousel">
          <div className="flex gap-6 items-stretch" style={{ paddingBottom: 6 }}>
            {services
              .filter((s) => {
                const q = query.trim().toLowerCase()
                if (!q) return true
                return (
                  s.title.toLowerCase().includes(q) ||
                  s.category.toLowerCase().includes(q) ||
                  s.description.toLowerCase().includes(q) ||
                  s.includes.join(' ').toLowerCase().includes(q)
                )
              })
              .map((s, idx) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.02, duration: 0.45 }}
                  className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] bg-[#07040f] border border-white/6 rounded-2xl p-5 flex flex-col justify-between"
                  role="listitem"
                >
                  <div>
                    <div className="text-sm text-white/60">{s.category}</div>
                    <h4 className="text-white text-xl font-semibold mt-1">{s.title}</h4>
                    <p className="mt-2 text-white/70 text-sm line-clamp-3">{s.description}</p>

                    <ul className="mt-4 space-y-2 text-white/80 text-sm">
                      {s.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 rounded-full mt-1 bg-[#8c52ff]" />
                          <div>{inc}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                    <a href={`#contact`} className="inline-block text-sm px-3 py-2 rounded-lg bg-[#8c52ff] text-black font-semibold">Book</a>
                    <div className="text-sm md:text-base font-extrabold text-white">{s.price}{s.currency && <span className="ml-1 text-white/80 font-normal">{s.currency}</span>}</div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const services = [
  { id: 's1', category: 'Web', title: 'Business Website', price: '25k', currency: 'INR', description: 'Fast, responsive brochure website for your brand.', includes: ['5 pages', 'Responsive layout', 'Contact form', 'Basic SEO'], timeline: '2-3 weeks' },
  { id: 's2', category: 'Web', title: 'E-commerce Store', price: '60k', currency: 'INR', description: 'Full-featured online store with secure checkout.', includes: ['Product catalog', 'Payment setup', 'Shipping rules', 'Admin panel'], timeline: '4-6 weeks' },
  { id: 's3', category: 'Design', title: 'Custom UI/UX', price: '30k', currency: 'INR', description: 'Design system & high-fidelity screens for your product.', includes: ['Design system', '3 screen templates', 'Prototype', 'Handoff'], timeline: '2-3 weeks' },
  { id: 's4', category: 'Brand', title: 'Brand Identity', price: '35k', currency: 'INR', description: 'Logo, colors, and visual language to own your space.', includes: ['Logo variants', 'Color palette', 'Typography', 'Usage guide'], timeline: '2-3 weeks' },
  { id: 's5', category: 'AI', title: 'AI Chat Assistant', price: '50k', currency: 'INR', description: 'Smart assistant for support, sales, and onboarding.', includes: ['Intent flows', 'Knowledge base', 'Small talk tuning', 'Deployment'], timeline: '3-5 weeks' },
  { id: 's6', category: 'AI', title: 'Content Automation', price: '40k', currency: 'INR', description: 'Automated copy generation & publishing workflows.', includes: ['Templates', 'Scheduler', 'Light editing UI'], timeline: '3 weeks' },
  { id: 's7', category: 'Security', title: 'Security Audit', price: '25k', currency: 'INR', description: 'Identify vulnerabilities & prioritized fixes.', includes: ['Pen-test report', 'Fix roadmap', 'Remediation guide'], timeline: '1-2 weeks' },
  { id: 's8', category: 'Platform', title: 'SaaS MVP', price: '120k', currency: 'INR', description: 'MVP build with auth, billing and core features.', includes: ['Auth', 'Billing', 'Admin dashboard', '3 integrations'], timeline: '8-12 weeks' },
  { id: 's9', category: 'Integrations', title: 'API Integrations', price: '20k', currency: 'INR', description: 'Connect third-party platforms and CRMs.', includes: ['2 integrations', 'Webhooks', 'Retry logic'], timeline: '1-2 weeks' },
  { id: 's10', category: 'Performance', title: 'Performance Optimization', price: '18k', currency: 'INR', description: 'Speed, caching and Lighthouse improvements.', includes: ['Audit', 'Critical fixes', 'Caching'], timeline: '1-2 weeks' },
  { id: 's11', category: 'Marketing', title: 'Landing Page Campaign', price: '15k', currency: 'INR', description: 'High-converting landing page + analytics.', includes: ['Design & copy', 'A/B-ready', 'Analytics setup'], timeline: '1-2 weeks' },
  { id: 's12', category: 'Mobile', title: 'PWA Build', price: '45k', currency: 'INR', description: 'Progressive Web App for mobile-first users.', includes: ['Offline support', 'Installable', 'Push notifications'], timeline: '3-4 weeks' },
  { id: 's13', category: 'Support', title: 'Retainer (Monthly)', price: '20k', currency: 'INR', description: 'Ongoing updates, monitoring, and fixes.', includes: ['8 hours/month', 'Priority queue', 'Monthly report'], timeline: 'Monthly' },
  { id: 's14', category: 'Analytics', title: 'Analytics & Dashboards', price: '28k', currency: 'INR', description: 'Custom dashboards to track growth metrics.', includes: ['Data pipelining', 'Dashboard', 'Alerts'], timeline: '2-4 weeks' },
  { id: 's15', category: 'Ops', title: 'DevOps Setup', price: '35k', currency: 'INR', description: 'CI/CD, infra IaC and deployment hardening.', includes: ['CI/CD', 'IaC', 'Monitoring'], timeline: '2-3 weeks' },
  { id: 's16', category: 'Consulting', title: 'Strategy Sprint', price: '12k', currency: 'INR', description: '2-week strategic sprint to align product & growth.', includes: ['Workshops', 'Roadmap', 'Next steps'], timeline: '2 weeks' },
]

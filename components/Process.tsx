 'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Feather, PenTool, Code, TestTube, Rocket, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const STEPS = [
  { id: 'discover', title: 'Discover', icon: Compass, blurb: 'Clarify goals, users, and success metrics.' },
  { id: 'research', title: 'Research', icon: Search, blurb: 'Market & competitor insights that inform decisions.' },
  { id: 'strategy', title: 'Strategy', icon: Feather, blurb: 'Roadmaps and prioritized initiatives for growth.' },
  { id: 'design', title: 'Design', icon: PenTool, blurb: 'High-fidelity UI & UX focused on conversion.' },
  { id: 'build', title: 'Build', icon: Code, blurb: 'Robust engineering for performance and scale.' },
  { id: 'qa', title: 'QA', icon: TestTube, blurb: 'Automated & manual testing to ensure quality.' },
  { id: 'launch', title: 'Launch', icon: Rocket, blurb: 'Fast, measured launches with data tracking.' },
  { id: 'optimize', title: 'Optimize', icon: TrendingUp, blurb: 'Iterate based on metrics to increase ROI.' },
]

export default function Process() {
  const [active, setActive] = useState(STEPS[0].id)

  const activeStep = STEPS.find((s) => s.id === active) || STEPS[0]

  return (
    <section className="relative bg-black py-16 md:py-28 w-full overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#8c52ff]/20 to-[#4c1d95]/6 blur-3xl opacity-30" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-gradient-to-br from-white/6 to-[#8c52ff]/6 blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[#8c52ff] text-xs uppercase tracking-widest font-semibold">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3">Designed for speed, built for growth</h2>
          <p className="text-white/70 mt-3 max-w-3xl">A modern delivery flow with clear milestones and polished handoffs — crafted to move fast while reducing risk.</p>
        </div>

        {/* Step rail */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide py-6 -mx-4 px-4">
            <div className="flex gap-6 items-stretch align-bottom">
              {STEPS.map((step, idx) => {
                const Icon = step.icon
                const activeIndex = STEPS.findIndex((s) => s.id === active)
                const isActive = step.id === active
                const distance = Math.abs(idx - activeIndex)
                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActive(step.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 w-[240px] sm:w-[260px] md:w-[300px] p-5 rounded-3xl transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-[#12021a] to-[#0b0710] ring-2 ring-[#8c52ff] shadow-xl' : 'bg-[#07040f]'} flex flex-col justify-between`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-white/60">Step {String(idx + 1).padStart(2, '0')}</div>
                        <h3 className={`text-lg md:text-xl mt-2 font-semibold ${isActive ? 'text-white' : 'text-white/90'}`}>{step.title}</h3>
                      </div>
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${isActive ? 'bg-[#8c52ff] text-black' : 'bg-white/6 text-white/80'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <p className={`mt-3 text-sm ${isActive ? 'text-white' : 'text-white/70'} line-clamp-3`}>{step.blurb}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-white/60">Est. time</div>
                      <div className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-white/90'}`}>{estimateFor(step.id)}</div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Progress line (visual) */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <div className="mx-auto max-w-6xl h-1 bg-white/4 rounded-full" />
          </div>
        </div>

        {/* Detail panel */}
        <motion.div key={activeStep.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-8 bg-gradient-to-br from-[#07040f] to-[#09050a] border border-white/6 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="md:flex-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#8c52ff] flex items-center justify-center text-black text-lg font-bold">{activeStep.title.charAt(0)}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">{activeStep.title}</h3>
                  <p className="text-white/70 mt-2 max-w-2xl">{activeStep.blurb} We focus on measurable outcomes, rapid feedback, and polished handoffs so your product ships with confidence.</p>
                </div>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 text-sm">
                {benefitsFor(activeStep.id).map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full mt-1 bg-[#8c52ff]" />
                    <div>{b}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 md:mt-0 md:flex-shrink-0">
              <div className="bg-gradient-to-br from-white/6 to-white/2 p-4 rounded-2xl text-center">
                <div className="text-xs text-white/60">Typical timeline</div>
                <div className="text-2xl font-extrabold text-white mt-2">{estimateFor(activeStep.id)}</div>
                <a href="#contact" className="mt-4 inline-block bg-[#8c52ff] text-black px-4 py-2 rounded-lg font-semibold">Book this phase</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function estimateFor(id: string) {
  switch (id) {
    case 'discover':
      return '1–2 weeks'
    case 'research':
      return '1–2 weeks'
    case 'strategy':
      return '1 week'
    case 'design':
      return '2–4 weeks'
    case 'build':
      return '4–12 weeks'
    case 'qa':
      return '1–2 weeks'
    case 'launch':
      return '1 week'
    case 'optimize':
      return 'Ongoing'
    default:
      return 'Varies'
  }
}

function benefitsFor(id: string) {
  switch (id) {
    case 'discover':
      return ['Clear goals & KPIs', 'Stakeholder alignment']
    case 'research':
      return ['User insights', 'Opportunity mapping']
    case 'strategy':
      return ['Prioritized roadmap', 'Success metrics']
    case 'design':
      return ['Conversion-focused UI', 'Prototype & test']
    case 'build':
      return ['Production-ready code', 'Scalable architecture']
    case 'qa':
      return ['Automated tests', 'Regression checks']
    case 'launch':
      return ['Analytics setup', 'Rollout plan']
    case 'optimize':
      return ['A/B tests', 'Growth experiments']
    default:
      return []
  }
}

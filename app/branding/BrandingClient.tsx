'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

interface Shape {
  width: number
  height: number
  top: string
  left: string
  speed?: number
}

export default function BrandingClient() {
  const sections = useRef<HTMLDivElement[]>([])
  const imageLayers = useRef<HTMLDivElement[]>([])
  const textLayers = useRef<HTMLDivElement[]>([])
  const tiltCards = useRef<HTMLDivElement[]>([])
  const cursorGlow = useRef<HTMLDivElement>(null)
  const heroTextLetters = useRef<HTMLSpanElement[]>([])
  const heroShapes = useRef<HTMLDivElement[]>([])
  const [shapes, setShapes] = useState<Shape[]>([])

  // Testimonials & Portfolio refs
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const [isDraggingTestimonials, setIsDraggingTestimonials] = useState(false)
  const startXTestimonials = useRef(0)
  const scrollLeftTestimonials = useRef(0)

  const [isDraggingPortfolio, setIsDraggingPortfolio] = useState(false)
  const startXPortfolio = useRef(0)
  const scrollLeftPortfolio = useRef(0)

/* ================= GENERATE BUBBLES ================= */
useEffect(() => {
  const generatedShapes: Shape[] = Array.from({ length: 30 }).map(() => ({
    width: 60 + Math.random() * 120,  // larger width
    height: 60 + Math.random() * 120, // larger height
    top: `${Math.random() * 95}%`,
    left: `${Math.random() * 95}%`,
    speed: 0.02 + Math.random() * 0.04
  }))
  setShapes(generatedShapes)
}, [])

/* ================= RENDER BUBBLES ================= */
{shapes.map((s, i) => (
  <div
    key={i}
    ref={(el) => regHeroShape(el, s.speed)}
    className="absolute rounded-full bg-orange-500 opacity-50 blur-3xl pointer-events-none"
    style={{
      width: s.width,
      height: s.height,
      top: s.top,
      left: s.left,
      zIndex: 0,
      transform: 'translate(0, 0)'
    }}
  />
))}

  /* ================= CURSOR + BUBBLES PARALLAX ================= */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorGlow.current) return

      // Cursor glow
      gsap.to(cursorGlow.current, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' })

      // Floating bubbles parallax
      heroShapes.current.forEach((shape) => {
        const speed = shape.dataset.speed ? parseFloat(shape.dataset.speed) : 0.02
        gsap.to(shape, {
          x: (e.clientX - window.innerWidth / 2) * speed,
          y: (e.clientY - window.innerHeight / 2) * speed,
          duration: 0.5,
          ease: 'power2.out',
        })
      })

      // Hero letters subtle movement
      heroTextLetters.current.forEach((letter, i) => {
        const offset = ((i % 5) - 2) * 2
        gsap.to(letter, {
          y: (e.clientY - window.innerHeight / 2) * 0.01 + offset,
          x: (e.clientX - window.innerWidth / 2) * 0.01,
          rotation: (e.clientX - window.innerWidth / 2) * 0.002,
          duration: 0.5,
          ease: 'power2.out',
        })
      })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  /* ================= CONTINUOUS FLOATING BUBBLES ================= */
  useEffect(() => {
    heroShapes.current.forEach((shape) => {
      const floatDistanceY = 20 + Math.random() * 30
      const floatDistanceX = 10 + Math.random() * 20
      const durationY = 8 + Math.random() * 4
      const durationX = 10 + Math.random() * 5

      gsap.to(shape, { y: `+=${floatDistanceY}`, duration: durationY, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to(shape, { x: `+=${floatDistanceX}`, duration: durationX, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    })
  }, [shapes])

  /* ================= SECTION REVEAL ================= */
  useEffect(() => {
    sections.current.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
    })
  }, [])

  /* ================= PARALLAX DEPTH ================= */
  useEffect(() => {
    imageLayers.current.forEach((img, i) => {
      const depth = [100, 130, 110][i] || 110
      gsap.fromTo(img, { y: depth }, { y: -depth, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
    })
    textLayers.current.forEach((text) => {
      gsap.fromTo(text, { y: -20 }, { y: 20, ease: 'none', scrollTrigger: { trigger: text, start: 'top bottom', end: 'bottom top', scrub: 0.6 } })
    })
  }, [])

  /* ================= MOUSE TILT ================= */
  useEffect(() => {
    tiltCards.current.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        gsap.to(card, { rotateX: ((y / r.height) - 0.5) * -10, rotateY: ((x / r.width) - 0.5) * 10, transformPerspective: 900, duration: 0.3 })
      }
      const reset = () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4 })
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', reset)
    })
  }, [])

  /* ================= REGISTER REFS ================= */
  const register = (el: HTMLDivElement | null) => el && !sections.current.includes(el) && sections.current.push(el)
  const regImg = (el: HTMLDivElement | null) => el && !imageLayers.current.includes(el) && imageLayers.current.push(el)
  const regTxt = (el: HTMLDivElement | null) => el && !textLayers.current.includes(el) && textLayers.current.push(el)
  const regTilt = (el: HTMLDivElement | null) => el && !tiltCards.current.includes(el) && tiltCards.current.push(el)
  const regHeroShape = (el: HTMLDivElement | null, speed?: number) => {
    if (el && !heroShapes.current.includes(el)) {
      if (speed) el.dataset.speed = speed.toString()
      heroShapes.current.push(el)
    }
  }
  const regHeroLetter = (el: HTMLSpanElement | null) => el && !heroTextLetters.current.includes(el) && heroTextLetters.current.push(el)

  /* ================= DRAG HANDLERS ================= */
  const onMouseDownTestimonials = (e: React.MouseEvent) => {
    setIsDraggingTestimonials(true)
    startXTestimonials.current = e.pageX - (testimonialsRef.current?.offsetLeft || 0)
    scrollLeftTestimonials.current = testimonialsRef.current?.scrollLeft || 0
  }
  const onMouseLeaveTestimonials = () => setIsDraggingTestimonials(false)
  const onMouseUpTestimonials = () => setIsDraggingTestimonials(false)
  const onMouseMoveTestimonials = (e: React.MouseEvent) => {
    if (!isDraggingTestimonials || !testimonialsRef.current) return
    e.preventDefault()
    const x = e.pageX - testimonialsRef.current.offsetLeft
    const walk = (x - startXTestimonials.current) * 1.5
    testimonialsRef.current.scrollLeft = scrollLeftTestimonials.current - walk
  }

  const onMouseDownPortfolio = (e: React.MouseEvent) => {
    setIsDraggingPortfolio(true)
    startXPortfolio.current = e.pageX - (portfolioRef.current?.offsetLeft || 0)
    scrollLeftPortfolio.current = portfolioRef.current?.scrollLeft || 0
  }
  const onMouseLeavePortfolio = () => setIsDraggingPortfolio(false)
  const onMouseUpPortfolio = () => setIsDraggingPortfolio(false)
  const onMouseMovePortfolio = (e: React.MouseEvent) => {
    if (!isDraggingPortfolio || !portfolioRef.current) return
    e.preventDefault()
    const x = e.pageX - portfolioRef.current.offsetLeft
    const walk = (x - startXPortfolio.current) * 1.5
    portfolioRef.current.scrollLeft = scrollLeftPortfolio.current - walk
  }

  return (
    <motion.main className="bg-black text-white overflow-x-hidden relative min-h-screen">
      {/* Cursor Glow */}
      <div ref={cursorGlow} className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,120,0,0.25), transparent 70%)', transform: 'translate(-50%, -50%)' }} />

      {/* Floating bubbles */}
      {shapes.map((s, i) => (
        <div
          key={i}
          ref={(el) => regHeroShape(el, s.speed)}
          className="absolute rounded-full bg-orange-500 opacity-30 blur-3xl pointer-events-none"
          style={{
            width: s.width,
            height: s.height,
            top: s.top,
            left: s.left,
            zIndex: 0,
            transform: 'translate(0, 0)'
          }}
        />
      ))}

      {/* Grain Overlay */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Hero */}
      <motion.section ref={register} className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <motion.h1 className="text-[clamp(3rem,6vw,6rem)] font-extrabold text-orange-500 tracking-tight relative z-10 flex flex-wrap justify-center">
          {'Shuuvora Studios'.split('').map((char, i) => (
            <motion.span key={i} ref={regHeroLetter} className="inline-block relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.6 }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p className="mt-4 italic text-white/70 text-lg md:text-2xl z-10">Where imagination becomes iconic.</motion.p>
      </motion.section>

      {/* Branding Cards */}
      <motion.section ref={register} className="pb-48 px-4 relative z-10">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-orange-500 mb-20">Branding & Visual Identity</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { title: 'Creative Strategy', text: 'Purpose-driven brand systems.', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200' },
            { title: 'Brand Identity', text: 'Logos & identities built to scale.', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200' },
            { title: 'Design Systems', text: 'Consistency across touchpoints.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200' }
          ].map((item) => (
            <div key={item.title} ref={regTilt} className="rounded-2xl border border-white/10 bg-black overflow-hidden relative cursor-pointer group">
              <div ref={regImg} className="relative aspect-[4/5] overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <div ref={regTxt} className="p-6">
                <h3 className="text-lg font-semibold text-orange-500">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section ref={register} className="pb-48 px-6 relative z-10">
        <h2 className="text-4xl font-semibold text-orange-500 text-center mb-10">Testimonials</h2>
        <div ref={testimonialsRef} className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab" onMouseDown={onMouseDownTestimonials} onMouseUp={onMouseUpTestimonials} onMouseLeave={onMouseLeaveTestimonials} onMouseMove={onMouseMoveTestimonials}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[300px] bg-black/80 p-6 rounded-xl flex-shrink-0 text-white">
              <p>"Outstanding creativity and professional execution. Highly recommend!"</p>
              <span className="mt-4 block text-orange-500 font-semibold">Client {i + 1}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio */}
      <motion.section ref={register} className="pb-48 px-6 relative z-10">
        <h2 className="text-4xl font-semibold text-orange-500 text-center mb-10">Portfolio</h2>
        <div ref={portfolioRef} className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab" onMouseDown={onMouseDownPortfolio} onMouseUp={onMouseUpPortfolio} onMouseLeave={onMouseLeavePortfolio} onMouseMove={onMouseMovePortfolio}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[300px] h-[200px] relative flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
              <Image src={`https://images.unsplash.com/random/800x600?sig=${i}`} alt={`Portfolio ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final Visit Website Section */}
      <motion.section ref={register} className="pb-48 px-6 relative z-10 text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-semibold text-orange-500 mb-10">Discover the Full Experience</h2>
        <p className="text-white/70 mb-8">Explore everything we offer and take your brand to the next level.</p>
        <Link href="https://yourfullwebsite.com" target="_blank" className="px-12 py-4 rounded-full bg-orange-500 text-black font-semibold text-lg hover:scale-105 transition-transform" style={{ boxShadow: '0 0 45px rgba(255,120,0,0.4)' }}>
          Visit Full Website
        </Link>
      </motion.section>
    </motion.main>
  )
}

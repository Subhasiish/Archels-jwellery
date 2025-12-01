'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Link from "next/link"
import DetailedPricing from './detailed-pricing'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Stats />
      <Pricing />
      <DetailedPricing />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}



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
import Eyes from '@/components/Eyes'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import AISolutions from '@/components/AISolutions'
import BrandingStudios from '@/components/BrandingStudios'
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
      <AISolutions />
      <BrandingStudios />
      <DetailedPricing />
      <Projects />
      <Testimonials />
      <CTA />
      <div className="hidden lg:block">
        <Eyes />
      </div>
      <Marquee />
      <Footer />
    </main>
  )
}



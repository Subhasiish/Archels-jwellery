'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  const headingAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 100 } },
  }

  const hoverZoom = { scale: 1.05, transition: { duration: 0.5 } }

  // Showcase images with optional future details
  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
      title: "Creative Strategy & Design",
      desc: "Purposeful design aligned with business goals and audience psychology."
    },
    {
      src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=80",
      title: "Brand Identity & Logo Design",
      desc: "We craft logos, typography, and visual identity that connect."
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      title: "Premium Visuals & Graphics",
      desc: "High-quality visuals that elevate your brand presence."
    }
  ]

  return (
    <div className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-black text-white pt-24 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center relative">

          {/* Animated Main Heading */}
          <motion.h1
            className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-orange-400 animate-text"
            initial="hidden"
            animate="visible"
            variants={headingAnimation}
          >
            Shuuvora <span className="font-light">Studios</span>
          </motion.h1>

          {/* Creative Tagline */}
          <motion.p
            className="mt-6 text-[1.5rem] md:text-2xl italic text-white/80 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }}
          >
            Where imagination becomes <span className="text-orange-500 font-semibold">iconic</span>.
          </motion.p>

          {/* Merged Hero Image */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-2 rounded-2xl overflow-hidden shadow-lg border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
              width={800}
              height={600}
              className="object-cover w-full h-80"
              alt="Hero part 1"
            />
            <Image
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
              width={800}
              height={600}
              className="object-cover w-full h-80"
              alt="Hero part 2"
            />
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              width={800}
              height={600}
              className="object-cover w-full h-80"
              alt="Hero part 3"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto text-base md:text-lg text-white/70 leading-relaxed space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
          >
            <p>
              At <span className="text-orange-500 font-semibold">Shuuvora Studios</span>, creativity meets
              strategy. We craft <span className="text-white font-bold">iconic visual identities</span> 
              that connect, inspire, and stand out.
            </p>
            <p>
              From concept to execution, our work creates <span className="text-orange-400 font-semibold">lasting impressions</span> 
              and emotional connections in competitive markets.
            </p>
          </motion.div>

        </div>
      </section>
{/* ================= PRODUCT SHOWCASE SECTION ================= */}
<section className="bg-black text-white px-4 pt-24 pb-32">
  <div className="max-w-7xl mx-auto">

    {/* Top Micro Headings */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm md:text-base text-white/70 mb-16 font-sans tracking-widest">
      <span className="font-bold uppercase text-orange-500 tracking-wide">Strategy-led creativity</span>
      <span className="font-bold uppercase text-orange-400 tracking-wide">Premium design standards</span>
      <span className="font-bold uppercase text-orange-300 tracking-wide">Trusted by growing brands</span>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* Card 1 */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
          alt="Branding visual"
          fill
          className="object-cover w-full h-full"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-orange-400 font-serif tracking-wider">
            Branding Visual
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed font-light italic">
            Captivating visuals designed to tell your brand story effectively.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Creative Strategy & Design"
          fill
          className="object-cover w-full h-full"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-orange-500 font-serif tracking-wider">
            Creative Strategy & Design
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed font-light italic">
            Purposeful design aligned with business goals and audience psychology.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Brand Identity & Logo Design"
          fill
          className="object-cover w-full h-full"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-orange-400 font-serif tracking-wider">
            Brand Identity & Logo Design
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed font-light italic">
            Complete visual identity to communicate your brand clearly.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Text Block */}
    <div className="max-w-3xl mx-auto text-center">
      <h4 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif tracking-wide uppercase">
        Branding & <span className="text-orange-500">Visual Identity</span>
      </h4>
      <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans italic tracking-wide">
        We craft complete brand identities — from <span className="text-orange-400 font-semibold">logos</span> and <span className="text-orange-400 font-semibold">color systems</span> to typography and brand guidelines — that define how your brand looks, feels, and communicates.
      </p>
    </div>

  </div>
</section>

   {/* ================= COMPANY TRUST SECTION ================= */}
<section className="bg-black text-white px-4 pt-28 pb-36">
  <div className="max-w-6xl mx-auto text-center">

    {/* Top Image */}
    <div className="rounded-3xl overflow-hidden mb-24 relative group">
      <Image
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
        alt="Shuuvora Studios Work Showcase"
        width={1600}
        height={900}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      {/* Floating Orange Micro Element */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full animate-bounce"></div>
    </div>

    {/* Why Brands Trust */}
    <motion.h2
      className="text-3xl md:text-5xl font-extrabold mb-16 font-serif tracking-wider uppercase"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Why Brands Trust<br /><span className="text-orange-500">Shuuvora Studios ?</span>
    </motion.h2>

    {/* Trust Points */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 text-base md:text-lg text-white/80 mb-28 font-sans">
      <motion.div
        className="p-4 bg-white/5 rounded-xl shadow-lg hover:bg-orange-900 transition-colors duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <strong className="block text-orange-400 mb-1">Consistent, high-quality</strong>
        design execution
      </motion.div>

      <motion.div
        className="p-4 bg-white/5 rounded-xl shadow-lg hover:bg-orange-900 transition-colors duration-500"
        initial={{ opacity: 0, y: 20, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <strong className="block text-orange-400 mb-1">Seamless collaboration</strong>
        with Shuuvora Tech’s digital solutions
      </motion.div>

      <motion.div
        className="p-4 bg-white/5 rounded-xl shadow-lg hover:bg-orange-900 transition-colors duration-500"
        initial={{ opacity: 0, y: 20, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <strong className="block text-orange-400 mb-1">Deep understanding</strong>
        of brand psychology
      </motion.div>

      <motion.div
        className="p-4 bg-white/5 rounded-xl shadow-lg hover:bg-orange-900 transition-colors duration-500 sm:col-span-2 md:col-span-1"
        initial={{ opacity: 0, y: 20, delay: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <strong className="block text-orange-400 mb-1">Long-term brand growth</strong>
        mindset
      </motion.div>

      <motion.div
        className="p-4 bg-white/5 rounded-xl shadow-lg hover:bg-orange-900 transition-colors duration-500 sm:col-span-2 md:col-span-1"
        initial={{ opacity: 0, y: 20, delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <strong className="block text-orange-400 mb-1">Strategy-led</strong>
        creative thinking
      </motion.div>
    </div>

    {/* CTA */}
    <motion.h3
      className="text-2xl md:text-4xl font-extrabold mb-4 font-serif tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Ready to Build an <span className="text-orange-500">Iconic Brand?</span>
    </motion.h3>

    <motion.p
      className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto font-sans italic"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Explore our creative world and discover how imagination transforms into identity.
    </motion.p>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-white text-black font-bold hover:bg-orange-500 hover:text-black transition-colors duration-300"
    >
      Visit Shuuvora Studios
    </Link>

    {/* Footer Statement */}
    <motion.p
      className="mt-20 text-sm italic text-white/50 font-sans tracking-wide"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      We don’t just design — we build brands<br />
      that scale, speak, and stay iconic.
    </motion.p>

  </div>
</section>


    </div>
  )
}

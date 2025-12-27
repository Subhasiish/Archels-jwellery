'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-32 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold bg-gradient-to-r from-orange-500 via-white to-orange-400 bg-clip-text text-transparent"
        >
          Shuuvora <span className="font-light">Studios</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl italic text-white/80"
        >
          Where imagination becomes <span className="text-orange-500 font-semibold">iconic</span>.
        </motion.p>

        <div className="mt-16 grid grid-cols-3 gap-2 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10">
          {[
            'photo-1557683316-973673baf926',
            'photo-1506765515384-028b60a970df',
            'photo-1517245386807-bb43f82c33c4'
          ].map((id) => (
            <Image
              key={id}
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
              width={800}
              height={600}
              alt="Showcase"
              className="object-cover h-72 w-full"
            />
          ))}
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE ================= */}
      <section className="px-4 pt-24 pb-32">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6 text-center text-sm uppercase tracking-widest text-white/70 mb-16">
            <span className="text-orange-500 font-bold">Strategy-led creativity</span>
            <span className="text-orange-400 font-bold">Premium design standards</span>
            <span className="text-orange-300 font-bold">Trusted by growing brands</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Creative Strategy & Design',
                desc: 'Purposeful design aligned with business goals.',
                img: 'photo-1506765515384-028b60a970df'
              },
              {
                title: 'Brand Identity & Logo Design',
                desc: 'Visual identities built to connect and scale.',
                img: 'photo-1498050108023-c5249f4df085'
              },
              {
                title: 'Premium Visuals & Graphics',
                desc: 'High-end visuals that elevate brand presence.',
                img: 'photo-1515169067865-5387ec356754'
              }
            ].map((item) => (
              <div key={item.title} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src={`https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=900&q=80`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              Branding & <span className="text-orange-500">Visual Identity</span>
            </h2>
            <p className="text-lg text-white/80 italic">
              From logos and color systems to typography and brand guidelines —
              we define how your brand looks, feels, and communicates.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="px-4 pt-28 pb-36 text-center">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-3xl overflow-hidden mb-24">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
              width={1600}
              height={900}
              alt="Studio work"
              className="w-full object-cover"
              priority
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-16"
          >
            Why Brands Trust <br />
            <span className="text-orange-500">Shuuvora Studios</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-28 text-white/80">
            {[
              'Consistent, high-quality design execution',
              'Seamless collaboration with digital solutions',
              'Deep understanding of brand psychology',
              'Long-term brand growth mindset',
              'Strategy-led creative thinking'
            ].map((text) => (
              <div key={text} className="p-6 bg-white/5 rounded-xl hover:bg-orange-900 transition">
                <span className="text-orange-400 font-semibold block mb-1">
                  ✔
                </span>
                {text}
              </div>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Build an <span className="text-orange-500">Iconic Brand?</span>
          </h3>

          <p className="text-white/70 italic mb-8">
            Explore how imagination transforms into identity.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-3 rounded-full bg-white text-black font-bold hover:bg-orange-500 transition"
          >
            Visit Shuuvora Studios
          </Link>

          <p className="mt-20 text-sm italic text-white/50">
            We don’t just design — we build brands that scale, speak, and stay iconic.
          </p>

        </div>
      </section>

    </main>
  )
}

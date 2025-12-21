import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

/* ================= FONTS ================= */

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
})

/* ================= METADATA (ONLY ONCE) ================= */

export const metadata: Metadata = {
  title: 'Shuuvoratech - Future Technology Solutions',
  description: 'Transform your business with cutting-edge technology solutions',
}

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${spaceGrotesk.variable} bg-black text-white min-h-screen`}
      >
        {/* Site-wide centered watermark */}
        <div
          aria-hidden
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <div
            className="text-[clamp(2.5rem,10vw,6rem)] font-bold opacity-10 tracking-tight select-none leading-none"
            style={{
              textShadow:
                '0 0 30px rgba(140,82,255,0.12), 0 0 80px rgba(140,82,255,0.06)',
            }}
          >
            Shuuvora tech.
          </div>
        </div>

        {/* App Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

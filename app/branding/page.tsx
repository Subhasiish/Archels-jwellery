import type { Metadata } from 'next'
import BrandingClient from './BrandingClient'

export const metadata: Metadata = {
  title: 'Shuuvora Studios — Premium Branding & Design',
  description:
    'Shuuvora Studios is a premium branding and creative design studio crafting iconic brand identities, logos, and visual systems.',
  openGraph: {
    title: 'Shuuvora Studios — Where Imagination Becomes Iconic',
    description:
      'Strategy-led branding and premium design systems for startups, enterprises, and growing brands.',
    images: ['/images/og-studios.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shuuvora Studios',
    images: ['/images/og-studios.jpg'],
  },
}

export default function BrandingPage() {
  return <BrandingClient />
}

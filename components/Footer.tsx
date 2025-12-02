import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white rounded-t-3xl rounded-b-2xl border-t border-gray-300 text-black overflow-hidden">
      {/* Top links — static on small screens (will stack), absolute top-right on md+ */}
      

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 min-h-[560px] relative z-30">
        {/* Left overlay to prevent background text showing under left content on larger screens */}
        {/* <div className="hidden md:block absolute left-0 top-0 w-[420px] h-full bg-white z-20 rounded-t-3xl pointer-events-none" /> */}
        {/* Left Section */}
        <div className="self-start">
          {/* Logo symbol (replace with SVG if available) */}
          <div className="mb-3 mt-2">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="6" y1="2" x2="18" y2="2" />
            </svg>
          </div>
          <div className="mb-2 text-2xl font-medium">
            Future.Built by Shuuvora.
          </div>
          <div className="mb-6 text-sm font-light">
            We craft innovative digital experiences that push the boundaries of technology and design, creating solutions that transform businesses and inspire futures.
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="w-full max-w-xs"
          >
            <div className="flex items-center border-2 border-black rounded-full px-4 py-2 mt-2">
              <input
                className="flex-1 outline-none bg-transparent text-black placeholder-gray-700 text-sm"
                type="email"
                placeholder="Enter MAIL ID"
                required
              />
              <button className="ml-2" type="submit">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>

        {/* Right: responsive links/contact — static (stack) on small, absolute on md+ */}
        <div className="mt-6 md:mt-0 md:absolute md:top-8 md:right-10 z-30 flex flex-col md:flex-row md:items-start gap-6">
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <a href="#" className="text-black/80 hover:text-[#8c52ff] hover:underline">Shuuvora Studios</a>
            <a href="#" className="text-black/80 hover:text-[#8c52ff] hover:underline">Shuuvora Times</a>
            <a href="#" className="text-black/80 hover:text-[#8c52ff] hover:underline">Shuuvora</a>
          </nav>
          <div className="flex flex-col text-sm text-black/80">
            <a href="mailto:hello@shuuvoratech.com" className="hover:text-[#8c52ff] hover:underline">hello@shuuvoratech.com</a>
            <a href="tel:+15551234567" className="mt-2 hover:text-[#8c52ff] hover:underline">+1 (555) 123-4567</a>
          </div>
        </div>
      </div>

      

      {/* Giant SHUUVORA text centered and full-width */}
      <div className="absolute inset-x-0 top-[62%] -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-full text-center">
          <div className="text-[clamp(6rem,20vw,18rem)] font-extrabold tracking-tight leading-none select-none" style={{ color: 'rgba(0,0,0,0.12)' }}>Shuuvora</div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-3 border-t border-gray-300 text-xs text-gray-600 bg-white relative z-20">
        <div>@2025 Shuuvoratech. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-[#8c52ff] hover:underline">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-[#8c52ff] hover:underline">Terms &amp; Conditions</a>
          <a href="#" className="text-gray-600 hover:text-[#8c52ff] hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
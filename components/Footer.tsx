import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white rounded-b-2xl border-t border-gray-300 text-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-0 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 min-h-[260px] relative">
        {/* Left Section */}
        <div>
          {/* Logo symbol (replace with SVG if available) */}
          <div className="mb-3">
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

        {/* Middle Section (Links) */}
        <div className="md:col-span-1 flex flex-col mt-4 md:mt-0">
          <div className="border-b border-black mb-1"></div>
          <div className="mb-2">Shuuvora Studios</div>
          <div className="border-b border-black mb-1"></div>
          <div className="mb-2">Shuuvora Times</div>
          <div className="border-b border-black mb-1"></div>
          <div>Shuuvora</div>
        </div>

        {/* Right Section (Contact/Info) */}
        <div className="md:col-span-1 text-sm flex flex-col gap-2 mt-8 md:mt-0">
          <div className="border-b border-black mb-1"></div>
          <div className="mb-2">hello@shuuvoratech.com</div>
          <div className="border-b border-black mb-1"></div>
          <div className="mb-2">+1 (555) 123-4567</div>
          <div className="border-b border-black mb-1"></div>
          <div>123 Innovation Drive, Tech City, TC 12345</div>
        </div>
      </div>
      {/* Giant SHUUVORA text */}
      <div className="w-full py-10 md:py-12 lg:py-16 flex items-center justify-center">
        <div className="text-[clamp(5rem,25vw,12rem)] font-bold tracking-tighter text-black leading-none select-none pointer-events-none text-center px-4">
          Shuuvora
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-3 border-t border-gray-300 text-xs text-gray-600 bg-white">
        <div>@2025 Shuuvora Tech. All rights reserved.</div>
        <div>
          Privacy Policy | Terms &amp; Conditions | Cookies
        </div>
      </div>
    </footer>
  );
}
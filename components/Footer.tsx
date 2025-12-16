import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white rounded-t-3xl border-t border-gray-300 text-black overflow-hidden">

      {/* CONTENT WRAPPER - Increased padding + height */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-28 grid grid-cols-1 md:grid-cols-2 gap-14 z-20 min-h-[620px]">
        
        {/* LEFT SECTION */}
        <div className="relative z-30">
          <div className="mb-3 mt-2">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="6" y1="2" x2="18" y2="2" />
            </svg>
          </div>

          <div className="mb-2 text-2xl font-medium tracking-tight">
            Future.Built by Shuuvora.
          </div>

          <p className="mb-6 text-sm font-light max-w-sm leading-relaxed">
            We craft innovative digital experiences that push the boundaries of technology and design, creating solutions that transform businesses and inspire futures.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="max-w-xs">
            <div className="flex items-center border-2 border-black rounded-full px-4 py-2">
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-700 text-sm"
                type="email"
                placeholder="Enter MAIL ID"
                required
              />
              <button type="submit">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative z-30 flex flex-col md:items-end gap-6 text-sm">
          <nav className="flex flex-col md:items-end gap-2">
            <a href="/" className="text-black/80 hover:text-black underline-offset-4 hover:underline">Home</a>
            <a href="/about" className="text-black/80 hover:text-black underline-offset-4 hover:underline">About</a>
            <a href="/blog" className="text-black/80 hover:text-black underline-offset-4 hover:underline">Blog</a>
            <a href="/branding" className="text-black/80 hover:text-black underline-offset-4 hover:underline">Branding</a>
            <a href="/ai" className="text-black/80 hover:text-black underline-offset-4 hover:underline">AI Solutions</a>
          </nav>

          <div className="flex flex-col md:items-end">
            <a className="text-black/80 hover:text-black underline-offset-4 hover:underline">
              hello@shuuvoratech.com
            </a>
            <a className="mt-2 text-black/80 hover:text-black underline-offset-4 hover:underline">
              +91 8093758697
            </a>
            <p className="mt-2 text-black/80 max-w-xs md:text-right">
              ITPL banglore, Karnataka, India
            </p>
          </div>
        </div>
      </div>

      {/* BIG BACKGROUND SHUUVORA — moved LOWER */}
      <div
  className="
    absolute inset-x-0 
    bottom-[15%]            /* move up on mobile */
    md:bottom-[5%]          /* keep same on big screen */
    pointer-events-none z-0 flex justify-center
  "
>
  <h1
    className="
      font-bold tracking-tight leading-none select-none text-center
      text-[18vw]            /* MOBILE → smaller */
      md:text-[clamp(6rem,22vw,20rem)]  /* DESKTOP → original */
      whitespace-nowrap
    "
    style={{
      color: "rgba(0,0,0,0.12)",
    }}
  >
    Shuuvora
  </h1>
</div>


      {/* BOTTOM BAR */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 border-t border-gray-300 text-xs text-gray-600">
        <div>@2025 Shuuvora Tech. All rights reserved.</div>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a className="hover:text-black hover:underline underline-offset-4">Privacy Policy</a>
          <a className="hover:text-black hover:underline underline-offset-4">Terms &amp; Conditions</a>
          <a className="hover:text-black hover:underline underline-offset-4">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

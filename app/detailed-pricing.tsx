"use client";

export default function DetailedPricing() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 w-full flex flex-col items-center">
      {/* Top PRICINGS label */}
      <div className="w-full max-w-6xl mx-auto mt-4 mb-5 border-b border-white/25">
        <div className="py-2 px-1 text-white font-medium tracking-[0.3em] text-[10px] md:text-xs uppercase">
          PRICINGS
        </div>
      </div>
      {/* Heading */}
      <h1 className="w-full max-w-6xl text-left font-serif italic text-[clamp(2.4rem,6vw,4.2rem)] text-white mt-4 mb-14 md:mb-16 leading-tight pl-1 select-none">
        Invest in <span>Your Digital Growth</span>
      </h1>

      {/* Main pricing box */}
      <div className="bg-white w-full max-w-6xl rounded-[32px] py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center shadow-xl border border-gray-200">
        <div className="mb-10 mt-2 text-center">
          <button className="border px-6 py-2 md:px-8 md:py-3 rounded-full text-gray-700 bg-white text-sm md:text-base tracking-wide font-normal shadow-sm">
            Pricings Starts from -
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between text-black">
          {/* Left side */}
          <div className="flex-1 flex flex-col gap-8 md:gap-10 pl-4 md:pl-6 text-left">
            <ServiceRow label="Normal Website" price="30k INR" />
            <ServiceRow label="Designer Website" price="30k INR" />
            <ServiceRow label="Custom AI Integration" price="30k INR" />
          </div>
          {/* Right side */}
          <div className="flex-1 flex flex-col gap-8 md:gap-10 pr-4 md:pr-6 text-right">
            <ServiceRow label="SaaS Website" price="30k INR" />
            <ServiceRow label="Web 3 Project" price="30k INR" />
            <ServiceRow label="Branding" price="30k INR" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-center justify-between w-full gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Space_Grotesk','Inter','sans-serif']">
      <span className="whitespace-nowrap">{label}</span>
      <span className="flex-1 border-b border-gray-400 mx-3 sm:mx-4"></span>
      <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-normal whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}

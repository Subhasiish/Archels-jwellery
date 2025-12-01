"use client";

export default function DetailedPricing() {
  return (
    <div className="min-h-screen bg-black px-6 md:px-12 lg:px-16 py-12 md:py-16 w-full flex flex-col items-center">
      {/* Top PRICINGS label */}
      <div className="w-full max-w-[95vw] mx-auto mt-6 mb-6 border-b-[2px] border-white/40">
        <div className="py-3 px-4 text-white font-medium tracking-tight text-base md:text-lg">PRICINGS</div>
      </div>
      {/* Heading */}
      <h1 className="w-full max-w-[95vw] text-left font-serif italic text-[clamp(3rem,8vw,6rem)] text-white mt-6 mb-16 md:mb-20 leading-tight pl-2 select-none">Invest in <span className="">Your Digital Growth</span></h1>

      {/* Main pricing box */}
      <div className="bg-white w-full max-w-[95vw] rounded-3xl py-16 md:py-20 px-6 md:px-12 lg:px-16 flex flex-col items-center shadow-xl border border-gray-200">
        <div className="mb-12 mt-4 text-center">
          <button className="border-2 px-8 py-3 md:px-10 md:py-4 rounded-full text-gray-700 bg-white text-lg md:text-xl tracking-wide font-normal shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
            Pricings Starts from -
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between text-black">
          {/* Left side */}
          <div className="flex-1 flex flex-col gap-12 md:gap-16 pl-6 md:pl-8 text-left">
            <ServiceRow label="Normal Website" price="30k INR" />
            <ServiceRow label="Designer Website" price="30k INR" />
            <ServiceRow label="Custom AI Integration" price="30k INR" />
          </div>
          {/* Right side */}
          <div className="flex-1 flex flex-col gap-12 md:gap-16 pr-6 md:pr-8 text-right border-l border-gray-400 md:ml-12">
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
    <div className="flex items-center justify-between w-full gap-8 text-2xl md:text-3xl lg:text-4xl font-['Space_Grotesk','Inter','sans-serif'] ">
      <span className="whitespace-nowrap">{label}</span>
      <span className="flex-1 border-b-2 border-gray-500 mx-4"></span>
      <span className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-normal whitespace-nowrap">{price}</span>
    </div>
  );
}

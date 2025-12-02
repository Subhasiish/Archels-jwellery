'use client'

import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth / 2
      let deltaY = mouseY - window.innerHeight / 2

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle - 180)
    })
  }, [])

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-black relative">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0033] to-black"></div>
      
      {/* Animated gradient orbs in background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#8c52ff] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8c52ff] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(140, 82, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 82, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Decorative circles and lines */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-[#8c52ff] border-opacity-20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-[#8c52ff] border-opacity-20 rounded-full blur-sm"></div>
      
      {/* Center radial gradient effect */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(circle at center, transparent 20%, rgba(140, 82, 255, 0.05) 50%, rgba(0, 0, 0, 0.8) 100%)'
      }}></div>

      {/* Main eyes container */}
      <div 
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Top accent line */}
        <div className="absolute top-1/3 w-1/2 h-px bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent opacity-30"></div>
        
        {/* Eyes container with glow effect */}
        <div className="absolute flex flex-col gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] pointer-events-none">
          {/* AI Text Content */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
              Intelligent AI Solutions
            </h2>
            <p className="text-lg md:text-xl text-[#8c52ff] max-w-2xl mx-auto leading-relaxed">
              We watch your business like never before. Our AI-powered insights track every opportunity, 
              predict market trends, and guide your success. Let our intelligent eyes see what you can't.
            </p>
          </div>

          {/* Eyes */}
          <div className="flex gap-20 justify-center">
            {/* Left Eye */}
            <div className="relative group pointer-events-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#8c52ff] rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <div className="flex items-center justify-center w-[13vw] h-[13vw] bg-[#ffffff] rounded-full relative z-10 shadow-2xl">
                <div className="absolute inset-0 rounded-full border-2 border-[#8c52ff] border-opacity-30"></div>
                <div className="relative w-2/3 h-2/3 bg-[#8c52ff] rounded-full shadow-inner">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8c52ff] to-[#5a2d7f]"></div>
                  <div
                    style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                    className="line absolute top-1/2 left-1/2 w-full h-10 transition-transform duration-0"
                  >
                    <div className="w-8 h-8 bg-[#ffffff] rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="relative group pointer-events-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#8c52ff] rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <div className="flex items-center justify-center w-[13vw] h-[13vw] bg-[#ffffff] rounded-full relative z-10 shadow-2xl">
                <div className="absolute inset-0 rounded-full border-2 border-[#8c52ff] border-opacity-30"></div>
                <div className="relative w-2/3 h-2/3 bg-[#8c52ff] rounded-full shadow-inner">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8c52ff] to-[#5a2d7f]"></div>
                  <div
                    style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                    className="line absolute top-1/2 left-1/2 w-full h-10 transition-transform duration-0"
                  >
                    <div className="w-8 h-8 bg-[#ffffff] rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-8">
            <p className="text-sm md:text-base text-[#ffffff] text-opacity-70">
              ✨ Advanced AI • Real-time Insights • Data-Driven Intelligence ✨
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-1/3 w-1/2 h-px bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent opacity-30"></div>
      </div>
    </div>
  )
}

export default Eyes

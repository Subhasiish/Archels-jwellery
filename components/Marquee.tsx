import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#000000]'>
      <div className='text border-t-2 border-b-2 border-[#8c52ff] overflow-hidden flex whitespace-nowrap'>
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
          className='text-[20vw] leading-none Font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 pr-20 mb-[3vw] font-semibold text-[#ffffff]'
        >
          We are Shuuvora
        </motion.h1>
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
          className='text-[20vw] leading-none Font-["Founders_Grotesk_X-Condensed"] uppercase pt-10 pr-20 mb-[3vw] font-semibold text-[#ffffff]'
        >
          We are Shuuvora
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee

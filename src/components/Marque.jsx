import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full py-10 sm:py-20 rounded-3xl bg-[#004D43] text-white'>
     
      <div className='border-t-2 border-b-2 mt-1 mb-1 flex gap-5 sm:gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
          className='uppercase font-semibold text-[12vw] sm:text-[17vw] tracking-tighter'
        >
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
          className='uppercase font-semibold text-[12vw] sm:text-[17vw] tracking-tighter'
        >
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
          className='uppercase font-semibold text-[12vw] sm:text-[17vw] tracking-tighter'
        >
          we are ochi
        </motion.h1>
      </div>
      
    </div>
  )
}

export default Marque

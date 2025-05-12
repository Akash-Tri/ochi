import React from 'react'

function Footer() {
  return (
    <div className='w-full min-h-screen flex flex-col sm:flex-row p-6 sm:p-20'>
      <div className='w-full sm:w-1/2 flex flex-col justify-between mb-12 sm:mb-0'>
        <div>
          <h1 className='text-5xl sm:text-7xl font-bold leading-tight tracking-tighter'>
            EYE-
          </h1>
          <h1 className='text-5xl sm:text-7xl font-bold leading-tight tracking-tighter'>
            OPENING
          </h1>
        </div>

        <div>
          <h3 className='text-2xl sm:text-3xl font-semibold'>ochi</h3>
        </div>
      </div>

      <div className='w-full sm:w-1/2'>
        <h1 className='text-5xl sm:text-7xl font-bold leading-tight tracking-tighter'>
          PRESENTATIONS
        </h1>

        <div className='mt-10 sm:mt-20'>
          <span className='block text-lg sm:text-xl font-light mb-5'>S:</span>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Facebook</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Instagram</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Twitter</a>
          <a className='block text-lg sm:text-xl font-light' href="#">Linked</a>
        </div>

        <div className='mt-10 sm:mt-20'>
          <span className='block text-lg sm:text-xl font-light mb-5'>M:</span>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Home</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Services</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Our Work</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">About us</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Insights</a>
          <a className='block text-lg sm:text-xl font-light mb-3' href="#">Contact us</a>
        </div>

        <div className='mt-10 sm:mt-20'>
          <span className='opacity-50 text-sm sm:text-base'>© ochi design 2024.</span>
          <a className='opacity-50 text-sm sm:text-base ml-2' href="https://ochi.design/privacy/">Legal Terms</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

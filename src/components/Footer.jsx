import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex p-20 '>
        <div className='w-1/2 h-screen flex flex-col justify-between'>
          <div>
          <h1 className='text-7xl font-bold leading-none tracking-tighter'>EYE-</h1>
          <h1 className='text-7xl font-bold leading-none tracking-tighter'>OPENING</h1>
          </div>

          <div>
          <h3 className='text-3xl font-semibold'>ochi</h3>
          </div>
        </div>
        

        <div className='w-1/2'>
          <h1 className='text-7xl font-bold leading-none tracking-tighter'>PRESENTATIONS</h1>

          <div className='dets mt-20'>
            <span className='block text-lg font-light mb-5'>S:</span>
            <a className='block text-lg font-light' href="#">Facebook</a>
            <a className='block text-lg font-light' href="#">Instagram</a>
            <a className='block text-lg font-light' href="#">Twitter</a>
            <a className='block text-lg font-light' href="#">Linked</a>
          </div>
          <div className='dets mt-20'>
            <span className='block text-lg font-light mb-5'>M:</span>
            <a className='block text-lg font-light' href="#">Home</a>
            <a className='block text-lg font-light' href="#">Services</a>
            <a className='block text-lg font-light' href="#">Our Work</a>
            <a className='block text-lg font-light' href="#">About us</a>
            <a className='block text-lg font-light' href="#">Insights</a>
            <a className='block text-lg font-light' href="#">Contact us</a>
          </div>

            <div className='dets mt-20'>
             <span className='opacity-50'>© ochi design 2024.</span>
             <a className='opacity-50' href="https://ochi.design/privacy/">Legal Terms</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-14'>
      
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className='card relative rounded-2xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-[1px] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
         <div className='card relative rounded-2xl w-1/2 h-full bg-[#192826] flex items-center justify-center '>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-[1px] text-white uppercase'>rating 5.0 on clutch</button>
         </div>
         <div className='card relative rounded-2xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-[1px] text-white uppercase mr-5'>buisness bootcamp alumini</button>
         </div>
      </div>

    </div>
  )
}

export default Cards
import React from 'react'
import cta from "../Components/Images/cta-bg.jpg"
import Image from 'next/image'
const GetStarted = () => {
  return (
    <div className='relative'>
   <Image src={cta} alt='no img' className='aboslute inset-o ' />
   <div className='grid place-items-center absolute inset-0 mt-20'>
    <h1 className='text-white font-bold text-3xl'>Start learning today. Grow your skill.</h1>
   <p className='text-white italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus</p>
   <p  className='text-white italic'>nec ullamcorper mattis, pulvinar dapibus leo.</p>
<button className=' pb-9mt-5 px-6 py-2 text-[#7963E1] bg-white font-bold hover:bg-[#7963E1] hover:text-white'>Get Started</button>
   </div>
    </div>
  )
}

export default GetStarted
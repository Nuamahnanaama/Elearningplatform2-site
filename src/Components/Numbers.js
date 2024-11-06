import Image from 'next/image'
import React from 'react'
import book from "../Components/Images/book-open.png"
import pic from "../Components/Images/count-bg.jpg"
import user from "../Components/Images/user.png"
import users from "../Components/Images/users.png"
import stars from "../Components/Images/star.png"
const Numbers = () => {
  return (
    <div className='relative h-svh mt-32 '>
        <Image src={pic} alt='no pic' className='absolute inset-0 w-full opacity-80'  />
        <div className='flex gap-6 absolute inset-0 mt-20'>
      <div className='grid grid-cols-4 space-x-44 '>
       <div className='mt-10 pl-20 text-white'>
         <Image src={book} alt='no img' className='text-5xl ' />
         <p className='font-bold text-5xl'>41K</p>
         <h1 className=''>Online Courses</h1>
        </div> 
        <div className='mt-10 text-white'> 
          <Image src={user} alt='no user' />
          <p className='font-bold text-5xl'>50K</p>
         <h1 className=''>Students</h1>
        </div>
        <div className='mt-10 text-white'> 
          <Image src={users} alt='no user' />
          <p className='font-bold text-5xl'>50K</p>
         <h1 className=''>Instructors</h1>
        </div>
        <div className='mt-10 text-white'> 
          <Image src={stars} alt='no user' />
          <p className='font-bold text-5xl'>62K</p>
         <h1 className=''>Total Review</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Numbers

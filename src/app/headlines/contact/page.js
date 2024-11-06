"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../../../Components/Images/Logo.png"
import contact from "../../../Components/Images/contact-us.jpg"
import Footer from '@/Components/Footer'
import { useRouter } from 'next/navigation'
const Page = () => {

  const router = useRouter();
   
  const handleclick=()=>{
    router.push ("/");
  };
 
  const handlecourse=()=>{
    router.push ("/headlines/courses");
  };

  const handleblog=()=>{
    router.push ("/headlines/blog");
  };

  const handleContact=()=>{
    router.push ("/headlines/contact");
  };
 
  const handleaccount=()=>{
    router.push ("/headlines/account");
  };



  return (
    <div>
         <div  className=' bg-[#7963E0] h-80' >
         <div className="flex justify-between">
          <Image src={logo} alt="no logo" className="pl-9 mt-10" />
           <div className="mt-10 space-x-8 pr-16 flex">
            <button onClick={handleclick} className="cursor-pointer text-white font-semibold">
              Home
            </button>
            <button  onClick={handlecourse} className="cursor-pointer text-white  font-semibold">
              Courses
            </button>
            <button onClick={handleblog}  className="cursor-pointer text-white  font-semibold">
              Blog
            </button>
            <button onClick={handleContact} className="cursor-pointer text-white  font-semibold">
              Contact
            </button>
            <button  onClick={handleaccount}  className="cursor-pointer text-white  font-semibold">
              Account
            </button>
            <button className="cursor-pointer text-[#7963E0] bg-white hover:bg-[#7963E0] hover:text-white  font-semibold px-6 py-3">
              Get Started
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 cursor-pointer mt-3 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className='grid place-items-center mt-16 text-white '>
          <p className='text-5xl font-semibold'>Contact Us</p>
        </div>
        </div>
      
       <div className='grid grid-cols-3 px-12 py-14 mt-32 gap-8 pb-14'>
        <div className='shadow-sm px-9 pb-14'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-purple-400 bg-[#F8F8F8] rounded-lg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <h1 className='text-xl'>Contact Number</h1>
        <p className='text-slate-400'>+233 244883579</p>
        <p className='text-slate-400'>+233 505724503</p>
    </div>
    <div className='shadow-sm px-9'> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-purple-400  bg-[#F8F8F8]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
        <h1 className='text-xl'>Email Address</h1>
        <p className='text-slate-400'>support@eLearning.com</p>
        <p className='text-slate-400'>dansowaanuamah120@gmail.com</p>
    </div>
 
    <div className='shadow-sm px-9'> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-purple-400  bg-[#F8F8F8]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
 <h1 className='text-xl'>Address&Hours</h1>
        <p className='text-slate-400'>Moon Street, 446 Jupiter</p>
        <p className='text-slate-400'>9AM - 6PM (Monday - Friday)</p>
    </div>
 </div>

   <div className='grid grid-cols-10 mt-10'>
    <div className='col-span-5 pl-24'><Image src={contact} alt='no img'  /></div>
    <div className='col-span-5'>
       <h1 className='font-medium text-4xl mt-20 pl-12'>Leave a Message</h1>
      <div className='mt-4 pl-12'> 
       <p>
        <span className="text-slate-500">Name</span>
       <span className="text-orange-500">*</span>
       </p>
       <input className='mt-4 px-16 py-2 border border-slate-400' />
      </div>
      <div className='mt-4 pl-12'> 
       <p>
        <span className="text-slate-500">Email</span>
       <span className="text-orange-500">*</span>
       </p>
       <input className='mt-4 px-16 py-2 border border-slate-400' />
      </div>
      <div className='mt-4 pl-12'> 
       <p>
        <span className="text-slate-500">Subject</span>
       <span className="text-orange-500">*</span>
       </p>
       <input className='mt-4 px-16 py-2 border border-slate-400' />
      </div>
      <div className='mt-4 pl-12'> 
       <p>
        <span className="text-slate-500">Message</span>
       <span className="text-orange-500">*</span>
       </p>
       <input className='mt-4 px-16 py-32 border border-slate-400' />
      </div>
     <div className='pl-12'> <button className='mt-7 text-[#4A5152] bg-[#F7F7F7] px-6 py-2'>Submit</button> </div>
    </div>

   </div>

  <div className='mt-5'> <Footer /> </div> 
    </div>
  )
}

export default Page
"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../../../Components/Images/Logo.png"
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
   
  const handleclicks=()=>{
    router.push ("/");
  };
 
  const handlecourses=()=>{
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
    <div >
      <div className=' bg-[#7963E0] h-80' >
         <div  className="flex justify-between">
          <Image src={logo} alt="no logo" className="pl-9 mt-10" />
           <div className="mt-10 space-x-8 pr-16 flex">
            <button onClick={handleclicks} className="cursor-pointer text-white font-semibold">
              Home
            </button>
            <button onClick={handlecourses} className="cursor-pointer text-white  font-semibold">
              Courses
            </button>
            <button onClick={handleblog} className="cursor-pointer text-white  font-semibold">
              Blog
            </button>
            <button onClick={handleContact}  className="cursor-pointer text-white  font-semibold">
              Contact
            </button>
            <button onClick={handleaccount}  className="cursor-pointer text-white  font-semibold">
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
          <p className='text-5xl font-medium'>Courses</p>
          <p className=''>Home | Courses</p>
        </div>
        </div>
        <div className='mt-32 flex  shadow-sm px-8'>
          <input placeholder='Search Courses' className=' rounded-l-[8px] border border-[#dddddd] px-4 py-5 w-[82%]  outline-[#7963E0]' />
          <button className=' bg-[#7963E0] text-white w-[17%] px-4 rounded-r-[8px]'>Search</button>
        </div>
    </div>
  ) 
}

export default Page
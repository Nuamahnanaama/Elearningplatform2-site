"use client"
import Image from "next/image";
import React from "react";
import banner from "../Components/Images/banner.jpg";
import logo from "../Components/Images/Logo.png";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter ()
     
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
    <div className="relative">
      <Image src={banner} alt="no img" className="absolut inset-0 w-full" />
      <div className="absolute inset-0 mt-7">
        <div className="flex justify-between ">
          <Image src={logo} alt="no logo" className="pl-9" />
           <div className="space-x-4 pr-16 flex">
            <button onClick={handleclick} className="cursor-pointer text-white font-bold">
              Home
            </button>
            <button onClick={handlecourse} className="cursor-pointer text-white  font-bold">
              Courses
            </button>
            <button onClick={handleblog} className="cursor-pointer text-white  font-bold">
              Blog
            </button>
            <button onClick={handleContact} className="cursor-pointer text-white  font-bold">
              Contact
            </button>
            <button onClick={handleaccount} className="cursor-pointer text-white  font-bold">
              Account
            </button>
            <button className="cursor-pointer text-[#7963E0] bg-white hover:bg-[#7963E0] hover:text-white  font-bold px-6 py-3">
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
        
      <div className="pl-9 mt-40">
       <h1 className="font-bold text-6xl text-white ">Learn anything,</h1>
       <h1 className="font-bold text-6xl text-white ">anytime, anywhere</h1>
      <p className="mt-4 text-white">Tincidunt habitant rhoncus eu massa egestas vestibulum, varius aliquam natoque. Non</p>
      <p className="text-white">maecenas interdum vel amet vestibulum pellentesque.</p>
      </div>
      <div  className="flex space-x-5 mt-6 pl-9 font-bold">
        <button className="text-white bg-[#7963E0] px-3 py-2 cursor-pointer">Enroll Now</button>
        <button className="text-white">Become An Instructor</button>
      </div>
      </div>
    </div>
  );
};

export default Header;

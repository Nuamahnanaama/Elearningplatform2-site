"use client"
import React from "react";
import Image from "next/image";
import logo from "../../../Components/Images/Logo.png";
import Footer from "@/Components/Footer";
import { useRouter } from "next/navigation";
const Page = () => {
  const router =useRouter();
   
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
      <div className=" bg-[#7963E0] h-80">
        <div className="flex justify-between">
          <Image src={logo} alt="no logo" className="pl-9 mt-10" />
          <div className="mt-10 space-x-8 pr-16 flex">
            <button onClick={handleclick} className="cursor-pointer text-white font-semibold">
              Home
            </button>
            <button onClick={handlecourse} className="cursor-pointer text-white  font-semibold">
              Courses
            </button>
            <button onClick={handleblog} className="cursor-pointer text-white  font-semibold">
              Blog
            </button>
            <button onClick={handleContact} className="cursor-pointer text-white  font-semibold">
              Contact
            </button>
            <button onClick={handleaccount} className="cursor-pointer text-white  font-semibold">
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
        <div className="grid place-items-center mt-16 text-white ">
          <p className="text-5xl font-bold">Account</p>
          <p className="">Home | Account</p>
        </div>
      </div>
      <h1 className="mt-24 text-4xl font-semibold pl-11">Account </h1>
      <div className="grid grid-cols-10 px-16 pl-11 border border-slate-300">
        <div className="col-span-5 pb-28">
          <p className="pl-5 mt-6 font-semibold text-2xl">Sign In</p>
          <div className="mt-4">
            <p>Username or Email</p>
            <input className="px-24 border border-slate-300 mt-5 py-3" />
          </div>
          <div className="mt-4">
            <p>Password</p>
            <input className="px-24 border border-slate-300 mt-5 py-3" />
          </div>
          <div className="mt-5 flex space-x-20">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                />
              </svg>
              <h1>Remember me</h1>
            </div>
            <div>
              <h1 className="hover:text-purple-400">Forgot your Password?</h1>
              <div className="border border-purple-400"></div>
            </div>
          </div>
          <button className="bg-[#7963E0] text-white mt-8 w-96 py-2 px-5">
            Sign In
          </button>
        </div>

        <div className="col-span-5 bg-[#F8FAFF] text-center">
          <div>
            <h1 className="font-semibold mt-28 text-3xl">Register</h1>
            <p className="mt-4">Don't have an account?</p>
            <button className="bg-[#7963E0] text-white px-12 py-2 mt-9">
              Register as Student
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Page;

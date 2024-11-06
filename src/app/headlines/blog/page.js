"use client"
import React from "react";
import Image from "next/image";
import logo from "../../../Components/Images/Logo.png";
import dance from "../../../Components/Images/blog-1.jpg";
import ui from "../../../Components/Images/blog-2.jpg";
import guitar from "../../../Components/Images/blog-3.jpg";
import photo from "../../../Components/Images/blog-4.jpg";
import design from "../../../Components/Images/blog-5.jpg";
import Footer from "@/Components/Footer";
import { useRouter } from "next/navigation";



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
      <div className=" bg-[#7963E0] h-80">
        <div>
          <div className="flex justify-between">
            <Image src={logo} alt="no logo" className="pl-9 mt-10" />
            <div className="mt-10 space-x-8 pr-16 flex">
              <button  onClick={handleclick} className="cursor-pointer text-white font-semibold">
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
        </div>
        <div className="grid place-items-center mt-16 text-white ">
          <p className="text-5xl font-medium">Blog</p>
          <p className="">Home | Blog</p>
        </div>
      </div>
      <div className="grid grid-cols-10">
        <div className="col-span-7">
          <h1 className="pl-11 mt-24 font-semibold text-4xl">Hello Word!</h1>
          <div className="text-purple-500 mt-6 flex gap-4 pl-11">
            <div className="flex gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1>elearning</h1>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1>October 26,2024</h1>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
              </svg>
              <h1>Uncategorised</h1>
            </div>
          </div>

          <p className="pl-11 py-5">
            Welcome to ThemeGrill Demo. This is your first post. Edit or delete
            it, then start writing!
          </p>
          <buttton className="pl-11 hover:text-purple-400">Read More</buttton>
          <div className="pl-11">
            <h1 className="font-bold text-4xl  mt-9">
              What are the easy dance form to learn for beginners?
            </h1>
            <Image src={dance} alt="no img" className="py-4" />
            <div className="text-purple-500 mt-3 flex gap-4">
              <div className="flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>ThemeGrill Team</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>October 26,2024</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
                <h1>Dance, music</h1>
              </div>
            </div>
            <button className="py-5 hover:text-purple-400">Read More</button>
          </div>

          <div className="pl-11">
            <h1 className="font-bold text-4xl  mt-9">
              Most essential UX design principle for new comers.
            </h1>
            <Image src={ui} alt="no img" className="py-4" />
            <div className="text-purple-500 mt-3 flex gap-4">
              <div className="flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>ThemeGrill Team</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>October 26,2024</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
                <h1>UX/UI Design</h1>
              </div>
            </div>
            <button className="py-5 hover:text-purple-400">Read More</button>
          </div>

          <div className="pl-11">
            <h1 className="font-bold text-4xl  mt-9">
              10 most easy steps to master chord progression in guitar.
            </h1>
            <Image src={guitar} alt="no img" className="py-4" />
            <div className="text-purple-500 mt-3 flex gap-4">
              <div className="flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>ThemeGrill Team</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>October 26,2024</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
                <h1>Music</h1>
              </div>
            </div>
            <button className="py-5 hover:text-purple-400">Read More</button>
          </div>

          <div className="pl-11">
            <h1 className="font-bold text-4xl  mt-9">
              What is photoshop and what is it used for?
            </h1>
            <Image src={photo} alt="no img" className="py-4" />
            <div className="text-purple-500 mt-3 flex gap-4">
              <div className="flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>ThemeGrill Team</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>October 26,2024</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
                <h1>Graphic Design</h1>
              </div>
            </div>
            <button className="py-5 hover:text-purple-400">Read More</button>
          </div>

          <div className="pl-11">
            <h1 className="font-bold text-4xl  mt-9">
              Is creativity most valuable skill for designer?
            </h1>
            <Image src={design} alt="no img" className="py-4" />
            <div className="text-purple-500 mt-3 flex gap-4">
              <div className="flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>ThemeGrill Team</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1>October 26,2024</h1>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                </svg>
                <h1>UI/UX Design</h1>
              </div>
            </div>
            <button className="py-5 hover:text-purple-400">Read More</button>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-medium px-10 mt-28 text-xl">Search</h1>
          <div className="flex gap-3">
            <input className="border border-slate-300 px-6 py-3" />
            <button className="bg-[#7963E0] text-white hover:text-[#7963E0] hover:bg-white px-4">
              Search
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-9 pl-9">Recent Posts</h1>
          <div className="pl-9 mt-7 px-8 space-y-3">
            <p>Post List</p>
            <div className="border border-slate-200"></div>
            <p>What are the easy dance form to learn for beginners?</p>
            <div className="border border-slate-200"></div>
            <p>Most essential UX design principle for new comers.</p>
            <div className="border border-slate-200"></div>
            <p>10 most easy steps to master chord progression in guitar.</p>
            <div className="border border-slate-200"></div>
            <p>What is photoshop and what is it used for?</p>
            <div className="border border-slate-200"></div>
          </div>

          <h1 className="font-bold text-3xl mt-9 pl-9">Recent Comments</h1>
          <div className="pl-9 mt-7 px-8 space-y-3">
            <div className="border border-slate-200"></div>
            <p>phay-tran98 on Photography</p>
            <div className="border border-slate-200"></div>
            <p>hr1234 on Photography</p>
            <div className="border border-slate-200"></div>
            <p>artur031 on Designing Course</p>
            <div className="border border-slate-200"></div>
            <p>shailesh on Photography</p>
            <div className="border border-slate-200"></div>
            <p>A WordPress Commenter on Hello world!</p>
          </div>

          <div className="pl-10 mt-9 text-slate-300 flex">
            <input
              className="border border-slate-300 px-5 py-2"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5 mt-3"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          
            <h1 className="mt-9 pl-9">Categories</h1>
          <div className="pl-9 mt-7 px-8 space-y-3">
            <div className="border border-slate-200"></div>
            <p>Dance</p>
            <div className="border border-slate-200"></div>
            <p>Draw</p>
            <div className="border border-slate-200"></div>
            <p>Graphic Design</p>
            <div className="border border-slate-200"></div>
            <p>Information Technology</p>
            <div className="border border-slate-200"></div>
            <p>Marketing</p>
            <div className="border border-slate-200"></div>
            <p>Music</p>
            <div className="border border-slate-200"></div>
            <p>Uncategorised</p>
            <div className="border border-slate-200"></div>
            <p>UI/UX Design</p>
            <div className="border border-slate-200"></div>
          </div>

          <h1 className="mt-9 pl-9">Meta</h1>
           <div className="pl-9 mt-7 px-8 space-y-3">
           <div className="border border-slate-200"></div>
            <p>Log In</p>
            <div className="border border-slate-200"></div>
            <p>Entreis Feed</p>
            <div className="border border-slate-200"></div>
            <p>Comments Feed</p>
            <div className="border border-slate-200"></div>
            <p>WordPress.org</p>
           </div>
      </div>
      </div>
    <div className="bg-[#F8F8F8]"> <Footer /> </div> 
    </div>
  );
};

export default Page;

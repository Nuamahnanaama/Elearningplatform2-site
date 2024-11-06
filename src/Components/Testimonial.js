import React from 'react'
import TestimonialChild from './TestimonialChild'
import first from "../Components/Images/test-1.png"
import second from "../Components/Images/test-2.png"
import third from "../Components/Images/test-3.png"
import forth from "../Components/Images/test-1.png"
import fifth from "../Components/Images/test-5.png"
import sixth from "../Components/Images/test-6.png"




const Testimonial = () => {
  const Testimonial_Array =[
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage: first,
        testimonialName: 'Michael',
        testimonialWork:'Fullstack' ,
    },
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage: second,
        testimonialName: 'Perry',
        testimonialWork :'Fullstack' ,
    },
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage: third,
        testimonialName: 'Nana Ama',
        testimonialWork :'Frontend' ,
    },
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage: forth ,
        testimonialName: 'Patrick',
        testimonialWork : 'Ai Specialist' ,
    },
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage:fifth ,
        testimonialName: 'Meshack',
        testimonialWork :'Backend' ,
    },
    {
        testimonialMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        testimonialImage:sixth ,
        testimonialName: 'Cindy',
        testimonialWork :'Junior Developer' ,
    },
  ]

  return (
    <div className='h-svh mt-20'>
     <h1 className='font-bold mt-14 grid place-items-center text-4xl'>Our Student's Voice</h1>
      
      <div className='flex space-x-5 px-10 pb-24'>
        <div className='grid grid-cols-3'>
     { Testimonial_Array.map((list)=>{
        return(
        <TestimonialChild 
          testimonialMessage={list.testimonialMessage}
          testimonialName={list.testimonialName}
          testimonialImage={list.testimonialImage}
          testimonialWork={list.testimonialWork}
        />)}) }
   </div>
   </div>
    </div>
  )
}

export default Testimonial
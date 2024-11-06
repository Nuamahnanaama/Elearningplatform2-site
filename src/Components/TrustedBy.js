import Image from 'next/image'
import React from 'react'
import products from "../Components/Images/products.png"
import business from "../Components/Images/business.png"
import inspector from "../Components/Images/inspector.png"
import spectrum from "../Components/Images/spectrum .png"
import moscat from "../Components/Images/moscat.png"


const TrustedBy = () => {
  return (
    <div>
        <h1 className='font-bold mt-14 grid place-items-center text-3xl'>Trusted By</h1>
      <div className='flex space-x-28 pl-11 mt-6 '> 
         <Image src={products} alt='no img' /> 
         <Image src={business} alt='no img' />
         <Image src={inspector} alt='no img' />
         <Image src={spectrum} alt='no img'/>
         <Image src={moscat} alt='no img' />

         </div>
    </div>
  )
}

export default TrustedBy
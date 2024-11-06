import Arrayls from '@/Components/Arrayls'
import Footer from '@/Components/Footer'
import GetStarted from '@/Components/GetStarted'
import Header from '@/Components/Header'
import Numbers from '@/Components/Numbers'
import Testimonial from '@/Components/Testimonial'
import TrustedBy from '@/Components/TrustedBy'
import React from 'react'

const page = () => {
  return (
    <div className='outfit'>
      <Header />
      <Arrayls />
      <Numbers />
      <TrustedBy />
      <Testimonial/>
      <GetStarted />
      <Footer />
    
    </div>
  )
}

export default page
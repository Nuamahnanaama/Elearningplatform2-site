import Image from "next/image";
import React from "react";

const TestimonialChild = ({
  testimonialMessage,
  testimonialImage,
  testimonialName,
  testimonialWork,
}) => {
  return (
    <div className="border border-slate-50 shadow-lg space-y-7  py-14 px-9">
      <p>{testimonialMessage}</p>
      <div className="flex gap-4">
        <Image src={testimonialImage} alt="no img" />
     <div className="space-y-1"> <p>{testimonialName}</p>
        <p>{testimonialWork}</p>
        </div>  
      </div>
    </div>
  ); 
};

export default TestimonialChild;

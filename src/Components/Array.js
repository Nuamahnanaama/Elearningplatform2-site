import React from "react";
import Image from "next/image";
const Array = ({ arrayImage, arrayText, arrayMessage }) => {
  return (
    <div className=" space-y-3">
      <Image src={arrayImage} alt="no img" />
      <p className="font-bold text-xl mt-4">{arrayText}</p>
      <p>{arrayMessage}</p>
    </div>
  );
};

export default Array;

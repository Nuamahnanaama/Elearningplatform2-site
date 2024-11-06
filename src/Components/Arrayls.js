import React from "react";
import Array from "@/Components/Array";
import desk from "../Components/Images/desktop.png";
import instructor from "../Components/Images/instructror.png";
import comment from "../Components/Images/comment.png";
import emoji from "../Components/Images/emoji.png";

const Arrayls = () => {
  const Array_Info = [
    {
      arrayImage: desk,
      arrayText: "Online classes",
      arrayMessage:
        "Egestas purus donec placerat sit id nascetur. Felis non aenean",
    },
    {
      arrayImage: instructor,
      arrayText: "Expert Instructor",
      arrayMessage:
        "Egestas purus donec placerat sit id nascetur. Felis non aenean",
    },
    {
      arrayImage: comment,
      arrayText: "Easy Communication",
      arrayMessage:
        "Egestas purus donec placerat sit id nascetur. Felis non aenean",
    },
    {
      arrayImage: emoji,
      arrayText: "Easy To Use",
      arrayMessage:
        "Egestas purus donec placerat sit id nascetur. Felis non aenean",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6 px-20 py-14">
      {Array_Info.map((items) => {
        return (
          <Array
            arrayImage={items.arrayImage}
            arrayText={items.arrayText}
            arrayMessage={items.arrayMessage}
          />
        );
      })}
    </div>
  );
};

export default Arrayls;

import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const PrevArrow = ({onClick}) => {
  return (
    <span onClick={onClick} className="bg-white border border-[rgba(0,0,0,0.5)] w-[30px] h-[30px] flex items-center justify-center group cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white">
      <BiChevronLeft className="text-[25px]" />
    </span>
  );
};

export default PrevArrow;

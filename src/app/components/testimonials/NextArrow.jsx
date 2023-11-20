import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NextArrow = ({onClick}) => {
  return (
    <button onClick={onClick} className="bg-white border border-[rgba(0,0,0,0.5)] w-[30px] h-[30px] flex items-center justify-center cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white">
      <BiChevronRight className="text-[25px]" />
    </button>
  );
};

export default NextArrow;

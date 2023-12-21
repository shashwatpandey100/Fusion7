"use client";
import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const ContactSection = ({ openContact }) => {
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;
  let refs = [];

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps += Math.abs(movementX) + Math.abs(movementY);

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY);

      if (nbOfImages == maxNumberOfImages) {
        removeImage();
      }
    }

    if (currentIndex == refs.length) {
      currentIndex = 0;
      steps = -150;
    }
  };

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = x + "px";
    currentImage.style.top = y + "px";
    currentImage.style.display = "block";
    currentIndex++;
    nbOfImages++;
    setZIndex();
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    for (let i = 0; i < images.length; i++) {
      images[i].style.zIndex = i;
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    images[0].style.display = "none";
    nbOfImages--;
  };

  const getCurrentImages = () => {
    let images = [];
    let indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i;
      if (targetIndex < 0) targetIndex += refs.length;
      images.push(refs[targetIndex].current);
    }
    return images;
  };

  return (
    <section className="h-[100vh] w-[100vw] pt-[150px] relative overflow-hidden bg-[rgba(0,0,0,0.05)]">
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-[3em] text-center boldFont md:leading-[110px] lg:leading-[130px] md:text-[5em] lg:text-[8em] text-black uppercase">
            Have an idea? <br /> Let’s talk.
          </p>
          <div className="flex flex-col items-center mt-[24px]">
            <button className="flex group" onClick={openContact}>
              <p className="underline uppercase text-[24px] normalFont font-[300] text-black z-[11]">
                Let's discuss
              </p>
              <div
                className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-black`}
              >
                <div className="absolute left-[-5px] top-[5px] -mt-1 ml-1 group-hover:animate-slant">
                  <span className="text-[36px] leading-[36px] font-[700]">
                    <MdArrowOutward />
                  </span>
                </div>
                <div className="absolute left-[-50px] top-[50px] -mt-1 ml-1 group-hover:animate-slant">
                  <span className="text-[36px] leading-[36px] font-[700]">
                    <MdArrowOutward />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="flex relative h-full w-full bg-transparent z-[10]"
      >
        {[...Array(19).keys()].map((_, index) => {
          const ref = useRef(null);
          refs.push(ref);
          return (
            <img
              className="h-[30vh] absolute hidden transform -translate-x-1/2 -translate-y-1/2 before:opacity-50 hover:opacity-100 transition-opacity duration-500"
              ref={ref}
              src={`/images/${index}.jpg`}
            ></img>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;

{
  /* <video
        src="https://assets-global.website-files.com/6475c270c3f3fd0a9eb15db5/647a3fd21d79da9cc0b8fdc5_3D%20Bubbles-transcode.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
        className="h-full w-full object-cover border-none lightBg"
      ></video>
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-[3em] text-center boldFont md:leading-[110px] lg:leading-[130px] md:text-[5em] lg:text-[8em] uppercase text-white" >
            Have an idea? <br /> Let’s talk.
          </p>
          <div className="flex flex-col items-center mt-[24px]">
            <button className="flex group" onClick={openContact}>
              <p className="underline uppercase text-[24px] normalFont font-[300] text-white">
                Let's discuss
              </p>
              <div
                className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-white`}
              >
                <div className="absolute left-[-5px] top-[5px] -mt-1 ml-1 group-hover:animate-slant">
                  <span className="text-[36px] leading-[36px] font-[700]">
                    <MdArrowOutward />
                  </span>
                </div>
                <div className="absolute left-[-50px] top-[50px] -mt-1 ml-1 group-hover:animate-slant">
                  <span className="text-[36px] leading-[36px] font-[700]">
                    <MdArrowOutward />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>  */
}

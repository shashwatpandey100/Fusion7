"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = ({ openContact }) => {
  return (
    <section className="h-[100vh] w-[100vw] relative overflow-hidden bg-[rgba(0,0,0,0.05)]">
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-[3em] text-center md:leading-[80px] lg:leading-[100px] md:text-[5em] lg:text-[8em] uppercase" style={{ color: 'white', mixBlendMode: 'difference' }}>
            Have an idea? <br /> Let’s talk.
          </p>
          <div className="flex flex-col items-center mt-[24px]">
            <button className="flex group" onClick={openContact}>
              <p className="underline uppercase text-[24px] font-[300] z-[11]" style={{ color: 'white', mixBlendMode: 'difference' }}>
                Let's discuss
              </p>
              <div
                className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-white z-[11]`}
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

      <video
        src="https://assets-global.website-files.com/6475c270c3f3fd0a9eb15db5/647a3fd21d79da9cc0b8fdc5_3D%20Bubbles-transcode.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
        className="h-full w-full object-cover border-none lightBg"
      ></video>
    </section>
  );
};

export default ContactSection;
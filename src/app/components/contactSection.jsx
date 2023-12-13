import React, { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = ({ openContact }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="h-[100vh] w-[100vw] mt-[150px] relative overflow-hidden bg-white">
      <video
        ref={videoRef}
        // src="https://res.cloudinary.com/dw0bwetr1/video/upload/v1701888213/Gradient_45_pktss0.mp4"
        src="https://assets-global.website-files.com/6475c270c3f3fd0a9eb15db5/647a3fd21d79da9cc0b8fdc5_3D%20Bubbles-transcode.mp4"
        autoPlay
        loop
        muted
        controls={false}
        className="h-full w-full object-cover border-none lightBg"
      ></video>
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-[3em] text-center boldFont md:leading-[110px] lg:leading-[130px] md:text-[5em] lg:text-[8em] text-white uppercase">
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
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = ({openContact}) => {
  return (
    <section className="h-[100vh] w-[100vw] mt-[150px] relative overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6511424e39604c2deea87f99/65158dad1f293bb31ccf4705_char%20(1)-p-1600.webp"
        className="h-full w-full object-cover border-none lightBg"
      />
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-[3em] text-center boldFont md:leading-[110px] lg:leading-[130px] md:text-[5em] lg:text-[8em] text-white uppercase">
            Have an idea? <br /> Let’s talk.
          </p>
          <div className="flex flex-col items-center mt-[24px]">
                <button
                  className="flex group"
                  onClick={openContact}
                >
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

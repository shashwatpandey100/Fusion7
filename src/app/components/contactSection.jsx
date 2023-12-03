import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./contact";
import Blur from "./nav/Blur";
import { contactSlide } from "./nav/anim";
import Curve from "./nav/Curve";
import { MdArrowOutward } from "react-icons/md";

const ContactSection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => {
    setContactOpen(true);
  };
  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <>
      <section className="h-[100vh] w-[100vw] lightBg mx-auto relative">
        <video
          src="https://tuxkarma.co/wp-content/themes/karma/video/fond.mp4"
          className="h-full w-full object-cover border-none lightBg"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
        <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center px-[24px]">
          <div onClick={openContact} className="flex group text-center cursor-pointer boldFont md:leading-[120px] lg:leading-[180px] text-[8em] lg:text-[12em] tracking-tight text-white uppercase">
            SAY HI!
            <div
              className={`relative w-[12rem] h-[12rem] mt-[-40px] overflow-hidden text-white`}
            >
              <div className="absolute left-[-5px] top-[5px] group-hover:animate-slantBig">
                <span className="">
                  <MdArrowOutward />
                </span>
              </div>
              <div className="absolute left-[-10rem] top-[10rem] group-hover:animate-slantBig">
                <span className="">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </div>
          <span className="uppercase text-[12px] mt-[15px] cursor-pointer leading-[22px] text-white hover:underline">
            hello@aetherium.agency
          </span>
          <span className="uppercase text-[12px] text-white hover:underline cursor-pointer leading-[22px] ">
            CHERNYSHEVSKA ST, 32, KHARKIV
          </span>
          <span className="uppercase text-[12px] text-white hover:underline cursor-pointer leading-[22px] ">
            KOUNICKÁ 1250/22, 100 00 STRAŠNICE, PRAGUE
          </span>
          <span className="uppercase text-[12px] text-white hover:underline cursor-pointer leading-[22px] ">
            +380 (50) 728-19-48
          </span>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {contactOpen && (
          <>
            <section
              className="flex w-[100vw] z-[12] fixed top-0 left-0"
              onClick={closeContact}
            >
              <Blur />
            </section>

            <motion.div
              variants={contactSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="h-screen w-[100%] sm:w-[50%] lg:w-[40%] bg-white fixed right-0 top-0 z-50 p-[5px] lg:px-[12px] md:py-[10px]"
            >
              <Curve type="contact" />
              <div className="box-border h-full flex flex-col justify-between">
                <Contact closeContact={closeContact} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;

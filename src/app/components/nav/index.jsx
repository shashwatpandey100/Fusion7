"use client";
import React from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";
import { contactSlide } from "./anim";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Curve from "./Curve";
import Footer from "./Footer";
import { IoCloseOutline } from "react-icons/io5";
import Contact from "../contact";
import Blur from "./Blur";

const Navbar = ({
  openMenu,
  closeMenu,
  openContact,
  closeContact,
  menuOpen,
  contactOpen,
  goToIntro,
  goToAbout,
  goToServices,
  goToProjects,
  goToContact,
  goToHome,
  goToBlogs,
}) => {
  return (
    <>
      <section>
        <div
          className="w-screen h-[45px] fixed top-0 duration-1000 z-[10] flex justify-between items-center px-4 sm:px-10"
          style={{ mixBlendMode: "difference" }}
        >
          <button onClick={openMenu}>
            <p
              className="underline cursor-pointer text-[13px] font-[300] flex gap-1 roboticFont"
              style={{ color: "white" }}
            >
              MENU
            </p>
          </button>
          <button onClick={openContact}>
            <p
              className="underline cursor-pointer text-[13px] font-[300] flex gap-1 roboticFont"
              style={{ color: "white" }}
            >
              <span className="text-[18px]">
                <HiOutlineChatBubbleOvalLeftEllipsis />
              </span>
              LET'S TALK
            </p>
          </button>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="menu w-[100%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
            >
              <span
                onClick={closeMenu}
                className="absolute top-3 left-3 text-[25px] cursor-pointer z-[99] hover:scale-[0.8] transition duration-500"
              >
                <IoCloseOutline />
              </span>
              <Curve type="nav" />
              <div className="body">
                <div className="nav">
                  <span className="cursor-pointer" onClick={goToIntro || goToHome}>Home</span>
                  <span className="cursor-pointer" onClick={goToAbout || goToHome}>About</span>
                  <span className="cursor-pointer" onClick={goToServices || goToHome}>Services</span>
                  <span className="cursor-pointer" onClick={goToProjects || goToHome}>Projects</span>
                  <span className="cursor-pointer" onClick={goToContact || goToHome}>Contact us</span>
                  <span className="cursor-pointer" onClick={goToBlogs}>Blogs</span>
                </div>
                <Footer />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {(contactOpen || menuOpen) && <Blur closeMenu={closeMenu} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {contactOpen && (
          <>
            <section
              className="flex w-[100vw] z-[12] fixed top-0 left-0"
              onClick={closeContact}
            ></section>

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

export default Navbar;

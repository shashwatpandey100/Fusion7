import React, { useState } from 'react'
import './style.css';
import { AnimatePresence, motion } from 'framer-motion';
import { menuSlide } from './anim';
import { contactSlide } from './anim';
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { IoCloseOutline } from "react-icons/io5";
import Contact from '../contact';
import Blur from './Blur';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Works",
    href: "/work",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function index() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    setContactOpen(false);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const openContact = () => {
    setContactOpen(true);
    setMenuOpen(false);
  };
  const closeContact = () => {
    setContactOpen(false);
  };

  return (
    <>
      <button onClick={openMenu}><p className='underline cursor-pointer text-[13px] font-[300] flex gap-1 lightBlack'>
        MENU
      </p></button>
      <button onClick={openContact}><p className='underline cursor-pointer text-[13px] font-[300] flex gap-1 lightBlack'>
        <span className='text-[18px]'><HiOutlineChatBubbleOvalLeftEllipsis /></span>
        LET'S TALK
      </p></button>

      <AnimatePresence mode='wait'>
        {menuOpen && (
          <>
            <section className='flex w-[100vw] z-[12] fixed top-0 left-0' onClick={closeMenu} >
              <Blur />
            </section>

            <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='menu'>
                <div onClick={closeMenu} className="text-[34px] cursor-pointer absolute top-3 left-3 z-[15] hover:scale-[0.8] transition duration-500">
                  <IoCloseOutline />
                </div>
              <div className='body'>
                <div className='nav'>
                  {
                    navItems.map((data, index) => {
                      return <Link key={index} data={{ ...data, index }}></Link>
                    })
                  }
                </div>
                <Footer />
              </div>
              <Curve type='nav' />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {
          contactOpen && (
            <>
              <section className='flex w-[100vw] z-[12] fixed top-0 left-0' onClick={closeContact}>
                <Blur />
              </section>

              <motion.div variants={contactSlide} initial="initial" animate="enter" exit="exit" className="h-screen w-[100%] md:w-[65vw] bg-white fixed right-0 top-0 z-50 p-[5px] md:p-[50px]">
                <Curve type='contact' />
                <div className="box-border h-full flex flex-col justify-between">
                  <div onClick={closeContact} className="text-[34px] cursor-pointer absolute top-3 right-3 z-[99] hover:scale-[0.8] transition duration-500">
                    <IoCloseOutline />
                  </div>
                  <Contact />
                </div>
              </motion.div>
            </>
          )}
      </AnimatePresence >
    </>
  )
}
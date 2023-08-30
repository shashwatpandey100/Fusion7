"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BiPlay } from "react-icons/bi"
import Video from './components/Video'
import { AnimatePresence } from 'framer-motion'
import Testimonials from './components/Testimonials'
import { motion, useScroll, useTransform } from 'framer-motion'
import Services from './components/Services.jsx'

export default function Home() {

  const [videoOpen, setVideoOpen] = useState(false)

  const backgroundImageUrl = 'https://unikorns.agency/static/15b64324d070deec662e5b4b99f64291/afeb4/clutch-gradient.webp';

  const target = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "start end"],
  });


  const yTop = useTransform(scrollYProgress, [0, 1], ['55%', '0%']);


  return (
    <>
      <Navbar />

      <AnimatePresence>
        {
          videoOpen ?
            <Video videoOpen={videoOpen} setVideoOpen={setVideoOpen} />
            :
            null
        }
      </AnimatePresence>



      {/* topup section */}
      <motion.section
        style={{
          y: yTop,
        }}
        className='w-screen bg-[#ffffff] rounded-t-[50px] z-[9] absolute overflow-hidden'
      >

        <section
          className='w-screen h-[calc(100vh+200px)] bg-[#f2ebd9] rounded-t-[50px] z-[9] overflow-hidden'
        >
          {/* services section */}
          <Services />
        </section>

        <section
          className='w-screen bg-[#ffffff] rounded-t-[50px] z-[9] overflow-hidden mt-[-50px]'
        >
        {/* testimonials section */}
        <Testimonials />
        </section>


        <section
          className='w-screen bg-[#f2ebd9] rounded-t-[50px] z-[9] overflow-hidden mt-[-50px]'
        >
          {/* footer section */}
          <Footer />
        </section>

      </motion.section>


      {/* intro section */}
      <section
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        ref={target}
        className='m-auto w-screen h-screen px-12 pt-[110px] pb-[150px] leading-[4.2em] flex justify-between bg-cover bg-center fixed top-0'>

        <div id="left" className='w-[50%]'>
          <span className='text-[5.95vw] font-[500] pt-8 text-[#C6C6C6]'>Ingenios</span><br />
          <span className='text-[5.95vw] font-[500] pt-8 text-[rgba(255,255,255)]'>Web Design <br />& Development <br /></span>
        </div>

        <div id="right" className='w-[50%] min-h-[450px] relative'>
          <div className='absolute bottom-0 right-0 mb-16 flex flex-col'>
            <p className='font-[500] text-[24px] leading-[1.2em] text-white'>
              <span className='text-[#C6C6C6] text-[26px]'>We design stories</span><br />
              for your startup or <br />
              company. We make sure that<br />
              your vision is scrollable.</p>
            <div className='flex mt-5'>
              <div className='w-[50%] h-[62px] flex items-center gap-[7px]'>
                <div className='rounded-full w-[52px] h-[52px]'>
                  <img className='rounded-full' src="https://a.storyblok.com/f/206664/1000x1000/8da3490e4d/dima_headshot-min.jpg/m/120x120/smart/filters:quality(95):format(webp)" alt="" />
                </div>
                <div className='rounded-full w-[52px] h-[52px]'>
                  <img className='rounded-full' src="https://a.storyblok.com/f/206664/1000x1000/18a0df5677/masha_headshot-min.jpg/m/120x120/smart/filters:quality(95)" alt="" />
                </div>
                <div className='rounded-full w-[52px] h-[52px]'>
                  <img className='rounded-full' src="https://a.storyblok.com/f/206664/1000x1000/a7ca135007/vlad_headshot-min.jpg/m/120x120/smart/filters:quality(95)" alt="" />
                </div>
              </div>

              <div className='w-[50%] h-[62px] flex items-center justify-end gap-[7px] px-2'>
                <span className='text-[14px] font-[500] text-white'>Our Story</span>
                <span className='border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black duration-500 cursor-pointer'
                  onClick={
                    () => {
                      setVideoOpen(true);
                    }
                  }
                ><BiPlay className='text-[42px] pl-[5px] text-white hover:text-black' /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

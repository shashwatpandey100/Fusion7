import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"

const Testimonials = () => {

    // const target = React.useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: target,
    //     offset: ["start start", "end end"],
    // });
    
    // const x = useTransform(scrollYProgress, [0, 0.525], ['50%', '1.5%']);

    const backgroundImageUrl = 'https://unikorns.agency/static/15b64324d070deec662e5b4b99f64291/afeb4/clutch-gradient.webp';

    // function to scroll horizontally on click
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = (scrollOffset) => {
        const newScrollPosition = scrollPosition + scrollOffset;

        const minScrollPosition = 0;
        const maxScrollPosition = 3000;
        const boundedScrollPosition = Math.min(maxScrollPosition, Math.max(minScrollPosition, newScrollPosition));

        setScrollPosition(boundedScrollPosition);

        const container = document.getElementById('scroll-container');
        container.scrollLeft = boundedScrollPosition;
    };


    return (
        <section className='w-screen overflow-hidden py-[10vh]'>

            {/* heading */}
            {/* <div className='border-y border-slate-400'>
                <motion.h1
                    style={{
                        x,
                    }}
                    Ref={target}
                    className='text-[70px] overflow-hidden  w-[2200px] font-[600] flex items-center  bg-cover bg-center bg-no-repeat'
                >
                    OUR TESTIMONIALS.
                </motion.h1>
            </div> */}

            {/* reviews */}
            <div 
            id='scroll-container' 
            className='py-14 pr-5 flex max-w-max overflow-x-hidden'
            style={{
                scrollBehavior: 'smooth', // Set smooth scrolling behavior
              }}
            >
                {/* cards */}
                <div className='min-w-[450px] h-[630px] bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform'
                    style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[30px] overflow-hidden ml-5 hover:scale transform scale-100 hover:scale-[0.98] transition-transform cursor-pointer'>
                </div>
            </div>
            {/* buttons to move card horizontally */}
            
            <div className='h-[45px] flex items-center justify-center gap-3'>
                <span
                    className='border border-slate-400 rounded-full group cursor-pointer'
                    onClick={() => handleScroll(-466)} // Scroll to the left
                >
                    <BiChevronLeft className='text-[30px] text-slate-500 rounded-full duration-500 group-hover:bg-black group-hover:text-white' />
                </span>
                <span
                    className='border border-slate-400 rounded-full group cursor-pointer'
                    onClick={() => handleScroll(466)} // Scroll to the right
                >
                    <BiChevronRight className='text-[30px] text-slate-500 rounded-full duration-500 group-hover:bg-black group-hover:text-white' />
                </span>
            </div>

        </section>
    )
}

export default Testimonials
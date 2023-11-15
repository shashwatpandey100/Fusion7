import React, { useState } from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"

const Testimonials = () => {

    const backgroundImageUrl = 'https://res.cloudinary.com/dw0bwetr1/image/upload/v1699248482/download_1_ygpobe.png';

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
        <>
        <Text />
        <section className='w-screen overflow-hidden pb-[50px] lightBg'>
            <div
                id='scroll-container'
                className='pr-[12px] flex max-w-max overflow-x-hidden py-[50px]'
                style={{
                    scrollBehavior: 'smooth',
                }}
            >
                {/* cards */}
                <div className='min-w-[450px] h-[630px] bg-cover bg-no-repeat rounded-[25px] overflow-hidden ml-[12px]'
                    style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
                <div className='min-w-[450px]  h-[630px] bg-[#e3e8ea] rounded-[25px] overflow-hidden ml-[12px]'>
                </div>
            </div>
            {/* buttons to move card horizontally */}

            <div className='h-[45px] flex items-center justify-center gap-3'>
                <span
                    className='border border-slate-400 rounded-full group cursor-pointer z-[6]'
                    onClick={() => handleScroll(-466)}
                >
                    <BiChevronLeft className='text-[30px] text-slate-500 rounded-full duration-500 group-hover:bg-black group-hover:text-white' />
                </span>
                <span
                    className='border border-slate-400 rounded-full group cursor-pointer z-[6]'
                    onClick={() => handleScroll(466)}
                >
                    <BiChevronRight className='text-[30px] text-slate-500 rounded-full duration-500 group-hover:bg-black group-hover:text-white' />
                </span>
            </div>

        </section>
        </>
    )
}

export default Testimonials


const Text = () => {
    return (
      <section className="w-[100vw] h-[calc(60vh+200px)] flex flex-col items-center justify-center lightBg py-[100px]">
        <p className="w-full textT text-[6em] md:text-[9em] text-[#e3051a] italic text-center">
          Our testimonials
        </p>
        <img
          src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/644fb4205dc7044588e2bba5_arrow_bottom.svg"
          alt=""
          className="my-[25px]"
        />
        <p className="max-w-[380px] text-[18px] text-[#e3051a] italic textT">
          Our specialty is brought forward when we dig deep into the client’s
          needs and introduce our always-expanding experience within similar and
          opposite industries.
        </p>
      </section>
    );
  };
  
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const TalkPage = () => {
  const [state, handleSubmit] = useForm("meqbdpeb");

  const [formData, setFormData] = useState({
      email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="h-[80vh] w-[100vw] bg-[#fdefcc] flex flex-col">
      <section className="h-[10%] w-full"></section>
      <section className="h-[90%] w-full bg-[#e3051a] flex flex-col relative">
          <form onSubmit={handleSubmit} className='border-y border-[rgba(0,0,0,0.25)] h-[80px] mt-[50px] mb-[20px] px-[30px] flex flex-col md:flex-row items-center justify-between'>
          {
            state.succeeded ? 
            <>
            <span className='text-[18px] text-black italic textT'>You have successfully joined our exclusive content series, The Paperball!</span>
            </>
            :
            <>
            <input
            type="email"
            placeholder="Enter email address"
            name='email'
            onChange={handleInputChange}
            className="h-full w-[400px] border-none bg-inherit text-black placeholder-black text-[18px]"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="h-[50px] w-[200px] border border-black hover:bg-black hover:text-[#e3051a]"
          >
            {
              state.submitting ? 'Please wait' : 'Subscribe'
            }
          </button>
          </>
          }
          </form>
        <div className="h-[calc(100%-160px)] flex flex-col px-[30px]">
          <div className="h-[45%] w-[100%] flex justisfy-between">
            <div className="cursor-pointer z-[6]">
              <div className="max-h-max font-[300] flex gap-3 uppercase text-[12px]">
                <a
                  href="https://www.instagram.com/thisiskromad/"
                  target="_blank"
                >
                  <p className="hover:underline leading-tight w-full">
                    YOUTUBE
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/thisiskromad/"
                  target="_blank"
                >
                  <p className="hover:underline leading-tight w-full">
                    INSTAGRAM
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/thisiskromad/"
                  target="_blank"
                >
                  <p className="hover:underline leading-tight w-full">
                    DRIBBLE
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/thisiskromad/"
                  target="_blank"
                >
                  <p className="hover:underline leading-tight w-full">
                    PINTEREST
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[55%] w-[100%] flex items-center justify-center">
            <span className="textT text-[15em] tracking-tighter italic">The/&nbsp;</span>
            <span className="textT text-[15em] tracking-tighter">FUSION7</span>
          </div>
        </div>
        <div className="border-t border-[rgba(0,0,0,0.25)] h-[80px] flex items-center justify-between px-[30px] text-[14px]">
          <p className="text-[#4d4d4d]">2023 © The/ Fusion7</p>
          <p className="text-[#000000] cursor-pointer hover:underline" onClick={scrollToTop}>Back to top</p>
        </div>
      </section>
    </section>
  );
};

export default TalkPage;

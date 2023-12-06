import React from "react";

const TalkPage = () => {

  const scrollToTop = () => {
    const audio = new Audio("https://one-is.com/audio/selected/list.m4a");
    audio.play();
    audio.addEventListener("canplay", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  return (
      <section className="max-h-max md:h-[100vh] w-[100vw] px-[24px] bg-white">
        <div className="w-full h-[20%] flex border-t border-black">
          <div className="w-1/2 h-full flex flex-col justify-evenly py-[24px]">
            <span className="mb-[1rem] ">
              <img
                src="https://res.cloudinary.com/dw0bwetr1/image/upload/v1701785656/Screenshot_2023-12-05_at_19.40.51_axly6u.png"
                alt=""
                className="h-[1.25rem]"
              />
            </span>
            <span className="text-[0.625rem] font-[300]">
              全方位服务设计工作室
            </span>
            <span className="text-[0.625rem] font-[300 lightBlack">
              KHARKIV, UKRAINE, 49°59′33″N 36°13′52″E
            </span>
            <span className="text-[0.625rem] font-[300] lightBlack">
              PRAGUE, CZECHIA, 50°05′16″N 14°25′14″E
            </span>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center pt-[48px]">
            <div className="h-full flex flex-col">
              <span className="uppercase text-[0.8rem] hover:underline cursor-pointer hover:text-[#44f79b]">
                Projects
              </span>
              <span className="uppercase text-[0.8rem] hover:underline cursor-pointer hover:text-[#44f79b]">
                Services
              </span>
              <span className="uppercase text-[0.8rem] hover:underline cursor-pointer hover:text-[#44f79b]">
                Gallery
              </span>
              <span className="uppercase text-[0.8rem] hover:underline cursor-pointer hover:text-[#44f79b]">
                Studio
              </span>
              <span className="uppercase text-[0.8rem] hover:underline cursor-pointer hover:text-[#44f79b]">
                Career
              </span>
            </div>
          </div>
        </div>
        <div className="w-full max-h-max md:h-[30%] flex items-center">
          <img
            src="https://res.cloudinary.com/dw0bwetr1/image/upload/v1701785656/Screenshot_2023-12-05_at_19.40.51_axly6u.png"
            className="w-full mt-[24px]"
            alt=""
          />
        </div>
        <div className="w-full max-h-max md:h-[45%] py-[12px] md:py-[96px] flex gap-[3rem]">
          <div className="h-full w-[calc(100%/3)] flex flex-col">
            <span className="uppercase font-[600]">
              Let's bring something adorable to the world together.
            </span>
            <span className="pt-[24px] pb-0 font-[400] normalFont border-b border-black text-[2rem] max-w-max transition-all duration-300 hover:text-[#44f79b] hover:border-[#44f79b] cursor-pointer">
              Get in touch
            </span>
          </div>
          <div className="h-full w-[calc(100%/3)] flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Studio
            </span>
            <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] ">
              hello@aetherium.agency
            </span>
            <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] ">
              CHERNYSHEVSKA ST, 32, KHARKIV
            </span>
            <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] ">
              KOUNICKÁ 1250/22, 100 00 STRAŠNICE, PRAGUE
            </span>
            <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] ">
              +380 (50) 728-19-48
            </span>
          </div>
          <div className="h-full w-[calc(100%/3)] flex justify-between">
            <div className="h-full w-full flex flex-col">
              <span className="mb-[24px] uppercase text-[14px] font-[600]">
                Menu
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Home
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Projects
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Services
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Studio
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Career
              </span>
            </div>
            <div className="h-full w-full flex flex-col">
              <span className="mb-[24px] uppercase text-[14px] font-[600]">
                Follow us
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Youtube
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Instagram
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Dribble
              </span>
              <span className="uppercase text-[12px] hover:text-[#44f79b] leading-[22px] cursor-pointer">
                Linkedin
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[5%] flex justify-between items-center py-[24px]">
          <span className="uppercase text-[12px] hover:text-[#44f79b]">
            COPYRIGHT 2023. ALL RIGHT RESERVED
          </span>
          <span
            className="uppercase text-[12px] hover:text-[#44f79b] hover:underline cursor-pointer"
            onClick={scrollToTop}
          >
            GO TO TOP
          </span>
        </div>
      </section>
  );
};

export default TalkPage;

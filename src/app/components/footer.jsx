import React, { useState } from "react";
import constants from "./constants.js";
import { useForm, ValidationError } from "@formspree/react";
import { MdArrowOutward } from "react-icons/md";

const TalkPage = ({
  openContact,
  goToIntro,
  goToAbout,
  goToServices,
  goToProjects,
}) => {
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

  const [state, handleSubmit] = useForm("meqbdpeb");

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="max-h-max w-[100vw] px-[24px] bg-white">
      <div className="flex flex-col pt-[48px]">
        <span className="w-full uppercase font-[600]">DIVE INTO OUR INKED INSIGHTS WITH — THE/INKWELL</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-[100%] h-[100%] gap-[5px] pt-[24px]"
        >
          <input
                className="md:w-[50%] w-[100%] h-[44px] border border-[rgba(0,0,0,0.25)] rounded-[2px] focus:outline-none p-4 bg-transparent text-[15px] md:text-[17px] font-[300] text-black"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required={true}
              />
              <div className="md:w-[50%] w-[100%] h-[44px] relative flex items-center">
              <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex group absolute right-0"
                >
                  <p className="underline uppercase text-[36px] lg:leading-[36px] leading-[26px] font-[700] text-[#2c2c2c]">
                    Subscribe
                  </p>
                  <div
                    className={`pt-1 pl-2 relative group w-[46px] h-[46px] overflow-hidden text-[#2c2c2c]`}
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
        </form>
      </div>
      <div className="w-full max-h-max md:h-[45%] py-[12px] md:pt-[48px] md:pb-[192px] flex gap-[3rem]">
        <div className="h-full w-[calc(100%/3)] flex flex-col">
          <span className="uppercase font-[600]">
            Let's bring a touch of brilliance to the digital realm.
          </span>
          <span
            onClick={openContact}
            className="pt-[24px] pb-0 font-[400] normalFont border-b border-black text-[2rem] max-w-max transition-all duration-300 hover:text-[#9204c1] hover:border-[#9204c1] cursor-pointer"
          >
            Get in touch
          </span>
        </div>
        <div className="h-full w-[calc(100%/3)] flex flex-col">
          <span className="mb-[24px] uppercase text-[14px] font-[600]">
            Contacts
          </span>
          <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] ">
            <a href={`mailto:${constants.email}`}>{constants.email}</a>
          </span>
          <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] ">
            <a href="https://www.example.com/address" target="_blank">
              F-51, Commercial Belt, Alpha-1,
              <br />
              Greater Noida, India
            </a>
          </span>
          <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] ">
            <a href="tel:+919267992009">+91 92679 92009</a>
          </span>
        </div>
        <div className="h-full w-[calc(100%/3)] flex justify-between">
          <div className="h-full w-full flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Menu
            </span>
            <span
              onClick={goToIntro}
              className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={goToAbout}
              className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer"
            >
              About
            </span>
            <span
              onClick={goToProjects}
              className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={goToServices}
              className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer"
            >
              Services
            </span>
          </div>
          <div className="h-full w-full flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Follow us
            </span>
            <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer">
              <a href={constants.youtube} target="_blank">
                Youtube
              </a>
            </span>
            <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer">
              <a href={constants.instagram} target="_blank">
                Instagram
              </a>
            </span>
            <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer">
              <a href={constants.dribble} target="_blank">
                Dribble
              </a>
            </span>
            <span className="uppercase text-[12px] hover:text-[#9204c1] leading-[22px] cursor-pointer">
              <a href={constants.linkedin} target="_blank">
                Linkedin
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex justify-between items-center py-[24px]">
        <span className="uppercase text-[12px] hover:text-[#9204c1]">
          COPYRIGHT 2023. ALL RIGHT RESERVED
        </span>
        <span
          className="uppercase text-[12px] hover:text-[#9204c1] hover:underline cursor-pointer"
          onClick={scrollToTop}
        >
          GO TO TOP
        </span>
      </div>
    </section>
  );
};

export default TalkPage;

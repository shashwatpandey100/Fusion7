import React from "react";
import { Parallax, Background } from "react-parallax";

const Projects = () => {
  return (
    <>
      <Text />
      <section className="w-[100vw] h-[2884px] md:h-[1294px] flex flex-col gap-[12px] justify-evenly lightBg py-[50px]">
        <div className="w-full md:h-[630px] h-[1260px] flex flex-col md:flex-row gap-[12px] px-[12px] justify-center md:items-center">
          <Card />
          <Card />
        </div>
        <div className="w-full md:h-[630px] h-[1260px] flex flex-col md:flex-row gap-[12px] px-[12px] justify-center md:items-center">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Projects;

const Card = () => {
  return (
    <div className="w-[100%] md:w-[50%] h-[630px] relative overflow-hidden group z-[1]">
      <Parallax
        blur={{ min: -15, max: 10 }}
        strength={120}
        className="w-full h-full bg-[#e3e8ea] rounded-[25px]"
      >
        <Background className="custom-bg">
          <div
            style={{
              backgroundImage: "url('')",
            }}
            className="h-[700px] w-[750px] rounded-[25px]"
          />
        </Background>
      </Parallax>
      <div className="group-hover:w-[400px] transition-all duration-500 w-[80px] h-[60px] absolute bottom-[0] left-[0] lightBg rounded-tr-[25px]">
        <div className="w-[25px] h-[25px] absolute bottom-[0] right-[-25px] bg-transparent rotate-270 scale-y-[-1]">
          <svg viewBox="0 0 10 10" id="svg504569976">
            <path
              d="M 0 0 L 10 0 C 4.477 0 0 4.477 0 10 Z"
              fill="#000000"
              stroke="none"
            ></path>
          </svg>
        </div>
        <div className="w-[25px] h-[25px] absolute top-[-25px] left-[0] bg-transparent rotate-270 scale-y-[-1]">
          <svg viewBox="0 0 10 10" id="svg504569976">
            <path
              d="M 0 0 L 10 0 C 4.477 0 0 4.477 0 10 Z"
              fill="#000000"
              stroke="none"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <section className="w-[100vw] h-[80vh] flex flex-col items-center justify-center lightBg">
      <p className="w-full textT text-[9em] text-[#e3051a] italic">
        Featured work
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

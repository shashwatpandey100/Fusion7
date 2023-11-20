import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <section className="w-[100vw] max-h-max flex flex-col gap-[12px] justify-evenly lightBg pb-[100px]">
      <Text />
        <div className="w-full md:h-[630px] h-[1260px] flex flex-col md:flex-row gap-[12px] px-[12px] justify-center md:items-center">
          <Card
            src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/6465092857ac82c18e520810_Main%20Video-transcode.mp4"
            whatWeDid={["website", "app", "UI/UX"]}
            title="Olam Capital"
            desc="Explanation within visual content."
          />
          <Card
            src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/6468ee6491fa23c272150181_tagion_case-transcode.mp4"
            whatWeDid={["UI/UX"]}
            title="Taigon"
            desc="Inspiration through brand and community."
          />
        </div>
        <div className="w-full md:h-[630px] h-[1260px] flex flex-col md:flex-row gap-[12px] px-[12px] justify-center md:items-center">
          <Card
            src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/646ddfa7f5f28af14e297c59_lilith_main-transcode.mp4"
            whatWeDid={["app", "UI/UX"]}
            title="Lilith Games"
            desc="Performance created by immersive visuals and person-centric content."
          />
          <Card
            src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/65294c09bc3127bcc5786cbd_Irys%2030%20sec%20loop-transcode.mp4"
            whatWeDid={["app", "UI/UX"]}
            title="Irys"
            desc="Redefining brands of the future."
          />
        </div>
      </section>
    </>
  );
};

export default Projects;

const Card = ({ src, whatWeDid, title, desc }) => {
  return (
    <div className="w-[100%] md:w-[50%] h-[630px] relative overflow-hidden group z-[1]">
      <div className="z-[2] w-full absolute top-0 h-[30px] p-[10px] text-white text-[14px] flex gap-[10px]">
        {whatWeDid?.map((item, index) => (
          <span
            key={index}
            className="max-w-max h-[30px] rounded-[15px] border border-white px-[10px] py-[5px]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="z-[2] w-full absolute top-[45px] h-[30px] p-[10px] text-white text-[14px] flex items-center">
        {desc}
      </div>

      <div className="w-full h-full bg-[#e3e8ea] rounded-[25px] relativez-[0]">
        <video
          src={src}
          autoPlay
          loop
          muted
          controls={false}
          className="h-full w-full object-cover rounded-[25px]"
        ></video>
        <div className="absolute top-0 left-0 h-full w-full z-[1]" style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)'}}></div>
      </div>
      <div className="z-[2] absolute bottom-[10px] left-[10px] flex items-center">
        <span className="text-white px-[15px] whitespace-nowrap overflow-hidden">
          {title}
        </span>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <section className="w-full h-[calc(60vh+200px)] flex flex-col items-center lightBg justify-center px-[30px] py-[100px]">
      <p className="w-full textT text-[6em] md:text-[9em] text-[#e3051a] italic text-center">
        Featured works
      </p>
      <img
        src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/644fb4205dc7044588e2bba5_arrow_bottom.svg"
        alt=""
        className="my-[25px]"
      />
      <p className="max-w-[380px] text-[18px] text-[#e3051a] italic textT">
      Explore our standout projects in the Featured Works section, showcasing our expertise in digital design and development. Each project reflects our commitment to innovation across diverse industries.
      </p>
    </section>
  );
};


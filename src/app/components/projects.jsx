import React from "react";

const Projects = () => {
  return (
    <section className="w-[100vw] max-h-max min-h-[100vh] flex flex-col gap-[12px] justify-evenly bg-white">
      <Text />
      <div className="w-full flex flex-col md:flex-row gap-[24px] px-[24px] justify-center md:items-center">
        <Card
          src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/6465092857ac82c18e520810_Main%20Video-transcode.mp4"
          whatWeDid="website, app, UI/UX"
          title="Olam Capital"
          desc="Explanation within visual content."
        />
        <Card
          src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/6468ee6491fa23c272150181_tagion_case-transcode.mp4"
          whatWeDid="UI/UX"
          title="Taigon"
          desc="Inspiration through brand and community."
        />
      </div>
    </section>
  );
};

export default Projects;

const Card = ({ src, whatWeDid, title }) => {
  return (
    <div className="w-[100%] md:w-[50%] max-h-max relative group z-[1] pb-[48px] border-b border-black hover:border-red-600 transition-all duration-500 group cursor-pointer">
      <span className="absolute bottom-0 right-0 uppercase text-[13px] lightBlack py-[4px] group-hover:text-red-600 transition-all duration-500">More</span>
      <div className="w-full bg-[#e3e8ea] aspect-[3/2] overflow-hidden">
        <video
          src={src}
          autoPlay
          loop
          muted
          controls={false}
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div class="mt-4 max-h-max">
        <h3 class="text-[15px] normalFont uppercase">{title}</h3>
        <span
          className="lightBlack text-[13px] normalFont uppercase"
        >
          {whatWeDid}
        </span>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-row px-[24px] py-[24px] md:pt-[100px] md:pb-[24px]">
      <span className="h-full uppercase lightBlack text-[13px] normalFont">
        003/&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase text-black text-[13px] normalFont">
        Selected works
      </span>
    </section>
  );
};

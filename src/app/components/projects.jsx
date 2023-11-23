import React from "react";

const Projects = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-col gap-[12px] justify-evenly lightBg pb-[100px]">
      <Text />
      <div className="w-full flex flex-col gap-[50px] md:px-[50px] px-[12px] justify-center md:items-center">
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
  );
};

export default Projects;

const Card = ({ src, whatWeDid, title, desc }) => {
  return (
    <div className="w-[100%] max-h-max relative overflow-hidden group z-[1]">
      <div className="w-full md:h-[630px] h-[70vh] bg-[#e3e8ea] rounded-[5px] relativez-[0]">
        <video
          src={src}
          autoPlay
          loop
          muted
          controls={false}
          className="h-full w-full object-cover rounded-[5px]"
        ></video>
      </div>
      <div class="mt-4 max-h-max">
        <div class="flex space-x-2 mb-3">
          {whatWeDid?.map((item, index) => (
            <span
              className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div class="2xl:space-y-3">
          <h3 class="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
            {title}
          </h3>
          <p class="text-body-2 2xl:text-4xl font-light text-primary-400">
            {desc}
          </p>
        </div>
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
      <p className="max-w-[380px] text-[18px] text-[#e3051a] italic textT text-center">
        Explore our standout projects in the Featured Works section, showcasing
        our expertise in digital design and development. Each project reflects
        our commitment to innovation across diverse industries.
      </p>
    </section>
  );
};

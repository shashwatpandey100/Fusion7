import React from "react";

const Projects = () => {
  return (
    <section className="w-[100vw] max-h-max min-h-[100vh] flex flex-col gap-[12px] justify-evenly bg-white">
      <Text />
      <div className="w-full flex flex-col md:flex-row gap-[24px] px-[24px] justify-center md:items-center">
        <Card
          src="https://live.springsummer.dk/media/uploads/Hp-v2-Lower_2023-06-27-144507_tadh.mp4#t=0.001"
          bgSrc="https://springsummer.imgix.net/uploads/Pole%CC%80ne-02.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440"
          whatWeDid={["UI/UX", "Web Design", "Web Development"]}
          title="Polène"
          desc="Online flagship store"
        />
        <Card
          src="https://live.springsummer.dk/media/uploads/SR_Scroll_Through.mp4#t=0.001"
          bgSrc="https://springsummer.imgix.net/uploads/Background-image_2023-06-05-094015_kwjv.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440"
          whatWeDid={["UI/UX", "Web Design"]}
          title="Screen Rose Studio"
          desc="A tailored portfolio"
        />
      </div>
    </section>
  );
};

export default Projects;

const Card = ({ src, whatWeDid, title, bgSrc, desc }) => {
  return (
    <div className="w-[100%] md:w-[50%] h-[80vh] relative group z-[1] group cursor-pointer">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSrc})` }}
      ></div>
      <div className="absolute top-0 left-0 py-[10px] px-[24px] w-full flex justify-between z-[3]">
        <div className="flex flex-col">
          <span className="text-[13px] text-white">{title}</span>
          <span className="text-[10px] text-white max-w-[350px]">{desc}</span>
        </div>
        <div className="flex gap-[5px]">
          {
            whatWeDid &&
              whatWeDid.map((item, index) => (
                <span
                  key={index}
                  className="text-[10px] text-white uppercase rounded-[2px] px-[15px] border border-[rgba(255,255,255,0.25)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.4)] hover:text-black transition-all duration-300"
                >
                  {item}
                </span>
              ))
          }
        </div>
      </div>
      <div className="w-full h-full bg-[#e3e8ea] overflow-hidden flex items-center justify-center">
        <video
          src={src}
          autoPlay
          loop
          muted
          controls={false}
          className="h-[95%] max-w-[95%] z-[2]"
        ></video>
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

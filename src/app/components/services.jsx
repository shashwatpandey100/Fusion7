import React from "react";

const Services = () => {
  return (
    <section className="min-h-[100vh] w-[100vw] bg-white">
      <Text />
      <section className="flex flex-col px-[24px] items-center">
        {data.map((service, index) => (
          <Card
            key={index}
            img={service.img}
            heading={service.heading}
            desc={service.desc}
            tech={service.tech}
            src={service.src}
            no={service.no}
            isLast={service.isLast}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;

const data = [
  {
    heading: "Mobile App Development",
    src: "https://non-standard.studio/media/pages/news/an-introduction/c44bde69fb-1690180289/nonstandard-_header_desktop_02_square.mp4",
    desc: "Years of mobile development expertise empower us to design robust architectures and create custom React Native apps, ensuring compatibility on both iOS and Android.",
    tech: ["React Native", "NodeJs", "MongoDb", "PostgreSql"],
    no: "I.",
  },
  {
    heading: "Web Development",
    src: "https://non-standard.studio/media/pages/news/press-rmit-ugcd-graduate-showcase/b15a877c71-1687408859/rmit_press_2023.mp4",
    desc: "Crafting adaptive design components with meticulous code, we prioritize optimizing development for seamless functionality across devices and browsers.",
    tech: ["React", "NodeJs", "MongoDb", "PostgreSql"],
    no: "II.",
  },
  {
    heading: "Design Solutions",
    src: "https://non-standard.studio/media/pages/news/open-opportunities-for-mid-weight-senior-designers/1996e413cf-1687755883/nonstandard-_news_05-n-0623-0_square.mp4",
    desc: "Fueled by user-centered design, we boost productivity and revenue with remarkable expertise. Always surpassing our previous achievements, our ingenuity sets us apart.",
    tech: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Blender",
      "Cinema 4D",
    ],
    no: "III.",
    isLast: true,
  },
];

const Card = ({ heading, desc, tech, src, no, isLast }) => {
  return (
    <section className={`w-full ${isLast? 'border-y' : 'border-t'} border-black pt-[1rem] pb-[4rem] max-h-max md:h-[400px] max-h-max flex`}>
      <div className="w-[10%] md:w-[25%] h-full text-[13px] normalFont uppercase">
        {no}
      </div>
      <div className="h-full w-[90%] md:min-w-[75%] flex md:flex-row flex-col gap-[10px]">
        <div className="w-full md:w-[50%] h-full items-center text-[13px]">
          <div className="flex gap-[10px] flex-col md:max-w-[70%]">
            <p className="normalFont text-[16px] font-[600]">{heading}</p>
            <p className="normalFont">{desc}</p>
          </div>
        </div>
        <div className="h-full w-full md:w-[50%] gap-[10px] flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] h-full">
            <video
              className="max-h-[300px] w-full object-cover border-none"
              autoPlay
              loop
              muted
              controls={false}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
          <div className="w-[50%] h-full flex md:justify-center">
            <div className="normalFont flex flex-col">
              <span className="text-[13px] uppercase normalFont mb-[10px]">
                Tech we use:{" "}
              </span>
              {tech.map((t, index) => (
                <span key={index} className="text-[12px] normalFont">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-row px-[24px] py-[24px] md:pt-[100px] md:pb-[24px]">
      <span className="h-full uppercase lightBlack text-[13px] normalFont">
        002/&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase text-black text-[13px] normalFont">
        What we do best
      </span>
    </section>
  );
};

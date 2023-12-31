import React from "react";

const Services = () => {
  return (
    <section className="min-h-[100vh] w-[100vw] bg-white readFont">
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
    heading: "Web Design",
    src: "https://cdn.dribbble.com/userupload/12127095/file/original-7c87e39b32e3baa42a6cee01fb0d6a5e.jpg?resize=1024x768",
    desc: "Crafting visually stunning and user-friendly interfaces, our web design services focus on delivering a seamless and engaging user experience.",
    tech: ["Figma", "Sketch", "Adobe XD", "Adobe Photoshop"],
    no: "I.",
  },
  {
    heading: "Web Development",
    src: "https://res.cloudinary.com/dw0bwetr1/image/upload/v1703584178/1_3u7gaaVShelDSK10OVx8dA_kusoyv.webp",
    desc: "Creating adaptable design elements through precise coding, our focus is on enhancing development for smooth functionality across various devices and browsers.",
    tech: [
      "ReactJS",
      "NextJS",
      "ViteJS",
      "NodeJS",
      "MongoDb",
      "Mongoose",
      "PostgreSql",
    ],
    no: "II.",
  },
  {
    heading: "Branding",
    src: "https://res.cloudinary.com/dw0bwetr1/image/upload/v1703584179/Screenshot_2023-12-26_at_15.17.10_irnrgq.png",
    desc: "Crafting compelling brand identities that resonate with your target audience, our branding services go beyond aesthetics. We strategically guide businesses through user-centric design principles, elevating productivity and revenue. As we consistently surpass milestones, our distinctive ingenuity defines a unique position for your brand in the industry.",
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
    <section
      className={`w-full ${
        isLast ? "border-y" : "border-t"
      } border-black pt-[1rem] pb-[4rem] max-h-max md:h-[400px] max-h-max flex`}
    >
      <div className="w-[10%] md:w-[25%] h-full text-[13px] uppercase">
        {no}
      </div>
      <div className="h-full w-[90%] md:min-w-[75%] flex md:flex-row flex-col gap-[10px]">
        <div className="w-full md:w-[50%] h-full items-center text-[13px]">
          <div className="flex gap-[10px] flex-col md:max-w-[70%]">
            <p className=" text-[16px] font-[600]">{heading}</p>
            <p className="">{desc}</p>
          </div>
        </div>
        <div className="h-full w-full md:w-[50%] gap-[10px] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] h-full">
            <img
              className="min-h-[280px] w-full object-cover"
              src={src}
            >
            </img>
          </div>
          <div className="w-[50%] h-full flex md:justify-center">
            <div className=" flex flex-col">
              <span className="text-[13px] uppercase  mb-[10px]">
                Tech we use:{" "}
              </span>
              {tech.map((t, index) => (
                <span key={index} className="text-[12px] ">
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
    <section className="w-[100vw] max-h-max flex flex-row px-[24px] py-[24px] md:mt-[100px] md:pb-[24px]">
      <span className="h-full uppercase lightBlack text-[13px]">
        002/&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase text-black text-[13px]">
        What we do best
      </span>
    </section>
  );
};

import React from "react";

const Services = () => {
  return (
    <section className="max-h-max w-[100vw] bg-white">
      <Text />
      <section className="flex flex-col px-[10px] items-center lg:justify-evenly lg:flex-row gap-[10px] pb-[100px]">
        {data.map((service, index) => (
          <Card
            key={index}
            img={service.img}
            heading={service.heading}
            desc={service.desc}
            tech={service.tech}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;

const data = [
  {
    img: "https://unblast.com/wp-content/uploads/2023/01/Industrial-iPhone-14-Mockup-1536x1152.jpg",
    heading: "Mobile App Development",
    desc: "Years of mobile development expertise empower us to design robust architectures and create custom React Native apps, ensuring compatibility on both iOS and Android.",
    tech: ["React Native", "MongoDb", "PostgreSql", "NodeJs"],
  },
  {
    img: "https://unblast.com/wp-content/uploads/2019/01/Website-Mockup-1600x1189.jpg",
    heading: "Web Development",
    desc: "Crafting adaptive design components with meticulous code, we prioritize optimizing development for seamless functionality across devices and browsers.",
    tech: ["ReactJs", "NextJs", "NodeJs", "MongoDb", "PostgreSql"],
  },
  {
    img: "https://unblast.com/wp-content/uploads/2023/06/Essential-Branding-Mockup-1536x1152.jpg",
    heading: "Design Solutions",
    desc: "Fueled by user-centered design, we boost productivity and revenue with remarkable expertise. Always surpassing our previous achievements, our ingenuity sets us apart.",
    tech: [
      "Figma",
      "Adobe AfterEffects",
      "Adobe Illustrator",
      "Blender",
      "Cinema 4D",
    ],
  },
];

const Card = ({ img, heading, desc, tech }) => {
  return (
    <div
      className="lg:w-[33%] w-full w-[100%] h-[500px] rounded-[12px] bg-cover z-[0] text-white transition-all duration-500 relative group overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full z-[0]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 70%)",
        }}
      ></div>

      <div className="h-full w-full aboslute top-0 left-0 p-[25px] flex flex-col z-[2] relative">
        <h1 className="h-[20%] text-[32px] normalFont">{heading}</h1>
        <div className="h-[60%] normalFont relative">
          <p className="absolute bottom-[20px] normalFont text-[14px]">{desc}</p>
        </div>
        <div className="h-[20%] flex-wrap max-w-[100%] flex border-t border-white py-[20px]">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="normalFont max-w-max h-[25px] rounded-[15px] px-[10px] py-[5px] m-[2px] bg-[rgba(255,255,255,0.4)] text-[13px] flex items-center justify-center"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <section className="w-full h-[calc(60vh+200px)] flex flex-col items-center justify-center px-[30px] py-[100px]">
      <p className="w-full textT text-[6em] md:text-[9em] text-[#e3051a] italic text-center">
        Our services
      </p>
      <img
        src="https://assets-global.website-files.com/642acc59fa552a1328890eb7/644fb4205dc7044588e2bba5_arrow_bottom.svg"
        alt=""
        className="my-[25px]"
      />
      <p className="max-w-[380px] text-[18px] text-[#e3051a] italic textT text-center">
      We are a dynamic digital design and development company, dedicated to delivering exceptional services that align seamlessly with our clients' unique needs. Our forte comes to the forefront as we deeply understand and address the specific requirements of our clients. 
      </p>
    </section>
  );
};

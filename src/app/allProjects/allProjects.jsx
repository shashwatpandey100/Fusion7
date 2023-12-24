"use client";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const AllProjects = () => {
  return (
    <section className="flex flex-col readFont">
      <div className="h-[70px] w-full flex flex-col fixed top-[24px] left-[24px] z-[1]">
        <Link href={'/'}>
        <img
          src="https://res.cloudinary.com/dw0bwetr1/image/upload/v1701785656/Screenshot_2023-12-05_at_19.40.51_axly6u.png"
          className="w-[150px]"
          alt=""
        />
        </Link>
        <Text />
      </div>
      <div className="fixed bottom-[24px] right-[24px]">
        <span className="uppercase text-black text-[13px] normalFont">(scroll)</span>
      </div>
      <HorizontalScrollCarousel />
    </section>
  );
};

export default AllProjects;

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-row">
      <span className="h-full uppercase text-black text-[13px] normalFont">
        all works /&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase lightBlack text-[13px] normalFont">
        {cards.length}
      </span>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1.5%", "-51%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] z-[0]">
      <div className="sticky top-0 left-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex ml-[-24px] gap-[24px]">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a
      className="w-[100%] md:min-w-[50vw] h-[80vh] relative group z-[1] group cursor-pointer"
      href={card.link}
      target="_blank"
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${card.bgSrc})` }}
      ></div>
      <div className="absolute top-0 left-0 py-[10px] px-[24px] w-full flex justify-between z-[3]">
        <div className="flex flex-col">
          <span className="text-[13px] text-white">{card.title}</span>
          <span className="text-[10px] text-white max-w-[350px]">{card.desc}</span>
        </div>
        <div className="flex gap-[5px]">
          {card.whatWeDid &&
            card.whatWeDid.map((item, index) => (
              <span
                key={index}
                className="text-[10px] text-white uppercase rounded-[2px] px-[15px] border border-[rgba(255,255,255,0.25)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.4)] hover:text-black transition-all duration-300"
              >
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="w-full h-full bg-[#e3e8ea] overflow-hidden flex items-center justify-center">
        <video
          src={card.src}
          autoPlay
          loop
          muted
          controls={false}
          className="h-[95%] max-w-[95%] z-[2]"
        ></video>
      </div>
    </a>
  );
};

const cards = [
  {
    id: 1,
    src: "https://live.springsummer.dk/media/uploads/SR_Scroll_Through.mp4#t=0.001",
    bgSrc:
      "https://springsummer.imgix.net/uploads/Background-image_2023-06-05-094015_kwjv.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    whatWeDid: ["UI/UX", "Web Design", "Web Development"],
    title: "Screen Rose Studio",
    desc: "A tailored portfolio",
    link: "https://www.sorenrose.com",
  },
  {
    id: 2,
    src: "https://live.springsummer.dk/media/uploads/Hp-v2-Lower_2023-06-27-144507_tadh.mp4#t=0.001",
    bgSrc:
      "https://springsummer.imgix.net/uploads/Pole%CC%80ne-02.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    whatWeDid: ["UI/UX", "Web Design", "Web Development"],
    title: "Polène",
    desc: "Online flagship store",
    link: "https://eng.polene-paris.com",
  },
  {
    id: 3,
    src: "https://live.springsummer.dk/media/uploads/simply_chocolate-walkthrough_2023-06-27-140324_toyu.mp4#t=0.001",
    bgSrc:
      "https://springsummer.imgix.net/uploads/image-36.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    whatWeDid: ["UI/UX", "Web Design", "Web Development"],
    title: "Simply Chocolate",
    desc: "Online Ecommerce store",
    link: "https://simplychocolatecph.com/",
  },
  {
    id: 4,
    src: "https://live.springsummer.dk/media/uploads/grasp-hp-lower-shorter.mp4#t=0.001",
    bgSrc:
      "https://springsummer.imgix.net/uploads/Grasp-Background-image.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    whatWeDid: ["UI/UX", "Web Design", "Web Development"],
    title: "Grasp",
    desc: "Knowledge, ideas, change",
    link: "https://graspfestival.dk/",
  },
];

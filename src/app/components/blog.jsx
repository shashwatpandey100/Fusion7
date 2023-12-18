import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-col gap-[12px] bg-white mt-[24px] md:mt-[100px]">
      <Text />
      <div className="w-full flex flex-col md:flex-row gap-[24px] px-[24px] justify-center md:items-center">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

export default Blog;

const Card = ({ card }) => {
  return (
    <div className="w-[100%] md:w-[calc(50%-24px)] m-[0px] max-h-max min-h-[50vh] relative z-[1] flex flex-col">
      <div
        className="h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${card.bgSrc})` }}
      ></div>
      <div className="h-[200px] w-full flex flex-col">
        <div className="w-full max-h-max flex py-[12px] gap-[6px]">
          <span
            className="normalFont text-[14px] h-[35px] w-[35px] rounded-[2px] bg-cover bg-center"
            style={{ backgroundImage: `url(${card.writerProfilePicture})` }}
          ></span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {card.writer}
          </span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center pb-[5px]">
            .
          </span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {card.date}
          </span>
        </div>
        <span className="normalFont text-[12px] mt-[6px] mb-[12px] uppercase">
          {card.title}
        </span>
        <div className="flex w-full">
          <div className="flex gap-[5px]">
            {card.tags &&
              card.tags.map((item, index) => (
                <span
                  key={index}
                  className="text-[10px] uppercase rounded-[2px] px-[15px] h-[35px] border border-[rgba(0,0,0,0.25)] flex items-center justify-center bg-white hover:bg-[rgba(0,0,0,0.05)] transition-all duration-500 text-black"
                >
                  {item}
                </span>
              ))}
          </div>
          <a href={card.link} target="_blank" className="flex group absolute right-0">
            <p className="underline uppercase text-[14px] leading-[30px] font-[700] text-[#2c2c2c]">
              Read more
            </p>
            <div
              className={`px-2 relative group overflow-hidden text-[#2c2c2c]`}
            >
              <div className="absolute left-[-5px] top-[5px] mt-[0] ml-1 group-hover:animate-slant">
                <span className="text-[22px] leading-[22px] font-[700]">
                  <MdArrowOutward />
                </span>
              </div>
              <div className="absolute left-[-50px] top-[50px] mt-[0] ml-1 group-hover:animate-slant">
                <span className="text-[22px] leading-[22px] font-[700]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Card };

const cards = [
  {
    id: 1,
    bgSrc:
      "https://taziku.co.jp/taziku_w_p/wp-content/uploads/2023/07/copy-1024x576.jpg",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Kostya Stepanov",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*inFNST-sBYKIhA6JKkBpWA.png",
    date: "AUGUST 11, 2023",
    title: "Interview: Can You Stop “forEach” in JavaScript?",
    link: "https://eng.polene-paris.com",
  },
  {
    id: 2,
    bgSrc:
      "https://springsummer.imgix.net/uploads/Grasp-Background-image.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Ani Munipalli",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*sPU_ZHS0My6X5eDlT7uA-w.png",
    date: "JULY 6, 2022",
    title: "Back-End & Web Development Trends For 2024",
    link: "https://graspfestival.dk/",
  },
];

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[24px]">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px] normalFont">
          004/&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px] normalFont">
          Editor's Pick
        </span>
      </div>
      <Link
        href={"/blogs"}
        className="h-full uppercase text-black text-[13px] normalFont cursor-pointer hover:text-[#9204c1]"
      >
        (Read all)
      </Link>
    </section>
  );
};

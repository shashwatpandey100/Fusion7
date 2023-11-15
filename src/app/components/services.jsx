import React from "react";

const Services = () => {
  return (
    <section className="max-h-max w-[100vw] px-[30px] bg-[#fdefcc]">
      <Text />
      <section className="flex flex-col items-center lg:justify-evenly lg:flex-row gap-[10px] pb-[100px]">
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </section>
    </section>
  );
};


const Tab = () => {
    return (
      <div className="lg:w-[25%] w-full max-w-[500px] h-[400px] rounded-[12px] bg-[#e3e8ea]">
  
      </div>
    )
  }

export default Services;

const Text = () => {
    return (
      <section className="w-full h-[calc(60vh+200px)] flex flex-col items-center justify-center py-[100px]">
        <p className="w-full textT text-[6em] md:text-[9em] text-[#e3051a] italic text-center">
          Our services
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
  
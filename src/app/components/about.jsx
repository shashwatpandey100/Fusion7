import React from "react";

const About = () => {
  return (
    <>
      <Text />
      <section className="pb-[100px] w-[100vw] flex px-[24px]">
        <div className="w-1/2 max-h-max">
          <span className="normalFont text-[16px]">Based in London, we are a Creative + Production Partner to brands and agencies worldwide, specialising in direction, design and moving image.</span>
        </div>
        <div className="w-1/2 max-h-max">
          <p className="normalFont text-[16px]">Our ethos is to create attention-grabbing, design led content that inspires an emotional reaction, leaving a lasting impression. This is what we strive for in all our work – we call what we do ‘creativity that moves’.</p>
          <p className="normalFont text-[14px] mt-[24px]">How we work matters as much to us as the end result – it’s why we’re proud to be known as a company that champions decency in what can be a demanding industry. </p>
          <p className="normalFont text-[14px] mt-[24px] underline cursor-pointer">Read more about our people and culture.</p>
          <p className="normalFont text-[16px] mt-[48px]">What we do</p>
          <p className="normalFont text-[13px] mt-[12px]">Ideation, Concepting & Visual Development</p>
          <p className="normalFont text-[13px]">Writing & Storytelling</p>
          <p className="normalFont text-[13px]">Direction</p>
          <p className="normalFont text-[13px]">Motion Design</p>
          <p className="normalFont text-[13px]">3D</p>
          <p className="normalFont text-[13px]">2D</p>
          <p className="normalFont text-[13px]">Illustration</p>
          <p className="normalFont text-[13px]">Key Art</p>
          <p className="normalFont text-[13px]">Content Production</p>
        </div>
      </section>
    </>
  );
};

export default About;

const Text = () => {
  return (
    <section className="w-[60%] max-h-max flex flex-row py-[24px] px-[24px] md:pt-[100px] md:pb-[24px]">
      <span className="h-full uppercase lightBlack text-[13px] normalFont">
        001/&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase text-black text-[13px] normalFont">
        Who we are
      </span>
    </section>
  );
};

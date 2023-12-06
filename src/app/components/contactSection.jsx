import React from "react";

const ContactSection = () => {
  return (
    <section className="h-[100vh] w-[100vw] mt-[150px] relative overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6511424e39604c2deea87f99/65158dad1f293bb31ccf4705_char%20(1)-p-1600.webp"
        className="h-full w-full object-cover border-none lightBg"
      />
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
        <p className="text-[3em] text-center boldFont md:leading-[90px] lg:leading-[120px] md:text-[5em] lg:text-[8em] text-white uppercase">
          Have an idea? <br /> Let’s talk.
        </p>
        <p className="flex justify-center"> <span className="text-center cursor-pointer border-b border-white normalFont text-[14px] leading-[14px] text-white uppercase mt-[48px] pb-[6px]">let's discuss </span></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";

const ContactSection = () => {
  return (
    <section className="h-[100vh] w-[100vw] lightBg mt-[150px] relative overflow-hidden">
      <video
        src="https://tuxkarma.co/wp-content/themes/karma/video/fond.mp4"
        poster="https://res.cloudinary.com/dw0bwetr1/image/upload/v1701757295/Screenshot_2023-12-05_at_11.48.39_afi4wn.png"
        className="h-full w-full object-cover border-none lightBg"
        autoPlay
        loop
        muted
        controls={false}
      ></video>
      <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="text-center boldFont text-[16px] leading-[18px] tracking-tight text-black uppercase">Your vision. Fast. On-time.</p>
          <p className="text-center boldFont text-[16px] leading-[18px] tracking-tight text-black uppercase">Delivered to your creative standards</p>
        <p className="text-[3em] text-center boldFont md:leading-[120px] lg:leading-[180px] md:text-[8em] lg:text-[12em] tracking-tight text-black uppercase">
          CITRONA STUDIO
        </p>
        <p className="text-center normalFont text-[12px] leading-[14px] font-[600] text-black uppercase">We provide full service post-production with seamless collaboration, so you can maintain your creative</p>
        <p className="text-center normalFont text-[12px] leading-[14px] font-[600] text-black uppercase">standards and vision all the way through finishing.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

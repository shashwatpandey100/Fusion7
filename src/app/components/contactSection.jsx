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
    </section>
  );
};

export default ContactSection;

import React from "react";

const About = () => {
  return (
    <>
      <Text />
      <section className="pb-[100px] w-[100vw] flex px-[24px] bg-white">
        <div className="w-1/2 max-h-max">
          <span className="normalFont text-[16px]">
            Based in Delhi, we're a global digital agency specializing in
            web design and development, dedicated to elevating your
            brand's online presence.
          </span>
        </div>
        <div className="w-1/2 max-h-max">
          <p className="normalFont text-[16px]">
            We craft attention-grabbing, research-led digital assets that evokes
            emotions, aiming for a lasting impression. Our core philosophy
            revolves around "Navigating through Innovation," signifying our
            unwavering dedication across every project.
          </p>
          <p className="normalFont text-[16px] mt-[24px]">
            Our focus extends beyond results to value the process. We embrace a
            reputation for fostering decency in an often demanding industry.
          </p>
          <p className="normalFont text-[16px] mt-[48px]">Our approach:</p>
          <p className="normalFont text-[14px] mt-[12px]">Step 1: &nbsp; Discovery and Research</p>
          <p className="normalFont text-[14px]">Step 2: &nbsp; Strategic Planning</p>
          <p className="normalFont text-[14px]">Step 2: &nbsp; Design and Prototyping</p>
          <p className="normalFont text-[14px]">Step 3: &nbsp; Client Feedback and Revisions</p>
          <p className="normalFont text-[14px]">Step 4: &nbsp; Development</p>
          <p className="normalFont text-[14px]">Step 5: &nbsp; Testing</p>
          <p className="normalFont text-[14px]">Step 6: &nbsp; Client Review</p>
          <p className="normalFont text-[14px]">Step 7: &nbsp; Launch</p>
          <p className="normalFont text-[14px]">Step 8: &nbsp; Post-Launch Support</p>
          <p className="normalFont text-[14px]">Step 9: &nbsp; Evaluation and Feedback</p>
          <p className="normalFont text-[14px]">Step 10: &nbsp; Building Long-Term Relationships</p>
        </div>
      </section>
    </>
  );
};

export default About;

const Text = () => {
  return (
    <section className="w-[60%] max-h-max flex flex-row py-[24px] px-[24px] md:mt-[100px] md:pb-[24px] bg-white">
      <span className="h-full uppercase lightBlack text-[13px] normalFont">
        001/&nbsp;&nbsp;
      </span>
      <span className="h-full uppercase text-black text-[13px] normalFont">
        Who we are
      </span>
    </section>
  );
};

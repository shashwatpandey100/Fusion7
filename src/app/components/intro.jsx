import React, { useState, useEffect } from "react";

const Intro = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setFormattedTime(time);

      const date = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setFormattedDate(date);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

return (
  <section className="w-screen h-[100vh] lightBg relative">
    <section className="h-[100vh] w-[100vw] lightBg mx-auto absolute top-0 left-0">
        <video
          src="https://tuxkarma.co/wp-content/themes/karma/video/fond.mp4"
          className="h-full w-full object-cover border-none lightBg"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
      </section>
    <div className="h-[100vh] w-[100vw] z-[-2]">
      <section className="w-screen h-screen flex flex-col leading-[3em] md:leading-[6em] items-center justify-center p-2 lg:p-6 relative">
        <p className="text-[3em] text-center boldFont md:leading-[120px] lg:leading-[180px] md:text-[8em] lg:text-[12em] tracking-tight text-white uppercase">
          YOUR DIGITAL FUTURE WELL BUILT
        </p>
        <div className="flex mt-5 justify-between flex items-center md:max-w-max">
          <div className="md:w-[100%] max-w-max h-[62px] flex items-center gap-[7px]">
            <div className="rounded-full w-[60px] h-[60px]">
              <img
                className="rounded-full"
                src="https://a.storyblok.com/f/206664/1000x1000/8da3490e4d/dima_headshot-min.jpg/m/120x120/smart/filters:quality(95):format(webp)"
                alt=""
              />
            </div>
            <div className="rounded-full w-[60px] h-[60px]">
              <img
                className="rounded-full"
                src="https://a.storyblok.com/f/206664/1000x1000/18a0df5677/masha_headshot-min.jpg/m/120x120/smart/filters:quality(95)"
                alt=""
              />
            </div>
            <div className="rounded-full w-[60px] h-[60px]">
              <img
                className="rounded-full"
                src="https://a.storyblok.com/f/206664/1000x1000/a7ca135007/vlad_headshot-min.jpg/m/120x120/smart/filters:quality(95)"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-5 md:left-8 lg:left-10 cursor-pointer z-[6]">
          <div className="max-h-max font-[300] flex gap-3 uppercase text-[10px] lg:text-[12px] lightBlack" style={{ mixBlendMode: "difference" }}>
            <a href="https://www.youtube.com/@Fusion7Studios" target="_blank">
              <p className="hover:underline leading-tight w-full" style={{ color: "white" }}>YOUTUBE</p>
            </a>
            <a
              href="https://www.instagram.com/fusion7studio/"
              target="_blank"
            >
              <p className="hover:underline leading-tight w-full" style={{ color: "white" }}>
                INSTAGRAM
              </p>
            </a>
            <a href="https://dribbble.com/Fusion7" target="_blank">
              <p className="hover:underline leading-tight w-full" style={{ color: "white" }}>DRIBBLE</p>
            </a>
            <a
              href="https://www.linkedin.com/in/fusion7-studio-b8095a29b/"
              target="_blank"
            >
              <p className="hover:underline leading-tight w-full" style={{ color: "white" }}>LINKEDIN</p>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-5 md:right-8 lg:right-10 cursor-pointer z-[6]">
          <div className="max-h-[15px] font-[300] flex gap-3 uppercase text-[10px] lg:text-[12px] lightBlack">
            <div className="hover:underline leading-tight w-full" style={{ mixBlendMode: "difference" }}>
            <p  style={{ color: "white" }}>{formattedTime} &nbsp; {formattedDate} </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
);
};

export default Intro;

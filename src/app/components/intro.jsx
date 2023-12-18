import React, { useState, useEffect, useRef } from "react";
import constants from "./constants";
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

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="w-screen h-[100vh] lightBg relative">
      <section className="h-[100vh] w-[100vw] lightBg mx-auto absolute top-0 left-0">
        <video
          ref={videoRef}
          // src="https://res.cloudinary.com/dw0bwetr1/video/upload/v1701888213/Gradient_45_pktss0.mp4"
          src="https://assets-global.website-files.com/6475c270c3f3fd0a9eb15db5/647a3fd21d79da9cc0b8fdc5_3D%20Bubbles-transcode.mp4"
          className="h-full w-full object-cover border-none lightBg"
          autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
        ></video>
      </section>
      <div className="h-[100vh] w-[100vw] z-[-2]">
        <section className="w-screen h-screen flex flex-col items-center justify-center p-2 lg:p-6 relative">
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
            <div
              className="max-h-max font-[300] flex gap-3 uppercase text-[10px] lg:text-[12px] lightBlack"
              style={{ mixBlendMode: "difference" }}
            >
              <a href={constants.youtube} target="_blank">
                <p
                  className="hover:underline leading-tight w-full"
                  style={{ color: "white" }}
                >
                  YOUTUBE
                </p>
              </a>
              <a
                href={constants.instagram}
                target="_blank"
              >
                <p
                  className="hover:underline leading-tight w-full"
                  style={{ color: "white" }}
                >
                  INSTAGRAM
                </p>
              </a>
              <a href={constants.dribble} target="_blank">
                <p
                  className="hover:underline leading-tight w-full"
                  style={{ color: "white" }}
                >
                  DRIBBLE
                </p>
              </a>
              <a
                href={constants.linkedin}
                target="_blank"
              >
                <p
                  className="hover:underline leading-tight w-full"
                  style={{ color: "white" }}
                >
                  LINKEDIN
                </p>
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 right-5 md:right-8 lg:right-10 cursor-pointer z-[6]">
            <div className="max-h-[15px] font-[300] flex gap-3 uppercase text-[10px] lg:text-[12px] lightBlack">
              <div
                className="hover:underline leading-tight w-full"
                style={{ mixBlendMode: "difference" }}
              >
                <p style={{ color: "white" }}>
                  {formattedTime} &nbsp; {formattedDate}{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Intro;

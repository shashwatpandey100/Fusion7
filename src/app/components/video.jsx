import React from "react";

const Video = () => {
  return (
      <section className="h-[100vh] w-[100vw] lightBg">
        <video
          src="https://global-uploads.webflow.com/642acc59fa552a1328890eb7/64c39912c6f85cbfbee8f2f9_showreel_normal-transcode.mp4"
          className="h-[100vh] w-full object-cover border-none"
            autoPlay
            loop
            muted
            controls={false}
        ></video>
      </section>
  );
};

export default Video;

"use client";
import React, { useEffect, useState } from "react";
import Testimonials from "./components/testimonials/index.js";
import Intro from "./components/intro.jsx";
import Projects from "./components/projects.jsx";
import SmoothScroll from "./components/smoothScroll.js";
import Preloader from "./components/preloader/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import TalkPage from "./components/footer/talkPage.jsx";
import Video from "./components/video.jsx";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <SmoothScroll>
          <section>
            <Intro id="home" />
            <Video id="Video" />
            <Projects id="project" />
            <Testimonials id="testimonials" />
            <TalkPage />
          </section>
        </SmoothScroll>
      )}
    </>
  );
}

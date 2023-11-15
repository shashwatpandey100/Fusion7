"use client";
import React, { useEffect, useState } from "react";
import Testimonials from "./components/testimonials/index.js";
import Intro from "./components/intro.jsx";
import Projects from "./components/projects.jsx";
import SmoothScroll from "./components/smoothScroll.js";
import Preloader from "./components/preloader/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import TalkPage from "./components/footer/talkPage.jsx";
import Services from "./components/services.jsx";

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
            <Intro id="Home" />
            <Services id="Services" />
            <Projects id="Project" />
            <Testimonials id="Testimonials" />
            <TalkPage />
          </section>
        </SmoothScroll>
      )}
    </>
  );
}

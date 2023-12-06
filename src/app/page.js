"use client";
import React from "react";
// import Testimonials from "./components/testimonials/index.jsx";
import Intro from "./components/intro.jsx";
import Projects from "./components/projects.jsx";
import SmoothScroll from "./components/smoothScroll.js";
import Preloader from "./components/preloader.jsx";
import { AnimatePresence } from "framer-motion";
import Services from "./components/services.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import ContactSection from "./components/contactSection.jsx";

export default function Home() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Preloader />
      </AnimatePresence>
      <SmoothScroll>
        <section>
          <Intro id="Home" />
          <About />
          <Services id="Services" />
          <Projects id="Project" />
          {/* <Testimonials id="Testimonials" /> */}
          <ContactSection id="Contact" />
          <Footer />
        </section>
      </SmoothScroll>
    </>
  );
}

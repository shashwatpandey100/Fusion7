"use client";
import React, {useState} from "react";
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
import Navbar from "./components/nav/index.jsx";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    setContactOpen(false);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setContactOpen(false);
  };
  const openContact = () => {
    setContactOpen(true);
    setMenuOpen(false);
  };
  const closeContact = () => {
    setContactOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Preloader />
      </AnimatePresence>
      <SmoothScroll>
        <section>
          <Navbar menuOpen={menuOpen} contactOpen={contactOpen} openMenu={openMenu} closeMenu={closeMenu} openContact={openContact} closeContact={closeContact} />
          <Intro id="Home" />
          <About />
          <Services id="Services" />
          <Projects id="Project" />
          {/* <Testimonials id="Testimonials" /> */}
          <ContactSection id="Contact" openContact={openContact} />
          <Footer />
        </section>
      </SmoothScroll>
    </>
  );
}

"use client";
import React, { useState, useRef } from "react";
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

  const intro = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToIntro = () => {
    closeMenu();
    scrollToSection(intro);
  };
  const goToAbout = () => {
    closeMenu();
    scrollToSection(about);
  };
  const goToServices = () => {
    closeMenu();
    scrollToSection(services);
  };
  const goToProjects = () => {
    closeMenu();
    scrollToSection(projects);
  };
  const goToContact = () => {
    closeMenu();
    scrollToSection(contact);
  };

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
          <Navbar
            menuOpen={menuOpen}
            contactOpen={contactOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
            openContact={openContact}
            closeContact={closeContact}
            goToIntro={goToIntro}
            goToAbout={goToAbout}
            goToServices={goToServices}
            goToProjects={goToProjects}
            goToContact={goToContact}
          />
          <section ref={intro}>
            <Intro />
          </section>
          <section ref={about}>
            <About />
          </section>
          <section ref={services}>
            <Services />
          </section>
          <section ref={projects}>
            <Projects />
          </section>
          <section ref={contact}>
            <ContactSection openContact={openContact} />
          </section>
          <section>
            <Footer
              openContact={openContact}
              goToIntro={goToIntro}
              goToAbout={goToAbout}
              goToServices={goToServices}
              goToProjects={goToProjects}
            />
          </section>
        </section>
      </SmoothScroll>
    </>
  );
}

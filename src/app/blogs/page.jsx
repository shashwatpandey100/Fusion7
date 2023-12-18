"use client";
import React, { useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Card } from "../components/blog";

const Blogs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const goToHome = () => {
    window.location.href = "/";
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
      <Navbar
        menuOpen={menuOpen}
        contactOpen={contactOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        openContact={openContact}
        closeContact={closeContact}
        goToHome={goToHome}
      />
      <BlogContent />
      <Footer
        menuOpen={menuOpen}
        contactOpen={contactOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        openContact={openContact}
        closeContact={closeContact}
        goToHome={goToHome}
      />
    </>
  );
};

export default Blogs;

const BlogContent = () => {
  return (
    <>
    <Text />
    <div className="w-[100vw] flex flex-wrap gap-[24px] px-[12px] justify-center">
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
    </>
  );
};

const cards = [
  {
    id: 1,
    bgSrc:
      "https://taziku.co.jp/taziku_w_p/wp-content/uploads/2023/07/copy-1024x576.jpg",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Kostya Stepanov",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*inFNST-sBYKIhA6JKkBpWA.png",
    date: "AUGUST 11, 2023",
    title: "Interview: Can You Stop “forEach” in JavaScript?",
    link: "https://eng.polene-paris.com",
  },
  {
    id: 2,
    bgSrc:
      "https://springsummer.imgix.net/uploads/Grasp-Background-image.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Ani Munipalli",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*sPU_ZHS0My6X5eDlT7uA-w.png",
    date: "JULY 6, 2022",
    title: "Back-End & Web Development Trends For 2024",
    link: "https://graspfestival.dk/",
  },
  {
    id: 3,
    bgSrc:
      "https://taziku.co.jp/taziku_w_p/wp-content/uploads/2023/07/copy-1024x576.jpg",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Kostya Stepanov",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*inFNST-sBYKIhA6JKkBpWA.png",
    date: "AUGUST 11, 2023",
    title: "Interview: Can You Stop “forEach” in JavaScript?",
    link: "https://eng.polene-paris.com",
  },
  {
    id: 4,
    bgSrc:
      "https://springsummer.imgix.net/uploads/Grasp-Background-image.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1440",
    tags: ["UI/UX", "Web Design", "Web Development"],
    writer: "Ani Munipalli",
    writerProfilePicture:
      "https://miro.medium.com/v2/resize:fill:88:88/1*sPU_ZHS0My6X5eDlT7uA-w.png",
    date: "JULY 6, 2022",
    title: "Back-End & Web Development Trends For 2024",
    link: "https://graspfestival.dk/",
  },
];


const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between mt-[48px] px-[24px] py-[24px] md:pb-[24px]">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px] normalFont">
          004/&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px] normalFont">
          Editor's Pick
        </span>
      </div>
    </section>
  );
};
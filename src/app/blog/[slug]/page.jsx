"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { Client, Databases, Query } from "appwrite";
import { IoIosArrowRoundBack } from "react-icons/io";
import SmoothScroll from "../../components/smoothScroll.js";
import { CardContainer } from "@/app/components/blog";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655e3eee8059e4984924");

const BlogPage = ({ params }) => {
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
    <SmoothScroll>
      <Navbar
        menuOpen={menuOpen}
        contactOpen={contactOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        openContact={openContact}
        closeContact={closeContact}
        goToHome={goToHome}
      />
      <BlogPageContent slug={params.slug} />
      <Footer
        menuOpen={menuOpen}
        contactOpen={contactOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        openContact={openContact}
        closeContact={closeContact}
        goToHome={goToHome}
      />
    </SmoothScroll>
  );
};

const BlogPageContent = ({ slug }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "658082e3788180610c6b",
      "658082f8677d5ec3e40a",
      [Query.equal("slug", slug)]
    );

    promise.then(function (response) {
      setBlog(response.documents[0]);
      console.log(response.documents[0]);
    });
  }, []);

  const formattedDate = new Date(blog?.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="w-[100vw] flex flex-col px-[24px] justify-center">
        <div className="h-[40vh] w-full flex items-center justify-center text-center normalFont uppercase text-[4em] tracking-tighter font-[600]">
          {blog?.title}
        </div>
        <div className="h-[5vh] w-full flex items-center justify-center relative">
          {formattedDate}
          <a
            href="/blogs"
            className="absolute left-0 underline flex items-center gap-[3px] hover:bg-black hover:text-white"
          >
            <IoIosArrowRoundBack />
            back to blogs
          </a>
        </div>
        <div
          className="h-[90vh] w-full bg-black bg-cover bg-center"
          style={{
            backgroundImage: `url(${blog?.bgSrc})`,
          }}
        ></div>
        <section className="flex mt-[12px] border-b border-black border-dashed">
          <div className="w-[25%] flex flex-col">
            <span>{blog?.writer}</span>
            <span>{formattedDate}</span>
          </div>
          <div className="w-[75%] flex flex-col">
          <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
              Initiating_Transmission: Welcome, digital art enthusiasts and
              collectors of the extraordinary. As we revel in the aftermath of
              the latest FLUX NFT drop, our focus shifts to RedruM, an artist
              whose journey through the art world is as vivid and compelling as
              the strokes of red that define his work. With the recent reveal
              still resonating among our community, we take a closer look at the
              path that has led RedruM to become this month’s celebrated artist
              in the FLUX series—a testament to the transformative power of art
              and the relentless pursuit of one’s true calling.
            </p>
            <section className="w-full flex mt-[24px]">
              <div className="w-1/2 h-full">
                <h1 className="text-[1.4em] normalFont tracking-tighter mt-[12px]">
                  A COLLECTOR’S LEGACY TRANSFORMED INTO CREATION
                </h1>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  RedruM’s odyssey in the NFT space blossomed from a lifelong
                  passion for art, nurtured among exhibitions and art galleries,
                  a heritage from his family of collectors. His life, once
                  directed by the currents of a legal career, found its true
                  north in the realm of digital art—a world he was introduced to
                  by friends, a world that captivated his imagination and
                  spurred him to explore artistic creations from across the
                  globe. The pivotal release of “MJ” in June 2022 marked a
                  renaissance of his creative spirit, compelling him to leave
                  behind his legal advocacy to forge a new path as a full-time
                  artist.
                </p>
                <h1 className="text-[1.4em] normalFont tracking-tighter mt-[12px]">
                  THE AWAKENING
                </h1>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  The advent of AI in the art scene ignited a dormant flame
                  within RedruM. The digital canvas, with its algorithmic
                  potential, became the crucible for his artistic rebirth. This
                  synergy between man and machine was not just a tool but a
                  partnership that allowed him to materialize visions that once
                  danced elusively in the corners of his mind. <br />
                  <br /> The enthusiasm garnered by his unique artistic vision
                  was the catalyst for this profound career shift, affirming his
                  decision to embrace the artist’s life fully.
                </p>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  The advent of AI in the art scene ignited a dormant flame
                  within RedruM. The digital canvas, with its algorithmic
                  potential, became the crucible for his artistic rebirth. This
                  synergy between man and machine was not just a tool but a
                  partnership that allowed him to materialize visions that once
                  danced elusively in the corners of his mind. <br />
                  <br /> The enthusiasm garnered by his unique artistic vision
                  was the catalyst for this profound career shift, affirming his
                  decision to embrace the artist’s life fully.
                </p>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  The advent of AI in the art scene ignited a dormant flame
                  within RedruM. The digital canvas, with its algorithmic
                  potential, became the crucible for his artistic rebirth. This
                  synergy between man and machine was not just a tool but a
                  partnership that allowed him to materialize visions that once
                  danced elusively in the corners of his mind.
                </p>
              </div>
              <div className="w-1/2 flex flex-row-reverse">
                <div
                  className="w-[450px] max-h-[700px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://lvcidia.xyz/uploads/2023/11/RedruM-body-4-1000x0-c-default.jpg)`,
                  }}
                ></div>
              </div>
            </section>
            <section className="w-full flex mt-[100px]">
              <div className="w-1/2 h-full">
                <h1 className="text-[1.4em] normalFont tracking-tighter mt-[12px]">
                  ARTISTIC PHILOSOPHY
                </h1>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  RedruM’s artistry is a dance of contrasts, where the grotesque
                  waltzes with the beautiful, and the dystopian lies in the
                  embrace of hope. Through lenses tinted with the deepest shades
                  of red, he filters and exaggerates the world’s concepts,
                  creating a realm where stories serve as poignant lessons of
                  everyday life. The monstrous becomes magnetic, fear
                  intertwines with hope, and the color red binds the chaos into
                  stylistic harmony.
                </p>
                <h1 className="text-[1.4em] normalFont tracking-tighter mt-[12px]">
                  FLUX
                </h1>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  As the next artist to be spotlighted in the FLUX NFT project,
                  RedruM stands poised to unveil a piece that encapsulates his
                  unique vision. While the details of the artwork remain
                  shrouded in anticipation, the ethos of FLUX resonates deeply
                  with RedruM’s philosophy of evolution and transformation. His
                  contribution, embodying the spirit of artistic freedom, is
                  eagerly awaited by the community.
                </p>
                <br />
                <br />
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  As the next artist to be spotlighted in the FLUX NFT project,
                  RedruM stands poised to unveil a piece that encapsulates his
                  unique vision. While the details of the artwork remain
                  shrouded in anticipation, the ethos of FLUX resonates deeply
                  with RedruM’s philosophy of evolution and transformation. His
                  contribution, embodying the spirit of artistic freedom, is
                  eagerly awaited by the community.
                </p>
                <p className="text-[1.1em] normalFont tracking-tighter mt-[12px] pr-[12px]">
                  It’s a testament to his journey and an invitation for
                  collectors to engage with a piece that promises to be as
                  dynamic and evolving as the artist himself.
                </p>
              </div>
              <div className="w-1/2 flex flex-row-reverse">
                <div
                  className="w-[450px] max-h-[700px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://lvcidia.xyz/uploads/2023/11/RedruM-body-3-1000x0-c-default.jpg)`,
                  }}
                ></div>
              </div>
            </section>
            <section
              className="w-full h-[320px] flex mt-[100px] mb-[24px] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://lvcidia.xyz/uploads/2023/11/RedruM-full-width-1800x0-c-default.jpg)`,
              }}
            ></section>
            <p className="text-[1.1em] normalFont tracking-tighter mb-[100px] pr-[12px]">
              Initiating_Transmission: Welcome, digital art enthusiasts and
              collectors of the extraordinary. As we revel in the aftermath of
              the latest FLUX NFT drop, our focus shifts to RedruM, an artist
              whose journey through the art world is as vivid and compelling as
              the strokes of red that define his work. With the recent reveal
              still resonating among our community, we take a closer look at the
              path that has led RedruM to become this month’s celebrated artist
              in the FLUX series—a testament to the transformative power of art
              and the relentless pursuit of one’s true calling.
            </p>
          </div>
        </section>
      </div>
      <Text/>
      <CardContainer />
    </>
  );
};

export default BlogPage;


const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[100px]">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px] normalFont">
          _ /&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px] normalFont">
          More articles
        </span>
      </div>
    </section>
  );
};
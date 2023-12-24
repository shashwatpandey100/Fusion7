"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import SmoothScroll from "../../components/smoothScroll.js";
import { CardContainer } from "@/app/components/blog";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";
import { PortableText } from "@portabletext/react";
import { RichText } from "./RichText.jsx";

const BlogPage = ({ params }) => {
  const query = groq`*[_type == 'post' && slug.current == '${params?.slug}']{
    ...,
    author->,
      categories[]->,
  } | order(_createdAt desc)`;

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        console.log(queryResult);
        setBlog(queryResult[0]);
        console.log(urlFor(queryResult?.mainImage).url());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
      <BlogPageContent blog={blog} />
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

const BlogPageContent = ({ blog }) => {
  const formattedDate = new Date(blog?.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <>
      <div className="w-[100vw] flex flex-col px-[24px] justify-center">
        <div className="h-[30vh] w-full flex items-center justify-center text-center uppercase text-[4em] font-[600]">
          {blog?.title}
        </div>
        <div className="h-[5vh] w-full flex items-center justify-center relative roboticFont text-[13px]">
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
          className="h-[80vh] w-full bg-cover bg-center bg-black"
          style={{
            backgroundImage: blog?.mainImage ? `url(${urlFor(blog.mainImage).url()})` : 'none'
          }}
        ></div>
        <section className="flex mt-[12px] border-b border-black border-dashed">
          <div className="w-[25%] flex flex-col roboticFont text-[13px]">
            <span>{blog?.author?.name}</span>
            <span>{formattedDate}</span>
          </div>
          <div className="w-[75%] flex flex-col readFont">
            <PortableText value={blog?.body} components={RichText} />
          </div>
        </section>
      </div>
      <Text />
      <CardContainer />
    </>
  );
};

export default BlogPage;

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[100px] readFont">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px]">
          _ /&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px]">
          More articles
        </span>
      </div>
    </section>
  );
};

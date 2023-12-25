"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Card } from "../components/blog";
import { CardSkeleton } from "../components/blog";
import SmoothScroll from "../components/smoothScroll.js";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->,
} | order(_createdAt desc)`

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
    </SmoothScroll>
  );
};

export default Blogs;

const BlogContent = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setLoading(false);
        setBlogs(queryResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Text />
    <div className="w-[100vw] min-h-[70vh] flex flex-wrap gap-[24px] px-[12px] justify-center bg-white">
    {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        blogs.map((blog) => (
          <Card blog={blog} key={blog.$id} />
        ))
      )}
    </div>
    </>
  );
};

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between mt-[48px] px-[24px] py-[24px] md:pb-[24px] readFont">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px] normalFont">
          _ /&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px] normalFont">
          Editor's Pick
        </span>
      </div>
    </section>
  );
};


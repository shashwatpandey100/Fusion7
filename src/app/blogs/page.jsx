"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Card } from "../components/blog";
import { Client, Databases, Query } from "appwrite";
import SmoothScroll from "../components/smoothScroll.js";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655e3eee8059e4984924");

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

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "658082e3788180610c6b",
      "658082f8677d5ec3e40a",
    );

    promise.then(function (response) {
      setBlogs(response.documents);
    });
  }, []);

  return (
    <>
    <Text />
    <div className="w-[100vw] flex flex-wrap gap-[24px] px-[12px] justify-center">
      {blogs.map((blog) => {
        return <Card blog={blog} key={blog.$id} />;
      })}
      {blogs.map((blog) => {
        return <Card blog={blog} key={blog.$id} />;
      })}
    </div>
    </>
  );
};

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
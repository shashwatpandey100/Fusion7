"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { Client, Databases, Query } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655e3eee8059e4984924");

const BlogPage = ({params}) => {

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
      <BlogPageContent slug={params.slug}/>
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

const BlogPageContent = ({slug}) => {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "658082e3788180610c6b",
      "658082f8677d5ec3e40a",
      [
        Query.equal("slug", slug),
      ]
    );

    promise.then(function (response) {
      setBlog(response.documents[0]);
    });
  }, []);

  return (
    <>
    <div className="w-[100vw] h-[80vh] flex flex-wrap gap-[24px] px-[12px] justify-center">
      {blog.content}
    </div>
    </>
  );
};

export default BlogPage
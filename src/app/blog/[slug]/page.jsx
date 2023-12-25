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
      <BlogPageContent slug={params?.slug} />
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
  const query = groq`*[_type == 'post' && slug.current == '${slug}']{
    ...,
    author->,
      categories[]->,
  } | order(_createdAt desc)`;

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setBlog(queryResult[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
      {loading ? (
        <Skeleton />
      ) : (
        <div className="w-[100vw] flex flex-col px-[24px] justify-center pb-[100px]">
          <div className="mt-[50px] h-[5vh] w-full flex items-center justify-center relative roboticFont text-[13px]">
            <a
              href="/blogs"
              className="absolute left-0 underline flex items-center gap-[3px] hover:bg-black hover:text-white"
            >
              <IoIosArrowRoundBack />
              back to blogs
            </a>
          </div>
          <div className="w-full flex items-center text-center uppercase text-[3em] font-[600] mb-[6px]">
            {blog?.title}
          </div>
          <div
            className="h-[65vh] w-full bg-cover bg-center bg-black"
            style={{
              backgroundImage: blog?.mainImage
                ? `url(${urlFor(blog.mainImage).url()})`
                : "none",
            }}
          ></div>
          <section className="flex mt-[48px] max-h-max">
            <div className="w-[25%] flex flex-col gap-[6px] roboticFont text-[13px]">
              <div className="w-full max-h-max flex gap-[6px]">
                <span
                  className="text-[14px] h-[35px] w-[35px] rounded-[2px] bg-cover bg-center"
                  style={{
                    backgroundImage: blog?.mainImage
                      ? `url(${urlFor(blog?.author?.image).url()})`
                      : "none",
                  }}
                ></span>
                <span className="text-[14px] h-full max-w-max flex flex-col items-center justify-center">
                  {blog?.author?.name}
                </span>
              </div>
              <div className="w-full max-h-max flex gap-[6px]">
                <span className="text-[14px] h-full max-w-max flex flex-col items-center justify-center">
                  Published
                </span>
                <span className="text-[12px] h-full max-w-max flex flex-col items-center justify-center pb-[5px]">
                  .
                </span>
                <span className="text-[12px] h-full max-w-max flex flex-col items-center justify-center">
                  {formattedDate}
                </span>
              </div>
              <div className="flex w-full">
                <div className="flex gap-[5px]">
                  {blog?.tags &&
                    blog?.tags.map((item, index) => (
                      <span
                        key={index}
                        className="text-[10px] uppercase rounded-[2px] px-[15px] h-[35px] border border-[rgba(0,0,0,0.25)] flex items-center justify-center bg-white hover:bg-[rgba(0,0,0,0.05)] transition-all duration-500 text-black"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="max-w-[900px] flex flex-col readFont blogContent">
              <PortableText value={blog?.body} components={RichText} />
            </div>
          </section>
        </div>
      )}
      <Text />
      <CardContainer />
    </>
  );
};

export default BlogPage;

const Skeleton = () => {
  return (
    <div className="w-[100vw] flex flex-col px-[24px] justify-center pb-[100px]">
      <div className="mt-[50px] h-[5vh] w-full flex items-center justify-center relative roboticFont text-[13px]">
        <span className="absolute left-0 w-[140px] h-[20px] bg-gray-300 animate-pulse"></span>
      </div>
      <div className="w-[50%] h-[72px] w-[50%] mb-[6px] bg-gray-300 animate-pulse"></div>
      <div className="h-[65vh] w-full bg-gray-300 animate-pulse"></div>
      <section className="flex mt-[48px] max-h-max">
        <div className="w-[25%] flex flex-col gap-[6px] roboticFont text-[13px]">
          <div className="w-full max-h-max flex gap-[6px]">
            <span className="h-[35px] w-[35px] rounded-[2px] bg-gray-300 animate-pulse"></span>
            <span className="h-[35px] min-w-[140px] bg-gray-300 animate-pulse"></span>
          </div>
          <div className="w-full max-h-max flex gap-[6px]">
            <span className="h-[35px] min-w-[140px] bg-gray-300 animate-pulse"></span>
            <span className="h-[35px] min-w-[140px] bg-gray-300 animate-pulse"></span>
          </div>
          <div className="flex w-full">
            <div className="flex gap-[5px]">
              <span className="rounded-[2px] px-[15px] h-[35px] min-w-[100px] bg-gray-300 animate-pulse"></span>
              <span className="rounded-[2px] px-[15px] h-[35px] min-w-[150px] bg-gray-300 animate-pulse"></span>
            </div>
          </div>
        </div>
        <div className="w-[75%] flex flex-col readFont blogContent gap-[5px]">
          <span className="w-full h-[30px] bg-gray-300 animate-pulse"></span>
          <span className="w-[75%] h-[30px] bg-gray-300 animate-pulse"></span>
          <span className="w-[85%] h-[30px] bg-gray-300 animate-pulse"></span>
          <span className="w-[30%] h-[30px] bg-gray-300 animate-pulse"></span>
        </div>
      </section>
    </div>
  );
};

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[48px] readFont">
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

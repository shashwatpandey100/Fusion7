import React, { useState, useEffect } from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->,
} | order(_createdAt desc)`;

const Blog = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-col gap-[12px] bg-white mt-[24px] md:mt-[100px] readFont">
      <Text />
      <CardContainer />
    </section>
  );
};

export default Blog;

const CardContainer = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setLoading(false);
        setBlogs(queryResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-[24px] px-[12px] justify-center md:items-center bg-white">
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
  );
};

export { CardContainer };

const Card = ({ blog }) => {
  const formattedDate = new Date(blog?.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="w-[100%] md:w-[calc(50%-24px)] m-[0px] max-h-max min-h-[50vh] relative z-[1] flex flex-col roboticFont">
      <a href={`/blog/${blog?.slug?.current}`} target="_blank">
        <div
          className="h-[50vh] w-full bg-cover bg-center"
          style={{
            backgroundImage: blog?.mainImage ? `url(${urlFor(blog.mainImage).url()})` : 'none'
          }}
        ></div>
      </a>
      <div className="h-[200px] w-full flex flex-col">
        <div className="w-full max-h-max flex py-[12px] gap-[6px]">
          <span
            className="text-[14px] h-[35px] w-[35px] rounded-[2px] bg-cover bg-center"
            style={{
              backgroundImage: blog?.mainImage ? `url(${urlFor(blog?.author?.image).url()})`  : 'none',
            }}
          ></span>
          <span className="text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {blog?.author?.name}
          </span>
          <span className="text-[14px] h-full max-w-max flex flex-col items-center justify-center pb-[5px]">
            .
          </span>
          <span className="text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {formattedDate}
          </span>
        </div>
        <span className="text-[12px] mt-[6px] mb-[12px] uppercase">
          {blog?.title}
        </span>
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
    </div>
  );
};

export { Card };

const CardSkeleton = () => {
  return (
    <div className="w-[100%] md:w-[calc(50%-24px)] m-[0px] max-h-max min-h-[50vh] relative z-[1] flex flex-col">
      <div className="h-[50vh] w-full bg-gray-300 animate-pulse"></div>
      <div className="h-[200px] w-full flex flex-col">
        <div className="w-full max-h-max flex py-[12px] gap-[6px]">
          <span className="text-[14px] h-[35px] w-[35px] rounded-[2px] bg-gray-300 animate-pulse"></span>
          <span className="text-[14px] h-full max-w-max bg-gray-300 animate-pulse"></span>
          <span className="text-[14px] h-full min-w-[140px] bg-gray-300 animate-pulse"></span>
        </div>
        <span className="text-[12px] mt-[6px] mb-[12px] bg-gray-300 animate-pulse"></span>
        <div className="flex w-full">
          <div className="flex gap-[5px]">
            <span className="text-[10px] rounded-[2px] px-[15px] h-[35px] min-w-[140px] bg-gray-300 animate-pulse"></span>
            <span className="text-[10px] rounded-[2px] px-[15px] h-[35px] min-w-[140px] bg-gray-300 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardSkeleton };

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[24px]">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px]">
          004/&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px]">
          Editor's Pick
        </span>
      </div>
      <Link
        href="/blogs"
        className="h-full uppercase text-black text-[13px] cursor-pointer hover:text-[#9204c1]"
      >
        (Read all)
      </Link>
    </section>
  );
};

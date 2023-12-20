import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Client, Databases, Query } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655e3eee8059e4984924");

const Blog = () => {
  return (
    <section className="w-[100vw] max-h-max flex flex-col gap-[12px] bg-white mt-[24px] md:mt-[100px]">
      <Text />
      <CardContainer />
    </section>
  );
};

export default Blog;

const CardContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "658082e3788180610c6b",
      "658082f8677d5ec3e40a",
      [
        Query.equal("isFeatured", true),
      ]
    );

    promise.then(function (response) {
      setBlogs(response.documents);
    });
  }, []);
  return (
    <div className="w-full flex flex-col md:flex-row gap-[24px] px-[12px] justify-center md:items-center">
        {blogs.map((blog) => {
          return <Card blog={blog} key={blog.$id} />;
        })}
      </div>
  )
}

export { CardContainer };

const Card = ({ blog }) => {

  const formattedDate = new Date(blog?.date).toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-[100%] md:w-[calc(50%-24px)] m-[0px] max-h-max min-h-[50vh] relative z-[1] flex flex-col">
      <Link href={`/blog/${blog?.slug}`} target="_blank"><div
        className="h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${blog?.bgSrc})` }}
      ></div></Link>
      <div className="h-[200px] w-full flex flex-col">
        <div className="w-full max-h-max flex py-[12px] gap-[6px]">
          <span
            className="normalFont text-[14px] h-[35px] w-[35px] rounded-[2px] bg-cover bg-center"
            style={{ backgroundImage: `url(${blog?.writerProfilePicture})` }}
          ></span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {blog?.writer}
          </span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center pb-[5px]">
            .
          </span>
          <span className="normalFont text-[14px] h-full max-w-max flex flex-col items-center justify-center">
            {formattedDate}
          </span>
        </div>
        <span className="normalFont text-[12px] mt-[6px] mb-[12px] uppercase">
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

const Text = () => {
  return (
    <section className="w-[100vw] max-h-max flex justify-between px-[24px] py-[24px] md:pb-[24px]">
      <div className="flex">
        <span className="h-full uppercase lightBlack text-[13px] normalFont">
          004/&nbsp;&nbsp;
        </span>
        <span className="h-full uppercase text-black text-[13px] normalFont">
          Editor's Pick
        </span>
      </div>
      <Link
        href="/blogs"
        className="h-full uppercase text-black text-[13px] normalFont cursor-pointer hover:text-[#9204c1]"
      >
        (Read all)
      </Link>
    </section>
  );
};

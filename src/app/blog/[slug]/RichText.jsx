import { urlFor } from "@/lib/createClient";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }) => {
      return (
        <div className="flex items-center justify-center">
          <img
            src={urlFor(value).url()}
            alt="Post image"
            width={900}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  number: ({ children }) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl py-5 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl py-5 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-5 font-bold">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-[13px] py-2 font-[300]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  // marks: {
  //   link: ({ children, value }) => {
  //     const rel = !value.href.startWith("/")
  //       ? "noreferrer noopener"
  //       : undefined;
  //     return (
  //       <Link href={value.href} rel={rel} className="underline">
  //         {children}
  //       </Link>
  //     );
  //   },
  // },
};
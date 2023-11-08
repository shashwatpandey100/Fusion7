import React, { useEffect, useState } from "react";
import Image from "next/image";

const numFrames = 60;

const ImgCanvas = () => {
  const [scrolled, setScrolled] = useState(1);
  const [imageArr, setImageArr] = useState(null);

  const screenHeight = window.innerHeight;

  const arr = [];
  const set = function () {
    for (let i = 1; i <= numFrames; i++) {
      arr.push(i);
    }
    setImageArr(arr);
  };
  useEffect(() => {
    set();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    if (window.scrollY < 1420) {
      const scrollLen = Math.floor(window.scrollY / 23);
      setScrolled(scrollLen);
      console.log(scrollLen);
    } else if (window.scrollY >= 1420) {
      setScrolled(numFrames);
    }
  };

  return (
    <div className="w-[100vw] h-[150vh] flex justify-center bg-black">
      {imageArr &&
        imageArr.map((x) => {
          return (
            <Image
              key={x}
              style={{
                width: "50px",
                opacity: 0,
              }}
              width={815}
              height={815}
              src={`https://res.cloudinary.com/dw0bwetr1/image/upload/v1698675057/${x
                .toString()
                .padStart(4, "0")}.png`}
              alt=""
              className="hidden"
            />
          );
        })}
      {imageArr && (
        <Image
          alt="bg-image"
          className="max-h-[815px] sticky top-0"
          width={815}
          height={815}
          src={`https://res.cloudinary.com/dw0bwetr1/image/upload/v1698675057/${scrolled
            .toString()
            .padStart(4, "0")}.png`}
            onError={() => {
              setScrolled(numFrames - 1);
            }}
        />
      )}
    </div>
  );
};

export default ImgCanvas;

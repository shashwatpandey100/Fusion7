import { IoIosFastforward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const intervalDuration = duration / steps;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + Math.floor(Math.random() * 10) + 1;
        if (newCounter >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return newCounter;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      {...(isReady ? { animate: { opacity: "0" } } : {})}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`h-[100vh] w-[100vw] fixed top-0 left-0 z-[100] bg-white flex flex-col items-center justify-center ${
        isReady && "hidden"
      }`}
    >
      <div className="w-[90vw] md:w-[40vw] h-[1px] bg-[rgba(0,0,0,0.3)] relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-black transition-all duration-[500]`}
          style={{ width: `${counter}%` }}
        ></div>
      </div>
      <div className="w-[90vw] md:w-[40vw] mt-[5px] flex justify-between roboticFont">
        <span className="uppercase text-[10px] flex items-center">
          <IoIosFastforward /> &nbsp; loading &nbsp; {counter}%
        </span>
        <span className="uppercase text-[10px] flex items-center">
          {counter === 100 ? "ready" : "https://fusion7.agency/com"}
        </span>
      </div>
    </motion.section>
  );
};

export default Preloader;

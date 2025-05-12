import { motion } from "framer-motion";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="w-full h-screen bg-zinc-900 pt-1 mb-0"
    >
      <div className="textstructure text-white mt-24 sm:mt-52 px-6 sm:px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      ease: [0.37, 0, 0.63, 1],
                      duration: 1,
                    }}
                    className="mr-5 w-[8vw] sm:w-[12vw] h-[5.7] sm:h-[8] -top-[1.2vh] text-5xl sm:text-6xl px-2 py-2 pr-2 pl-2 rounded-xl font-semibold relative bg-green-500"
                  >
                    ochi
                  </motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] leading-[6vw] sm:leading-[5vw] md:leading-[4vw] lg:leading-[3vw] tracking-tighter font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 text-white mt-16 sm:mt-32 flex flex-col sm:flex-row justify-between py-5 px-6 sm:px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md sm:text-lg font-semibold tracking-tight leading-none mb-4 sm:mb-0"
          >
            {item}
          </p>
        ))}
        <div className="start flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-4 sm:mt-0">
          <div className="px-5 py-2 border-[1px] border-zinc-600 rounded-full uppercase font-semibold text-sm sm:text-base cursor-pointer">
            Start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-600 rounded-full flex justify-center items-center">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

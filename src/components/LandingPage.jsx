import { motion } from "framer-motion";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed= "-.7" className="w-full h-screen bg-zinc-900 pt-1 mb-0">
      <div className="textstructure text-white mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.37, 0, 0.63, 1],duration:1}} className="mr-5 w-[8vw] ronded-md h-[5.7] -top-[1.2vh] text-5xl px-2 py-2 pr-2 pl-2 rounded-xl font-semibold relative bg-green-500">ochi</motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 text-white mt-32 flex justify-between py-5 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-semibold tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex item-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-600 rounded-full uppercase font-semibold text-sm">
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

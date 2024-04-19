import React from "react";

function About() {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-5xl">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#9aa574]">
        <div className="w-1/2 ">
          <h1 className="text-5xl ">Our approach:</h1>
          <button className="flex gap-10 items-center px-6 py-4 mt-10 bg-zinc-900 text-white rounded-full ">READ MORE
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#535f27] rounded-3xl"> <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" /> </div>
      </div>
    </div>
  );
}

export default About;

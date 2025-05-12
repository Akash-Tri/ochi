import React from "react";

function About() {
  return (
    <div className="w-full py-16 px-6 md:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl leading-snug">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      {/* Content Row */}
      <div className="w-full flex flex-col md:flex-row gap-10 border-t pt-10 mt-16 border-[#9aa574]">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl">Our approach:</h1>
          <button className="flex gap-4 items-center px-6 py-4 mt-8 bg-zinc-900 text-white rounded-full text-sm md:text-base">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 h-auto max-h-[400px] rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;


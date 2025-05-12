import React from 'react';

function Cards() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-5 items-center px-6 md:px-14 py-10">
      
      {/* Left Card */}
      <div className="cardcontainer w-full md:w-1/2 h-[50vh] md:h-[60vh]">
        <div className="card relative rounded-2xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute px-4 py-1 text-xs md:text-sm rounded-full left-5 md:left-10 bottom-5 md:bottom-10 border text-[#CDEA68]">
            &copy; 2019–2022
          </button>
        </div>
      </div>

      {/* Right Two Cards */}
      <div className="cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[100vh] md:h-[60vh]">
        
        {/* Top Right Card */}
        <div className="card relative rounded-2xl w-full md:w-1/2 h-1/2 md:h-full bg-[#192826] flex items-center justify-center">
          <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute px-4 py-1 text-xs md:text-sm rounded-full left-5 md:left-10 bottom-5 md:bottom-10 border text-white uppercase">
            Rating 5.0 on Clutch
          </button>
        </div>

        {/* Bottom Right Card */}
        <div className="card relative rounded-2xl w-full md:w-1/2 h-1/2 md:h-full bg-[#192826] flex items-center justify-center">
          <img className="w-24 md:w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute px-4 py-1 text-xs md:text-sm rounded-full left-5 md:left-10 bottom-5 md:bottom-10 border text-white uppercase">
            Business Bootcamp Alumni
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cards;

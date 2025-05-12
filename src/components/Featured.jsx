import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      {/* Header */}
      <div className="w-full px-6 md:px-20 border-b border-zinc-400 pb-12">
        <h1 className="text-3xl md:text-5xl tracking-tight">Featured projects</h1>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-20">
        <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 h-auto md:h-[80vh] p-4 md:p-10 bg-white rounded-xl shadow-md">
            <img
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="Project 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 h-auto md:h-[80vh] p-4 md:p-10 bg-white rounded-xl shadow-md">
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="Project 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";

function Featured() {
  return (
    <div className="w-full py-20 ">
      <div className=" w-full px-20 border-b-[1px] border-zinc-400 pb-12">
        <h1 className="text-5xl tracking-tight">Featured projects</h1>
      </div>

      <div className="px-20">
      <div className="cards w-full flex gap-10 mt-10">
        <div className="card w-1/2 h-[80vh] p-10">
          <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
        <div className="card w-1/2 h-[80vh] p-10">
          <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Featured;

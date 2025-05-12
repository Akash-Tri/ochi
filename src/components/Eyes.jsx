import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute w-full max-w-[90%] md:w-1/2 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 md:gap-10 justify-center items-center flex-wrap">
          
          {/* Eye 1 */}
          <div className="flex items-center justify-center w-[35vw] md:w-[15vw] aspect-square bg-white rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="flex items-center justify-center w-[35vw] md:w-[15vw] aspect-square bg-white rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;

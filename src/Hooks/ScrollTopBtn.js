import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useAuth } from "../contexts/GlobalProvider";

const ScrollTopBtn = () => {
  const { currentLocation } = useAuth();
  const [isScrolling, setIsScrolling] = useState(false);

  const btnVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const scrollBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", btnVisible);

  return (
    <div
      className={`hidden ${currentLocation === "Home" ? "hidden" : "lg:block"}`}
    >
      {isScrolling && (
        <div className="fixed bottom-7 right-5 z-[100]">
          <BsFillArrowUpCircleFill
            className="text-4xl font-semibold text-sky-400 cursor-pointer"
            onClick={scrollBtnClick}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollTopBtn;

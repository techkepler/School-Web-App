import React, { useState, useEffect } from "react";

import ViewResult from "./ViewResult";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { useAuth } from "../../../contexts/GlobalProvider";

const StuResult = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setIsLinkActive,
    setCurrentLocation,
  } = useAuth();
  const [isView, setIsView] = useState(true);

  useEffect(() => {
    setIsLinkActive("results");
    localStorage.setItem("whichLink", "results");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Student Result");
  }, [setCurrentLocation]);

  const isViewClick = () => {
    setIsView(true);
  };

  return (
    <>
      <StaffNav />

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Student Result
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Students</span>
          </p>
        </div>

        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Student</span>
              <span>/</span>
              <span>Result</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                isView && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewClick}
            >
              View Result
            </button>
          </div>
        </div>

        {isView && <ViewResult />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default StuResult;

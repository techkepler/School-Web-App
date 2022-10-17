import React, { useState, useEffect } from "react";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { useAuth } from "../../../contexts/GlobalProvider";
import ViewApplication from "./ViewApplication";

const Application = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();

  const [viewInfo, setViewInfo] = useState(true);

  useEffect(() => {
    setIsLinkActive("leave application");
    localStorage.setItem("whichLink", "leave application");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Application");
  }, [setCurrentLocation]);

  const isViewInfoClick = () => {
    setViewInfo(true);
  };

  return (
    <>
      <StaffNav />

      {/*  start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Leave Application
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Application</span>
            <span>/</span>
            <span>Form</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Leave</span>
              <span>/</span>
              <span>Form</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                viewInfo && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewInfoClick}
            >
              View Application
            </button>
          </div>
        </div>

        {viewInfo && <ViewApplication />}
      </section>

      {/*  end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Application;

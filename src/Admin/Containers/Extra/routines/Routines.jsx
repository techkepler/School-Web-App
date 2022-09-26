import React, { useState, useEffect } from "react";

import AddRoutines from "./AddRoutines";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import ViewRoutines from "./ViewRoutines";
import ExcelForm from "./Excel";

const Events = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();

  const [addInfo, setAddInfo] = useState(false);
  const [viewInfo, setViewInfo] = useState(true);
  const [excel, setExcel] = useState(false);

  useEffect(() => {
    setIsLinkActive("routine");
    localStorage.setItem("whichLink", "routine");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Routine");
  }, [setCurrentLocation]);

  const isAddInfoClick = () => {
    setAddInfo(true);
    setViewInfo(false);
    setExcel(false);
  };

  const isViewInfoClick = () => {
    setViewInfo(true);
    setAddInfo(false);
    setExcel(false);
  };

  const isExcelClick = () => {
    setExcel(true);
    setViewInfo(false);
    setAddInfo(false);
  };

  return (
    <>
      <AdminNav />

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Batsyayan Routine
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Info</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Exam</span>
              <span>/</span>
              <span>Routine</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                addInfo && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isAddInfoClick}
            >
              Add Routine
            </button>
            <button
              className={`${excel && "border-t-2 border-sky-500 text-sky-500"}`}
              onClick={isExcelClick}
            >
              Excel Routine
            </button>
            <button
              className={`${
                viewInfo && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewInfoClick}
            >
              View Routine
            </button>
          </div>
        </div>

        {addInfo && <AddRoutines />}
        {viewInfo && <ViewRoutines />}
        {excel && <ExcelForm />}
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Events;

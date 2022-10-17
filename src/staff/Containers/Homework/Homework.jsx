import React, { useState, useEffect } from "react";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import AddHomework from "./AddHomework";
import ViewHomeworks from "./ViewHomework";
import ColorSettings from "../../Components/nav/ColorSettings";

const Homework = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setIsLinkActive,
    setCurrentLocation,
  } = useAuth();

  const [isView, setIsView] = useState(true);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    setIsLinkActive("homework");
    localStorage.setItem("whichLink", "homework");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Student Homework");
  }, [setCurrentLocation]);

  const isViewClick = () => {
    setIsAdd(false);
    setIsView(true);
  };

  const isAddClick = () => {
    setIsAdd(true);
    setIsView(false);
  };

  return (
    <>
      <StaffNav />
      <section
        className={`teachers mt-2 px-2 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Student Homework
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
              <span>Homework</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${isAdd && "border-t-2 border-sky-500 text-sky-500"}`}
              onClick={isAddClick}
            >
              Add Homework
            </button>
            <button
              className={`${
                isView && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewClick}
            >
              View Homework
            </button>
          </div>
        </div>

        {isAdd && <AddHomework isViewClick={isViewClick} />}
        {isView && <ViewHomeworks />}
        <ColorSettings />
        <Footer />
      </section>
    </>
  );
};

export default Homework;

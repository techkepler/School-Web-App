import React, { useState, useEffect } from "react";

import AddNews from "./AddNews";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import ViewNews from "./ViewNews";

const News = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();
  const [addInfo, setAddInfo] = useState(false);
  const [viewInfo, setViewInfo] = useState(true);

  useEffect(() => {
    setIsLinkActive("news");
    localStorage.setItem("whichLink", "news");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("News");
  }, [setCurrentLocation]);

  const isAddInfoClick = () => {
    setAddInfo(true);
    setViewInfo(false);
  };

  const isViewInfoClick = () => {
    setViewInfo(true);
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
            Batsyayan News
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>News</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Information</span>
              <span>/</span>
              <span>News</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                addInfo && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isAddInfoClick}
            >
              Add News
            </button>

            <button
              className={`${
                viewInfo && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewInfoClick}
            >
              View News
            </button>
          </div>
        </div>

        {addInfo && <AddNews isViewInfoClick={isViewInfoClick} />}
        {viewInfo && <ViewNews />}
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default News;

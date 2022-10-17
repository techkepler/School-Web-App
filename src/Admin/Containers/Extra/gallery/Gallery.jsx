import React, { useState, useEffect } from "react";

import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import AddImg from "./AddImg";
import ViewImage from "./ViewImg";

const Library = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();

  const [addImage, setAddImage] = useState(false);
  const [viewImg, setViewImg] = useState(true);

  useEffect(() => {
    setIsLinkActive("gallery");
    localStorage.setItem("whichLink", "gallery");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Gallery");
  }, [setCurrentLocation]);

  const isAddImageClick = () => {
    setAddImage(true);
    setViewImg(false);
  };
  const isViewImgClick = () => {
    setAddImage(false);
    setViewImg(true);
  };
  return (
    <>
      <AdminNav />

      {/* addImgae start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Batsyayan Gallery
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Gallery</span>
          </p>
        </div>

        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Info</span>
              <span>/</span>
              <span>Gallery</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                addImage && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isAddImageClick}
            >
              Add Image
            </button>

            <button
              className={`${
                viewImg && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewImgClick}
            >
              View Image
            </button>
          </div>
        </div>

        {addImage && <AddImg />}
        {viewImg && <ViewImage />}
      </section>

      {/* addImgae end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Library;

import React, { useState, useEffect } from "react";

import AddAnnouncement from "./AddAnnoucement";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import ViewAnnouncment from "./ViewAnnouncement";

const Annoucement = () => {
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
    setIsLinkActive("announcement");
    localStorage.setItem("whichLink", "announcement");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Announcement");
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
            Batsyayan Announcement
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Announcements</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>InaddInfoation</span>
              <span>/</span>
              <span>Annoucement</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                addInfo && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isAddInfoClick}
            >
              Add Announcement
            </button>

            <button
              className={`${
                viewInfo && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewInfoClick}
            >
              View Announcement
            </button>
          </div>
        </div>

        {addInfo && <AddAnnouncement isViewInfoClick={isViewInfoClick} />}
        {viewInfo && <ViewAnnouncment />}
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Annoucement;

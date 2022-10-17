import React, { useEffect } from "react";

import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import ViewInquiry from "./ViewInquiry";

const Inquiry = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();

  useEffect(() => {
    setIsLinkActive("inquiry");
    localStorage.setItem("whichLink", "inquiry");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Inquiry");
  }, [setCurrentLocation]);

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
            Batsyayan Inquiry
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Admission</span>
            <span>/</span>
            <span>Inquiry</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>

        <ViewInquiry />
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Inquiry;

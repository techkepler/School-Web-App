import React from "react";

import StudentChart from "../../../../Chart/StudentChart";
import FeeCollectionChart from "../../../../Chart/FeeCollectionChart";
import StuRatioChart from "../../../../Chart/StuRatioChart";
import ParentPdfBtn from "./pdfBtn";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const ParentPdf = () => {
  const { isSideBar, isColorBar, themeColor } = useAuth();

  return (
    <>
      <AdminNav />
      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <h2
          className="text-center text-xl md:text-2xl font-semibold mt-10 mb-14 text-slate-700 dark:text-slate-300 "
          style={{ color: themeColor }}
        >
          Batsyayan Generate Parent PDF
        </h2>
        <div className="flex items-center justify-center flex-col ">
          <ParentPdfBtn />

          <StudentChart title={"Parent"} />
          <FeeCollectionChart title={"Student Payment Report"} />
          <StuRatioChart title={"Student"} />
        </div>
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default ParentPdf;

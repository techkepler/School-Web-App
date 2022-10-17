import React, { useState, useEffect } from "react";

import ViewResult from "./ViewResult";
import AddResult from "./AddResult";
import ExcelResult from "./ExcelResult";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const StuResult = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [addResult, setAddResult] = useState(false);
  const [isExcelForm, setIsExcelForm] = useState(false);
  const [isView, setIsView] = useState(true);

  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosAdmin.get("teachers/crud/teachers/public");
      setTeacherData(res.data);
    };
    fetchTeacher();
  }, []);

  const isAddResult = () => {
    setAddResult(true);
    setIsView(false);
    setIsExcelForm(false);
  };

  const isExcelFormClick = () => {
    setIsExcelForm(true);
    setAddResult(false);
    setIsView(false);
  };

  const isViewClick = () => {
    setIsView(true);
    setAddResult(false);
    setIsExcelForm(false);
  };

  return (
    <>
      <AdminNav />

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
                addResult && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isAddResult}
            >
              Add Result
            </button>

            <button
              className={`${
                isExcelForm && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isExcelFormClick}
            >
              Excel Result
            </button>

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

        {addResult && <AddResult teacherData={teacherData} />}
        {isExcelForm && <ExcelResult />}
        {isView && <ViewResult />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default StuResult;

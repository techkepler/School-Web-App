import React, { useState } from "react";

import StuPdf from "./StuPdf";
import StuAttendPdf from "./StuAttend";
import StuFeePdf from "./StuFee";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const StudentPdf = () => {
  const { isSideBar, isColorBar, themeColor } = useAuth();
  const [student, setStudent] = useState(true);
  const [attendance, setAttendance] = useState(false);
  const [fee, setFee] = useState(false);

  const isStudentClick = () => {
    setStudent(true);
    setAttendance(false);

    setFee(false);
  };

  const isFeeClick = () => {
    setStudent(false);
    setAttendance(false);

    setFee(true);
  };
  const isAttendanceClick = () => {
    setStudent(false);
    setAttendance(true);

    setFee(false);
  };

  return (
    <>
      <AdminNav />

      <section
        className={`students mt-2 px-3 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Student PDF
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
              <span>PDF</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-8">
            <button
              className={`${
                student && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isStudentClick}
            >
              Student PDF
            </button>

            <button
              className={`${
                attendance && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isAttendanceClick}
            >
              Attendance PDF
            </button>

            <button
              className={`${fee && "border-t-2 border-sky-500 text-sky-500"}`}
              onClick={isFeeClick}
            >
              Fee PDF
            </button>
          </div>
        </div>

        {student && <StuPdf />}
        {attendance && <StuAttendPdf />}
        {fee && <StuFeePdf />}
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default StudentPdf;

import React, { useState, useEffect } from "react";
import Absent from "./Absent";
import ViewTeacherAttendance from "./ViewAttendance";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const StudentAttendance = () => {
  const { themeColor, isSideBar, isColorBar, setIsLinkActive } = useAuth();
  const [studentData, setStudentData] = useState([]);
  const [isAbsent, setIsAbsent] = useState(true);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    setIsLinkActive("attendance");
    localStorage.setItem("whichLink", "attendance");
  }, [setIsLinkActive]);

  useEffect(() => {
    const fetchStudent = async () => {
      let res = await axiosAdmin.get("students/crud/students/public");
      setStudentData(res.data);
    };
    fetchStudent();
  }, []);

  const isAbsentClick = () => {
    setIsAbsent(true);
    setIsView(false);
  };

  const isViewClick = () => {
    setIsView(true);
    setIsAbsent(false);
  };

  return (
    <>
      <StaffNav />

      <section
        className={`students mt-2 px-3 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Student Attendance
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
              <span>Attendance</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-8">
            <button
              className={`${
                isAbsent && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isAbsentClick}
            >
              Absent
            </button>

            <button
              className={`${
                isView && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewClick}
            >
              View
            </button>
          </div>
        </div>

        {isAbsent && <Absent studentData={studentData} />}
        {isView && <ViewTeacherAttendance />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default StudentAttendance;

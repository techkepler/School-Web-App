import React, { useState, useEffect } from "react";
import UpdateAttendance from "./UpdateAttend";
import Absent from "./Absent";
import RegisterAttendnace from "./Register";
import ExcelForm from "./Excel";
import ViewTeacherAttendance from "./ViewAttendance";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const StaffAttendance = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const [isAbsent, setIsAbsent] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [isExcelForm, setIsExcelForm] = useState(false);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get("staffs/crud/staffs/public");
      setData(res.data);
    };
    fetchData();
  }, []);

  const isUpdateClick = () => {
    setIsUpdate(true);
    setIsForm(false);
    setIsExcelForm(false);
    setIsView(false);
    setIsAbsent(false);
  };

  const isAbsentClick = () => {
    setIsAbsent(true);
    setIsUpdate(false);
    setIsForm(false);
    setIsExcelForm(false);
    setIsView(false);
  };

  const isRegisterClick = () => {
    setIsForm(true);
    setIsUpdate(false);
    setIsExcelForm(false);
    setIsView(false);
    setIsAbsent(false);
  };

  const isExcelFormClick = () => {
    setIsExcelForm(true);
    setIsUpdate(false);
    setIsForm(false);
    setIsView(false);
    setIsAbsent(false);
  };

  const isViewClick = () => {
    setIsView(true);
    setIsExcelForm(false);
    setIsUpdate(false);
    setIsForm(false);
    setIsAbsent(false);
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
            Staff Attendance
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Staff</span>
          </p>
        </div>

        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Staffs</span>
              <span>/</span>
              <span>Attendance</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-8">
            <button
              className={`${
                isUpdate && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isUpdateClick}
            >
              Update
            </button>

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
                isForm && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isRegisterClick}
            >
              Register
            </button>

            <button
              className={`${
                isExcelForm && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isExcelFormClick}
            >
              Excel
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

        {isUpdate && <UpdateAttendance />}
        {isAbsent && <Absent data={data} />}
        {isForm && <RegisterAttendnace data={data} />}
        {isExcelForm && <ExcelForm />}
        {isView && <ViewTeacherAttendance />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default StaffAttendance;

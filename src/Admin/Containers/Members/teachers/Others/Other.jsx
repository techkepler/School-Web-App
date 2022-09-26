import React, { useState } from "react";
import moment from "moment";
import { BiReset } from "react-icons/bi";

import StudentChart from "../../../../Chart/StudentChart";
import FeeCollectionChart from "../../../../Chart/FeeCollectionChart";
import StuRatioChart from "../../../../Chart/StuRatioChart";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import ColorSettings from "../../../../Components/nav/ColorSettings";
import { axiosAdmin } from "../../../../../server/Axios";

const TeacherOther = () => {
  const { isSideBar, isColorBar, themeColor } = useAuth();
  const [resetSalary, setResetSalary] = useState(false);
  const [resetAttendance, setResetAttendance] = useState(false);
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const date = moment();
  const currentDate = date.format("YYYY-MM-D");

  const resetSalaryClick = async (e) => {
    e.preventDefault();
    setResetSalary(false);

    try {
      await axiosAdmin.post("teachers/salary/reset/", {
        date: currentDate,
      });
      setSucsMsg("Teacher Salary Reset Successfully.");

      setTimeout(() => {
        setSucsMsg("");
      }, 2000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No response from server.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.status === 500) {
        setErrMsg("Internal Server Error.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg(error.response.data.errors);
        setTimeout(() => {
          setErrMsg("");
        }, 4000);
      }
    }
  };

  const resetAttendanceClick = async (e) => {
    e.preventDefault();
    setResetAttendance(false);

    try {
      await axiosAdmin.post("teachers/attendance/reset/", {
        date: currentDate,
      });
      setSucsMsg("Teacher Attendance Reset Successfully.");

      setTimeout(() => {
        setSucsMsg("");
      }, 2000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No response from server.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.status === 500) {
        setErrMsg("Internal Server Error.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg(error.response.data.errors);
        setTimeout(() => {
          setErrMsg("");
        }, 4000);
      }
    }
  };

  const resetSalaryBtn = () => {
    setResetSalary(!resetSalary);
    setResetAttendance(false);
  };

  const resetAttendBtn = () => {
    setResetAttendance(!resetAttendance);
    setResetSalary(false);
  };

  return (
    <>
      <AdminNav />

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {/* Sucess Message */}

        {sucsMsg && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base  w-[90%]  md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
              {sucsMsg}
            </p>
          </div>
        )}

        {errMsg && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base  w-[90%]  md:w-[60%] top-0  py-2  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
              {errMsg}
            </p>
          </div>
        )}
        <h2
          className="text-center text-xl md:text-2xl font-medium my-10 text-slate-700 dark:text-slate-300"
          style={{ color: themeColor }}
        >
          Batsyayan Teacher Other Activities
        </h2>
        <div className="flex md:items-center justify-center flex-col ">
          <div className="flex flex-row  gap-4 md:gap-6">
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-full md:w-72"
              onClick={resetSalaryBtn}
            >
              <BiReset className="text-blue-500 dark:text-blue-400 text-4xl" />
              <p
                className="dark:text-slate-300 text-xs font-semibold capitalize"
                style={{ color: themeColor }}
              >
                Reset Salary
              </p>
            </button>
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-full md:w-72"
              onClick={resetAttendBtn}
            >
              <BiReset className="text-green-500 dark:text-green-400 text-4xl" />
              <p
                className="dark:text-slate-300 text-xs font-semibold capitalize"
                style={{ color: themeColor }}
              >
                Reset Attendance
              </p>
            </button>
          </div>

          <StudentChart title={"Teachers"} />
          <FeeCollectionChart title={"Teacher Payment Report"} />
          <StuRatioChart title={"Teachers"} />
        </div>
        {/* Confirm Modal */}

        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            resetSalary ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to reset teacher salary ? This process is
              irreversible.
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={resetSalaryClick}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setResetSalary(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>

        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            resetAttendance ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to reset teacher attendance? This process is
              irreversible.
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={resetAttendanceClick}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setResetAttendance(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default TeacherOther;

import React, { useState } from "react";
import moment from "moment";
import { BiReset } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import StudentChart from "../../../../Chart/StudentChart";
import FeeCollectionChart from "../../../../Chart/FeeCollectionChart";
import StuRatioChart from "../../../../Chart/StuRatioChart";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const StudentOther = () => {
  const { isSideBar, isColorBar, themeColor } = useAuth();
  const [resetFee, setResetFee] = useState(false);
  const [resetAttendance, setResetAttendance] = useState(false);
  const [delResult, setDelResult] = useState(false);
  const [updateStu, setUpdateStu] = useState(false);
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const date = moment();
  const currentDate = date.format("YYYY-MM-D");

  const resetFeeClick = async (e) => {
    e.preventDefault();
    setResetFee(false);

    try {
      await axiosAdmin.post("students/fee/reset/", {
        date: currentDate,
      });
      setSucsMsg("Student Fee Reset Successfully.");

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
      await axiosAdmin.post("students/attendance/reset/", {
        date: currentDate,
      });
      setSucsMsg("Students Attendance Reset Successfully.");

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

  const deleteResultClick = async (e) => {
    e.preventDefault();
    setDelResult(false);
    try {
      await axiosAdmin.delete("students/result/delete/");
      setSucsMsg("Students Result Deleted Successfully.");

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

  const updateStuClass = async (e) => {
    e.preventDefault();
    setUpdateStu(false);
    try {
      await axiosAdmin.post("students/update/class/", {
        date: currentDate,
      });
      setSucsMsg("Students Class Updated Successfully.");

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

  const resetFeeBtn = () => {
    setResetFee(!resetFee);
    setResetAttendance(false);
    setDelResult(false);
    setUpdateStu(false);
  };

  const resetAttendBtn = () => {
    setResetAttendance(!resetAttendance);
    setResetFee(false);
    setDelResult(false);
    setUpdateStu(false);
  };

  const delResultBtn = () => {
    setDelResult(!delResult);
    setResetAttendance(false);
    setResetFee(false);
    setUpdateStu(false);
  };

  const updateStuBtn = () => {
    setUpdateStu(!updateStu);
    setDelResult(false);
    setResetFee(false);
    setResetAttendance(false);
  };

  return (
    <>
      <AdminNav />

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0 py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
              {sucsMsg}
            </p>
          </div>
        )}

        {errMsg && (
          <div className="items-center w-full absolute  flex   md:justify-center ">
            <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] capitalize py-2 top-0  text-gray-900 bg-red-500 rounded-md fixed text-center z-40">
              {Object.entries(errMsg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}
        <h2
          className="text-center text-xl md:text-2xl font-semibold my-10 text-slate-700 dark:text-slate-300"
          style={{ color: themeColor }}
        >
          Asgard Student Other Activities
        </h2>
        <div className="flex md:items-center justify-center flex-col ">
          <div className="flex mb-10 flex-wrap flex-row  gap-3 md:gap-6">
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-48"
              onClick={resetFeeBtn}
            >
              <BiReset className="text-blue-500 dark:text-blue-400 text-4xl" />
              <p
                className="dark:text-slate-300 text-xs font-semibold capitalize"
                style={{ color: themeColor }}
              >
                Reset Fee
              </p>
            </button>
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4  w-[48%] md:w-48"
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
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4  w-[48%] md:w-48"
              onClick={delResultBtn}
            >
              <AiFillDelete className="text-red-500 dark:text-red-400 text-4xl" />
              <p
                className="dark:text-slate-300 text-xs font-semibold capitalize"
                style={{ color: themeColor }}
              >
                Delete Result
              </p>
            </button>
            <button
              className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4  w-[48%] md:w-48"
              onClick={updateStuBtn}
            >
              <BsArrowRepeat className="text-green-500 dark:text-green-400 text-4xl" />
              <p
                className="dark:text-slate-300 text-xs font-semibold capitalize"
                style={{ color: themeColor }}
              >
                Update Student Grade
              </p>
            </button>
          </div>

          <StudentChart title={"Student"} />
          <FeeCollectionChart title={"Student Payment Report"} />
          <StuRatioChart title={"Student"} />
        </div>
        {/* Confirm Modal */}

        {/* fee modal */}
        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            resetFee ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to reset students fee ? This process is
              irreversible.
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={resetFeeClick}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setResetFee(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>

        {/* attendance modal */}
        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            resetAttendance ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to reset students attendance ? This process
              is irreversible.
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

        {/* delete result */}
        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            delResult ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to delete students result ? This process is
              irreversible.
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={deleteResultClick}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setDelResult(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>

        {/* update student */}

        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            updateStu ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between text-slate-700">
            <p className="">
              Are you sure you want to update student class ? This process is
              irreversible.
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={updateStuClass}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setUpdateStu(false)}
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

export default StudentOther;

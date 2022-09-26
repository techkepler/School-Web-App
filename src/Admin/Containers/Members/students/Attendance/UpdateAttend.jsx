import React, { useState } from "react";
import moment from "moment";
import { axiosAdmin } from "../../../../../server/Axios";

const UpdateAttendance = () => {
  // const [date, setDate] = useState("");
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmitBtn = async (e) => {
    const date = moment();
    const currDate = date.format("YYYY-MM-D");
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("students/attendance/update/", {
        date: currDate,
      });
      setSucsMsg(res.status);

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

  return (
    <>
      {/* Response Msg */}
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute mx-2  flex  md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-3  text-slate-900 bg-green-500  rounded-md fixed text-center z-40">
            Student Attendance Updated Successfully.
          </p>
        </div>
      )}

      {errMsg && (
        <div className="items-center w-full absolute mx-2  flex md:justify-center">
          <p className="px-4 text-sm md:text-base  w-[90%] md:w-[60%] top-0  py-3  text-slate-900  bg-red-500  rounded-md fixed text-center z-40 capitalize">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Update Attendance
          </h1>
          {/* <div className="stu_id mt-12 mb-8 relative">
            <label
              htmlFor="stu_id"
              className="absolute left-4 px-1 block -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-2 px-2 w-full rounded-md "
            />
          </div>{" "} */}
          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              // disabled={!date}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* teacher search form end here */}
    </>
  );
};

export default UpdateAttendance;

import React, { useState } from "react";
import FilterDesgin from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";
import moment from "moment";

const RegisterAttendnace = (props) => {
  const { teacherData } = props;
  const [id, setId] = useState("");
  const [attend, setAttend] = useState("");
  const [absent, setAbsent] = useState("");
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [selectFilter, setSelectFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitBtn = async (e) => {
    const date = moment();
    const currentDate = date.format("YYYY-MM-D");
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("teachers/crud/attendance/", {
        id: id,
        attend_day: attend,
        absent_day: absent,
        total_day: Number(attend) + Number(absent),
        date: currentDate,
        name: "bishal",
      });
      setSucsMsg(res.status);
      setId("");
      setAttend("");
      setAbsent("");

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

  const filterData = () => {
    let fitlerTeachers = teacherData;
    if (searchQuery) {
      fitlerTeachers = teacherData.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return fitlerTeachers;
  };

  return (
    <>
      {/* Response Msg */}
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-2 md:px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-3  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Teacher Attendance Added Successfully.
          </p>
        </div>
      )}

      {errMsg && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-2 md:px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-3  text-slate-900  bg-red-500  rounded-md fixed text-center z-40 capitalize">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Add Teacher Attendance
          </h1>
          <div className="id mt-12 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Teacher Id
            </label>
            <input
              type="text"
              name="id"
              id="id"
              value={id}
              readOnly
              onClick={() => setSelectFilter(true)}
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Attend Day
            </label>
            <input
              type="number"
              name="attend"
              id="attend"
              value={attend}
              onChange={(e) => setAttend(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
          <div className="absent mt-10 mb-8  relative ">
            <label
              htmlFor="absent"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600 rounded-md"
            >
              Absent Day
            </label>
            <input
              type="number"
              name="absent"
              id="absent"
              value={absent}
              onChange={(e) => setAbsent(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300  px-2 w-full py-3 rounded-md"
            />
          </div>

          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!id || !absent || !attend}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>
        <FilterDesgin
          setId={setId}
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
          filterData={filterData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        ;
      </div>

      {/* teacher search form end here */}
    </>
  );
};

export default RegisterAttendnace;

import React, { useState } from "react";
import moment from "moment";
import FilterDesgin from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";

const AddSalary = (props) => {
  const { teacherData } = props;
  const [id, setId] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [paidSalary, setPaidSalary] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [selectFilter, setSelectFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitBtn = async (e) => {
    const date = moment();
    const currentDate = date.format("YYYY-MM-D");
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("teachers/crud/salary/", {
        id: id,
        name: "bishal",
        monthly_salary: monthlySalary,
        paid_salary: paidSalary,
        unpaid_salary: 0,
        total_salary: totalSalary,
        date: currentDate,
      });
      setSucsMsg(res.status);
      setId("");
      setMonthlySalary(0);
      setPaidSalary(0);
      setTotalSalary(0);

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
          <p className="px-4 text-sm md:text-base  w-[90%]  md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Teacher Salary Added Successfully.
          </p>
        </div>
      )}

      {errMsg && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-2  text-slate-900  bg-red-500 md:mx-2 rounded-md fixed text-center z-40 capitalize">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Teacher Salary
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
              Monthly Salary
            </label>
            <input
              type="number"
              name="salary"
              id="salary"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>{" "}
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="paidSalary"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Paid Salary
            </label>
            <input
              type="number"
              name="paidSalary"
              id="paidSalary"
              value={paidSalary}
              onChange={(e) => setPaidSalary(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>{" "}
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="unPaidSlary"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Total Salary
            </label>
            <input
              type="number"
              name="unPaidSlary"
              id="unPaidSlary"
              value={totalSalary}
              onChange={(e) => setTotalSalary(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!id || !monthlySalary || !paidSalary || !totalSalary}
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

export default AddSalary;

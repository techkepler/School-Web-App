import React, { useState, useEffect } from "react";
import moment from "moment";
import FilterDesign from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";

const AddFee = () => {
  const [studentData, setStudentData] = useState([]);
  const [id, setId] = useState("");
  const [grade, setGrade] = useState("");

  const [monthlyFee, setMonthlyFee] = useState(0);
  const [busFee, setBusFee] = useState(0);
  const [computerFee, setComputerFee] = useState(0);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [selectFilter, setSelectFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStu = async () => {
      let res = await axiosAdmin.get(
        `students/crud/students/public/?grade=${grade}`
      );
      setStudentData(res.data);
    };
    fetchStu();
  }, [grade]);

  const handleSubmitBtn = async (e) => {
    const date = moment();
    const currentDate = date.format("YYYY-MM-D");
    const totals = Number(monthlyFee) + Number(busFee) + Number(computerFee);
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("students/crud/fee/", {
        id: id,
        name: "bishal",
        monthly_fee: monthlyFee,
        bus_fee: busFee,
        computer_fee: computerFee,
        paid_fee: 0,
        unpaid_fee: totals,
        total_fee: totals,
        date: currentDate,
      });
      setSucsMsg(res.status);
      setGrade("");
      setId("");
      setMonthlyFee(0);
      setBusFee(0);
      setComputerFee(0);

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
    let filterStu = studentData;
    if (searchQuery) {
      filterStu = studentData.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterStu;
  };

  return (
    <>
      {/* Response Msg */}
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base  w-[90%]  md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Student Fee Added Successfully.
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

      {/* Student search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Student Fee
          </h1>
          <div className="id mt-12 mb-8 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Student Grade
            </label>

            <select
              name="grade"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="w-full rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300"
            >
              <option value="">--Select One--</option>
              <option value="Nursery">Nursery</option>
              <option value="L.K.G">L.K.G</option>
              <option value="U.K.G">U.K.G</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
              <option value="Eight">Eight</option>
              <option value="Nine">Nine</option>
              <option value="Ten">Ten</option>
              <option value="Eleven">Eleven</option>
              <option value="Twelve">Twelve</option>
            </select>
          </div>
          <div className="id mt-12 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Student Id
            </label>
            <input
              type="text"
              name="id"
              id="id"
              value={id}
              readOnly
              disabled={!grade}
              onClick={() => {
                setSelectFilter(true);
                setId("");
              }}
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Monthly Fee
            </label>
            <input
              type="number"
              name="Fee"
              id="Fee"
              value={monthlyFee}
              onChange={(e) => setMonthlyFee(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>{" "}
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="busFee"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Bus Fee
            </label>
            <input
              type="number"
              name="busFee"
              id="busFee"
              value={busFee}
              onChange={(e) => setBusFee(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>{" "}
          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="computerFee"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Computer Fee
            </label>
            <input
              type="number"
              name="computerFee"
              id="computerFee"
              value={computerFee}
              onChange={(e) => setComputerFee(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!id || !monthlyFee || !busFee || !computerFee}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>
        <FilterDesign
          setId={setId}
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
          filterData={filterData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        ;
      </div>

      {/* Student search form end here */}
    </>
  );
};

export default AddFee;

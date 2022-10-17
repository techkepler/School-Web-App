import React, { useState } from "react";
import FilterDesgin from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";

const Payement = (props) => {
  const { data } = props;

  const [id, setId] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [selectFilter, setSelectFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("staffs/salary/payment/", {
        id: id,
        amount: amount,
        date: date,
      });
      setSucsMsg(res.status);
      setId("");
      setAmount(0);

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
    let fitlerTeachers = data;
    if (searchQuery) {
      fitlerTeachers = data.filter((datas) =>
        datas.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return fitlerTeachers;
  };

  return (
    <>
      {/* Response Msg */}
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-2 text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Staff Payment Updated Successfully.
          </p>
        </div>
      )}

      {errMsg && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2 text-slate-900  bg-red-500  rounded-md fixed text-center z-40 capitalize">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Salary Payment
          </h1>
          <div className="id mt-12 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Staff Id
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
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>

          <div className="attend mt-10 mb-5 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>

          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!id || !amount || !date}
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

export default Payement;

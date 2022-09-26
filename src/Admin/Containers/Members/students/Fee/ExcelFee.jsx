import React, { useState } from "react";
import { axiosAdmin } from "../../../../../server/Axios";

const FeeExcel = () => {
  const [excelFile, setExcelFile] = useState("");
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_data", excelFile);
    try {
      let res = await axiosAdmin.post(
        "teachers/salary/excel/register/",
        formData
      );
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
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm  md:text-base w-[90%]  md:w-[60%] top-0  py-3  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
            Students Fee Added Successfully.
          </p>
        </div>
      )}

      {errMsg && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 w-[90%]  md:w-[60%] top-0  py-3  text-slate-900 bg-red-500 mx-2 rounded-md fixed text-center z-40 text-sm md:text-base ">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      {/* teacher  form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8 lg:px-12 border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Add Students Fee
          </h1>
          <div className="id mt-12 mb-8 relative ">
            <label
              htmlFor="id"
              className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Excel File
            </label>
            <input
              type="file"
              name="id"
              id="id"
              onChange={(e) => setExcelFile(e.target.files[0])}
              required
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>{" "}
          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!excelFile}
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

export default FeeExcel;

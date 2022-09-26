import React, { useState } from "react";
import { CSVLink } from "react-csv";
import stuPdf from "../../../../Docs/stu/StuList";
import { axiosAdmin } from "../../../../../server/Axios";

const StuPdf = () => {
  const [grade, setGrade] = useState("");
  const [data, setData] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [isSucs, setIsSucs] = useState(false);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    let res = await axiosAdmin.get(
      `students/crud/students/public/?grade=${grade}`
    );
    setData(res.data);
    if (res.data.length < 1) {
      setIsResponse(true);
    } else {
      setIsSucs(true);
    }
    setTimeout(() => {
      setIsResponse(false);
      setIsSucs(false);
    }, 2000);
  };

  const stuHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Grade", key: "grade" },
    { label: "Gender", key: "gender" },
    { label: "Phone Number", key: "phone" },
    { label: "Parent Email", key: "email" },
    { label: "Address", key: "address" },
  ];

  return (
    <>
      {isSucs && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm  md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Student Data Fetched Successfully.
          </p>
        </div>
      )}
      {isResponse && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm  md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
            No Student Found.
          </p>
        </div>
      )}

      {data.length > 0 && (
        <div className="flex gap-5 items-center justify-center  mt-10 mb-5">
          <button
            className="bg-sky-500 rounded-md px-3 py-2"
            onClick={() => stuPdf(data)}
          >
            Download PDF
          </button>
          <CSVLink
            data={data}
            headers={stuHeaders}
            filename={`grade${grade}StuList.csv`}
            className="bg-green-500 rounded-md px-3 py-2"
          >
            Download CSV
          </CSVLink>
        </div>
      )}
      <div className="flex flex-col w-full items-center justify-center mt-5">
        <form className="my-10 dark:bg-slate-900 w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8 lg:px-12  border border-slate-500">
          <h1 className="text-2xl md:text-3xl  text-slate-800 dark:text-slate-300 text-center">
            Get Student
          </h1>
          <div className="stu_id mt-12 mb-10 relative">
            <label
              htmlFor="stu_id"
              className="absolute left-4 px-1 block -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Student Grade
            </label>
            <select
              name="grade"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="w-full form-select rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300"
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

          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!grade}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StuPdf;

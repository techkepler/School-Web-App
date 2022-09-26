import React, { useState } from "react";
import { axiosAdmin } from "../../../server/Axios";
import routinePdf from "../../Docs/Routine";

const ViewRoutines = () => {
  const [infoData, setInfoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [grade, setGrade] = useState("");
  const [examTerm, setExamTerm] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    let res = await axiosAdmin.get(
      `informations/crud/routines/?grade=${grade}&exam_term=${examTerm}`
    );
    setInfoData(res.data);

    if (res.data.length < 1) {
      setIsAvailable(false);
    } else {
      window.scrollTo(0, 0);
    }

    setTimeout(() => {
      setIsAvailable(true);
    }, 2000);
  };

  const filterData = () => {
    let filterParent = infoData;
    if (searchQuery) {
      filterParent = infoData.filter((data) =>
        data.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterParent;
  };

  const storeExamTerm = infoData.map((datas) => datas.exam_term);
  const storeGrade = infoData.map((datas) => datas.grade);

  return (
    <>
      {!isAvailable && (
        <div className="items-center w-full absolute  flex justify-center">
          <p className="px-4 text-base  md:w-[60%] top-0  py-2  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
            No Routine Found.
          </p>
        </div>
      )}

      {infoData?.length > 0 && (
        <div
          className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 `}
        >
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search routine here..............."
            className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
          />
        </div>
      )}

      {/* Announcement table start here */}
      <div className="my-16">
        {filterData().length > 0 && (
          <>
            <div className=" m-4">
              <button
                className="bg-sky-500 py-2 px-2 rounded-md"
                onClick={() => routinePdf(infoData)}
              >
                Download PDF
              </button>
            </div>

            <h1 className="text-sky-500 font-semibold text-2xl text-center mb-5">
              {storeExamTerm[0]} Exam Routine For Grade{" "}
              <span className="pr-2">{storeGrade[0]}</span>
              {new Date().getFullYear()}
            </h1>

            <div className="overflow-auto  bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
              <table className="w-full">
                <thead>
                  <tr className=" text-green-600  dark:text-green-500 bg-slate-300 dark:bg-slate-700 border border-slate-300 dark:border-slate-800 pb-4">
                    <th className="whitespace-nowrap p-5   ">Date</th>
                    <th className="whitespace-nowrap p-5   ">Subject</th>
                    <th className="whitespace-nowrap p-5  text-center">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData().length > 0 &&
                    filterData().map((datas, index) => (
                      <tr
                        key={index}
                        className="  text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 pb-4"
                      >
                        <td className="whitespace-nowrap text-center  px-8 py-5 text-sm capitalize">
                          {new Date(datas.date).getDay() === 0 && "Sunday"}
                          {new Date(datas.date).getDay() === 1 && "Monday"}
                          {new Date(datas.date).getDay() === 2 && "Tuesday"}
                          {new Date(datas.date).getDay() === 3 && "Wednesday"}
                          {new Date(datas.date).getDay() === 4 && "Thursday"}
                          {new Date(datas.date).getDay() === 5 && "Friday"}
                          {new Date(datas.date).getDay() === 6 && "Saturday"}
                        </td>

                        <td className="whitespace-nowrap text-center  px-8 py-5 text-sm capitalize">
                          {datas.subject}
                        </td>

                        <td className="whitespace-nowrap text-center px-8 py-5 text-sm capitalize">
                          <ShowTime datas={datas} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Routine Search Form */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
          <h1 className="text-2xl md:text-3xl  text-slate-800 dark:text-slate-300 text-center">
            Search Exam Routine
          </h1>
          <div className="stu_id mt-12 mb-8 relative">
            <label
              htmlFor="stu_id"
              className="absolute left-4 px-1 block -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Grade
            </label>
            <select
              name="grade"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="w-full form-select  py-2.5 dark:bg-slate-900 dark:text-slate-300"
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
          </div>{" "}
          <div className="stu_name my-10 relative">
            <label
              htmlFor="name"
              className="absolute left-4 px-1 block -top-3  bg-white dark:bg-slate-900 text-sm text-sky-600"
            >
              Exam Term
            </label>
            <select
              name="examTerm"
              id="exam_term"
              value={examTerm}
              onChange={(e) => setExamTerm(e.target.value)}
              required
              className="w-full form-select  py-2.5 dark:bg-slate-900 dark:text-slate-300"
            >
              <option value="">--Select One--</option>
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
              <option value="Final Term">Final Term</option>
            </select>
          </div>
          <div className="mt-10">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={!grade && !examTerm}
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

export default ViewRoutines;

const ShowTime = ({ datas }) => {
  return (
    <>
      {datas.start_time.split(":")[0] > 12 ? (
        <span>
          {datas.start_time.split(":")[0] - 12 < 10
            ? `0${datas.start_time.split(":")[0] - 12}`
            : `${datas.start_time.split(":")[0] - 12}`}
          :{datas.start_time.split(":")[1]}
        </span>
      ) : (
        <span>
          {datas.start_time.split(":")[0]}:{datas.start_time.split(":")[1]}
        </span>
      )}

      <span className="px-2">to</span>
      {datas.end_time.split(":")[0] > 12 ? (
        <span>
          {datas.end_time.split(":")[0] - 12 < 10
            ? `0${datas.end_time.split(":")[0] - 12}`
            : `${datas.end_time.split(":")[0] - 12}`}
          :{datas.end_time.split(":")[1]}
        </span>
      ) : (
        <span>
          {datas.end_time.split(":")[0]}:{datas.end_time.split(":")[1]}
        </span>
      )}
    </>
  );
};

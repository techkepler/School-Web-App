import React, { useState } from "react";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const SearchResult = () => {
  const { auth } = useAuth();
  const [responseData, setResponseData] = useState([]);
  const [examTerm, setExamTerm] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    let res = await axiosAdmin.get(
      `students/crud/result/?stu_details=${auth.uid}&exam_term=${examTerm}`
    );
    setResponseData(res.data);

    if (res.data.length < 1) {
      setIsResult(true);
    } else {
      window.scrollTo(0, 0);
    }
    setTimeout(() => {
      setIsResult(false);
    }, 2000);
  };

  const filterData = () => {
    let filterSub = responseData;
    if (searchQuery) {
      filterSub = responseData.filter((data) =>
        data.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterSub;
  };

  return (
    <>
      {/* Response Msg */}

      {isResult && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
            No Student Result Found.
          </p>
        </div>
      )}

      {/* teacher table start here */}
      {responseData.length > 0 && (
        <>
          <p className={` order-2 md:order-1 `}>
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subject here........................"
              className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
            />
          </p>
          <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="  text-slate-700 dark:text-[#9bbae7] bg-slate-300 dark:bg-slate-800 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
                  <th className="whitespace-nowrap p-5 text-sm  ">Subject</th>
                  <th className="whitespace-nowrap p-5 text-sm  ">
                    Total Marks
                  </th>
                  <th className="whitespace-nowrap p-5 text-sm  text-center">
                    Pass Marks
                  </th>
                  <th className="whitespace-nowrap p-5 text-sm  text-center">
                    Obtained Marks
                  </th>
                  <th className="whitespace-nowrap p-5 text-sm  text-center">
                    GPA
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterData().length > 0 &&
                  filterData().map((datas, index) => (
                    <tr
                      key={index}
                      className="  text-slate-700 dark:text-[#9bbae7] hover:bg-slate-200 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
                    >
                      <td className="whitespace-nowrap p-5 text-sm text-center">
                        {datas.subject}
                      </td>
                      <td className="whitespace-nowrap p-5 text-sm text-center">
                        {datas.total_marks}
                      </td>
                      <td className="whitespace-nowrap p-5 text-sm text-center capitalize">
                        {datas.pass_marks}
                      </td>
                      <td className="whitespace-nowrap p-5 text-sm text-center">
                        {datas.obtained_marks}
                      </td>
                      <td className="whitespace-nowrap p-5 text-sm text-center">
                        {datas.gpa}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* teacher table end here */}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900 w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8 lg:px-12  border border-slate-500">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Search Result
          </h1>
          <div className="stu_name my-8 relative">
            <label
              htmlFor="name"
              className="absolute left-4 px-1 block -top-3  bg-white dark:bg-slate-900 text-sm text-sky-600"
            >
              Exam Term
            </label>
            <select
              name="examTerm"
              id="examTerm"
              value={examTerm}
              onChange={(e) => setExamTerm(e.target.value)}
              required
              className="w-full rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300 form-select"
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
              disabled={!examTerm}
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

export default SearchResult;

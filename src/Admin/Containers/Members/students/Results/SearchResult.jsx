import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";

import FilterDesign from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";

const SearchResult = () => {
  const [deleteData, setDeleteData] = useState("");
  const [isDel, setIsDel] = useState(false);
  const [sucsMsg, setSucsMsg] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [examTerm, setExamTerm] = useState("");
  const [stuId, setStuId] = useState("");
  const [grade, setGrade] = useState("");
  const [isResult, setIsResult] = useState(false);
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
    e.preventDefault();
    let res = await axiosAdmin.get(
      `students/crud/result/?stu_details=${stuId}&exam_term=${examTerm}`
    );
    setResponseData(res.data);
    setExamTerm("");
    setGrade("");
    setStuId("");

    if (res.data.length < 1) {
      setIsResult(true);
    } else {
      window.scrollTo(0, 0);
    }
    setTimeout(() => {
      setIsResult(false);
    }, 2000);
  };

  const yesBtnClick = async () => {
    setIsDel(false);
    let res = await axiosAdmin.delete(`students/crud/result/${deleteData}/`);
    let newResponse = await axiosAdmin.get(
      `students/crud/result/?stu_details=${stuId}&exam_term=${examTerm}`
    );
    setSucsMsg(res.status);
    setTimeout(() => {
      setSucsMsg("");
      setResponseData(newResponse.data);
    }, 2000);
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
      {sucsMsg === 204 && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
            Student Result Deleted Successfully.
          </p>
        </div>
      )}
      {isResult && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
            No Student Result Found.
          </p>
        </div>
      )}

      {/* Delete Modal Start here */}

      <div
        className={`fixed top-16 flex items-center justify-center transition-transform ${
          isDel ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-80 md:w-[29rem] h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between">
          <p className="">Are you sure you want to delete this data?</p>

          <p className="flex gap-6  mt-4 justify-end text-slate-900">
            <button
              className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
              onClick={yesBtnClick}
            >
              Yes
            </button>
            <button
              className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
              onClick={() => setIsDel(false)}
            >
              Cancel
            </button>
          </p>
        </div>
      </div>

      {/* delete modal end here */}

      {/* teacher table start here */}
      {responseData.length > 0 && (
        <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
          <table className="w-full">
            <thead>
              <tr className="  text-slate-700 dark:text-[#9bbae7] bg-gray-300 dark:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
                <th className="whitespace-nowrap p-5 text-sm  ">Subject</th>
                <th className="whitespace-nowrap p-5 text-sm  ">Total Marks</th>
                <th className="whitespace-nowrap p-5 text-sm  text-center">
                  Pass Marks
                </th>
                <th className="whitespace-nowrap p-5 text-sm  text-center">
                  Obtained Marks
                </th>
                <th className="whitespace-nowrap p-5 text-sm  text-center">
                  GPA
                </th>

                <th className="whitespace-nowrap p-5 text-sm  text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {responseData.length > 0 &&
                responseData.map((datas, index) => (
                  <tr
                    key={index}
                    className="  text-slate-700 dark:text-[#9bbae7] hover:bg-gray-300 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
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

                    <td className="whitespace-nowrap  p-5 text-sm text-center">
                      <Link to={`/admin/students/result/edit/${datas.id}/`}>
                        <FaEdit className="text-lg inline mr-3 text-sky-500 cursor-pointer" />
                      </Link>

                      <VscTrash
                        className="text-lg text-red-500 ml-4 inline cursor-pointer"
                        onClick={() => {
                          setDeleteData(datas.id);
                          setIsDel(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* teacher table end here */}

      {/* teacher search form start here */}
      <div className="flex flex-col w-full items-center justify-center my-10">
        <form className="my-10 dark:bg-slate-900 w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8 lg:px-12  border border-slate-500">
          <h1 className="text-2xl md:text-3xl  text-slate-800 dark:text-slate-300 text-center">
            Search Student Result
          </h1>
          <div className="stu_grade my-8 relative">
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

          <div className="stu_id my-8 relative">
            <label
              htmlFor="id"
              className="absolute left-4 px-1 block -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
            >
              Student Id
            </label>
            <input
              type="text"
              name="stuId"
              id="stuId"
              value={stuId}
              readOnly
              disabled={!grade}
              onClick={() => {
                setSelectFilter(true);
                setStuId("");
              }}
              className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
            />
          </div>
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
              disabled={!examTerm || !grade || !stuId}
              onClick={handleSubmitBtn}
            >
              Submit
            </button>
          </div>
        </form>

        <FilterDesign
          setId={setStuId}
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
          filterData={filterData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          title="Students"
        />
      </div>

      {/* teacher search form end here */}
    </>
  );
};

export default SearchResult;

import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const ViewResult = () => {
  const { isSideBar, isColorBar } = useAuth();
  const [studentData, setStudentData] = useState([]);
  const [listView, setListView] = useState(true);
  const [searchStu, setSearchStu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [examTerm, setExamTerm] = useState("");
  const [grade, setGrade] = useState("");

  const newRestrucutre = Object.values(
    studentData.reduce((acc, { stu_details, name, grade, ...rest }) => {
      acc[stu_details] ??= { stu_details, name, grade, subject: [] };
      acc[stu_details].subject.push(rest);
      return acc;
    }, {})
  );

  const storeSubject = new Set();
  studentData.map((data) => storeSubject.add(data.subject));

  // This function will filter the data
  const filterData = () => {
    let filterStu = newRestrucutre;
    if (searchQuery) {
      filterStu = newRestrucutre.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterStu;
  };

  // These function will control which view to show
  const listViewClick = () => {
    setListView(true);
    setSearchStu(false);
  };

  const searchStuClick = () => {
    setSearchStu(true);
    setListView(false);
  };

  // This will fetch data
  const [isResult, setIsResult] = useState(false);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    let res = await axiosAdmin.get(
      `students/crud/result/?grade=${grade}&exam_term=${examTerm}`
    );
    setStudentData(res.data);
    if (res.data.length < 1) {
      setIsResult(true);
    }
    setTimeout(() => {
      setIsResult(false);
    }, 2000);
  };

  return (
    <>
      {isResult && (
        <div className="items-center w-full absolute  flex md:justify-center">
          <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
            No Student Result Found.
          </p>
        </div>
      )}

      {listView && (
        <div className="flex flex-wrap gap-5  items-center mt-10 mb-10">
          <select
            name="grade"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            className="w-full md:w-1/4 rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300"
          >
            <option value="">--Select Grade--</option>
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

          <select
            name="examTerm"
            id="examTerm"
            value={examTerm}
            onChange={(e) => setExamTerm(e.target.value)}
            required
            className="w-full md:md:w-1/4 rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300 form-select"
          >
            <option value="">--Select Exam Term--</option>
            <option value="First Term">First Term</option>
            <option value="Second Term">Second Term</option>
            <option value="Third Term">Third Term</option>
            <option value="Final Term">Final Term</option>
          </select>
          <button
            className="w-full md:w-1/4 bg-[#7582eb] px-4 rounded-md py-3 text-sm font-semibold hover:bg-[#4453c8]"
            disabled={!examTerm && !grade}
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </div>
      )}

      {/* <div className="border dark:border-slate-600  mb-20"></div> */}

      <div
        className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
          (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
        } ${searchStu ? "md:justify-center" : "md:justify-between "}`}
      >
        <p className={` order-2 md:order-1 ${searchStu && "hidden"}`}>
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search name here........................"
            className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
          />
        </p>
        <p className="flex gap-6 order-1 md:order-2">
          <button
            className={`border text-xs md:text-sm px-3 py-2  rounded-md  border-slate-500 shadow-lg ${
              listView &&
              "dark:bg-slate-300 bg-slate-700 text-slate-300 dark:text-slate-700"
            } `}
            onClick={listViewClick}
          >
            List View
          </button>

          <button
            className={`border px-3 py-2 text-xs md:text-sm md:py-0 rounded-md  border-slate-500 shadow-lg ${
              searchStu &&
              "dark:bg-slate-300 bg-slate-700 text-slate-300 dark:text-slate-700"
            }`}
            onClick={searchStuClick}
          >
            Search Result
          </button>
        </p>
      </div>

      {listView && (
        <>
          {filterData()?.length > 0 && (
            <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
              <table className="w-full">
                <thead>
                  <tr className="  text-slate-700 dark:text-[#05dcf8] bg-slate-300 dark:bg-slate-800 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      ID
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      Grade
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      Name
                    </th>
                    <>
                      {Array.from(storeSubject).map((data) => (
                        <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                          {data}
                        </th>
                      ))}
                    </>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      Total Marks
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
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
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.stu_details}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.grade}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.name}
                        </td>
                        <>
                          {datas.subject?.map((data) => (
                            <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                              {data.obtained_marks}
                            </td>
                          ))}
                        </>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.subject
                            .map((data) => data.obtained_marks)
                            .reduce((acc, curr) => curr + acc, 0)}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          <CalcGpa datas={datas} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {searchStu && <SearchResult />}
    </>
  );
};

export default ViewResult;

const CalcGpa = ({ datas }) => {
  const totalSubMarks = datas.subject
    .map((data) => data.total_marks)
    .reduce((acc, curr) => curr + acc, 0);

  const totalObtainMarks = datas.subject
    .map((data) => data.obtained_marks)
    .reduce((acc, curr) => curr + acc, 0);

  const totalMarks = (totalObtainMarks / totalSubMarks) * 100;

  return (
    <>
      {totalMarks >= 90
        ? "A+"
        : totalMarks >= 80
        ? "A"
        : totalMarks >= 70
        ? "B+"
        : totalMarks >= 60
        ? "B"
        : totalMarks >= 50
        ? "C+"
        : totalMarks >= 40
        ? "C"
        : totalMarks >= 30
        ? "D+"
        : totalMarks >= 20
        ? "D"
        : "E"}
    </>
  );
};

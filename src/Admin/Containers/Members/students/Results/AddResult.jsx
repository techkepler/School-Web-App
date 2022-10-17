import React, { useState, useEffect } from "react";
import FilterDesign from "../../../../Components/teacher/FilterDesign";
import { axiosAdmin } from "../../../../../server/Axios";
import { useAuth } from "../../../../../contexts/GlobalProvider";

const AddResult = () => {
  const { themeColor } = useAuth();
  const [studentData, setStudentData] = useState([]);
  const [id, setId] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [passMark, setPassMark] = useState(0);
  const [obtainMark, setObtainMark] = useState(0);
  const [examTerm, setExamTerm] = useState(0);
  const [gpa, setGpa] = useState("");

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
    e.preventDefault();
    try {
      let res = await axiosAdmin.post("students/crud/result/", {
        stu_details: id,
        subject: subject,
        total_marks: totalMarks,
        pass_marks: passMark,
        obtained_marks: obtainMark,
        exam_term: examTerm,
        gpa: gpa,
        name: "bishal",
      });
      setSucsMsg(res.status);
      setObtainMark(0);
      setGpa("");
      setSubject("");

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
            Student Result Added Successfully.
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
        <form className="my-10 dark:bg-slate-900  w-full  pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500 flex flex-col items-center justify-center">
          <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
            Student Result
          </h1>

          <div className="flex mt-8 flex-wrap w-full gap-8 justify-center items-center">
            <div className="grade   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className=" block m-1"
                style={{ color: themeColor }}
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
            <div className="id   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className="m-1 block"
                style={{ color: themeColor }}
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
          </div>

          <div className="flex mt-8 flex-wrap w-full gap-8 justify-center items-center">
            <div className="grade   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className=" block m-1"
                style={{ color: themeColor }}
              >
                Subject
              </label>

              <input
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full form-input rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300"
              />
            </div>
            <div className="id   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className="m-1 block"
                style={{ color: themeColor }}
              >
                Total Marks
              </label>
              <input
                type="number"
                name="total_marks"
                id="total_marks"
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>
          </div>

          <div className="flex mt-8 flex-wrap w-full gap-8 justify-center items-center">
            <div className="grade   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className=" block m-1"
                style={{ color: themeColor }}
              >
                Pass Mark
              </label>

              <input
                type="number"
                name="passMarks"
                id="passMarks"
                value={passMark}
                onChange={(e) => setPassMark(e.target.value)}
                required
                className="w-full form-input rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300"
              />
            </div>
            <div className="id   w-full md:w-[48%]">
              <label
                htmlFor="id"
                className="m-1 block"
                style={{ color: themeColor }}
              >
                Obtained Mark
              </label>
              <input
                type="number"
                name="obtainMark"
                id="obtainMark"
                value={obtainMark}
                onChange={(e) => setObtainMark(e.target.value)}
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>
          </div>

          <div className="flex my-8 flex-wrap w-full gap-8 justify-center items-center">
            <div className="grade   w-full md:w-[48%]">
              <label
                htmlFor="gpa"
                className=" block m-1"
                style={{ color: themeColor }}
              >
                GPA
              </label>

              <select
                name="gpa"
                id="gpa"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                required
                className="w-full rounded-md  py-3 dark:bg-slate-900 dark:text-slate-300 form-select"
              >
                <option value="">--Select One--</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>
            <div className="exam_term   w-full md:w-[48%]">
              <label
                htmlFor="exam_term"
                className="m-1 block"
                style={{ color: themeColor }}
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
          </div>

          <div className="mt-10 w-full md:w-96">
            <button
              className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
              disabled={
                !id ||
                !grade ||
                !subject ||
                !totalMarks ||
                !passMark ||
                !obtainMark ||
                !gpa ||
                !examTerm
              }
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
          title="Students"
        />
        ;
      </div>

      {/* Student search form end here */}
    </>
  );
};

export default AddResult;

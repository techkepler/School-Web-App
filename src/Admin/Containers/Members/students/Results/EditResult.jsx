import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const EditResult = () => {
  const { isSideBar, isColorBar, themeColor } = useAuth();
  //   Fetch Data from backend
  const { id } = useParams();
  const navigate = useNavigate();

  const [stuId, setStuId] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [passMark, setPassMark] = useState(0);
  const [obtainMark, setObtainMark] = useState(0);
  const [examTerm, setExamTerm] = useState(0);
  const [gpa, setGpa] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get(`students/crud/result/${id}/`);
      setStuId(res.data.stu_details);
      setName(res.data.name);
      setGrade(res.data.grade);
      setSubject(res.data.subject);
      setTotalMarks(res.data.total_marks);
      setPassMark(res.data.pass_marks);
      setObtainMark(res.data.obtained_marks);
      setExamTerm(res.data.exam_term);
      setGpa(res.data.gpa);
    };
    fetchData();
  }, [id]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosAdmin.patch(`students/crud/result/${id}/`, {
        stu_details: stuId,
        // subject: subject,
        total_marks: totalMarks,
        pass_marks: passMark,
        obtained_marks: obtainMark,
        exam_term: examTerm,
        gpa: gpa,
        name: name,
      });
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        navigate("/admin/students/result/");
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
      <AdminNav />

      {/* Form start here */}

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 200 && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Student Result Updated Successfully.
            </p>
          </div>
        )}

        {errMsg && (
          <div className="items-center w-full absolute  flex   md:justify-center ">
            <p className="px-4 text-sm  md:text-base w-[90%] md:w-[60%] capitalize py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errMsg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}

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

                <input
                  name="grade"
                  id="grade"
                  value={grade}
                  readOnly
                  disabled
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
                  Student Id
                </label>
                <input
                  type="text"
                  name="stuId"
                  id="stuId"
                  value={stuId}
                  readOnly
                  disabled
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
                  readOnly
                  disabled
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

            <div className="mt-10 md:w-96">
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
        </div>
      </section>

      {/* Form end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default EditResult;

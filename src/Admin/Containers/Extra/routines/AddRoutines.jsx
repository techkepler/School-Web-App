import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../server/Axios";

const AddRoutines = () => {
  const { themeColor } = useAuth();

  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subject, setSubject] = useState("");
  const [examTerm, setExamTerm] = useState("");

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("grade", grade);
    formData.append("date", date);
    formData.append("start_time", startTime);
    formData.append("end_time", endTime);
    formData.append("subject", subject);
    formData.append("exam_term", examTerm);

    try {
      let res = await axiosAdmin.post("informations/crud/routines/", formData);
      setSucsMsg(res.status);
      setSubject("");
      setDate("");

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
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex justify-center">
          <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
            Routine Added Successfully.
          </p>
        </div>
      )}
      {errMsg && (
        <div className="items-center w-full absolute  flex   justify-center ">
          <p className="px-4  text-base md:w-[60%]  py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}

      <div className="my-10">
        <div className=" box-border rounded-md border-[1px] border-slate-500 border-opacity-75  px-3 py-6 dark:bg-slate-900  shadow-xl">
          <h1
            style={{ color: themeColor }}
            className="text-center text-xl font-semibold mb-5"
          >
            Add Exam Routine
          </h1>

          <form className="w-full my-4 pb-5 md:px-2">
            <div className="w-full flex flex-wrap gap-6  justify-center my-4">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="grade"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Grade</span>
                </label>
                <select
                  name="grade"
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                  className="w-full  py-2.5 dark:bg-slate-900 dark:text-slate-300"
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

              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="subject"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Subject</span>
                </label>
                <select
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full  py-2.5 dark:bg-slate-900 dark:text-slate-300"
                >
                  <option value="">--Select One--</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Social">Social</option>
                  <option value="English">English</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Computer">Computer</option>
                  <option value="Moral Science">Moral Science</option>
                  <option value="Environment & Population">
                    Environment & Population
                  </option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-wrap gap-6  justify-center my-4">
              <div className=" w-full md:w-[48%]">
                <label
                  htmlFor="email"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Exam Start Time</span>
                </label>
                <input
                  type="time"
                  id="exam_start_time"
                  name="start_time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                />
              </div>
              <div className=" w-full md:w-[48%]">
                <label
                  htmlFor="exam_end_time"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Exam End Time</span>
                </label>
                <input
                  type="time"
                  id="exam_end_time"
                  name="end_time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                />
              </div>
            </div>

            <div className="w-full flex flex-wrap gap-6  justify-center my-4">
              <div className=" w-full md:w-[48%]">
                <label
                  htmlFor="date"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Exam Date</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                />
              </div>

              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="exam_term"
                  className="block relative text-slate-700 dark:text-slate-300 my-1"
                >
                  <span className="text-red-500 mr-1">*</span>
                  <span style={{ color: themeColor }}>Exam Term</span>
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
            </div>

            <div className="mt-10 flex gap-4 md:gap-8 justify-center items-center w-full">
              <button
                className="bg-sky-500 rounded-md py-1.5 px-3"
                onClick={handleFormSubmit}
                disabled={!date}
              >
                Submit
              </button>
              <Link
                to="/admin/routine/"
                className="bg-red-500 rounded-md py-1.5 px-3"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRoutines;

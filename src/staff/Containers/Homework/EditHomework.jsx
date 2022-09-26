import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { axiosAdmin } from "../../../server/Axios";
import { useAuth } from "../../../contexts/GlobalProvider";
import StaffNav from "../../layouts/navbar/StaffNav";

const EditHomework = () => {
  const { themeColor, isSideBar, isColorBar, auth } = useAuth();
  const { id } = useParams();
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [data, setData] = useState("");
  const [homeWork, setHomeWork] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await axiosAdmin.get(`teachers/crud/homework/${id}`);
      setGrade(res.data.grade);
      setSubject(res.data.subject);
      setHomeWork(res.data.homework);
    };
    fetchInfo();
  }, [id]);

  const log = async (e) => {
    setSubmit(true);
    e.preventDefault();
    if (editorRef.current) {
      setData(editorRef.current.getContent());
    }
  };

  // Submit Part
  const submitData = async () => {
    setSubmit(false);
    try {
      let res = await axiosAdmin.patch(`teachers/crud/homework/${id}/`, {
        teacher_id: auth.uid,
        subject: subject,
        grade: grade,
        homework: data,
      });
      setSucsMsg(res.status);
      window.scrollTo(0, 0);

      setTimeout(() => {
        setSucsMsg("");
        navigate("/staff/student/homework/");
      }, 2000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg({ msg: "No response from server." });
        setTimeout(() => {
          setErrMsg({ msg: "" });
        }, 2000);
      } else if (error.response.status === 500) {
        setErrMsg({ msg: "Internal Server Error" });
        setTimeout(() => {
          setErrMsg({ msg: "" });
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg({ msg: error.response.data.errors });
        setTimeout(() => {
          setErrMsg({ msg: "" });
        }, 4000);
      }
    }
  };
  return (
    <>
      <StaffNav />

      <section
        className={`teachers mt-2 px-2 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 200 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Homework Updated Successfully.
            </p>
          </div>
        )}
        {errMsg.msg && (
          <div className="items-center w-full absolute  flex   justify-center ">
            <p className="px-4  text-base md:w-[60%]  py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}

        <div className="my-16">
          <div className=" box-border rounded-md border-[1px] border-slate-500 border-opacity-75  px-3 py-3 dark:bg-slate-900  shadow-xl">
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
              </div>{" "}
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
                  <option value="Nepali">Nepali</option>
                  <option value="Computer">Computer</option>
                  <option value="Optional Math">Optional Math</option>
                  <option value="Health">Health</option>
                </select>
              </div>
            </div>

            <div className="my-8">
              <label
                htmlFor="subject"
                className="block relative text-slate-700 dark:text-slate-300 my-2"
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>Write homework:</span>
              </label>
              <Editor
                apiKey="i5ld1nbpql0sgsemjrfpc30fecthuzsmgb3sgataomu0mzyx"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={homeWork}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </div>

          <div className="flex justify-center my-8 w-full">
            <button
              onClick={log}
              disabled={!subject || !grade}
              className="bg-sky-400 px-4 py-3 rounded-md w-72"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Confirm Modal */}
        <div
          className={`fixed  overflow-x-hidden top-16 flex  transition-transform origin-top z-[500] -ml-2 ${
            submit ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between">
            <p className="">
              Are you sure you want to submit this application?
            </p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={submitData}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setSubmit(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditHomework;

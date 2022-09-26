import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const AddApplication = ({ isViewInfoClick }) => {
  const { themeColor, auth } = useAuth();
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });
  const [submit, setSubmit] = useState(false);

  const log = async () => {
    setSubmit(true);
    if (editorRef.current) {
      setData(editorRef.current.getContent());
    }
  };

  // Submit Part
  const submitData = async () => {
    const date = moment();
    const currDate = date.format("YYYY-MM-D");
    setSubmit(false);
    try {
      let res = await axiosAdmin.post("informations/crud/leave/application/", {
        stu_id: auth.uid,
        reason: data,
        date: currDate,
        grade: auth.grade,
        name: auth.name,
        status: "pending",
      });
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        isViewInfoClick();
      }, 1500);
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
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex justify-center">
          <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
            Application Submitted Successfully.
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

      <div className="my-10">
        <div className=" box-border rounded-md border border-slate-500 border-opacity-75  py-6 dark:bg-slate-900  shadow-xl">
          <h1
            style={{ color: themeColor }}
            className="text-center text-xl font-semibold mb-10"
          >
            Leave Application Form
          </h1>

          <Editor
            apiKey="i5ld1nbpql0sgsemjrfpc30fecthuzsmgb3sgataomu0mzyx"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="Write your application here............"
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

          <div className="flex justify-center my-8 w-full">
            <button
              onClick={log}
              className="bg-sky-400 px-4 py-3 rounded-md w-72"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      <div
        className={`fixed  overflow-x-hidden top-16 flex  transition-transform origin-top z-[500] -ml-2 ${
          submit ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between">
          <p className="">Are you sure you want to submit this application?</p>

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
    </>
  );
};

export default AddApplication;

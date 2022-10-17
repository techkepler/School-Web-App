import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const EditApplication = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [response, setResponse] = useState([]);
  const [data, setData] = useState("");
  const [submit, setSubmit] = useState(false);
  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await axiosAdmin.get(
        `informations/crud/leave/application/${id}`
      );
      setResponse(res.data);
    };
    fetchInfo();
  }, [id]);

  const log = () => {
    setSubmit(true);
    if (editorRef.current) {
      setData(editorRef.current.getContent());
    }
  };

  // Submit part Start here

  const submitData = async () => {
    setSubmit(false);
    try {
      let res = await axiosAdmin.patch(
        `informations/crud/leave/application/${id}/`,
        {
          stu_id: response.stu_id,
          reason: data,
          grade: response.grade,
          name: response.name,
          status: response.status,
        }
      );
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        navigate("/student/leave/application/");
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

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10   admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 200 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Application Updated Successfully.
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
          <div className=" box-border rounded-md border border-slate-500 border-opacity-75  px-3 py-6 dark:bg-slate-900  shadow-xl">
            <h1
              style={{ color: themeColor }}
              className="text-center text-xl font-semibold mb-10"
            >
              Update Leave Application Form
            </h1>

            <Editor
              apiKey="i5ld1nbpql0sgsemjrfpc30fecthuzsmgb3sgataomu0mzyx"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={response.reason}
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
                Update
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
            <p className="">Are you sure you want to edit this application?</p>

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

      <ColorSettings />
      <Footer />
    </>
  );
};

export default EditApplication;

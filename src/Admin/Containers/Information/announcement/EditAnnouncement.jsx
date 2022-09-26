import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import { useAuth } from "../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../server/Axios";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import ColorSettings from "../../../Components/nav/ColorSettings";

const EditAnnouncement = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await axiosAdmin.get(`informations/crud/announcement/${id}`);
      setTitle(res.data.title);
      setData(res.data.data);
      setStatus(res.data.status.toString());
    };
    fetchInfo();
  }, [id]);

  const log = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (editorRef.current) {
      setData(editorRef.current.getContent());
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosAdmin.put(`informations/crud/announcement/${id}/`, {
        title: title,
        data: data,
        status: status,
      });
      setSucsMsg(res.status);

      setTimeout(() => {
        setSucsMsg("");
        navigate("/admin/announcement/");
      }, 1500);
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

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="my-10 flex justify-center items-center">
          {sucsMsg === 200 && (
            <div className="items-center w-full absolute  flex justify-center">
              <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
                Announcement Updated Successfully.
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
          <div
            className={`box-border rounded-md     md:px-8 py-7 dark:bg-gray-800   w-full ${
              isSideBar || isColorBar
                ? "lg:w-full xl:w-[90%] 2xl:w-[80%] "
                : "lg:w-[90%] xl:w-[80%] 2xl:w-[70%]"
            }`}
          >
            <h1
              style={{ color: themeColor }}
              className="text-center text-xl font-semibold mb-10"
            >
              Edit Announcement
            </h1>

            <form className="w-full my-4 pb-5 md:px-6 flex flex-col items-center justify-center ">
              <div className="w-full flex flex-col gap-8  justify-center my-4 ">
                <div className=" w-full">
                  <label
                    htmlFor="name"
                    className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>Title</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-2"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>
                      Write announcement:
                    </span>
                  </label>
                  <Editor
                    apiKey="i5ld1nbpql0sgsemjrfpc30fecthuzsmgb3sgataomu0mzyx"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={data}
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

                <div className="w-full">
                  <label
                    htmlFor="address"
                    className="block md:text-lg relative text-slate-700 dark:text-slate-300 my-1"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>
                      Do you want to make this announcement public or not ?
                    </span>
                  </label>

                  <div className="flex gap-5 py-3 px-3">
                    <p>
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="form-radio mr-2"
                        value="true"
                        onChange={(e) => setStatus(e.target.value)}
                        checked={status === "true"}
                      />
                      <label
                        htmlFor="Yes"
                        className="dark:text-slate-300 text-slate-800"
                      >
                        Yes
                      </label>
                    </p>

                    <p>
                      <input
                        type="radio"
                        name="status"
                        id="status"
                        className="form-radio mr-2"
                        value="false"
                        onChange={(e) => setStatus(e.target.value)}
                        checked={status === "false"}
                      />
                      <label
                        htmlFor="No"
                        className="dark:text-slate-300 text-slate-800"
                      >
                        No
                      </label>
                    </p>
                  </div>
                </div>
                <div className=" flex gap-4 justify-center items-center w-full">
                  <button
                    className="bg-sky-500 rounded-md py-1.5 px-3"
                    onClick={log}
                    disabled={!title || !status}
                  >
                    Submit
                  </button>
                  <Link
                    to="/admin/announcement/"
                    className="bg-red-500 rounded-md py-1.5 px-3"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>

          {/* Confirm Modal */}
          <div
            className={`fixed  overflow-x-hidden top-16 flex  transition-transform origin-top z-[500] -ml-2 ${
              submit ? "scale-100" : "scale-0"
            }`}
          >
            <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between">
              <p className="">
                Are you sure you want to submit this announcement?
              </p>

              <p className="flex gap-6  mt-4 justify-end text-slate-900">
                <button
                  className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                  onClick={handleFormSubmit}
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
        </div>
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default EditAnnouncement;

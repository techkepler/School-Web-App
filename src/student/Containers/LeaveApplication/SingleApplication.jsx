import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const SingleApplication = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const editorRef = useRef(null);

  const { id } = useParams();
  const [grade, setGrade] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await axiosAdmin.get(
        `informations/crud/leave/application/${id}`
      );
      setName(res.data.name);
      setGrade(res.data.grade);
      setReason(res.data.reason);
      setDate(res.data.date);
    };
    fetchInfo();
  }, [id]);

  return (
    <>
      <StaffNav />

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="my-10 flex justify-center items-center">
          <div className="my-10 w-full">
            <div className=" box-border rounded-md border-[1px] border-slate-500 border-opacity-75  px-3 py-6 dark:bg-slate-900  shadow-xl">
              <h1
                style={{ color: themeColor }}
                className="text-center text-xl font-semibold mb-10"
              >
                Leave Application Form - {new Date(date).toDateString()}
              </h1>

              <form className="w-full my-4 pb-5 md:px-2">
                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="stu_name"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Student Name</span>
                    </label>
                    <input
                      type="text"
                      id="stu_name"
                      name="name"
                      value={name}
                      disabled
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                  <div className="w-full md:w-[48%]">
                    <label
                      htmlFor="grade"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Grade</span>
                    </label>
                    <input
                      type="text"
                      name="grade"
                      id="grade"
                      value={grade}
                      disabled
                      readOnly
                      className="w-full  py-2.5 dark:bg-slate-900 dark:text-slate-300"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6 md:px-1  justify-center my-8">
                  <div className="w-full ">
                    <label
                      htmlFor="reason"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>
                        Write the reason:
                      </span>
                    </label>
                    <Editor
                      apiKey="i5ld1nbpql0sgsemjrfpc30fecthuzsmgb3sgataomu0mzyx"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      initialValue={reason}
                      disabled
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default SingleApplication;

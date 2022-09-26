import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../server/Axios";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import ColorSettings from "../../../Components/nav/ColorSettings";

const EditRoutines = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      let res = await axiosAdmin.get(
        `informations/crud/admission/inquiry/${id}`
      );
      setData(res.data);
    };
    fetchInfo();
  }, [id]);

  return (
    <>
      <AdminNav />

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-2 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="my-10 flex justify-center items-center">
          <div className="my-10 w-full">
            <div className=" box-border rounded-md border-[1px] border-slate-500 border-opacity-75  px-4 py-6 dark:bg-slate-900  shadow-xl">
              <h1
                style={{ color: themeColor }}
                className="text-center text-xl font-semibold mb-10"
              >
                Admission Inquiry View
              </h1>

              <form className="w-full my-4 pb-5 md:px-2">
                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="stu_name"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Student Name</span>
                    </label>
                    <input
                      type="text"
                      id="stu_name"
                      name="name"
                      value={data.student_name}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                  <div className="w-full md:w-[48%]">
                    <label
                      htmlFor="grade"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Gender</span>
                    </label>
                    <input
                      type="text"
                      id="stu_name"
                      name="name"
                      value={data.gender}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="days"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Entering Grade</span>
                    </label>
                    <input
                      type="text"
                      id="days"
                      name="days"
                      value={data.entering_grade}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="date"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Year Applying</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={data.year_applying}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="days"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Current School</span>
                    </label>
                    <input
                      type="text"
                      id="days"
                      name="days"
                      value={data.current_school}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="date"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>City</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={data.city}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="days"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Province</span>
                    </label>
                    <input
                      type="text"
                      id="days"
                      name="days"
                      value={data.province}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="date"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>
                        Home Phone Number
                      </span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={data.home_phone}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="days"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Relation</span>
                    </label>
                    <input
                      type="text"
                      id="days"
                      name="days"
                      value={data.relation}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="date"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Guardian Name</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={data.guardian_name}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="days"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>
                        Guardian Phone Number
                      </span>
                    </label>
                    <input
                      type="text"
                      id="days"
                      name="days"
                      value={data.phone_number}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="date"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>Guardian Email</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={data.email}
                      readOnly
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6 md:px-1  justify-center my-8">
                  <div className="w-full ">
                    <label
                      htmlFor="reason"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span style={{ color: themeColor }}>
                        Additional Query:
                      </span>
                    </label>
                    <textarea
                      name="reason"
                      id="reason"
                      cols="30"
                      rows="10"
                      value={data.additional_query}
                      readOnly
                      className="form-textarea dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
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

export default EditRoutines;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { RiErrorWarningLine, RiCloseFill, RiCheckFill } from "react-icons/ri";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const USER_REGEX = /^[A-z][A-z_\s.]{5,25}$/;
const EMIAL_REGEX = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
const PHONE_REGEX = /^[0-9][0-9]{9}$/;
const OTHER_REGEX = /^[A-z][A-z0-9_\s.]{3,50}/;

const AddStudent = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [studentId, setStudentId] = useState("");
  const [excelFile, setExcelFile] = useState("");
  const [form, setForm] = useState(true);
  const [excelForm, setExcelForm] = useState(false);

  const isFormClick = () => {
    setForm(true);
    setExcelForm(false);
  };

  const isExcelForm = () => {
    setExcelForm(true);
    setForm(false);
  };

  const generateId = () => {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  };

  const generateIdBtn = () => {
    setStudentId(generateId());
  };

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(true);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);

  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(EMIAL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidAddress(OTHER_REGEX.test(address));
  }, [address]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });

  const handleFormSubmit = async (e) => {
    const date = moment();
    const currentDate = date.format("YYYY-MM-D");
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", studentId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("grade", grade);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("date", currentDate);

    try {
      let res = await axiosAdmin.post("students/crud/student/", formData);
      setSucsMsg(res.status);
      setStudentId("");
      setName("");
      setEmail("");
      setPhone("");
      setGrade("");
      setAddress("");
      setGender("");
      window.scrollTo(0, 0);

      setTimeout(() => {
        setSucsMsg("");
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

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_data", excelFile);
    try {
      let res = await axiosAdmin.post(
        "students/register/excel/file/",
        formData
      );
      setSucsMsg(res.status);

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
        setErrMsg({ msg: error.response.data.errors });
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
        className={`students mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 201 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Student Added Successfully.
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

        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Student Register
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Asgard</span>
            <span>/</span>
            <span>Students</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Asgard
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Student</span>
              <span>/</span>
              <span>Attendance</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${form && "border-t-2 border-sky-500 text-sky-500 "}`}
              onClick={isFormClick}
            >
              Register Form
            </button>

            <button
              className={`${
                excelForm && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isExcelForm}
            >
              Excel Form
            </button>
          </div>
        </div>

        {form && (
          <div className="my-10">
            <div className=" box-border rounded-md border-[1px] border-slate-500 border-opacity-75  px-3 py-3 dark:bg-slate-900  shadow-xl">
              <h1 style={{ color: themeColor }} className="text-center text-xl">
                Basic Information
              </h1>

              <form className="w-full my-4 pb-5 md:px-6">
                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="name"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>ID</span>
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={studentId}
                      readOnly
                      required
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />

                    <button
                      className="px-2 py-1 rounded-sm my-1 bg-sky-500"
                      disabled={studentId.length > 0}
                      onClick={() => generateIdBtn()}
                    >
                      Generate ID
                    </button>
                  </div>

                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="name"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Name</span>

                      <RiCheckFill
                        className={`${
                          validName
                            ? "text-green-600 inline ml-2 text-lg"
                            : "hidden"
                        }`}
                      />

                      <RiCloseFill
                        className={`${
                          validName || !name
                            ? "hidden"
                            : "text-red-600 inline ml-2 text-lg"
                        }`}
                      />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                      aria-invalid={validName ? false : true}
                      required
                      placeholder="Bishal Rayamajhi"
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />

                    <p
                      className={`warning ${
                        name && nameFocus && !validName ? " mt-1" : "hidden"
                      }`}
                      style={{ color: themeColor }}
                    >
                      <RiErrorWarningLine
                        className="text-xl "
                        style={{ color: themeColor }}
                      />
                      <p className="text-sm">
                        {" "}
                        5 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, underscores, hyphens allowed.
                      </p>
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6  justify-center my-4">
                  <div className=" w-full md:w-[48%]">
                    <label
                      htmlFor="email"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Parent Email</span>
                      <RiCheckFill
                        className={`${
                          validEmail
                            ? "text-green-600 inline ml-2 text-lg"
                            : "hidden"
                        }`}
                      />

                      <RiCloseFill
                        className={`${
                          validEmail || !email
                            ? "hidden"
                            : "text-red-600 inline ml-2 text-lg"
                        }`}
                      />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      aria-invalid={validEmail ? false : true}
                      required
                      placeholder="abc@gmail.com"
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                    <p
                      className={`warning ${
                        email && emailFocus && !validEmail ? "mt-1" : "hidden"
                      }`}
                      style={{ color: themeColor }}
                    >
                      <RiErrorWarningLine
                        className="text-xl "
                        style={{ color: themeColor }}
                      />
                      <p className="text-sm">Must be a valid email.</p>
                    </p>
                  </div>
                  <div className="  w-full md:w-[48%]">
                    <label
                      htmlFor="tel"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Parent Phone</span>
                      <RiCheckFill
                        className={`${
                          validPhone
                            ? "text-green-600 inline ml-2 text-lg"
                            : "hidden"
                        }`}
                      />

                      <RiCloseFill
                        className={`${
                          validPhone || !phone
                            ? "hidden"
                            : "text-red-600 inline ml-2 text-lg"
                        }`}
                      />
                    </label>
                    <input
                      type="tel"
                      id="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                      aria-invalid={validEmail ? false : true}
                      required
                      placeholder="9868090374"
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                    <p
                      className={`warning ${
                        phone && phoneFocus && !validPhone ? "mt-1" : "hidden"
                      }`}
                      style={{ color: themeColor }}
                    >
                      <RiErrorWarningLine
                        className="text-xl "
                        style={{ color: themeColor }}
                      />
                      <p className="text-sm">
                        {" "}
                        Only contain numbers. <br />
                        Must be a 10 digit number.
                      </p>
                    </p>
                  </div>
                </div>

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
                      htmlFor="address"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Address</span>
                      <RiCheckFill
                        className={`${
                          validAddress
                            ? "text-green-600 inline ml-2 text-lg"
                            : "hidden"
                        }`}
                      />

                      <RiCloseFill
                        className={`${
                          validAddress || !address
                            ? "hidden"
                            : "text-red-600 inline ml-2 text-lg"
                        }`}
                      />
                    </label>

                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onFocus={() => setAddressFocus(true)}
                      onBlur={() => setAddressFocus(false)}
                      required
                      placeholder="Narayanpur"
                      className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                    />
                    <p
                      className={`warning ${
                        address && addressFocus && !validAddress
                          ? "mt-1"
                          : "hidden"
                      }`}
                      style={{ color: themeColor }}
                    >
                      <RiErrorWarningLine
                        className="text-xl "
                        style={{ color: themeColor }}
                      />
                      <p className="text-sm">
                        3 to 50 characters.
                        <br />
                        Must begin with a letter.
                      </p>
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-6 items-center justify-center my-4">
                  <div className="w-full md:w-[48%]">
                    <label
                      htmlFor="address"
                      className="block relative text-slate-700 dark:text-slate-300 my-1"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <span style={{ color: themeColor }}>Gender</span>
                    </label>

                    <div className="flex gap-5 border-[1px] border-slate-600 py-2.5 px-4">
                      <p>
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          className="form-radio mr-2"
                          value="Male"
                          onChange={(e) => setGender(e.target.value)}
                          checked={gender === "Male"}
                        />
                        <label
                          htmlFor="Male"
                          className="dark:text-slate-300 text-slate-800"
                        >
                          Male
                        </label>
                      </p>

                      <p>
                        <input
                          type="radio"
                          name="gender"
                          id="Female"
                          className="form-radio mr-2"
                          value="Female"
                          onChange={(e) => setGender(e.target.value)}
                          checked={gender === "Female"}
                        />
                        <label
                          htmlFor="Female"
                          className="dark:text-slate-300 text-slate-800"
                        >
                          Female
                        </label>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4 justify-center items-center w-full">
                  <button
                    className="bg-sky-500 rounded-md py-1.5 px-3"
                    onClick={handleFormSubmit}
                    disabled={
                      !studentId ||
                      !validName ||
                      !validEmail ||
                      !validPhone ||
                      !validAddress ||
                      !gender
                    }
                  >
                    Submit
                  </button>
                  <Link
                    to="/admin/students/"
                    className="bg-red-500 rounded-md py-1.5 px-3"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}

        {excelForm && (
          <div className="flex flex-col w-full items-center justify-center my-10">
            <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8 lg:px-12 border border-slate-500">
              <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
                Register Student
              </h1>
              <div className="id mt-12 mb-8 relative ">
                <label
                  htmlFor="id"
                  className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
                >
                  Excel File
                </label>
                <input
                  type="file"
                  name="id"
                  id="id"
                  onChange={(e) => setExcelFile(e.target.files[0])}
                  required
                  className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
                />
              </div>{" "}
              <div className="mt-10">
                <button
                  className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
                  disabled={!excelFile}
                  onClick={handleSubmitBtn}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      {/* Form end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default AddStudent;

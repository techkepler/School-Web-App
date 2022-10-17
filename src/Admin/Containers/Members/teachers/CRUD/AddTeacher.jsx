import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

const AddTeacher = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const imageRef = useRef();
  const resetValue = () => {
    imageRef.current.value = "";
  };

  const [teacherId, setTeacherId] = useState("");

  const generateId = () => {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  };

  const generateIdBtn = () => {
    setTeacherId(generateId());
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

  const [subject, setSubject] = useState("");
  const [validSubject, setValidSubject] = useState(false);
  const [subFocus, setSubFoucs] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);

  const [faculty, setFaculty] = useState(false);
  const [image, setImage] = useState("");
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
    setValidSubject(OTHER_REGEX.test(subject));
  }, [subject]);

  useEffect(() => {
    setValidAddress(OTHER_REGEX.test(address));
  }, [address]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", teacherId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("subject", subject);
    formData.append("faculty", faculty);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("image", image);

    try {
      let res = await axiosAdmin.post("teachers/crud/teacher/", formData);
      setSucsMsg(res.status);
      setTeacherId("");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setFaculty("");
      setAddress("");
      setGender("");
      resetValue();
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

  return (
    <>
      <AdminNav />

      {/* Form start here */}

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 201 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Teacher Added Successfully.
            </p>
          </div>
        )}
        {errMsg.msg && (
          <div className="items-center w-full absolute  flex   justify-center ">
            <p className="px-4  text-base md:w-[60%] capitalize py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}
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
                    id="teacherId"
                    name="teacherId"
                    value={teacherId}
                    readOnly
                    required
                    className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                  />

                  <button
                    className="px-2 py-1 rounded-sm my-1 bg-sky-500"
                    disabled={teacherId.length > 0}
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
                    <span style={{ color: themeColor }}>Email</span>
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
                    <span className="text-sm block">
                      Must be a valid email.
                    </span>
                  </p>
                </div>
                <div className="  w-full md:w-[48%]">
                  <label
                    htmlFor="tel"
                    className="block relative text-slate-700 dark:text-slate-300 my-1"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>Phone</span>
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
                <div className="  w-full md:w-[48%]">
                  <label
                    htmlFor="subject"
                    className="block relative text-slate-700 dark:text-slate-300 my-1"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>Subject</span>
                    <RiCheckFill
                      className={`${
                        validSubject
                          ? "text-green-600 inline ml-2 text-lg"
                          : "hidden"
                      }`}
                    />

                    <RiCloseFill
                      className={`${
                        validSubject || !subject
                          ? "hidden"
                          : "text-red-600 inline ml-2 text-lg"
                      }`}
                    />
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    onFocus={() => setSubFoucs(true)}
                    onBlur={() => setSubFoucs(false)}
                    required
                    placeholder="Science"
                    className="form-input dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                  />
                  <p
                    className={`warning ${
                      subject && subFocus && !validSubject ? "mt-1" : "hidden"
                    }`}
                    style={{ color: themeColor }}
                  >
                    <RiErrorWarningLine
                      className="text-xl "
                      style={{ color: themeColor }}
                    />
                    <p className="text-sm">
                      3 to 50 characters. <br /> Must begin with a letter.
                    </p>
                  </p>
                </div>

                <div className="w-full md:w-[48%]">
                  <label
                    htmlFor="faculty"
                    className="block relative text-slate-700 dark:text-slate-300 my-1"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>Faculty</span>
                  </label>
                  <select
                    name="faculty"
                    id="faculty"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    required
                    className="w-full  py-2.5 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <option value="">--Select One--</option>
                    <option value="Primary Level">Primary Level</option>
                    <option value="Secondary Level">Secondary Level</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-wrap gap-6 items-center justify-center my-4">
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
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "male"}
                      />
                      <label
                        htmlFor="male"
                        className="dark:text-slate-300 text-slate-800"
                      >
                        Male
                      </label>
                    </p>

                    <p>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="form-radio mr-2"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "female"}
                      />
                      <label
                        htmlFor="female"
                        className="dark:text-slate-300 text-slate-800"
                      >
                        Female
                      </label>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-wrap gap-6 items-center justify-center my-4">
                <div className="w-full md:w-[48%]">
                  <label
                    htmlFor="image"
                    className="block relative text-slate-700 dark:text-slate-300 my-1"
                  >
                    <span className="text-red-500 mr-1">*</span>
                    <span style={{ color: themeColor }}>Image</span>
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    ref={imageRef}
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-input  dark:bg-slate-900 dark:text-slate-300 py-2.5 px-3  w-full"
                  />
                </div>
              </div>

              <div className="mt-10 flex gap-4 justify-center items-center w-full">
                <button
                  className="bg-sky-500 rounded-md py-1.5 px-3"
                  onClick={handleFormSubmit}
                  disabled={
                    !teacherId ||
                    !validName ||
                    !validEmail ||
                    !validPhone ||
                    !validAddress ||
                    !validSubject ||
                    !faculty ||
                    !gender ||
                    !image
                  }
                >
                  Submit
                </button>
                <Link
                  to="/admin/teachers/"
                  className="bg-red-500 rounded-md py-1.5 px-3"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Form end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default AddTeacher;

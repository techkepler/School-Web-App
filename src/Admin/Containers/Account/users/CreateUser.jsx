import React, { useState, useEffect } from "react";
import { RiCheckFill, RiCloseFill, RiErrorWarningLine } from "react-icons/ri";
import { axiosAdmin } from "../../../../server/Axios";

const USER_REGEX = /^[A-z0-9][A-z0-9]{7,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{7,24}$/;

const CreateUser = () => {
  const [userId, setUserId] = useState("");
  const [validUserId, setValidUserId] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userRole, setUserRole] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPass, setValidConfirmPass] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  useEffect(() => {
    setValidUserId(USER_REGEX.test(userId));
  }, [userId]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirmPass(password === confirmPassword);
  }, [password, confirmPassword]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uid", userId);
    formData.append("role", userRole);
    formData.append("password", password);
    formData.append("confirm_password", confirmPassword);

    try {
      let res = await axiosAdmin.post("users/create/", formData);
      setSucsMsg(res.status);
      setUserId("");
      setUserRole("");
      setPassword("");
      setConfirmPassword("");

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
    <div className="my-5 flex justify-center items-center">
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex justify-center">
          <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
            User Created Successfully.
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
        className={`box-border rounded-md     md:px-8 py-7 dark:bg-gray-800   w-full `}
      >
        <div className="flex flex-col w-full items-center justify-center ">
          <form className="my-10 dark:bg-slate-900  w-full md:w-[32rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
            <h1 className="text-2xl md:text-3xl  text-slate-800 dark:text-slate-300 text-center">
              Create User
            </h1>
            <div className="stu_id mt-12 mb-8 relative">
              <label
                htmlFor="stu_id"
                className="absolute left-4 px-1 block -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
              >
                User Id
                <RiCheckFill
                  className={`${
                    validUserId
                      ? "valid text-xl ml-2 mr-1 text-green-600 inline"
                      : "hidden"
                  }`}
                />
                <RiCloseFill
                  className={
                    validUserId || !userId
                      ? "hidden"
                      : "invalid text-xl ml-2 mr-1 text-red-600 inline"
                  }
                />
              </label>
              <input
                type="text"
                name="userId"
                id="id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md "
              />
              <p
                id="uidnotes"
                className={`${
                  userFocus && userId && !validUserId
                    ? "text-slate-600 dark:text-slate-400"
                    : "hidden"
                }`}
              >
                <RiErrorWarningLine className="text-2xl" />
                7 to 15 characters.
                <br />
                Must begin with a letter or number.
                <br />
                Letters, numbers allowed.
              </p>
            </div>

            <div className="stu_name my-10 relative">
              <label
                htmlFor="password"
                className="absolute left-4 px-1 block -top-3  bg-white dark:bg-slate-900 text-sm text-sky-600"
              >
                User Role
              </label>
              <select
                name="userRole"
                id="role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="form-select dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md "
              >
                <option value="">--Select One--</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Staff">Staff</option>
              </select>
            </div>

            <div className="stu_name my-10 relative">
              <label
                htmlFor="password"
                className="absolute left-4 px-1 block -top-3  bg-white dark:bg-slate-900 text-sm text-sky-600"
              >
                Password
                <RiCheckFill
                  className={`${
                    validPassword
                      ? "valid text-xl ml-2 mr-1 text-green-600 inline"
                      : "hidden"
                  }`}
                />
                <RiCloseFill
                  className={
                    validPassword || !password
                      ? "hidden"
                      : "invalid text-xl ml-2 mr-1 text-red-600 inline"
                  }
                />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                value={password}
                className="form-input dark:bg-slate-900  dark:text-slate-300 px-2 py-3 w-full rounded-md "
              />
              <p
                id="uidnotes"
                className={`${
                  passwordFocus && password && !validPassword
                    ? "text-slate-600 dark:text-slate-400"
                    : "hidden"
                }`}
              >
                <RiErrorWarningLine className="text-2xl" />
                8 to 12 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="stu_name my-10 relative">
              <label
                htmlFor="name"
                className="absolute left-4 px-1 block -top-3  bg-white dark:bg-slate-900 text-sm text-sky-600"
              >
                Confirm Password
                <RiCheckFill
                  className={`${
                    validConfirmPass && confirmPassword
                      ? "valid text-xl ml-2 mr-1 text-green-600 inline"
                      : "hidden"
                  }`}
                />
                <RiCloseFill
                  className={
                    validConfirmPass || !confirmPassword
                      ? "hidden"
                      : "invalid text-xl ml-2 mr-1 text-red-600 inline"
                  }
                />
              </label>
              <input
                type="password"
                name="name"
                id="name"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setConfirmFocus(true)}
                onBlur={() => setConfirmFocus(false)}
                value={confirmPassword}
                className="form-input dark:bg-slate-900  dark:text-slate-300 px-2 py-3 w-full rounded-md "
              />
              <p
                id="pwdnote"
                className={
                  confirmFocus && !validConfirmPass
                    ? "text-slate-600 dark:text-slate-400"
                    : "hidden"
                }
              >
                <RiErrorWarningLine className="text-xl" />
                Must match the first password input field.
              </p>
            </div>
            <div className="mt-10">
              <button
                className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
                onClick={handleFormSubmit}
                disabled={
                  !validUserId ||
                  !validPassword ||
                  !validConfirmPass ||
                  !userRole
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

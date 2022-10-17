import React, { useRef, useState, useEffect } from "react";
import { RiErrorWarningLine, RiCloseFill, RiCheckFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { axiosAdmin } from "../../../../server/Axios";
import StaffNav from "../../../layouts/navbar/StaffNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ChangePass = () => {
  const { isSideBar, isColorBar, setCurrentLocation, auth } = useAuth();

  useEffect(() => {
    setCurrentLocation("Password Change");
  }, [setCurrentLocation]);

  const errRef = useRef();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [status, setStatus] = useState({
    msg: null,
  });

  const [errorMsg, setErrorMsg] = useState({
    msg: null,
  });

  const oldPassChange = (e) => {
    setOldPassword(e.target.value);
  };

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v2 = PWD_REGEX.test(pwd);
    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      let res = await axiosAdmin.post("users/password/change/", {
        uid: auth.uid,
        old_password: oldPassword,
        password: pwd,
        confirm_password: matchPwd,
      });
      setStatus({ msg: res.status });
      setOldPassword("");
      setPwd("");
      setMatchPwd("");
      setTimeout(() => {
        setStatus({ msg: null });
        navigate("/admin/profile/");
      }, 2000);
    } catch (error) {
      if (!error?.response) {
        setErrorMsg({ msg: "No response from server." });
        setTimeout(() => {
          setErrorMsg({ msg: null });
        }, 4000);
      } else if (error?.response?.status === 500) {
        setErrorMsg({ msg: "Internal Server Error." });
        setTimeout(() => {
          setErrorMsg({ msg: null });
        }, 4000);
      } else {
        setErrorMsg({ msg: error.response.data.errors });
        setTimeout(() => {
          setErrorMsg({ msg: null });
        }, 4000);
      }
    }
  };
  return (
    <>
      <StaffNav />

      <section
        className={`students mt-2 px-3 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {status.msg === 200 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Password Changed Successfully
            </p>
          </div>
        )}

        {errorMsg.msg && (
          <div className="items-center w-full absolute  flex   justify-center ">
            <p className="px-4  text-base md:w-[60%]  py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errorMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}

        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="flex justify-center items-center">
          <div className="my-20 md:my-24  bg-slate-100 dark:bg-[#111827] w-full md:w-[32rem] py-12 px-4 rounded-md md:px-8  lg:px-12 ">
            <h1 className="text-2xl md:text-3xl text-slate-700 dark:text-sate-700 dark:text-gray-400 text-center">
              Change Password
            </h1>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="usr-old-password relative group mb-5">
                <label
                  htmlFor="oldpassword"
                  className="block pb-1 text-lg  text-sky-600 "
                >
                  Old Password:
                </label>
                <input
                  type="password"
                  id="oldpassword"
                  onChange={oldPassChange}
                  value={oldPassword}
                  required
                  className="w-full py-4 bg-slate-100 dark:bg-[#111827] group rounded-md  text-sate-700 dark:text-gray-400 px-2"
                />
              </div>

              <div className="usr-password relative group mb-5">
                <label
                  htmlFor="password"
                  className="block pb-1 text-lg  text-sky-600 "
                >
                  Password:
                  <RiCheckFill
                    className={`${
                      validPwd
                        ? "valid text-2xl  text-green-600 inline"
                        : "hidden"
                    }`}
                  />
                  <RiCloseFill
                    className={
                      validPwd || !pwd
                        ? "hidden"
                        : "invalid text-2xl text-red-600 inline"
                    }
                  />
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="w-full py-4 bg-slate-100 dark:bg-[#111827] group rounded-md  text-sate-700 dark:text-gray-400 px-2"
                />

                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd
                      ? "text-sate-700 dark:text-gray-400"
                      : "hidden"
                  }
                >
                  <RiErrorWarningLine className="text-2xl" />
                  8 to 24 characters.
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

              <div className="usr-confirm_password relative group mb-5">
                <label
                  htmlFor="confirm_password"
                  className="block pb-1 text-lg  text-sky-600 "
                >
                  Confirm Password:
                  <RiCheckFill
                    className={`${
                      validMatch && matchPwd
                        ? "valid text-2xl  text-green-600 inline"
                        : "hidden"
                    }`}
                  />
                  <RiCloseFill
                    className={
                      validMatch || !matchPwd
                        ? "hidden"
                        : "invalid text-2xl text-red-600 inline"
                    }
                  />
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="w-full py-4 bg-slate-100 dark:bg-[#111827] group rounded-md  text-sate-700 dark:text-gray-400 px-2"
                />

                <p
                  id="pwdnote"
                  className={
                    matchFocus && !validMatch
                      ? "text-sate-700 dark:text-gray-400"
                      : "hidden"
                  }
                >
                  <RiErrorWarningLine className="text-2xl" />
                  Must match the first password input field.
                </p>
              </div>

              <div className="mt-14">
                <button
                  className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
                  disabled={
                    oldPassword.length < 1 || !validPwd || !validMatch
                      ? true
                      : false
                  }
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default ChangePass;

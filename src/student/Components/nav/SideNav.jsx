import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { studentSideBar } from "../../Data/NavBarList";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FcOrgUnit, FcUpRight } from "react-icons/fc";
import { useAuth } from "../../../contexts/GlobalProvider";
import LogOut from "../../Containers/Account/logout/logout";
const StaffSideNav = () => {
  const { isSideBar, setIsSideBar, themeColor, isLinkActive, setAuth } =
    useAuth();
  const logout = LogOut();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    setAuth({ token: "", role: [] });
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav
      className={`fixed overflow-y-scroll h-full w-72 dark:bg-gray-900 bg-slate-100 transition-alll duration-300 origin-left z-50  ${
        isSideBar ? "scale-100 " : "scale-0"
      }`}
    >
      <p className="flex absolute right-4 top-3 items-center justify-center h-12 w-12 hover:bg-slate-200 dark:hover:bg-slate-300 rounded-full">
        <FaAngleDoubleLeft
          className=" text-3xl  cursor-pointer"
          onClick={(close) => setIsSideBar(!close)}
          style={{ color: themeColor }}
        />
      </p>
      <IoSchoolSharp
        className="text-4xl  mt-4 mx-4"
        style={{ color: themeColor }}
      />
      <h1
        className="text-2xl font-semibold mx-4 mt-2 "
        style={{ color: themeColor }}
      >
        Batsyayan Academy
      </h1>

      <section className="nav-items px-4 my-10">
        <h1 className="uppercase text-lg  mb-4" style={{ color: themeColor }}>
          Dashboard
        </h1>
        <Link
          to="/student/"
          className={`flex items-center gap-4 px-3 py-2 rounded-md ${
            isLinkActive === "dashboard" && `bg-[#06bdf8]`
          } `}
        >
          <FcOrgUnit className="text-xl" />
          <p
            className={`${
              isLinkActive === "dashboard"
                ? "text-slate-800"
                : "text-slate-800 dark:text-[#9bbae7]"
            }`}
          >
            Overview
          </p>
        </Link>

        {studentSideBar.map((data, index) => (
          <Link
            to={`/student/${data.url}/`}
            className={`flex items-center gap-4 px-3 py-2 my-4 rounded-md  ${
              isLinkActive === `${data.name.toLowerCase()}`
                ? `bg-[#06bdf8]`
                : "hover:bg-slate-300 dark:hover:bg-slate-700"
            } `}
            key={index}
          >
            {data.icon}
            <p
              className={`${
                isLinkActive === data.name.toLowerCase()
                  ? "text-slate-800"
                  : "text-slate-800 dark:text-[#9bbae7]"
              } 
              `}
            >
              {data.name}
            </p>
          </Link>
        ))}
        <button
          onClick={handleLogOut}
          className={`flex items-center gap-4 px-3 py-2 my-4 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 w-full`}
        >
          <FcUpRight className="text-xl " />
          <p className="text-slate-800 dark:text-[#9bbae7]">Logout</p>
        </button>
      </section>
    </nav>
  );
};

export default StaffSideNav;

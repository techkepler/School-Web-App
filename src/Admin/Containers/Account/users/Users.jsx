import React, { useState, useEffect } from "react";

import CreateUser from "./CreateUser";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";
import ViewEvents from "./ViewUser";
import ChangePassword from "./ChangePassword";

const Users = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();
  const [addInfo, setAddInfo] = useState(false);
  const [viewInfo, setViewInfo] = useState(true);
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsLinkActive("account");
    localStorage.setItem("whichLink", "account");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Account");
  }, [setCurrentLocation]);

  const isAddInfoClick = () => {
    setAddInfo(true);
    setViewInfo(false);
    setIsPassword(false);
  };

  const isViewInfoClick = () => {
    setViewInfo(true);
    setAddInfo(false);
    setIsPassword(false);
  };

  const isPasswordClick = () => {
    setViewInfo(false);
    setAddInfo(false);
    setIsPassword(true);
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
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Batsyayan Users
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Account</span>
          </p>
        </div>
        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Users</span>
              <span>/</span>
              <span>Account</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-10">
            <button
              className={`${
                addInfo && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isAddInfoClick}
            >
              Create User
            </button>
            <button
              className={`${
                isPassword && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isPasswordClick}
            >
              Reset Password
            </button>
            <button
              className={`${
                viewInfo && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewInfoClick}
            >
              View Users
            </button>
          </div>
        </div>

        {addInfo && <CreateUser />}
        {isPassword && <ChangePassword />}
        {viewInfo && <ViewEvents />}
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Users;

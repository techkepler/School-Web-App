import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import StaffSideNav from "../../Components/nav/SideNav";
import Notification from "../../Components/nav/Notification";
import AdminImage from "../../Assets/avatar.jpg";
import { useAuth } from "../../../contexts/GlobalProvider";
import Message from "../../Components/nav/Message";

const StaffNav = () => {
  const {
    isSideBar,
    setIsSideBar,
    setIsColorBar,
    themeColor,
    screenSize,
    setScreenSize,
    isNotification,
    setIsNotification,
    isMessage,
    setIsMessage,
  } = useAuth();

  const onBarClick = () => {
    setIsSideBar(!isSideBar);
    if (screenSize < 1000) {
      setIsColorBar(false);
      setIsMessage(false);
      setIsNotification(false);
    }
  };

  const notficationIconClick = () => {
    setIsNotification(!isNotification);
    setIsMessage(false);
    if (screenSize < 1000) {
      setIsColorBar(false);
      setIsSideBar(false);
    }
  };

  const msgIconClick = () => {
    setIsMessage(!isMessage);
    setIsNotification(false);

    if (screenSize < 1000) {
      setIsColorBar(false);
      setIsSideBar(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 1023) {
      setIsSideBar(false);
    } else {
      setIsSideBar(true);
    }
  }, [screenSize, setIsSideBar]);

  return (
    <section className="admin-navbar h-16 ">
      <header className="h-16 admin-navbar z-40 dark:bg-gray-900 w-full fixed flex justify-between items-center bg-slate-100 px-4 md:px-5 lg:px-8">
        <p className="h-10 w-10 rounded-full px-2 py-2 hover:bg-slate-200 flex items-center justify-center">
          <AiOutlineMenu
            className={`text-xl cursor-pointer `}
            onClick={onBarClick}
            style={{ color: themeColor }}
          />
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          <p
            className={`relative h-12 w-12 rounded-full  flex items-center justify-center  ${
              isMessage === true
                ? "bg-slate-200"
                : "lg:hover:bg-slate-200 lg:dark:hover:bg-slate-300"
            }`}
          >
            <BiMessage
              className="text-2xl  cursor-pointer"
              style={{ color: themeColor }}
              onClick={msgIconClick}
            />
            <span className="flex h-2 w-2 absolute top-1.5 right-2 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </p>
          <p
            className={`relative h-12 w-12 rounded-full  flex items-center justify-center  ${
              isNotification === true
                ? "bg-slate-200"
                : "lg:hover:bg-slate-200 lg:dark:hover:bg-slate-300"
            }`}
          >
            <IoMdNotificationsOutline
              className="text-2xl cursor-pointer"
              style={{ color: themeColor }}
              onClick={notficationIconClick}
            />

            <span className="flex h-2 w-2 absolute top-2 right-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
          </p>

          <Link to="/student/profile/" className=" ">
            <img
              src={AdminImage}
              alt="Admin Pic"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full  "
            />
          </Link>
        </div>
      </header>
      <StaffSideNav />
      <Notification />
      <Message />
    </section>
  );
};

export default StaffNav;

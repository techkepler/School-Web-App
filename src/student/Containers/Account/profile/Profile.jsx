import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminImage from "../../../Assets/avatar.jpg";
import StaffNav from "../../../layouts/navbar/StaffNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";

const Profile = () => {
  const {
    themeColor,
    isSideBar,
    isColorBar,
    setCurrentLocation,
    setIsLinkActive,
    auth,
  } = useAuth();

  useEffect(() => {
    setIsLinkActive("profile");
    localStorage.setItem("whichLink", "profile");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Profile");
  }, [setCurrentLocation]);

  return (
    <>
      <StaffNav />

      {/* addInfo start here */}

      <section
        className={`students mt-2 px-2 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10 px-2">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Batsyayan Users
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>User</span>
            <span>/</span>
            <span>Profile</span>
          </p>
        </div>

        <div className="w-full justify-center items-center flex flex-col my-10 gap-8">
          <div className="bg-slate-100 dark:bg-[#111827] w-[95%] md:w-[80%] rounded-md px-4 py-8 md:py-10 lg:py-12 mx-4 flex flex-col gap-4 lg:flex-row">
            <div className="lg:w-[28%]">
              <h1 className="text-slate-700 dark:text-slate-400 text-xl ">
                Basic Details
              </h1>
            </div>
            <div className="flex flex-col gap-4  lg:w-[68%] mt-4 md:mt-0">
              <div
                className="bg-cover bg-center h-12 w-12 rounded-full"
                style={{ background: `url(${AdminImage})` }}
              >
                <img src={AdminImage} alt="" className="rounded-full" />
              </div>
              <div className="usr-name mt-4 ">
                <div className=" relative w-full flex">
                  <div className="w-[95%] md:w-[80%] xl:w-[70%] border-[1px] border-dashed bg-slate-100 dark:bg-[#111827]  dark:text-gray-400 text-slate-700 px-2 form-input rounded-md ">
                    {auth.uid}
                  </div>
                  <p className="absolute text-sm -top-3 px-1 text-sky-600 left-4 z-0 dark:bg-[#111827] bg-slate-100">
                    User Id
                  </p>
                </div>
              </div>

              <div className="usr-name mt-4 ">
                <div className=" relative w-full flex">
                  <div className="w-[95%] md:w-[80%] xl:w-[70%] border-[1px] border-dashed bg-slate-100 dark:bg-[#111827]  dark:text-gray-400 text-slate-700 px-2 form-input rounded-md ">
                    {auth.name}
                  </div>
                  <p className="absolute text-sm -top-3 px-1 text-sky-600 left-4 z-0 dark:bg-[#111827] bg-slate-100">
                    Name
                  </p>
                </div>
              </div>
              <div className="usr-email mt-4 ">
                <div className=" relative w-full flex">
                  <div className="w-[95%] md:w-[80%] xl:w-[70%] border-[1px] border-dashed bg-slate-100 dark:bg-[#111827]  dark:text-gray-400 text-slate-700 px-2 form-input rounded-md ">
                    {auth.email}
                  </div>
                  <p className="absolute text-sm -top-3 px-1 text-sky-600 left-4 z-0 bg-slate-100 dark:bg-[#111827]">
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-[#111827] w-[95%] md:w-[80%] rounded-md px-4 mx-4 flex flex-col gap-4 lg:flex-row py-8 md:py-10 lg:py-12">
            <div className="text-lg lg:w-[28%] md:pb-4">
              <h1 className="text-slate-700 dark:text-slate-400 text-xl ">
                Change Password
              </h1>
            </div>
            <div className="flex flex-col gap-4 lg:w-[68%] mt-4 md:mt-0 md:pb-4">
              <p className="text-base text-slate-700 dark:text-gray-400">
                Change your password regularly to keep your account safe and
                secure.
              </p>
              <div className="mt-3">
                <Link
                  to="/student/profile/change/password/"
                  className="bg-sky-500 px-2 py-2 rounded-md"
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* addInfo end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Profile;

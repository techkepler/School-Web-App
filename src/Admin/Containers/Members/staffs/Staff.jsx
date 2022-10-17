import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { teacherDashboardItems } from "../../../Data/HomeAdmin";
import StudentChart from "../../../Chart/StudentChart";
import FeeCollectionChart from "../../../Chart/FeeCollectionChart";
import StuRatioChart from "../../../Chart/StuRatioChart";
import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import ColorSettings from "../../../Components/nav/ColorSettings";

const Staff = () => {
  const {
    isSideBar,
    isColorBar,
    themeColor,
    setCurrentLocation,
    setIsLinkActive,
  } = useAuth();

  useEffect(() => {
    setIsLinkActive("staffs");
    localStorage.setItem("whichLink", "staffs");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Staffs");
  }, [setCurrentLocation]);

  return (
    <>
      <AdminNav />
      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <h2
          className="text-center text-xl md:text-2xl font-medium my-10 text-slate-700 dark:text-slate-300"
          style={{ color: themeColor }}
        >
          Admin Staff Section
        </h2>
        <div className="flex items-center justify-center flex-col ">
          <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-center md:w-[90%] lg:w-[80%] w-full mb-10">
            {teacherDashboardItems("Staff").map((data, index) => (
              <Link
                to={`/admin/staffs/${data.link}/`}
                key={index}
                className={`staff w-[48%] md:w-[30%] flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 ${
                  isSideBar || isColorBar ? "h-28 md:h-24" : "h-28 md:h-32"
                }`}
              >
                {data.icon}
                <p
                  className="dark:text-slate-300 text-xs font-semibold capitalize"
                  style={{ color: themeColor }}
                >
                  {data.name}
                </p>
              </Link>
            ))}
          </div>

          <StudentChart title={"Staffs"} />
          <FeeCollectionChart title={"Staffs Payment Report"} />
          <StuRatioChart title={"Staffs"} />
        </div>
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Staff;

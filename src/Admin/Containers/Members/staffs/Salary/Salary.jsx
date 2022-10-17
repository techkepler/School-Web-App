import React, { useState, useEffect } from "react";

import AddSalary from "./AddSalary";
import Payement from "./Payment";
import UpdateSalary from "./UpdateSalary";
import SalaryExcel from "./ExcelSalary";
import ViewTeacherSalary from "./ViewSalary";

import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const TeacherSalary = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [isPayment, setIsPayment] = useState(true);
  const [isAddSalary, setIsAddSalary] = useState(false);
  const [updateSalary, setUpdateSalary] = useState(false);
  const [isExcelForm, setIsExcelForm] = useState(false);
  const [isView, setIsView] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get("staffs/crud/staffs/public");
      setData(res.data);
    };
    fetchData();
  }, []);

  const isPaymentClick = () => {
    setIsPayment(true);
    setUpdateSalary(false);
    setIsAddSalary(false);
    setIsView(false);
    setIsExcelForm(false);
  };

  const isUpdateClick = () => {
    setUpdateSalary(true);
    setIsAddSalary(false);
    setIsView(false);
    setIsExcelForm(false);
    setIsPayment(false);
  };

  const isSlaryAddClick = () => {
    setIsAddSalary(true);
    setUpdateSalary(false);
    setIsView(false);
    setIsExcelForm(false);
    setIsPayment(false);
  };

  const isExcelFormClick = () => {
    setIsExcelForm(true);
    setIsAddSalary(false);
    setUpdateSalary(false);
    setIsView(false);
    setIsPayment(false);
  };

  const isViewClick = () => {
    setIsView(true);
    setIsExcelForm(false);
    setIsAddSalary(false);
    setUpdateSalary(false);
    setIsPayment(false);
  };

  return (
    <>
      <AdminNav />

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        <div className="mt-4 mb-10">
          <h1 className="dark:text-[#9bbae7] text-slate-700 text-2xl">
            Staffs Salary
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Staffs</span>
          </p>
        </div>

        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Staff</span>
              <span>/</span>
              <span>Salary</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-8">
            <button
              className={`${
                isPayment && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isPaymentClick}
            >
              Payement
            </button>
            <button
              className={`${
                updateSalary && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isUpdateClick}
            >
              Update
            </button>

            <button
              className={`${
                isAddSalary && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isSlaryAddClick}
            >
              Add
            </button>

            <button
              className={`${
                isExcelForm && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isExcelFormClick}
            >
              Excel
            </button>

            <button
              className={`${
                isView && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isViewClick}
            >
              View
            </button>
          </div>
        </div>

        {isAddSalary && <AddSalary data={data} />}
        {isPayment && <Payement data={data} />}
        {updateSalary && <UpdateSalary />}
        {isExcelForm && <SalaryExcel />}
        {isView && <ViewTeacherSalary />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default TeacherSalary;

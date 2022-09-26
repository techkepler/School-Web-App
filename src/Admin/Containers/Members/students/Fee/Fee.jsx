import React, { useState, useEffect } from "react";

import AddFee from "./AddFee";
import Payment from "./Payment";
import UpdateFee from "./UpdateFee";
import SalaryFee from "./ExcelFee";
import ViewStudentFee from "./ViewFee";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const StudentFee = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [isPayment, setIsPayment] = useState(true);
  const [addFee, setAddFee] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isExcelForm, setIsExcelForm] = useState(false);
  const [isView, setIsView] = useState(false);

  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosAdmin.get("teachers/crud/teachers/public");
      setTeacherData(res.data);
    };
    fetchTeacher();
  }, []);

  const isPaymentClick = () => {
    setIsPayment(true);
    setIsUpdate(false);
    setAddFee(false);
    setIsView(false);
    setIsExcelForm(false);
  };

  const isUpdateClick = () => {
    setIsUpdate(true);
    setAddFee(false);
    setIsView(false);
    setIsExcelForm(false);
    setIsPayment(false);
  };

  const isAddFeeClick = () => {
    setAddFee(true);
    setIsUpdate(false);
    setIsView(false);
    setIsExcelForm(false);
    setIsPayment(false);
  };

  const isExcelFormClick = () => {
    setIsExcelForm(true);
    setAddFee(false);
    setIsUpdate(false);
    setIsView(false);
    setIsPayment(false);
  };

  const isViewClick = () => {
    setIsView(true);
    setIsExcelForm(false);
    setAddFee(false);
    setIsUpdate(false);
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
            Student Fee
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Students</span>
          </p>
        </div>

        <div className="border dark:border-slate-600 "></div>
        <div className="flex justify-center md:justify-between ">
          <div className="hidden md:block">
            <h1 className="text-slate-700 dark:text-[#9bbae7] font-bold text-xl">
              Batsyayan
            </h1>
            <p className="flex gap-2" style={{ color: themeColor }}>
              <span>Student</span>
              <span>/</span>
              <span>Fee</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap  text-sm lg:text-base font-medium dark:text-[#9bbae7] text-slate-600 gap-8">
            <button
              className={`${
                isPayment && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isPaymentClick}
            >
              Payment
            </button>
            <button
              className={`${
                isUpdate && "border-t-2 border-sky-500 text-sky-500 "
              }`}
              onClick={isUpdateClick}
            >
              Update
            </button>

            <button
              className={`${
                addFee && "border-t-2 border-sky-500 text-sky-500"
              }`}
              onClick={isAddFeeClick}
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

        {addFee && <AddFee teacherData={teacherData} />}
        {isPayment && <Payment teacherData={teacherData} />}
        {isUpdate && <UpdateFee />}
        {isExcelForm && <SalaryFee />}
        {isView && <ViewStudentFee />}
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default StudentFee;

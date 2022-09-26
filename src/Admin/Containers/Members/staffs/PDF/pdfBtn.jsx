import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";

import staffPdf from "../../../../Docs/staff/Staff";
import teacherSalaryPdf from "../../../../Docs/teacher/Salary";
import teacherAttendancePdf from "../../../../Docs/teacher/Attendance";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";

const PdfBtn = () => {
  const { themeColor } = useAuth();
  const [staff, setStaff] = useState([]);
  const [salary, setSalary] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let staff = await axiosAdmin.get("staffs/crud/staffs/public");
      let salary = await axiosAdmin.get("staffs/crud/salarys/public");
      let attendance = await axiosAdmin.get("staffs/crud/attendances/public");
      setStaff(staff.data);
      setSalary(salary.data);
      setAttendance(attendance.data);
    };
    fetchData();
  }, []);

  const staffsHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Gender", key: "gender" },
    { label: "Position", key: "position" },
    { label: "Address", key: "address" },
  ];

  const salaryHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Monthly Salary", key: "monthly_salary" },
    { label: "Paid Salary", key: "paid_salary" },
    { label: "Unpaid Salary", key: "unpaid_salary" },
    { label: "Total Salary", key: "total_salary" },
  ];

  const attendanceHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Absent Day", key: "absent_day" },
    { label: "Attend Day", key: "attend_day" },
    { label: "Total Day", key: "total_day" },
  ];

  return (
    <>
      <button
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
        onClick={() => {
          staffPdf(staff);
        }}
      >
        <FaFilePdf className="text-red-500 dark:text-red-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Staff PDF
        </p>
      </button>
      <CSVLink
        data={staff}
        headers={staffsHeaders}
        filename={`asgardTeacher.csv`}
        className="staff flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
      >
        <FaFileExcel className=" text-green-500 dark:text-green-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Staff CSV
        </p>
      </CSVLink>
      <button
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
        onClick={() => {
          teacherSalaryPdf(salary);
        }}
      >
        <FaFilePdf className="text-red-500 dark:text-red-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Salary PDF
        </p>
      </button>
      <CSVLink
        data={salary}
        headers={salaryHeaders}
        filename={`teacherSalary.csv`}
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
      >
        <FaFileExcel className=" text-green-500 dark:text-green-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Salary CSV
        </p>
      </CSVLink>
      <button
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
        onClick={() => {
          teacherAttendancePdf(attendance);
        }}
      >
        <FaFilePdf className="text-red-500 dark:text-red-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Attendance PDF
        </p>
      </button>
      <CSVLink
        data={attendance}
        headers={attendanceHeaders}
        filename={`teacherAttendance.csv`}
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
      >
        <FaFileExcel className=" text-green-500 dark:text-green-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Attendance CSV
        </p>
      </CSVLink>
    </>
  );
};

export default PdfBtn;

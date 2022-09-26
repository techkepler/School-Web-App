import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";

import teacherPdf from "../../../../Docs/teacher/Teacher";
import teacherSalaryPdf from "../../../../Docs/teacher/Salary";
import teacherAttendancePdf from "../../../../Docs/teacher/Attendance";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";

const StaffPdfBtn = () => {
  const { themeColor } = useAuth();
  const [teacher, setTeacher] = useState([]);
  const [salary, setSalary] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let teacher = await axiosAdmin.get("teachers/crud/teachers/public");
      let salary = await axiosAdmin.get("teachers/crud/salarys/public");
      let attendance = await axiosAdmin.get("teachers/crud/attendances/public");
      setTeacher(teacher.data);
      setSalary(salary.data);
      setAttendance(attendance.data);
    };
    fetchData();
  }, []);

  const teacherHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Subject", key: "subject" },
    { label: "Faculty", key: "faculty" },
    { label: "Gender", key: "gender" },
    { label: "Phone Number", key: "phone" },
    { label: "Email", key: "email" },
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
          teacherPdf(teacher);
        }}
      >
        <FaFilePdf className="text-red-500 dark:text-red-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          teacher PDF
        </p>
      </button>
      <CSVLink
        data={teacher}
        headers={teacherHeaders}
        filename={`Batsyayanstaff.csv`}
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-[30%]"
      >
        <FaFileExcel className=" text-green-500 dark:text-green-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          Teacher CSV
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
        filename={`staffSalary.csv`}
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
        filename={`staffAttendance.csv`}
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

export default StaffPdfBtn;

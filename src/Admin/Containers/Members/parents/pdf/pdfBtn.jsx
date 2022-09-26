import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";

import parentPdf from "../../../../Docs/parent/Parent";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";

const PdfBtn = () => {
  const { themeColor } = useAuth();
  const [parent, setParent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let parent = await axiosAdmin.get("parents/crud/parents/public");
      setParent(parent.data);
    };
    fetchData();
  }, []);

  const parentsHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Address", key: "address" },
  ];

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3 md:gap-6">
      <button
        className="teacher flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4 w-[48%] md:w-52"
        onClick={() => {
          parentPdf(parent);
        }}
      >
        <FaFilePdf className="text-red-500 dark:text-red-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          parent PDF
        </p>
      </button>
      <CSVLink
        data={parent}
        headers={parentsHeaders}
        filename={`asgardTeacher.csv`}
        className="parent flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-700 py-4 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer gap-4  w-[48%] md:w-52"
      >
        <FaFileExcel className=" text-green-500 dark:text-green-400 text-4xl" />
        <p
          className="dark:text-slate-300 text-xs font-semibold capitalize"
          style={{ color: themeColor }}
        >
          parent CSV
        </p>
      </CSVLink>
    </div>
  );
};

export default PdfBtn;

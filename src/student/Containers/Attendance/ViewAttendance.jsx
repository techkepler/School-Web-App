import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";
import CalendarView from "./CalendarView";

const ViewTeacherAttendance = () => {
  const { isSideBar, isColorBar, auth } = useAuth();
  const [studentData, setStudentData] = useState([]);
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);

  // This will fetch Data from backend api upon rendering this component
  useEffect(() => {
    const fetchStudent = async () => {
      let res = await axiosAdmin.get(
        `students/crud/attendance/?id=${auth.uid}`
      );
      setStudentData(res.data.results);
    };
    fetchStudent();
  }, [auth.uid]);

  // These function will control which view to show
  const listViewClick = () => {
    setListView(true);
    setGridView(false);
  };

  const gridViewClick = () => {
    setGridView(true);
    setListView(false);
  };

  return (
    <>
      <div>
        <div className="border dark:border-slate-600 mt-4"></div>
        <div
          className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
            (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
          } `}
        >
          <p className="flex gap-6 order-1 md:order-2">
            <button
              className={`border text-xs md:text-sm px-3 py-2  rounded-md  border-slate-500 shadow-lg ${
                listView &&
                "dark:bg-slate-300 bg-slate-700 text-slate-300 dark:text-slate-700"
              } `}
              onClick={listViewClick}
            >
              List View
            </button>
            <button
              className={`border text-xs md:text-sm px-3 py-2 md:py-0 rounded-md  border-slate-500 shadow-lg ${
                gridView &&
                "dark:bg-slate-300 bg-slate-700 text-slate-300 dark:text-slate-700"
              }`}
              onClick={gridViewClick}
            >
              Calendar View
            </button>
          </p>
        </div>

        {/* Teacher Table */}
        {listView && (
          <div>
            {studentData.length > 0 && (
              <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-800  box-border shadow-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="  text-slate-700 dark:text-[#9bbae7] bg-slate-300 dark:bg-slate-900 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
                      <th className="whitespace-nowrap p-5 text-sm  ">ID</th>
                      <th className="whitespace-nowrap p-5 text-sm  ">Name</th>
                      <th className="whitespace-nowrap p-5 text-sm  text-center">
                        Absent Day
                      </th>
                      <th className="whitespace-nowrap p-5 text-sm  text-center">
                        Attend Day
                      </th>
                      <th className="whitespace-nowrap p-5 text-sm  text-center">
                        Total Day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((datas, index) => (
                      <tr
                        key={index}
                        className="  text-slate-700 dark:text-[#9bbae7] hover:bg-slate-200 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
                      >
                        <td className="whitespace-nowrap p-5 text-sm text-center">
                          {datas.id}
                        </td>
                        <td className="whitespace-nowrap p-5 text-sm text-center">
                          {datas.name}
                        </td>
                        <td className="whitespace-nowrap p-5 text-sm text-center capitalize">
                          {datas.absent_day}
                        </td>
                        <td className="whitespace-nowrap p-5 text-sm text-center">
                          {datas.attend_day}
                        </td>
                        <td className="whitespace-nowrap p-5 text-sm text-center">
                          {datas.total_day}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Teacher Grid */}

        {gridView && <CalendarView />}
      </div>
    </>
  );
};

export default ViewTeacherAttendance;

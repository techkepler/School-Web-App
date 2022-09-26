import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import Pagination from "../../../../Components/teacher/Pagination";
import SearchStaffAttendance from "./SearchAttend";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";

const ViewStaffAttendance = () => {
  const { isSideBar, isColorBar } = useAuth();
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [searchStaff, setSearchStaff] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // This will fetch Data from backend api upon rendering this component
  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get("staffs/crud/attendance/?page_size=50");
      setData(res.data.results);
      setTotalData(res.data.count);
    };
    fetchData();
  }, []);

  // This will fetch new data when page change
  const fetchNewData = async (currentPage) => {
    let res = await axiosAdmin.get(
      `staffs/crud/attendance/?page=${currentPage}&page_size=50`
    );
    setTotalData(res.data.count);
    setData(res.data.results);
  };

  // This will handle page change and call fetchNewData()
  const handlePageChange = (e) => {
    let currentPage = e.selected + 1;
    setPage(currentPage);
    fetchNewData(currentPage);
  };

  // This function will filter the data
  const filterData = () => {
    let filterStaffs = data;
    if (searchQuery) {
      filterStaffs = data.filter((datas) =>
        datas.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterStaffs;
  };

  // These function will control which view to show
  const listViewClick = () => {
    setListView(true);
    setGridView(false);
    setSearchStaff(false);
  };

  const gridViewClick = () => {
    setGridView(true);
    setListView(false);
    setSearchStaff(false);
  };

  const searchStaffClick = () => {
    setSearchStaff(true);
    setListView(false);
    setGridView(false);
  };

  // This will handle delete function
  const [deleteData, setDeleteData] = useState("");
  const [isDel, setIsDel] = useState(false);
  const [sucsMsg, setSucsMsg] = useState("");

  const yesBtnClick = async () => {
    setIsDel(false);
    let res = await axiosAdmin.delete(`staffs/crud/attendance/${deleteData}/`);
    setSucsMsg(res.status);
    setTimeout(() => {
      setSucsMsg("");
      fetchNewData(page);
    }, 2000);
  };

  return (
    <>
      <div>
        {sucsMsg === 204 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0  py-2  text-gray-900 bg-green-500 rounded-md fixed text-center z-40">
              Staff Attendance Deleted Successfully.
            </p>
          </div>
        )}
        <div className="border dark:border-slate-600 mt-4"></div>
        <div
          className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
            (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
          } ${searchStaff ? "md:justify-center" : "md:justify-between "}`}
        >
          <p className={` order-2 md:order-1 ${searchStaff && "hidden"}`}>
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name here"
              className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
            />
          </p>
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
              Grid View
            </button>

            <button
              className={`border px-3 py-2 text-xs md:text-sm md:py-0 rounded-md  border-slate-500 shadow-lg ${
                searchStaff &&
                "dark:bg-slate-300 bg-slate-700 text-slate-300 dark:text-slate-700"
              }`}
              onClick={searchStaffClick}
            >
              Search Staff
            </button>
          </p>
        </div>

        {/* Teacher Table */}
        {listView && (
          <div>
            {filterData().length > 0 && (
              <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="  text-slate-700 dark:text-[#9bbae7] hover:bg-gray-300 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
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
                      <th className="whitespace-nowrap p-5 text-sm  text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData().length > 0 &&
                      filterData().map((datas, index) => (
                        <tr
                          key={index}
                          className="  text-slate-700 dark:text-[#9bbae7] hover:bg-gray-300 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
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

                          <td className="whitespace-nowrap  p-5 text-sm text-center">
                            <Link
                              to={`/admin/staffs/attendance/edit/${datas.id}/`}
                            >
                              <FaEdit className="text-lg inline mr-3 text-sky-500 cursor-pointer" />
                            </Link>

                            <VscTrash
                              className="text-lg text-red-500 ml-4 inline cursor-pointer"
                              onClick={() => {
                                setDeleteData(datas.id);
                                setIsDel(true);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {searchQuery.length < 1 && (
                  <div className="my-5">
                    <Pagination
                      totalData={totalData}
                      handlePageChange={handlePageChange}
                      page={page}
                      perPage={50}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Teacher Grid */}

        {gridView && (
          <>
            {filterData().length > 0 && (
              <div className="my-10">
                <div className={`member-grid-view items-center gap-5`}>
                  {filterData().length > 0 &&
                    filterData().map((datas, index) => (
                      <div
                        className={`relative    bg-gray-50 dark:bg-slate-900 dark:text-slate-300 text-slate-700 py-10 rounded-md   my-4 box-border border-[1px] shadow-lg  border-slate-300 dark:border-slate-500 group ${
                          filterData().length === 1 && "w-80 md:w-96"
                        }`}
                        key={index}
                      >
                        <div className="absolute w-full justify-center top-5 flex items-center mb-5 gap-5">
                          <Link
                            to={`/admin/staffs/attendance/edit/${datas.id}/`}
                          >
                            <FaEdit className="text-xl text-sky-500 cursor-pointer" />
                          </Link>
                          <VscTrash
                            className="text-xl text-red-500 cursor-pointer"
                            onClick={() => {
                              setDeleteData(datas.id);
                              setIsDel(true);
                            }}
                          />
                        </div>

                        <div className="w-full mt-8 member-details flex gap-1 flex-col  dark:text-[#9bbae7] text-slate-600  px-6">
                          <p className="flex gap-1.5 items-center justify-center">
                            <span className="text-sm dark:text-[#7592bc] font-medium">
                              Name:
                            </span>
                            <span className="text-base font-medium">
                              {datas.name}
                            </span>
                          </p>
                          <p className="flex gap-1.5 items-center justify-center">
                            <span className="text-sm font-medium dark:text-[#7592bc]">
                              Absent Day:
                            </span>
                            <span className="text-base font-medium ">
                              {datas.absent_day}
                            </span>
                          </p>
                          <p className="flex gap-1.5 items-center justify-center">
                            <span className="text-sm font-medium dark:text-[#7592bc]">
                              Attend Day:
                            </span>
                            <span className="text-base font-medium">
                              {datas.attend_day}
                            </span>
                          </p>
                          <p className="flex gap-1.5 items-center justify-center">
                            <span className="text-sm font-medium dark:text-[#7592bc]">
                              Total Day:
                            </span>
                            <span className="text-base font-medium">
                              {datas.total_day}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                {searchQuery.length < 1 && (
                  <div className="my-5">
                    <Pagination
                      totalData={totalData}
                      handlePageChange={handlePageChange}
                      page={page}
                      perPage={50}
                    />
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Teacher Search */}
        {searchStaff && <SearchStaffAttendance />}

        {/* Confirm Modal */}
        <div
          className={`fixed top-16 flex items-center justify-center transition-transform ${
            isDel ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-80 md:w-96 h-36 bg-slate-300  px-4 py-4 rounded-md flex flex-col justify-between">
            <p className="">Are you sure you want to delete this data?</p>

            <p className="flex gap-6  mt-4 justify-end text-slate-900">
              <button
                className="px-4 py-1   bg-red-500 rounded-md text-sm font-semibold"
                onClick={yesBtnClick}
              >
                Yes
              </button>
              <button
                className="px-2 py-1  bg-sky-500 rounded-md text-sm font-semibold"
                onClick={() => setIsDel(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStaffAttendance;

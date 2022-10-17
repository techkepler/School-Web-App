import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import Pagination from "../../../../Components/teacher/Pagination";
import SearchStaff from "./SearchStaff";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const ViewStaff = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [data, setdata] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [searchStaff, setSearchStaff] = useState(false);

  // this will fetch teacher data form backend api
  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosAdmin.get("staffs/crud/staff/?page_size=50");
      setdata(res.data.results);
      setTotalData(res.data.count);
    };
    fetchTeacher();
  }, []);

  // This will fetch data when page change
  const fetchNewData = async (currentPage) => {
    let res = await axiosAdmin.get(
      `staffs/crud/staff/?page=${currentPage}&page_size=50`
    );
    setTotalData(res.data.count);
    setdata(res.data.results);
  };

  // This function will handle page change
  const handlePageChange = (e) => {
    let currentPage = e.selected + 1;
    setPage(currentPage);
    fetchNewData(currentPage);
  };

  // This function will filter the data when search field is change

  const filterData = () => {
    let fitlerTeachers = data;
    if (searchQuery) {
      fitlerTeachers = data.filter((datas) =>
        datas.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return fitlerTeachers;
  };

  // This function will delete data in backend
  const [sucsMsg, setSucsMsg] = useState("");
  const [deleteData, setDeleteData] = useState("");
  const [isDel, setIsDel] = useState(false);

  const yesBtnClick = async () => {
    setIsDel(false);
    let res = await axiosAdmin.delete(`staffs/crud/staff/${deleteData}/`);
    setSucsMsg(res.status);
    setTimeout(() => {
      setSucsMsg("");
      fetchNewData(page);
    }, 2000);
  };

  // These function will decide which view to show

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
    setGridView(false);
    setListView(false);
  };

  return (
    <>
      <AdminNav />

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 204 && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0  py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
              Staff Deleted Successfully.
            </p>
          </div>
        )}

        <div className="mt-4 mb-10">
          <h1 className="dark:text-slate-300 text-slate-700 text-2xl">
            Staffs
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

        <div className="border dark:border-slate-600"></div>

        <div
          className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
            (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
          } ${searchStaff ? "md:justify-center" : " md:justify-between"}`}
        >
          <p className={` order-2 md:order-1 ${searchStaff && "hidden"}`}>
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name here..............."
              className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
            />
          </p>
          <p className="flex gap-6 order-1 md:order-2">
            <button
              className={`border text-xs md:text-sm px-3 py-2  rounded-md  border-slate-500 shadow-lg  ${
                listView
                  ? "dark:bg-slate-300 bg-slate-800 text-slate-300 dark:text-slate-800"
                  : ""
              }`}
              onClick={listViewClick}
            >
              List View
            </button>
            <button
              className={`border text-xs md:text-sm px-3 py-2 md:py-0 rounded-md  border-slate-500 shadow-lg ${
                gridView
                  ? "dark:bg-slate-300 bg-slate-800 text-slate-300 dark:text-slate-800"
                  : ""
              }`}
              onClick={gridViewClick}
            >
              Grid View
            </button>

            <button
              className={`border px-3 py-2 text-xs md:text-sm md:py-0 rounded-md  border-slate-500 shadow-lg  ${
                searchStaff
                  ? "dark:bg-slate-300 bg-slate-800 text-slate-300 dark:text-slate-800"
                  : ""
              }`}
              onClick={searchStaffClick}
            >
              Search Staff
            </button>
          </p>
        </div>

        {/* Teacher table start here */}
        {listView && (
          <div>
            {filterData().length > 0 && (
              <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
                <table className="w-full">
                  <tbody>
                    {filterData().length > 0 &&
                      filterData().map((datas, index) => (
                        <tr
                          key={index}
                          className="  text-slate-700 dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
                        >
                          <td className="whitespace-nowrap  w-20 h-10 flex items-center justify-center my-4">
                            <img
                              src={datas.image}
                              alt=""
                              className=" w-10 h-10 rounded-full"
                            />
                          </td>
                          <td className="whitespace-nowrap p-5 text-sm">
                            {datas.id}
                          </td>
                          <td className="whitespace-nowrap p-5 text-sm capitalize">
                            {datas.name}
                          </td>
                          <td className="whitespace-nowrap p-5 text-sm">
                            {datas.email}
                          </td>
                          <td className="whitespace-nowrap p-5 text-sm">
                            {datas.phone}
                          </td>

                          <td className="whitespace-nowrap p-5 text-sm">
                            {datas.address}
                          </td>
                          {datas.position && (
                            <td className="whitespace-nowrap p-5 text-sm">
                              <button
                                className={`${
                                  datas.position === "Accountant"
                                    ? "bg-green-600"
                                    : datas.position === "Driver"
                                    ? "bg-yellow-600"
                                    : "bg-sky-600"
                                } rounded-md px-2 py-1 text-sm text-slate-100`}
                                disabled
                              >
                                {datas.position}
                              </button>
                            </td>
                          )}
                          <td className="whitespace-nowrap  p-5 text-sm">
                            <Link to={`/admin/staffs/edit/${datas.id}/`}>
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

        {/* Teacher grid view start here */}
        {gridView && (
          <>
            {filterData().length > 0 && (
              <div className="my-10">
                <div
                  className={`member-grid-view items-center justify-center gap-5`}
                >
                  {filterData().length > 0 &&
                    filterData().map((datas, index) => (
                      <div
                        className={`flex flex-col bg-gray-50 dark:bg-slate-900 dark:text-slate-300 text-slate-700 py-10 rounded-md gap-6 justify-center items-center my-4 box-border border-[1px] shadow-lg  border-slate-300 dark:border-slate-500 group ${
                          filterData().length === 1 && "w-80 md:w-96"
                        }`}
                        key={index}
                      >
                        <div className="flex items-center mb-5 gap-5">
                          <Link to={`/admin/staffs/edit/${datas.id}/`}>
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
                        <img
                          src={datas.image}
                          alt={datas.name}
                          className="w-24 h-24 rounded-full transition-all duration-200 ease-linear group-hover:scale-125 group-hover:rotate-360"
                        />
                        <div className="member-details flex gap-1 flex-col items-center dark:text-slate-300 text-slate-800">
                          <h1 className="text-lg capitalize">{datas.name}</h1>
                          <p className="text-sm capitalize">{datas.position}</p>
                          <p className="text-sm"> {datas.phone}</p>
                          <p className="mt-5 ">{datas.address}</p>
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

        {searchStaff && <SearchStaff />}

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
      </section>

      <ColorSettings />
      <Footer />
    </>
  );
};

export default ViewStaff;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import Pagination from "../../../../Components/teacher/Pagination";
import SearchParent from "./SearchParent";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const ViewParent = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();
  const [parentData, setParentData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [searchTeacher, setSearchTeacher] = useState(false);

  // this will fetch teacher data form backend api
  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosAdmin.get("parents/crud/parent/?page_size=50");
      setParentData(res.data.results);
      setTotalData(res.data.count);
    };
    fetchTeacher();
  }, []);

  // This will fetch data when page change
  const fetchNewData = async (currentPage) => {
    let res = await axiosAdmin.get(
      `parents/crud/parent/?page=${currentPage}&page_size=50`
    );
    setTotalData(res.data.count);
    setParentData(res.data.results);
  };

  // This function will handle page change
  const handlePageChange = (e) => {
    let currentPage = e.selected + 1;
    setPage(currentPage);
    fetchNewData(currentPage);
  };

  // This function will filter the data when search field is change

  const filterData = () => {
    let filterParent = parentData;
    if (searchQuery) {
      filterParent = parentData.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterParent;
  };

  // This function will delete data in backend
  const [sucsMsg, setSucsMsg] = useState("");
  const [deleteData, setDeleteData] = useState("");
  const [isDel, setIsDel] = useState(false);

  const yesBtnClick = async () => {
    setIsDel(false);
    let res = await axiosAdmin.delete(`parents/crud/parent/${deleteData}/`);
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
    setSearchTeacher(false);
  };

  const gridViewClick = () => {
    setGridView(true);
    setListView(false);
    setSearchTeacher(false);
  };

  const searchTeacherClick = () => {
    setSearchTeacher(true);
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
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0  py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Parent Deleted Successfully.
            </p>
          </div>
        )}

        <div className="mt-4 mb-10">
          <h1 className="dark:text-slate-300 text-slate-700 text-2xl">
            Parents
          </h1>
          <p
            style={{ color: themeColor }}
            className="flex gap-2 text-sm md:text-base"
          >
            <span>Batsyayan</span>
            <span>/</span>
            <span>Parents</span>
          </p>
        </div>

        <div className="border dark:border-slate-600"></div>

        <div
          className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
            (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
          } ${searchTeacher ? "md:justify-center" : " md:justify-between"}`}
        >
          <p className={` order-2 md:order-1 ${searchTeacher && "hidden"}`}>
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
                searchTeacher
                  ? "dark:bg-slate-300 bg-slate-800 text-slate-300 dark:text-slate-800"
                  : ""
              }`}
              onClick={searchTeacherClick}
            >
              Search Parent
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
                          <td className="whitespace-nowrap  px-8 py-5 text-sm capitalize">
                            {datas.id}
                          </td>
                          <td className="whitespace-nowrap px-8 py-5 text-sm capitalize">
                            {datas.name}
                          </td>
                          <td className="whitespace-nowrap px-8 py-5 text-sm ">
                            {datas.email}
                          </td>
                          <td className="whitespace-nowrap px-8 py-5 text-sm">
                            {datas.phone}
                          </td>
                          <td className="whitespace-nowrap px-8 py-5 text-sm">
                            {datas.address}
                          </td>

                          <td className="whitespace-nowrap  px-8 py-5 text-sm">
                            <Link to={`/admin/parents/edit/${datas.id}/`}>
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
                  className={`member-grid-view items-center justify-center gap-8 py-5`}
                >
                  {filterData().length > 0 &&
                    filterData().map((datas, index) => (
                      <div
                        className={`flex flex-col bg-gray-50 dark:bg-slate-900 dark:text-slate-300 text-slate-700 py-10 gap-6 rounded-md  justify-center items-center my-4 box-border border-[1px] shadow-lg  border-slate-300 dark:border-slate-500 group ${
                          filterData().length === 1 && "w-80 md:w-96"
                        }`}
                        key={index}
                      >
                        <div className="flex items-center  gap-8 py-5">
                          <Link to={`/admin/parents/edit/${datas.id}/`}>
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

                        <div className="member-details flex  flex-col items-center dark:text-slate-300 text-slate-800">
                          <h1 className="text-lg capitalize">{datas.name}</h1>
                          <p className="text-sm ">{datas.email}</p>
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

        {searchTeacher && <SearchParent />}

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

export default ViewParent;

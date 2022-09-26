import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../../../Admin/Components/teacher/Pagination";
import { axiosAdmin } from "../../../server/Axios";
import { useAuth } from "../../../contexts/GlobalProvider";

const ViewHomeworks = () => {
  const { auth } = useAuth();
  const [infoData, setInfoData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // this will fetch teacher data form backend api
  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosAdmin.get(
        `teachers/crud/homework/?grade=${auth.grade}&page_size=20`
      );
      setInfoData(res.data.results);
      setTotalData(res.data.count);
    };
    fetchTeacher();
  }, [auth.grade]);

  // This will fetch data when page change
  const fetchNewData = async (currentPage) => {
    let res = await axiosAdmin.get(
      `teachers/crud/homework/?grade=${auth.grade}&page=${currentPage}&page_size=20`
    );
    setTotalData(res.data.count);
    setInfoData(res.data.results);
  };

  // This function will handle page change
  const handlePageChange = (e) => {
    let currentPage = e.selected + 1;
    setPage(currentPage);
    fetchNewData(currentPage);
  };

  // This function will filter the data when search field is change

  const filterData = () => {
    let filterApplication = infoData;
    if (searchQuery) {
      filterApplication = infoData.filter((data) =>
        data.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterApplication;
  };

  return (
    <>
      <div
        className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 `}
      >
        <input
          type="search"
          name="search"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search grade here..............."
          className="w-72 md:w-96  py-2.5 dark:bg-slate-900 rounded-md"
        />
      </div>

      {/* Announcement table start here */}
      <div>
        {filterData().length > 0 && (
          <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className=" text-sky-700  dark:text-green-500 bg-slate-300 dark:bg-slate-700 border border-slate-300 dark:border-slate-800 pb-4">
                  <th className="whitespace-nowrap p-5   ">Grade</th>
                  <th className="whitespace-nowrap p-5   ">Subject</th>
                  <th className="whitespace-nowrap p-5   ">Date</th>
                  <th className="whitespace-nowrap p-5 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {filterData().length > 0 &&
                  filterData().map((datas, index) => (
                    <tr
                      key={index}
                      className="  text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 pb-4"
                    >
                      <td className="whitespace-nowrap  px-8 py-5 text-sm capitalize text-center">
                        {datas.grade}
                      </td>
                      <td className="whitespace-nowrap  px-8 py-5 text-sm capitalize text-center">
                        {datas.subject}
                      </td>
                      <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                        {new Date(datas.date).toDateString()}
                      </td>

                      <td className="whitespace-nowrap  px-8 py-5 text-sm text-center">
                        <div className="flex items-center justify-center gap-8 lg:gap-6">
                          <Link to={`/student/homework/view/${datas.id}/`}>
                            <FaEye className="text-lg inline  text-green-500 cursor-pointer" />
                          </Link>
                        </div>
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
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ViewHomeworks;

import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../server/Axios";

const ViewStuFee = () => {
  const { isSideBar, isColorBar, auth } = useAuth();
  const [feeData, setFeeData] = useState([]);
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);

  // This will fetch Data from backend api upon rendering this component
  useEffect(() => {
    const fetchStuFee = async () => {
      let res = await axiosAdmin.get(`students/crud/fee/?id=${auth.uid}`);
      setFeeData(res.data.results);
    };
    fetchStuFee();
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

  // This will handle delete option

  return (
    <>
      <div className="border dark:border-slate-600 mt-4"></div>
      <div
        className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
          (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
        }`}
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
            Grid View
          </button>
        </p>
      </div>

      {listView && (
        <>
          {feeData.length > 0 && (
            <div className="overflow-auto my-10 bg-slate-100 rounded-md dark:bg-slate-800  box-border shadow-2xl">
              <table className="w-full">
                <thead>
                  <tr className="  text-slate-700 dark:text-[#05dcf8] bg-slate-300 dark:bg-slate-900 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4">
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      ID
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  ">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Monthly Fee
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Computer Fee
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Bus Fee
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Paid Fee
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Unpaid Fee
                    </th>
                    <th className="whitespace-nowrap px-8 py-5 text-sm  text-center">
                      Total Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.length > 0 &&
                    feeData.map((datas, index) => (
                      <tr
                        key={index}
                        className="  text-slate-700 dark:text-[#9bbae7] hover:bg-slate-200 dark:hover:bg-slate-700 border-b-[1px] border-slate-300 dark:border-slate-800 pb-4"
                      >
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.id}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.name}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center capitalize">
                          {datas.monthly_fee}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.computer_fee}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.bus_fee}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.paid_fee}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.unpaid_fee}
                        </td>
                        <td className="whitespace-nowrap px-8 py-5 text-sm text-center">
                          {datas.total_fee}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {gridView && (
        <>
          {feeData.length > 0 && (
            <div className="my-10">
              <div
                className={`flex justify-center items-center gap-5 overflow-hidden`}
              >
                {feeData.length > 0 &&
                  feeData.map((datas, index) => (
                    <div
                      className="flex object-cover transition-transform duration-500 scale-90 hover:scale-105 flex-col gap-3 bg-slate-200 w-72 md:w-96 py-6 px-6 rounded-md"
                      key={index}
                    >
                      <p className="name">
                        <span className="font-semibold ">Name:</span>{" "}
                        <span>{datas.name}</span>
                      </p>
                      <p className="grade">
                        <span className="font-semibold ">Grade:</span>{" "}
                        <span>{datas.grade}</span>
                      </p>
                      <p className="monthly">
                        <span className="font-semibold ">Monthly Fee:</span>{" "}
                        <span>Rs.{datas.monthly_fee}</span>
                      </p>{" "}
                      <p className="computer">
                        <span className="font-semibold ">Computer Fee:</span>{" "}
                        <span>Rs.{datas.computer_fee}</span>
                      </p>{" "}
                      <p className="name">
                        <span className="font-semibold ">Bus Fee:</span>{" "}
                        <span>Rs.{datas.bus_fee}</span>
                      </p>
                      <p className="paid">
                        <span className="font-semibold ">Paid Fee:</span>{" "}
                        <span>Rs.{datas.paid_fee}</span>
                      </p>
                      <p className="unpaid">
                        <span className="font-semibold ">Unpaid Fee:</span>{" "}
                        <span>Rs.{datas.unpaid_fee}</span>
                      </p>
                      <p className="total">
                        <span className="font-semibold ">Total Fee:</span>{" "}
                        <span>Rs.{datas.total_fee}</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ViewStuFee;

import React from "react";
import { IoClose } from "react-icons/io5";

const FilterDesgin = (props) => {
  const {
    selectFilter,
    setSelectFilter,
    filterData,
    searchQuery,
    setSearchQuery,
    setId,
    title,
  } = props;
  return (
    <div
      className={`fixed rounded-md top-14 pt-12 pb-16  overflow-y-scroll w-full md:w-[30rem]  h-full bg-slate-100 dark:bg-slate-900 z-[30] transition-transform ${
        selectFilter ? "scale-100" : "scale-0"
      }`}
    >
      <h1 className="text-center text-2xl text-slate-700 dark:text-slate-200">
        Filter {title ? title : "Teachers"}
      </h1>
      <IoClose
        className="text-3xl absolute top-5 right-4 cursor-pointer dark:text-slate-200"
        onClick={() => setSelectFilter(false)}
      />
      <div className="my-8 mx-4 md:mx-6">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input w-full py-3 rounded-md dark:bg-slate-800 dark:text-slate-200"
          placeholder="Search name here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="datas mt-6">
          {filterData().length > 0 &&
            filterData().map((datas, index) => (
              <button
                key={index}
                className="w-full  text-start flex items-center  py-2 my-1 rounded hover:bg-slate-300 dark:hover:bg-slate-600 px-2 md:px-6  "
                onClick={() => {
                  setId(datas.id);
                  setSelectFilter(false);
                }}
              >
                <span className="font-semibold mr-2 text-xs dark:text-slate-500 text-slate-500  w-24">
                  {datas.id} :
                </span>
                <span className="text-base dark:text-slate-400 text-slate-800">
                  {datas.name}
                </span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDesgin;

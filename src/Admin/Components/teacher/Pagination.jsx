import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../../contexts/GlobalProvider";

const Pagination = (props) => {
  const { themeColor } = useAuth();
  const { totalData, handlePageChange, page, perPage } = props;
  const itemPerPage = `${perPage ? perPage : 20}`;
  const totalNumberOfPage = Math.ceil(totalData / itemPerPage);

  return (
    <div>
      <ReactPaginate
        pageCount={totalNumberOfPage}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        marginPagesDisplayed={1}
        previousLabel={
          <MdOutlineKeyboardArrowLeft
            className="text-xl "
            style={{ color: themeColor }}
          />
        }
        nextLabel={
          <MdOutlineKeyboardArrowRight
            className="text-xl "
            style={{ color: themeColor }}
          />
        }
        breakLabel="..."
        containerClassName="pagination gap-4 flex items-center  justify-center"
        pageLinkClassName="flex items-center justify-center rounded-full w-8 h-8 dark:hover:bg-slate-600 hover:bg-slate-300 border border-slate-300 dark:border-slate-600 text-slate-800 text-sm dark:text-slate-300"
        previousLinkClassName={`flex items-center justify-center rounded-full w-8 h-8 dark:hover:bg-slate-600 hover:bg-slate-300 border border-slate-300 dark:border-slate-600 ${
          page === 1 && "pointer-events-none"
        }`}
        nextLinkClassName={`flex items-center justify-center rounded-full w-8 h-8 dark:hover:bg-slate-600 hover:bg-slate-300 border border-slate-300 dark:border-slate-600 ${
          page === totalNumberOfPage && "pointer-events-none"
        }`}
        breakLinkClassName="dark:text-slate-300 text-slate-800"
        activeLinkClassName="page-link  border-0 bg-teal-700"
      />
    </div>
  );
};

export default Pagination;

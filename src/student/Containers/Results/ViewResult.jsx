import React from "react";
import SearchResult from "./SearchResult";
import { useAuth } from "../../../contexts/GlobalProvider";

const ViewResult = () => {
  const { isSideBar, isColorBar } = useAuth();

  return (
    <>
      <div
        className={`flex flex-col items-center  justify-center  md:flex-row gap-10  dark:text-slate-300 my-6 ${
          (isSideBar || isColorBar) && "lg:flex-col xl:flex-row"
        } `}
      ></div>

      <SearchResult />
    </>
  );
};

export default ViewResult;

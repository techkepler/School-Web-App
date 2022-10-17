import React from "react";

import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

const JoinEvent = () => {
  return (
    <div className="bg-teal-100 text-center py-4 px-2 bg-opacity-50">
      <p className="font-semibold text-sm text-[#004B87] ">
        WELCOME! JOIN OUR BEAUTIFUL COMMUNITY!
      </p>
      <p className="flex w-full justify-between px-4 mt-5 gap-4">
        <Link
          to="/register/"
          className="px-4 py-3 bg-white bg-opacity-80 hover:bg-opacity-100 w-[50%] rounded-md text-sm font-semibold uppercase "
        >
          Join
          <MdDoubleArrow className="text-2xl group-hover:translate-x-2  text-green-500 ml-2 inline" />
        </Link>
        <Link
          to="/contact/"
          className="w-[50%] bg-white bg-opacity-80 hover:bg-opacity-100 px-4 py-3 rounded-md text-sm font-semibold uppercase"
        >
          Contact
          <MdDoubleArrow className="text-2xl group-hover:translate-x-2  text-sky-500 ml-2 inline" />
        </Link>
      </p>
    </div>
  );
};

export default JoinEvent;

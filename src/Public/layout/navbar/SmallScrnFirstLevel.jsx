import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaWpforms, FaNewspaper } from "react-icons/fa";
import { FcSportsMode, FcCalendar, FcHome } from "react-icons/fc";
import { BiBusSchool } from "react-icons/bi";
import { BsFillPeopleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

const SmallScrnFirstLevel = ({ item }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      {item.sub_menu ? (
        <li className=" relative py-4 flex items-center  w-full">
          <div className="w-8 h-8   absolute  left-0 rounded-full bg-[#32415f] flex justify-center items-center">
            {item.title === "About" && (
              <IoIosPeople className=" w-full relative  text-green-500 " />
            )}{" "}
            {item.title === "Academics" && (
              <IoBookSharp className=" w-full relative  text-sky-500 " />
            )}{" "}
            {item.title === "Admission" && (
              <FaWpforms className=" w-full relative  text-violet-500 " />
            )}{" "}
            {item.title === "Athletics" && (
              <FcSportsMode className=" w-full relative  text-green-500 " />
            )}{" "}
            {item.title === "Facilities" && (
              <BiBusSchool className=" w-full relative  text-yellow-500 " />
            )}
            {item.title === "News" && (
              <FaNewspaper className=" w-full relative  text-indigo-500 " />
            )}{" "}
          </div>

          <Link
            to={`/${item.url}/`}
            className="mx-10 text-sm font-semibold text-gray-100"
            onClick={handleDropdownClick}
          >
            {item.title}
          </Link>

          <IoIosArrowForward
            className="absolute text-xl right-0 cursor-pointer"
            onClick={handleDropdownClick}
          />

          <div
            className={`bg-[#013c6c] pt-8 text-gray-200 h-full top-0 fixed z-20  transition-transform duration-300  w-full overflow-x-hidden overflow-y-auto ${
              showDropdown ? "-translate-x-4" : "translate-x-[770px]"
            } `}
          >
            {showDropdown && (
              <>
                <BsFillArrowLeftCircleFill
                  className="text-3xl mt-3 lg:hidden absolute left-4 top-1  cursor-pointer text-sky-400"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                <ul className="px-4 mt-8">
                  {item.sub_menu.map((sub_title, index) => (
                    <SmallScrnSecondLevel key={index} sub_title={sub_title} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </li>
      ) : (
        <Link
          to={`/${item.url}/`}
          className="relative py-4  flex items-center  w-full"
        >
          <div className="w-8 h-8   absolute  left-0 rounded-full bg-[#32415f] flex justify-center items-center">
            {item.title === "Faculty" && (
              <BsFillPeopleFill className=" w-full relative  text-lime-500 " />
            )}
            {item.title === "Calendar" && (
              <FcCalendar className=" w-full relative  text-green-500 " />
            )}{" "}
            {item.title === "Home" && (
              <FcHome className=" w-full relative  text-green-500 " />
            )}{" "}
            {item.title === "Portal" && (
              <FiLogIn className=" w-full relative  text-emerald-500 " />
            )}{" "}
          </div>
          <span className="mx-10 text-sm font-semibold text-gray-100">
            {item.title}
          </span>
        </Link>
      )}
    </>
  );
};

export default SmallScrnFirstLevel;

const SmallScrnSecondLevel = ({ sub_title }) => {
  const [secondDropdown, setSecondDropdown] = useState(false);

  const handleSecondDropdownClick = () => {
    setSecondDropdown(!secondDropdown);
  };
  return (
    <>
      {sub_title.sub_menu ? (
        <li className="px-2 relative   py-4 flex items-center  w-full">
          <Link
            to={`/${sub_title.url}/`}
            className=" text-sm font-semibold text-gray-100"
          >
            {sub_title.title}
          </Link>

          <IoIosArrowForward
            className="absolute text-xl right-0 text-gray-100 cursor-pointer"
            onClick={handleSecondDropdownClick}
          />

          <div
            className={`bg-[#013c6c] pt-8 text-gray-200 h-full top-0 fixed z-20    w-full transition-transform duration-300 overflow-x-hidden  overflow-y-auto   ${
              secondDropdown ? "-translate-x-6" : "translate-x-[770px]"
            }`}
          >
            <BsFillArrowLeftCircleFill
              className="text-3xl mt-3 md:hidden absolute left-3 top-1  cursor-pointer text-sky-400"
              onClick={() => setSecondDropdown(!secondDropdown)}
            />
            {secondDropdown && (
              <ul className="px-4 mt-10">
                {sub_title.sub_menu.map((sub_title, index) => (
                  <SmallScrnThirdLevel key={index} sub_title={sub_title} />
                ))}
              </ul>
            )}
          </div>
        </li>
      ) : (
        <Link
          to={`/${sub_title.url}/`}
          className="relative px-2 font-semibold text-sm py-4 flex items-center  w-full text-gray-100"
        >
          {sub_title.title}
        </Link>
      )}
    </>
  );
};

const SmallScrnThirdLevel = ({ sub_title }) => {
  return (
    <li>
      <Link
        to={`/${sub_title.url}/`}
        className=" py-4 block  w-full text-gray-100"
      >
        {sub_title.title}
      </Link>
    </li>
  );
};

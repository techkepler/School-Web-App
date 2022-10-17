import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { smallScrnTopItem, largeScrnTopItem } from "./NavBarItem";
import FirstLevel from "./SmallScrnFirstLevel";
import LargeScrnDropdown from "./LargeScrnDropdown";
import { SchoolLogoImg } from "../../../Assets/export/ExportImg";
import "./znav.css";

const HomeNavBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const changeToggleBtn = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <>
      <header className="bg-[#004B87] lg:bg-opacity-0 z-20  h-[74px] md:h-[110px] lg:h-[150px] w-full flex  items-center fixed lg:absolute">
        <div className="scl-logo-svg ml-2 absolute top-1 lg:mt-5 md:ml-4 lg:ml-8">
          <img src={SchoolLogoImg} alt="School Logo" className="w-28 lg:w-48" />
        </div>

        <div className="hamburger-icon absolute right-4 md:hidden">
          {!toggleBtn ? (
            <FaBars
              className="text-2xl text-white  cursor-pointer"
              onClick={changeToggleBtn}
            />
          ) : (
            <FaTimes
              className="text-2xl text-white   cursor-pointer"
              onClick={changeToggleBtn}
            />
          )}
        </div>

        <nav
          className={`bg-[#013c6c]  text-gray-200 h-full fixed z-10 top-0 transition-transform overflow-x-hidden duration-500 md:hidden w-full overflow-y-auto  py-8   ${
            toggleBtn ? "-translate-x-0" : "translate-x-[770px]"
          }`}
        >
          <div className="absolute left-2 top-2">
            <img src={SchoolLogoImg} alt="school logo" className="w-20" />
          </div>
          <RiCloseCircleLine
            className="text-4xl lg:hidden  absolute right-3 top-2 text-sky-500 cursor-pointer"
            onClick={() => setToggleBtn(!toggleBtn)}
          />
          <ul className="px-4 navbar-ul w-full mt-10">
            {smallScrnTopItem.map((items, index) => (
              <FirstLevel item={items} key={index} />
            ))}
          </ul>
        </nav>

        <nav className="w-full hidden md:block">
          <LargeScrnDropdown />
        </nav>

        <div className="absolute md:top-4 lg:top-7 md:right-10 lg:right-14 hidden md:block">
          <ul className="flex md:gap-7 lg:gap-10 justify-end pr-8">
            {largeScrnTopItem.map((item, index) => (
              <li
                key={index}
                className="text-[#AEE2FF]"
                style={{
                  fontFamily:
                    '"proxima-nova",Helvetica,Roboto,Arial,sans-serif',
                }}
              >
                <Link
                  to={`/${item.url}/`}
                  className="uppercase text-sm font-semibold hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default HomeNavBar;

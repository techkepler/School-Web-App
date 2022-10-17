import React from "react";
import { FiSettings } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { useAuth } from "../../../contexts/GlobalProvider";

const ColorSettings = () => {
  const { setIsSideBar, isColorBar, setIsColorBar, screenSize } = useAuth();

  const colorSettingBtn = () => {
    setIsColorBar(!isColorBar);
    if (screenSize < 1000) {
      setIsSideBar(false);
    }
  };

  return (
    <>
      <div className="fixed right-5 bottom-5">
        <div className="h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
          <FiSettings
            className="text-3xl text-white cursor-pointer"
            onClick={colorSettingBtn}
          />
        </div>
      </div>

      <ColorSideBar />
    </>
  );
};

export default ColorSettings;

const ColorSideBar = () => {
  const {
    themeColor,
    setThemeColor,
    isColorBar,
    setIsColorBar,
    colorMode,
    setColorMode,
  } = useAuth();

  const mappingColor = [
    {
      color: "#07f2ea",
    },
    {
      color: "#0364f9",
    },
    {
      color: "#06f02f",
    },
    {
      color: "#8108d2",
    },
    {
      color: "#f87171",
    },
    {
      color: "#f1f5f9",
    },
    {
      color: "#334155",
    },
    {
      color: "#9bbae7",
    },
  ];

  const changeColorMode = (e) => {
    setColorMode(e.target.value);
    localStorage.setItem("hello", "hamro");
    if (e.target.value === "Light") {
      setThemeColor("#334155");
      localStorage.setItem("themeMode", "#334155");
    } else {
      setThemeColor("#9bbae7");
      localStorage.setItem("themeMode", "#9bbae7");
    }
  };

  const changeThemeColor = (e) => {
    setThemeColor(e.target.value);
    localStorage.setItem("themeMode", JSON.stringify(e.target.value));
  };

  return (
    <div
      className={`w-80 z-50 px-6 py-6  md:w-96 fixed right-0 top-0 h-full bg-slate-100 dark:bg-gray-900 transition-all duration-200 origin-right ${
        isColorBar ? "scale-100" : "scale-0"
      }`}
    >
      <h1 className="text-xl font-semibold " style={{ color: themeColor }}>
        Settings
      </h1>
      <p className="flex absolute right-4 top-2  items-center justify-center h-12 w-12 hover:bg-slate-200 dark:hover:bg-slate-300 rounded-full">
        <RiCloseCircleLine
          className=" text-4xl cursor-pointer"
          onClick={(a) => setIsColorBar(!a)}
          style={{ color: themeColor }}
        />
      </p>
      <p className="my-4 border-b-[1px] border-slate-400"> </p>
      <h1
        className="text-xl mt-10 font-semibold dark:text-slate-200"
        style={{ color: themeColor }}
      >
        Theme Option
      </h1>
      <p className="my-2">
        <input
          type="radio"
          name="theme"
          id="light"
          value="Light"
          onChange={changeColorMode}
          checked={colorMode === "Light" ? true : false}
        />
        <label htmlFor="light" className="ml-2 " style={{ color: themeColor }}>
          Light
        </label>
      </p>
      <p>
        <input
          type="radio"
          name="theme"
          id="dark"
          value="Dark"
          onChange={changeColorMode}
          checked={colorMode === "Dark" ? true : false}
        />
        <label htmlFor="dark" className="ml-2 " style={{ color: themeColor }}>
          Dark
        </label>
      </p>

      <p className="my-4 border-b-[1px] border-slate-400"> </p>
      <h1
        className="text-xl mt-10  font-semibold "
        style={{ color: themeColor }}
      >
        Theme Colors
      </h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {mappingColor.map((data, index) => (
          <button
            className={`h-10 w-10 rounded-full flex justify-center items-center  `}
            style={{ background: `${data.color}` }}
            value={data.color}
            onClick={changeThemeColor}
            key={index}
          >
            <BsCheck
              className={`${
                themeColor === data.color
                  ? "block text-white text-lg"
                  : "hidden"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

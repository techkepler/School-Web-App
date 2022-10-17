import React, { useState, useRef, useEffect } from "react";
import {
  About,
  Academics,
  Admission,
  Athletics,
  Facilities,
} from "./largeScrnSubItem";

const LargeScrnDropdown = () => {
  const menuNames = {
    about: "about",
    academic: "academic",
    admission: "admisssion",
    athletic: "athletic",
    facilities: "facilities",
  };
  const [dropdown, setDropdown] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        menuRef.current &&
        dropdown &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdown(null);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropdown]);

  return (
    <ul
      className="w-full large-screen-bottom-ul  flex justify-end gap-10 xl:gap-16 2xl:gap-20 pr-12 mt-12 text-lg text-white font-bold xl:text-xl uppercase"
      ref={menuRef}
    >
      <li className="relative py-8 group ">
        <button
          className="text-lg text-white font-bold xl:text-xl uppercase"
          onClick={() => setDropdown(menuNames.about)}
        >
          About{" "}
          <div className="border-b-4 scale-0 group-hover:scale-100 border-green-500 h-3  transition-transform duration-300"></div>
        </button>
        <About dropdown={dropdown} />
      </li>
      <li className="relative py-8 group">
        <button
          className="text-lg text-white font-bold xl:text-xl uppercase"
          onClick={() => setDropdown(menuNames.academic)}
        >
          Academics
          <div className="border-b-4 scale-0 group-hover:scale-100 border-green-500 h-3  transition-transform duration-300"></div>
        </button>
        <Academics dropdown={dropdown} />
      </li>
      <li className="relative py-8 group ">
        <button
          className="text-lg text-white font-bold xl:text-xl uppercase"
          onClick={() => setDropdown(menuNames.admission)}
        >
          Admission{" "}
          <div className="border-b-4 scale-0 group-hover:scale-100 border-green-500 h-3  transition-transform duration-300"></div>
        </button>
        <Admission dropdown={dropdown} />
      </li>
      <li className="relative py-8 group ">
        <button
          className="text-lg text-white font-bold xl:text-xl uppercase"
          onClick={() => setDropdown(menuNames.athletic)}
        >
          Athletics{" "}
          <div className="border-b-4 scale-0 group-hover:scale-100 border-green-500 h-3  transition-transform duration-300"></div>
        </button>
        <Athletics dropdown={dropdown} />
      </li>
      <li className="relative py-8 group ">
        <button
          className="text-lg text-white font-bold xl:text-xl uppercase"
          onClick={() => setDropdown(menuNames.facilities)}
        >
          Facilities{" "}
          <div className="border-b-4 scale-0 group-hover:scale-100 border-green-500 h-3  transition-transform duration-300"></div>
        </button>
        <Facilities dropdown={dropdown} />
      </li>
    </ul>
  );
};

export default LargeScrnDropdown;

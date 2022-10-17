import React from "react";
import { Link } from "react-router-dom";
import {
  academicsItem,
  aboutItem,
  admissionItem,
  athleticsItem,
  facilities,
} from "./NavBarItem";

const menuNames = {
  about: "about",
  academic: "academic",
  admission: "admisssion",
  athletic: "athletic",
  facilities: "facilities",
};

export const About = ({ dropdown }) => {
  return (
    <ul
      className={`absolute about-ul scale-0 group-hover:scale-100 transition-transform duration-200 origin-top ease-linear top-20 bg-gray-50 px-4 py-4 rounded-md border-b-8 border-green-500 ${
        dropdown === menuNames.about && "scale-100"
      }`}
    >
      {aboutItem.map((items, index) => (
        <Link
          to={`/${items.url}/`}
          key={index}
          className="block hover:underline text-base capitalize py-2 text-[#004B87]"
        >
          {items.title}
        </Link>
      ))}
    </ul>
  );
};

export const Academics = ({ dropdown }) => {
  return (
    <ul
      className={`absolute academic-ul top-20  scale-0 group-hover:scale-100 transition-transform duration-300 origin-top ease-linear  bg-gray-50 px-4 py-4 rounded-md border-b-8 border-sky-500 ${
        dropdown === menuNames.academic && "scale-100"
      }`}
    >
      {academicsItem.map((items, index) => (
        <Link
          to={`/${items.url}/`}
          key={index}
          className="block hover:underline text-base capitalize py-2 text-[#004B87]"
        >
          {items.title}
        </Link>
      ))}
    </ul>
  );
};

export const Admission = ({ dropdown }) => {
  return (
    <ul
      className={`absolute admission-ul scale-0 group-hover:scale-100 transition-transform duration-300 origin-top ease-linear top-20 bg-gray-50 px-4 py-4 rounded-md border-b-8 border-blue-900 ${
        dropdown === menuNames.admission && "scale-100"
      }`}
    >
      {admissionItem.map((items, index) => (
        <Link
          to={`/${items.url}/`}
          key={index}
          className="block hover:underline text-base capitalize py-2 text-[#004B87]"
        >
          {items.title}
        </Link>
      ))}
    </ul>
  );
};

export const Athletics = ({ dropdown }) => {
  return (
    <ul
      className={`absolute  athletics-ul bg-gray-50  scale-0  group-hover:scale-100 transition-transform duration-300 origin-top ease-linear top-20 bg- px-4 py-4 rounded-md border-b-8 border-yellow-500 ${
        dropdown === menuNames.athletic && "scale-100"
      }`}
    >
      {athleticsItem.map((items, index) => (
        <Link
          to={`/${items.url}/`}
          key={index}
          className="block hover:underline text-base normal-case  py-2 text-[#004B87]"
        >
          {items.title}
        </Link>
      ))}
    </ul>
  );
};

export const Facilities = ({ dropdown }) => {
  return (
    <ul
      className={`absolute bg-gray-50 facilities-ul scale-0  group-hover:scale-100 transition-transform duration-300 origin-top ease-linear top-20 bg- px-4 py-4 rounded-md border-b-8 border-red-500 ${
        dropdown === menuNames.facilities && "scale-100"
      }`}
    >
      {facilities.map((items, index) => (
        <Link
          to={`/${items.url}/`}
          key={index}
          className="block hover:underline text-base capitalize py-2 text-[#004B87]"
        >
          {items.title}
        </Link>
      ))}
    </ul>
  );
};

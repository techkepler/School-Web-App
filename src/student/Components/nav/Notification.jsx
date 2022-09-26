import React from "react";
import moment from "moment";
import { FcInfo } from "react-icons/fc";
import { useAuth } from "../../../contexts/GlobalProvider";

const notificationData = [
  {
    name: "Bishal Rayamajhi",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,nam?",
  },
  {
    name: "Ariana Grande",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,nam?",
  },
  {
    name: "Elizabeth Olsen ",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,nam?",
  },
  {
    name: "Nicole Kidman",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit Laboriosam,nam?",
  },
];

const Notification = () => {
  const { isNotification } = useAuth();
  return (
    <div
      className={`box-border shadow-2xl w-96 px-4 pt-5 pb-10 flex flex-col items-center justify-between gap-5 fixed right-1 md:right-10 bg-white top-16 z-40 rounded-md transition-all duration-300 origin-top ${
        isNotification ? "scale-100" : "scale-0"
      }`}
    >
      {notificationData.map((data, index) => (
        <div
          className="flex items-center justify-between gap-5 px-2 hover:bg-slate-200 rounded-md"
          key={index}
        >
          <FcInfo className="text-7xl rounded-full" />
          <div>
            <h1 className="text-sm font-semibold  text-slate-700">
              {data.name}
            </h1>
            <small className="text-sm block text-slate-600">
              {data.msg.split(" ").slice(0, 10).join(" ")}...
            </small>
            <small className="text-sky-500">
              {moment().startOf("day").fromNow()}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;

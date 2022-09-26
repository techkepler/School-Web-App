import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../server/Axios";

const AddEvents = () => {
  const { themeColor, isSideBar, isColorBar } = useAuth();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("start_time", startTime);
    formData.append("end_time", endTime);
    formData.append("location", location);
    formData.append("status", status);

    try {
      let res = await axiosAdmin.post("informations/crud/events/", formData);
      setSucsMsg(res.status);
      setTitle("");
      setDate("");
      setStartTime("");
      setEndTime("");
      setLocation("");
      setStatus("");

      setTimeout(() => {
        setSucsMsg("");
      }, 2000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No response from server.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.status === 500) {
        setErrMsg("Internal Server Error.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg(error.response.data.errors);
        setTimeout(() => {
          setErrMsg("");
        }, 4000);
      }
    }
  };
  return (
    <div className="my-10 flex justify-center items-center">
      {sucsMsg === 201 && (
        <div className="items-center w-full absolute  flex justify-center">
          <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
            Events Added Successfully.
          </p>
        </div>
      )}
      {errMsg && (
        <div className="items-center w-full absolute  flex   justify-center ">
          <p className="px-4  text-base md:w-[60%]  py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
            {Object.entries(errMsg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}
      <div
        className={`box-border rounded-md     md:px-8 py-7 dark:bg-gray-800   w-full ${
          isSideBar || isColorBar
            ? "lg:w-full xl:w-[90%] 2xl:w-[80%] "
            : "lg:w-[90%] xl:w-[80%] 2xl:w-[70%]"
        }`}
      >
        <h1
          style={{ color: themeColor }}
          className="text-center text-xl md:text-2xl font-semibold mb-10"
        >
          Add Events
        </h1>

        <form className="w-full my-4 pb-5 md:px-6 flex flex-col items-center justify-center ">
          <div className="w-full flex flex-col gap-8  justify-center my-4 ">
            <div className=" w-full">
              <label
                htmlFor="name"
                className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>Title</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
              />
            </div>

            <div className=" w-full">
              <label
                htmlFor="date"
                className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>Date</span>
              </label>

              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
              />
            </div>

            <div className=" w-full">
              <label
                htmlFor="date"
                className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>Start Time</span>
              </label>

              <input
                type="time"
                id="startTime"
                name="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
              />
            </div>

            <div className=" w-full">
              <label
                htmlFor="date"
                className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>End Time</span>
              </label>

              <input
                type="time"
                id="endTime"
                name="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor="date"
                className="block relative md:text-lg text-slate-700 dark:text-slate-300 my-1 "
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>Location</span>
              </label>

              <input
                type="text"
                id="startTime"
                name="startTime"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="form-input rounded-md dark:bg-slate-800 dark:text-slate-300 py-4 lg:py-5 px-3  w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="address"
                className="block md:text-lg relative text-slate-700 dark:text-slate-300 my-1"
              >
                <span className="text-red-500 mr-1">*</span>
                <span style={{ color: themeColor }}>
                  Do you want to make this event public or not ?
                </span>
              </label>

              <div className="flex gap-5 py-3 px-3">
                <p>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="form-radio mr-2"
                    value="true"
                    onChange={(e) => setStatus(e.target.value)}
                    checked={status === "true"}
                  />
                  <label
                    htmlFor="Yes"
                    className="dark:text-slate-300 text-slate-800"
                  >
                    Yes
                  </label>
                </p>

                <p>
                  <input
                    type="radio"
                    name="status"
                    id="status"
                    className="form-radio mr-2"
                    value="false"
                    onChange={(e) => setStatus(e.target.value)}
                    checked={status === "false"}
                  />
                  <label
                    htmlFor="No"
                    className="dark:text-slate-300 text-slate-800"
                  >
                    No
                  </label>
                </p>
              </div>
            </div>

            <div className=" flex gap-4 justify-center items-center w-full">
              <button
                className="bg-sky-500 rounded-md py-1.5 px-3"
                onClick={handleFormSubmit}
                disabled={
                  !title ||
                  !status ||
                  !date ||
                  !location ||
                  !startTime ||
                  !endTime
                }
              >
                Submit
              </button>
              <Link
                to="/admin/announcement/"
                className="bg-red-500 rounded-md py-1.5 px-3"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;

import React, { useState, useEffect } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import axiosPublic from "../../../Api/axiosPublic";
import "../about/uabout.css";
import { BgPolyImg } from "../../../Assets/export/ExportImg";

const Blogs = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Events");
  }, [setCurrentLocation]);

  const [fetchEventData, setFetchEventData] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      let res = await axiosPublic.get(
        "informations/crud/public/events/?page_size=100"
      );
      setFetchEventData(res.data.results);
    };
    fetchEvent();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <EventGrid eventData={fetchEventData} />
      <Footer />
    </div>
  );
};

export default Blogs;

const EventGrid = ({ eventData }) => {
  return (
    <div
      className="bg-white news-grid-main py-6 md:py-10 px-2 lg:mx-5 lg:px-5 bg-center bg-cover mt-5"
      style={{ backgroundImage: `url(${BgPolyImg})` }}
    >
      <h1 className="text-2xl md:text-3xl text-center font-bold text-[#004b87] pt-3 pb-6 mb-4 uppercase lg:text-4xl">
        Events
      </h1>
      <div
        className={`${
          eventData.length > 1 ? "news-grid" : "flex justify-center"
        }  `}
      >
        {eventData.map((data, index) => (
          <div
            key={index}
            className={`rounded-lg border-2 text-gray-800   relative bg-[#06adf4] ${
              eventData.length === 1 && "md:w-[450px]"
            }`}
          >
            <h1 className="py-2 px-2 text-lg font-bold capitalize">
              {data.title}
            </h1>
            <p className="py-2 text-sm font-semibold">
              <BsFillCalendar2CheckFill className="text-xl font-bold inline mx-2" />
              {new Date(data.date).toDateString()}
            </p>
            <p className="py-2 font-semibold text-sm">
              <FaClock className="text-xl font-bold inline mx-2" />
              {data.start_time.split(":")[0] < 12
                ? `${data.start_time.split(":")[0]}:${
                    data.start_time.split(":")[1]
                  } a.m`
                : `${data.start_time.split(":")[0] - 12}:${
                    data.start_time.split(":")[1]
                  } p.m`}{" "}
              to{" "}
              {data.end_time.split(":")[0] < 12
                ? `${data.end_time.split(":")[0]}:${
                    data.end_time.split(":")[1]
                  } a.m`
                : `${data.end_time.split(":")[0] - 12}:${
                    data.end_time.split(":")[1]
                  } p.m`}
            </p>
            <p className="py-2 font-semibold text-sm ">
              <FaMapMarkerAlt className="text-xl font-bold inline mx-2" />
              {data.location}
            </p>
          </div>
        ))}

        {eventData?.length < 1 && (
          <h1 className="text-3xl font-bold text-red-500">
            No Events Available
          </h1>
        )}
      </div>
    </div>
  );
};

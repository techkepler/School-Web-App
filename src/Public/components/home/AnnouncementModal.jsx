import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { VscChromeClose } from "react-icons/vsc";
import axiosPublic from "../../../Api/axiosPublic";
import { AnnouncementImg } from "../../../Assets/export/ExportImg";

const AnnouncementModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [announcementData, setAnnouncementData] = useState([]);

  useEffect(() => {
    setShowModal(true);
    const fetchAnnouncement = async () => {
      let res = await axiosPublic.get(
        "informations/crud/public/announcement/?page_size=1"
      );
      setAnnouncementData(res.data.results);
    };
    fetchAnnouncement();
  }, []);

  const announcmentDetails = announcementData
    .map((datas) => datas.data)
    .join(" ");

  return (
    <div
      className={`announcement-modal  transition-all duration-700 ease-linear w-full absolute  flex justify-center ${
        showModal
          ? "top-20 md:top-24 lg:top-16  "
          : "-top-[30rem] lg:-top-[45rem]"
      }   z-[100]`}
    >
      {announcementData?.length > 0 && (
        <div className="relative flex justify-center w-full ">
          {announcementData?.length > 0 && (
            <div
              className={`bg-slate-600 md:w-[500px] lg:w-[600px]   flex justify-center flex-col absolute transition-all duration-700 ease-linear  mx-4 px-4 md:px-6 lg:px-10 text-gray-900 rounded-md pt-6 pb-6 mt-5 md:mt-16`}
            >
              {announcementData.map((data, index) => (
                <div key={index} className="text-white opacity-90">
                  <h1 className="text-center text-green-500 text-2xl lg:text-3xl font-semibold pt-1">
                    {data.title}
                  </h1>

                  <div className="my-5 md:hidden">
                    {parse(announcmentDetails.slice(0, 300))}
                  </div>
                  <div className="my-5 hidden md:block">
                    {parse(announcmentDetails.slice(0, 500))}
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-4 ">
                <Link
                  to="/batsyayan/announcement/"
                  className="px-3 mx-4 py-1 bg-green-600 text-black rounded-md"
                >
                  Read More
                </Link>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 mx-4 py-1 bg-red-600 text-black rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {announcementData.length < 1 && (
        <div className="relative flex justify-center mt-2">
          <div className="">
            <img
              src={AnnouncementImg}
              alt="announcement"
              className="h-[450px] w-[350px] sm:w-[580px] sm:h-[550px] lg:h-[600px] xl:h-[650px]"
            ></img>

            <VscChromeClose
              className="text-4xl text-white absolute -right-4 -top-4 cursor-pointer z-[300]"
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementModal;

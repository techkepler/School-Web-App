import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import axiosPublic from "../../../Api/axiosPublic";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import { BgPolyImg } from "../../../Assets/export/ExportImg";

const Announcement = () => {
  const { setCurrentLocation } = useAuth();
  const [getAnnouncement, setGetAnnouncement] = useState([]);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      let res = await axiosPublic.get("informations/crud/public/announcement");
      setGetAnnouncement(res.data.results);
    };
    fetchAnnouncement();
  }, []);

  useEffect(() => {
    setCurrentLocation("Announcement");
  }, [setCurrentLocation]);

  return (
    <div>
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <div
        className="bg-center px-4 py-6 md:py-8 md:px-8 md:mx-4 lg:mx-6 bg-cover  text-[#004b87] lg:px-10 flex flex-col items-center justify-center mt-5"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        {getAnnouncement.map((datas) => (
          <div className="lg:w-[75%] md:w-[90%] xl:w-[70%]" key={datas.id}>
            <p className="text-xl md:py-2">
              {new Date(datas.date).toDateString()}
            </p>
            <h1 className="font-bold text-3xl md:text-5xl my-1 py-2">
              {datas.title}
            </h1>

            <div>
              <p className="py-2 my-1 ">{parse(datas.data)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Announcement;

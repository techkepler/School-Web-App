import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MdDoubleArrow } from "react-icons/md";

import {
  SchoolBgImg1,
  SchoolBgImg2,
  SchoolBgImg3,
  SchoolBgImg4,
  SchoolBgImg5,
} from "../../../Assets/export/ExportImg";
// Import Swiper styles
import "swiper/css";

const HomeBackground = () => {
  return (
    <div className="bg-[#004B87] border-0  lg:border-l-[20px] lg:border-r-[20px] lg:border-t-[20px] border-b-[20px] border-[#004B87] border-opacity-100 relative w-full  top-0 h-[510px] md:h-[600px] lg:h-[670px] md:bg-opacity-50 bg-opacity-30  ">
      <div className="absolute block top-0 -z-20 w-full h-[500px] md:h-[590px] lg:h-[650px] bg-cover bg-left-top bg-no-repeat ">
        <BgSlider />
      </div>

      <div className="absolute top-40 md:top-56 lg:top-40 left-5 md:left-10">
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem]   text-yellow-500 font-extrabold">
          A GLOBAL
        </p>
        <p className="text-4xl text-yellow-500 md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold  ">
          PERSPECTIVE
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold text-white mt-2 ">
          BEGINS IN
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold text-white  ">
          BATSYAYAN.
        </p>
        <p className="text-white text-base md:text-lg lg:text-2xl mt-2 md:w-64 lg:w-full">
          Meeting the future through the diversity of our community.
        </p>

        <Link
          to="/frequently/asked/question/"
          className="uppercase block w-72 text-base font-semibold text-[#004B87] bg-white py-3 lg:py-5 px-10 rounded-md mt-5 group hover:bg-slate-200"
        >
          <span>get the fact</span>
          <MdDoubleArrow className="text-2xl group-hover:translate-x-2  text-green-500 ml-2 inline" />
        </Link>
      </div>
    </div>
  );
};

export default HomeBackground;

const BgSlider = () => {
  const featuredProducts = [
    SchoolBgImg1,
    SchoolBgImg2,
    SchoolBgImg3,
    SchoolBgImg4,
    SchoolBgImg5,
  ];
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {featuredProducts.map((datas, index) => (
        <SwiperSlide key={index}>
          <img
            src={datas}
            alt="School Buildings"
            className="w-full h-[500px] md:h-[590px] lg:h-[650px] home-bg-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

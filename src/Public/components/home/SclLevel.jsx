import React from "react";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import {
  MontessoriSclLevelImg,
  MiddleSclLevelImg,
  HighSclLevelImg,
} from "../../../Assets/export/ExportImg";

const SchoolLevel = () => {
  return (
    <div className="lg:mx-10 mx-4 my-20">
      <div className="home-grid flex flex-col lg:grid w-full gap-5 lg:gap-16 ">
        <div
          className="lower-scl-level w-full flex flex-row lg:flex-col "
          data-aos="fade-up"
        >
          <img
            src={MontessoriSclLevelImg}
            alt="Student Learning"
            className="w-[40%] lg:w-full md:h-[300px] lg:[250px]"
          />
          <div className="bg-[#00815A] w-[60%] lg:w-full h-auto  pl-6 py-8 flex flex-col  justify-center">
            <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
              Lower School
            </p>
            <p className="text-sm md:text-base text-gray-100">
              Nursery - Grade 4
            </p>
            <Link
              to="/primary/school/"
              className="mt-2  text-sm font-semibold text-white underline hover:no-underline group"
            >
              Read More{" "}
              <MdDoubleArrow className="text-lg inline group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
        <div
          className="middle-scl-level w-full flex flex-row lg:flex-col"
          data-aos="fade-up"
        >
          <img
            src={MiddleSclLevelImg}
            alt="Student Learning"
            className="w-[40%] lg:w-full md:h-[300px] lg:[250px] "
          />
          <div className="bg-[#0077C8] w-[60%] lg:w-full pl-6 py-8 flex flex-col  justify-center">
            <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
              Middle School
            </p>
            <p className="text-sm md:text-base  text-gray-100">Grade 5 - 8</p>
            <Link
              to="/secondary/school/"
              className="mt-2  text-sm font-semibold text-white underline hover:no-underline group"
            >
              Read More{" "}
              <MdDoubleArrow className="text-lg inline group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
        <div
          className="high-scl-level w-full flex flex-row lg:flex-col"
          data-aos="fade-up"
        >
          <img
            src={HighSclLevelImg}
            alt="Student Learning"
            className="w-[40%] lg:w-full md:h-[300px] lg:[250px]"
          />
          <div className="bg-[#CC4E00] w-[60%] lg:w-full pl-6 py-8 flex flex-col  justify-center">
            <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
              High School
            </p>
            <p className="text-smmd:text-base  text-gray-100">
              Grade 9 - Grade 12
            </p>
            <Link
              to="/high/school/"
              className="mt-2  text-sm font-semibold text-white underline hover:no-underline group"
            >
              Read More{" "}
              <MdDoubleArrow className="text-lg inline group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLevel;

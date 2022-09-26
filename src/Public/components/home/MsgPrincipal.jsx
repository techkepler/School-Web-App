import React from "react";

import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  PrincipalImg,
  PatternImg,
  SchoolBgImg1,
  SchoolBgImg2,
  CommunityImg,
} from "../../../Assets/export/ExportImg";

const MsgPrincipalHome = () => {
  return (
    <div className="lg:mx-10 mt-5 lg:mt-10">
      <div className="bg-[#004b87]  relative w-full px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <img
            src={PrincipalImg}
            alt="Pincipal"
            className="w-full md:h-[550px] lg:h-full  border-b-4 lg:w-[50%] border-yellow-600"
            data-aos="fade-right"
          />

          <div className="lg:w-[50%] md:gap-4 flex flex-col" data-aos="fade-up">
            <p className="mt-4 md:mt-8 lg:my-0 ">
              <span className="block font-bold text-white text-2xl md:text-3xl lg:text-4xl">
                Message From Principal
              </span>{" "}
            </p>
            <img
              src={PatternImg}
              alt="Pattern"
              className="w-[70%] h-[30px]  mt-3 md:my-6 lg:my-0"
            />
            <p className="text-base mt-3 lg:my-0  text-white">
              Through discussion, exploration, and collaboration, our extensive
              and multifaceted curriculum meets real world issues in every
              grade. Learn how the Batsyayan experience encourages each student
              to grow, take risks within a supportive learning community, and go
              “above and beyond” to reach his/her/their fullest potential.
            </p>
            <p className="text-base mt-3 lg:my-0  text-white">
              Through discussion, exploration, and collaboration, our extensive
              and multifaceted curriculum meets real world issues in every
              grade. Learn how the Batsyayan experience encourages each student
              to grow, take risks within a supportive learning community, and go
              “above and beyond” to reach his/her/their fullest potential.
            </p>
            <Link
              to="/batsyayan/leadership/"
              className="bg-white mt-8 lg:order-4 text-[#004B87] font-bold bg-opacity-80 py-3 px-2 uppercase w-48 rounded-md text-center group"
            >
              Read More
              <MdDoubleArrow className="text-blue-900 inline ml-2 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="home-grid mt-10 lg:mt-16 flex flex-col lg:grid w-full gap-5 lg:gap-16 ">
          <div
            className="lower-scl-level w-full flex flex-row lg:flex-col "
            data-aos="fade-up"
          >
            <img
              src={SchoolBgImg1}
              alt="Student Learning"
              className="w-[40%] lg:w-full md:h-[300px] lg:h-[250px]"
            />
            <div className="bg-[#029f72] w-[60%] lg:w-full h-auto  pl-6 py-8 flex flex-col  justify-center">
              <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
                25 ACRES
              </p>
              <p className="text-sm md:text-base text-gray-100">
                Batsyayan Heights campus{" "}
              </p>
              <Link
                to="/batsyayan/introduction/"
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
              src={SchoolBgImg2}
              alt="Student Learning"
              className="w-[40%] lg:w-full md:h-[300px] lg:h-[250px] "
            />
            <div className="bg-[#780ac1] w-[60%] lg:w-full pl-6 py-8 flex flex-col  justify-center">
              <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
                HIGH-STANDARD{" "}
              </p>
              <p className="text-sm md:text-base  text-gray-100">Class Room</p>
              <Link
                to="/athletic/facilities/"
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
              src={CommunityImg}
              alt="Student Learning"
              className="w-[40%] lg:w-full md:h-[300px] lg:h-[250px]"
            />
            <div className="bg-[#00a3cc] w-[60%] lg:w-full pl-6 py-8 flex flex-col  justify-center">
              <p className="font-semibold text-white uppercase text-lg md:text-xl lg:text-2xl">
                COMMUNITY{" "}
              </p>
              <p className="text-smmd:text-base  text-gray-100">
                Our strongest asset{" "}
              </p>
              <Link
                to="/batsyayan/team/"
                className="mt-2  text-sm font-semibold text-white underline hover:no-underline group"
              >
                Read More{" "}
                <MdDoubleArrow className="text-lg inline group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgPrincipalHome;

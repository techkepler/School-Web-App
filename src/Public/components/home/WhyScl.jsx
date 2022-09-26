import React from "react";
import { Link } from "react-router-dom";

import { SchoolBgImg1, PatternImg } from "../../../Assets/export/ExportImg";

const WhyBatsyayan = () => {
  return (
    <div className="lg:mx-10 lg:mt-12 lg:mb-20">
      <div className="bg-[#004b87]   w-full px-4 py-4 h-full">
        <div className="flex flex-col justify-center  lg:flex-row gap-8 lg:gap-12 ">
          <img
            src={SchoolBgImg1}
            alt="School Building"
            className="w-full  border-b-4 lg:w-[50%] border-yellow-600 rounded-2xl"
          />
          <div
            className="lg:w-[50%] flex flex-col gap-2 md:gap-5"
            data-aos="fade-up"
          >
            <p className="mt-4 md:mt-8 lg:my-0 ">
              <span className="block font-bold text-white text-2xl md:text-3xl lg:text-4xl">
                Why Batsyayan
              </span>{" "}
            </p>
            <img
              src={PatternImg}
              alt="Pattern"
              className="w-[70%] h-[30px]  mt-1 md:my-6 lg:my-0"
            />
            <p className="text-base md:text-lg mt-1 lg:my-0  text-white">
              We create a learning culture where all learners are fully engaged
              in holistic, meaningful and innovative learning experiences in a
              caring and collaborative learning community, supported by
              partnerships with parents and families. Our emphasis will be on
              providing valued–based education in an intellectually stimulating
              learning environment, imparted by professionals trained in
              progressive teaching-learning approaches, to transform the young
              learners into knowledgeable, confident, responsible and p...
            </p>

            <div className="my-4">
              <Link
                to="/batsyayan/features/"
                className="bg-green-500 transition-all duration-100  hover:scale-x-110 px-3 py-3 rounded-md hover:bg-green-700"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBatsyayan;

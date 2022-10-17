import React, { useEffect } from "react";
import AOS from "aos";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import ParentReview from "../../components/academics/ParentReview";
import Dropdown from "../../components/academics/CurriculumDropdown";
import { middleSclData } from "./curriculumData";

import {
  BgPolyImg,
  ChildHoldingHandsImg,
  ChildrenExpImg,
  ChildrenPlayingImg,
  GreenPatternImg,
  SchoolBgImg4,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";

import "../about/uabout.css";
import "./zacademic.css";
import "../../../../node_modules/aos/dist/aos.css";

const HigherScl = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Higher Secondary");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg4})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 py-2 md:px-4 w-80 md:w-[32rem]">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;The more that you read, the more things you will know, the
            more that you learn, the more places you'll go.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Dr. Seuss
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div className="my-16 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16  px-3 lg:px-6 text-white">
        <img
          src={ChildrenExpImg}
          alt="Children Experimenting"
          className="md:h-[450px] w-full lg:w-[50%] lg:order-2 border-b-4 border-yellow-600"
        />

        <div className="lg:w-[50%]" data-aos="fade-up">
          <p className=" text-3xl md:text-4xl font-bold uppercase text-sky-400">
            VITALITY,
          </p>
          <p className="text-3xl md:text-4xl font-bold uppercase text-green-400">
            {" "}
            ENGAGEMENT,
          </p>
          <p className=" text-3xl md:text-4xl font-bold uppercase text-teal-400">
            {" "}
            AND PURPOSE
          </p>

          <p className="pt-4 pb-2 md:text-lg  ">
            Batsyayan Upper School program reflects our students’
            extraordinary–and extraordinarily diverse–talents and interests.
            Collaboratively, we work to cultivate the skills, confidence, and
            resolve to live a life of purpose and meaning, in high school and
            beyond.{" "}
          </p>
          <p className="py-2 md:text-lg  ">
            We invite you to join us in this journey. Together, we will prepare
            and inspire the next generation of diverse leaders and global
            citizens to act with intelligence, imagination, and, above all,
            character.
          </p>
        </div>
      </div>

      <div
        className="my-20  lg:flex justify-between gap-16 px-3 lg:px-6"
        data-aos="fade-up"
      >
        <img
          src={ChildHoldingHandsImg}
          alt="Children Experimenting"
          className="md:h-[450px] w-full lg:w-[50%]  border-b-4 border-yellow-600"
        />

        <div className="lg:w-[50%] ">
          <p className="my-6 font-bold text-white text-2xl lg:text-4xl pr-4">
            Academic Excellence
          </p>
          <img src={GreenPatternImg} alt="" className="my-6 py-2" />
          <p className="my text-base lg:text-lg text-gray-200">
            Our Upper School curriculum challenges students to move beyond their
            existing assumptions and understandings, celebrate the creative
            tension that differences generate, and hone critical thinking and
            communication skills that will serve them throughout their lives.
            From 9th to 12th grades, students join a community of learners —
            including faculty, deans, advisors, and other mentors — who
            encourage and inspire them to excel, especially by taking the
            intellectual risks that academic and personal excellence requires.
          </p>
        </div>
      </div>

      <div
        className="my-20  lg:flex justify-between gap-16 px-3 lg:px-6"
        data-aos="fade-up"
      >
        <img
          src={ChildrenPlayingImg}
          alt="Children Experimenting"
          className="md:h-[450px] w-full lg:w-[50%] lg:order-2  border-b-4 border-yellow-600"
        />

        <div className="lg:w-[50%] ">
          <p className="my-6 font-bold text-white text-2xl lg:text-4xl pr-4">
            Student Life
          </p>
          <img src={GreenPatternImg} alt="" className="my-6 py-2" />

          <p className="py-2 text-base lg:text-lg text-gray-200">
            In addition to their engagement with our extensive academic
            curriculum, students flourish in the wide array of clubs and
            extracurricular activities that offer opportunities to explore new
            interests, talents, and friendships, and to identify passions
            they’ll continue to cultivate in Upper School and beyond.
          </p>
        </div>
      </div>

      <div
        className="my-20 lg:my-24 px-3 lg:px-6 py-6 flex flex-col justify-center items-center w-full bg-cover bg-center"
        data-aos="fade-up"
        style={{ background: `url(${BgPolyImg})` }}
      >
        <h1 className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-semibold my-6 text-center">
          Higher Secondary School Curriculum
        </h1>
        <div className="lg:w-[90%] lg:text-lg w-full">
          {middleSclData.map((datas, index) => (
            <Dropdown datas={datas} key={index} />
          ))}
        </div>
      </div>

      <ParentReview />

      <Footer />
    </div>
  );
};

export default HigherScl;

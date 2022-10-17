import React, { useEffect } from "react";
import AOS from "aos";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import ParentReview from "../../components/academics/ParentReview";
import { lowerSclData } from "./curriculumData";
import Dropdown from "../../components/academics/CurriculumDropdown";
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

const PrimaryScl = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Primary School");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg4})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 py-2 md:px-4 w-80 md:w-[32rem]">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Live as if you were to die tomorrow. Learn as if you were to
            live forever.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Mahatma Gandhi
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
          <p className=" text-4xl font-bold uppercase text-sky-400">FALLING</p>
          <p className="text-4xl font-bold uppercase text-green-400">
            {" "}
            IN LOVE,
          </p>
          <p className=" text-4xl font-bold uppercase text-teal-400">
            {" "}
            WITH LEARNING
          </p>
          <p className="pt-4 pb-2 md:text-lg  ">
            Our whole-child educational philosophy derives from our commitment
            to diversity — of individuals, viewpoints, experiences — and the
            intellectual and moral excellence that it generates.
          </p>
          <p className="py-2  md:text-lg ">
            Our mission is to educate individuals who are distinguished by
            intellectual and moral courage and give them the tools and resources
            to become agents of change in their communities, our country, and
            the world.
          </p>
          <p className="py-2  md:text-lg  ">
            At Batsyayan, education is a joyful act of creation that inspires
            students and teachers alike to pursue excellence — their own and
            others'.
          </p>
        </div>
      </div>

      <div
        className="my-24  lg:flex justify-between gap-16 px-3 lg:px-6"
        data-aos="fade-up"
      >
        <img
          src={ChildHoldingHandsImg}
          alt="Children Experimenting"
          className="md:h-[450px] w-full lg:w-[50%]  border-b-4 border-yellow-600"
        />

        <div className="lg:w-[50%] ">
          <p className="my-6 font-bold text-white text-2xl lg:text-4xl pr-4">
            Educational Philosophy
          </p>
          <img src={GreenPatternImg} alt="" className="my-6 py-2" />
          <p className="my text-base lg:text-lg text-gray-200">
            Our whole-child educational philosophy derives from our commitment
            to diversity—of individuals, viewpoints, experiences—and the
            intellectual and moral excellence that it generates. Batsyayan’s
            Lower School curriculum nurtures and extends students’ natural
            curiosity, engages them in the challenges and joys of problem
            solving, and motivates them to acquire the knowledge and habits of
            mind necessary to become agents of change in their communities, our
            country, and the world.
          </p>
        </div>
      </div>

      <div
        className="my-24  lg:flex justify-between gap-16 px-3 lg:px-6"
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
          <p className="pt-4 pb-2 text-base lg:text-lg text-gray-200">
            Batsyayan’s Lower School offers a full Extended Day Program for all
            students in Nursery to Grade 4.
          </p>
          <p className="py-2 text-base lg:text-lg text-gray-200">
            In our drop-in After School program, students play indoors and
            outdoors, complete their homework, and enjoy a healthy snack.
          </p>
          <p className="py-2 text-base lg:text-lg text-gray-200">
            Additionally, we also offer a variety of enrichment courses in the
            arts, sciences, and athletics. Classes are age appropriate and
            designed to provide exciting educational opportunities for exploring
            a wide array of interests, such as cooking, painting, and tennis.
            Taught by members of Batsyayan’s Lower School faculty or outside
            experts, each class meets once a week per trimester with sessions in
            the fall, winter, and spring.
          </p>
        </div>
      </div>

      <div
        className="my-20 lg:my-24 px-3 lg:px-6 py-6 flex flex-col justify-center items-center w-full bg-cover bg-center"
        data-aos="fade-up"
        style={{ background: `url(${BgPolyImg})` }}
      >
        <h1 className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-semibold my-6">
          Primary School Curriculum
        </h1>
        <div className="lg:w-[90%] lg:text-lg w-full">
          {lowerSclData.map((datas, index) => (
            <Dropdown datas={datas} key={index} />
          ))}
        </div>
      </div>

      <ParentReview />

      <Footer />
    </div>
  );
};

export default PrimaryScl;

import React, { useEffect } from "react";
import AOS from "aos";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import SchoolLevel from "../../components/home/SclLevel";
import ParentReview from "../../components/academics/ParentReview";
import {
  ChildHoldingHandsImg,
  ChildPrayingImg,
  ChildrenExpImg,
  GreenPatternImg,
  SchoolBgImg4,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";

import "../about/uabout.css";
import "./zacademic.css";
import "../../../../node_modules/aos/dist/aos.css";

const Overview = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Academics");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg4})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 md:px-4 w-80 md:w-96">
          <blockquote
            className="text-xl md:text-3xl font-medium italic"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;The mind that opens to a new idea never returns to its
            original size.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg">
            &mdash; Albert Einstein
          </small>
        </div>
      </div>

      <JoinEvent />
      <div className="my-4 px-3 py-4 md:py-10 text-gray-200  md:px-10  relative">
        <div className="md:w-[50%]">
          <p className="py-2 md:text-lg lg:text-xl">
            From Nursery to Grade 12, Batsyayan is where curiosity and
            collaboration shift perspectives and open minds.
          </p>
          <p className="py-2  md:text-lg lg:text-xl">
            Each day at Batsyayan is filled with engaging classes and
            experiences that will expand your child’s intellect, nurture a love
            of the arts, develop problem-solving skills, and build a sense of
            community and teamwork.
          </p>
        </div>
        <img
          src={ChildrenExpImg}
          alt="Academic"
          className="h-[400px] hidden md:block md:w-[350px] lg:w-[400px] absolute -top-16 right-7 lg:right-20"
        />
      </div>

      <div className="my-4 lg:my-8 px-3 py-4 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10">
        <img
          src={ChildHoldingHandsImg}
          alt="Academic"
          className="h-[400px] hidden lg:block md:w-[350px] lg:w-[40%]  -top-2 left-7 lg:left-10"
        />
        <div className="lg:w-[60%]">
          <p className="text-white text-4xl font-bold">Diversity,</p>
          <p className="text-white text-4xl font-bold">Excellence,</p>
          <p className="text-yellow-500 text-4xl font-bold">Character</p>
          <p className="pt-4 pb-2 md:text-lg lg:text-xl">
            Our whole-child educational philosophy derives from our commitment
            to diversity — of individuals, viewpoints, experiences — and the
            intellectual and moral excellence that it generates.
          </p>
          <p className="py-2  md:text-lg lg:text-xl">
            Our mission is to educate individuals who are distinguished by
            intellectual and moral courage and give them the tools and resources
            to become agents of change in their communities, our country, and
            the world.
          </p>
          <p className="py-2  md:text-lg lg:text-xl">
            At Batsyayan, education is a joyful act of creation that inspires
            students and teachers alike to pursue excellence — their own and
            others'.
          </p>
        </div>
      </div>

      <div className="my-4 lg:my-8 px-3 py-4 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10">
        <img
          src={ChildPrayingImg}
          alt="Academic"
          className="h-[400px] hidden lg:order-2 lg:block md:w-[350px] lg:w-[40%]  -top-2 left-7 lg:left-10"
        />
        <div className="lg:w-[60%]">
          <p className="text-white text-3xl font-bold">Finding their voices,</p>
          <p className="text-yellow-500 text-3xl font-bold">at every stage</p>
          <img src={GreenPatternImg} alt="" className="mt-3 py-3 w-full" />
          <p className="pt-4 pb-2 md:text-lg lg:text-xl">
            Our whole-child educational philosophy derives from our commitment
            to diversity — of individuals, viewpoints, experiences — and the
            intellectual and moral excellence that it generates.
          </p>
          <p className="py-2  md:text-lg lg:text-xl">
            Our mission is to educate individuals who are distinguished by
            intellectual and moral courage and give them the tools and resources
            to become agents of change in their communities, our country, and
            the world.
          </p>
          <p className="py-2  md:text-lg lg:text-xl">
            At Batsyayan, education is a joyful act of creation that inspires
            students and teachers alike to pursue excellence — their own and
            others'.
          </p>
        </div>
      </div>

      <SchoolLevel />

      <ParentReview />
      <Footer />
    </div>
  );
};

export default Overview;

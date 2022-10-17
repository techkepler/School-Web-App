import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import SchoolLevel from "../../components/home/SclLevel";
import BatsyayanNews from "../../components/home/HomeNews";
import {
  ChildCookingImg,
  ChildHoldingHandsImg,
  ChildrenExpImg,
} from "../../../Assets/export/ExportImg";
import "../../../../node_modules/aos/dist/aos.css";
import { useAuth } from "../../../contexts/GlobalProvider";

const Overview = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Admission");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${ChildrenExpImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;An investment in knowledge pays the best interest.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Benjamin Franklin
          </small>
        </div>
      </div>
      <JoinEvent />

      <div className="my-4 px-3 py-4 md:py-10 text-gray-200  md:px-10  relative">
        <div className="lg:w-[50%]">
          <p className="py-2 font-semibold md:text-lg lg:text-xl">
            Our online application for the 2023-2024 academic year will open on
            September 1, 2022.
          </p>
          <p className="py-2  md:text-lg ">
            Your children will change the world. A passion for lifelong learning
            begins at Batsyayan.
          </p>
        </div>
        <img
          src={ChildHoldingHandsImg}
          alt="Academic"
          className="h-[400px] hidden lg:block md:w-[350px] lg:w-[400px] absolute -top-16  lg:right-20 xl:right-28"
        />
      </div>

      <div
        className="my-4 lg:mt-40 lg:mb-20  py-4 md:py-10 bg-white  md:px-10  relative lg:flex lg:gap-10 md:mx-4"
        data-aos="fade-up"
      >
        <img
          src={ChildCookingImg}
          alt="Academic"
          className="h-[400px] hidden lg:block md:w-[350px] lg:w-[40%]  -top-2 left-7 lg:left-10"
        />
        <div className="lg:w-[60%] px-3">
          <p className="text-gray-700 text-4xl font-bold">A Lifetime Love</p>
          <p className="text-[#2783cf] text-4xl font-bold">
            of Learning Begins Here
          </p>
          <p className="pt-4 pb-2 text-sm md:text-base  text-gray-800">
            From Nursery through Grade 10, Batsyayan students embody the best of
            New York: striving just beyond their reach, seeing opportunity
            everywhere, and creating an environment where they all can do their
            best.
          </p>
        </div>

        <div className="my-4 lg:hidden px-3">
          <ul>
            <Link
              to="/application/process/"
              className="text-[#248fe6] hover:text-[#0460ab] block text-sm font-semibold underline py-2 "
            >
              Application Process
            </Link>
            <Link
              to="/contact/"
              className="text-[#248fe6] hover:text-[#0460ab] block text-sm font-semibold underline py-2 "
            >
              Contact Our Admission Team
            </Link>
            <Link
              to="/frquently/asked/question/"
              className="text-[#248fe6] hover:text-[#0460ab] block text-sm font-semibold underline py-2 "
            >
              Frquently Asked Quesitons
            </Link>
            <Link
              to="/tution/financial/aid/"
              className="text-[#248fe6] hover:text-[#0460ab] block text-sm font-semibold underline py-2 "
            >
              Tution & Finanical Aid
            </Link>
          </ul>
        </div>
      </div>

      <SchoolLevel />

      <div>
        <BatsyayanNews category={"Admission News"} title={"Admission News"} />
      </div>

      <Footer />
    </div>
  );
};

export default Overview;

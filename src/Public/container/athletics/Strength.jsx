import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { BgPolyImg, SchoolBgImg1 } from "../../../Assets/export/ExportImg";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { useAuth } from "../../../contexts/GlobalProvider";

const Strength = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Strength");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg1})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Man can learn nothing except by going from the known to the
            unknown.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Claude Bernard
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div
        className="my-4 lg:my-8 px-3 bg-white py-7 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10 lg:mx-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className="lg:block w-[30%] hidden">
          <ul className="font-semibold text-[#004b87] w-60">
            <Link
              to="/athletics/overview/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Overview
            </Link>

            <Link
              to="strength/conditioning/"
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87]"
            >
              Strength & Conditioning
            </Link>
            <Link
              to="/sports/medicine/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Sport Medicine
            </Link>
            <Link
              to="/athletic/facilities/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Facilities
            </Link>
            <Link
              to="/contact/athletics/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Contact Athletic Facilities
            </Link>
          </ul>
        </div>
        <div className="lg:w-[70%]">
          <p className="text-[#004B87] text-xl font-bold">
            To compete at the highest levels requires dedication, passion, and
            encouragement.
          </p>

          <p className="pt-4 pb-2 md:text-lg  text-[#004B87]">
            Batsyayan student-athletes are supported in reaching their full
            potential by using the most effective methods of strength and
            conditioning training. Batsyayan’s High Performance staff works
            closely with student-athletes to prevent injury, rehab safely, and
            enter competition in their best shape.
          </p>
          <p className="py-2  md:text-lg text-[#004B87]">
            Batsyayan’s student-athletes benefit from long term athletic
            development plans specifically formulated by the High Performance
            coaches for each team. Batsyayan’s year-round training program
            focuses on improving goals based on appropriate training age.
          </p>
          <p className="py-2  md:text-lg  text-[#004B87]">
            Students have the opportunity to train both indoors and outdoors on
            Batsyayan’s beautiful 25-acre campus. They are free to explore their
            limits in a safe, supervised, and judgment-free environment where
            our highly experienced staff brings more than 25-years of experience
            from the Olympic level and Division I college level, both as
            athletes and coaches.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Strength;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BgPolyImg, SchoolBgImg1 } from "../../../Assets/export/ExportImg";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { useAuth } from "../../../contexts/GlobalProvider";

const LowerScl = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Sports Medicine");
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
            &ldquo;Education is the ability to listen to almost anything without
            losing your temper or your self-confidence.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Robert Frost
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div
        className="my-4 lg:my-8 px-3 bg-white py-7 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10 bg-cover bg-center"
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
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Strength & Conditioning
            </Link>
            <Link
              to="/sports/medicine/"
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87]"
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
          <p className="text-[#004B87] text-xl md:text-2xl font-bold">
            Sports Medicine Overview
          </p>

          <p className="pt-4 pb-2 md:text-lg  text-[#004B87]">
            At Batsyayan, we provide first aid treatment to the injured player.
          </p>

          <p className="py-2 font-semibold   my-4 text-[#004B87]">
            Students receive comprehensive classroom instruction and hands-on
            clinical experiences that develops their skills in the follow areas:
          </p>
          <ul className="list-disc text-[#004B87] mx-4">
            <li>Injury prevention</li>
            <li>Injury and medical illness, diagnosis, and evaluation</li>
            <li>Rehabilitative treatment</li>
            <li>Emergency medical care</li>
            <li>Conditioning</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LowerScl;

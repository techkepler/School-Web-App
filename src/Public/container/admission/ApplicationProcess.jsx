import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import {
  BgPolyImg,
  ChildrenExpImg,
  GreenPatternImg,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";

const ApplicationProcess = () => {
  const { setCurrentLocation } = useAuth();
  const date = new Date();
  const fullDate = date.getFullYear();

  useEffect(() => {
    setCurrentLocation("Application Process");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${ChildrenExpImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Develop a passion for learning. If you do, you will never
            cease to grow.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Anthony J. D'Angelo
          </small>
        </div>
      </div>
      <JoinEvent />

      <div
        className="my-4 lg:my-8 px-3  py-7 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10 lg:mx-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className="lg:block w-[30%] hidden">
          <ul className="font-semibold text-[#004b87] w-60">
            <Link
              to="/admission/overview/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Overview
            </Link>
            <Link
              to="/admission/fast/facts/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Fast Facts
            </Link>
            <Link
              to="/application/process/"
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87]"
            >
              Application Process
            </Link>
            <Link
              to="/tution/financial/aid/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Fee & Financial Aid
            </Link>
            <Link
              to="/rquently/asked/question/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              FAQs
            </Link>
            <Link
              to="/contact/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="lg:w-[70%] text-[#004B87]">
          <p className="py-4  md:text-lg text-[#004B87]">
            <span className="font-semibold pr-2">
              Thank you for your interest in Batsyayan !
            </span>{" "}
            We look forward to meeting you.
          </p>
          <p className="py-2  md:text-lg  text-[#004B87]">
            Below is an at-a-glance view of key dates in the application process
            for{" "}
            <span className="font-semibold">
              {" "}
              {fullDate}-{fullDate + 1}
            </span>
            . Applications for the{" "}
            <span className="font-semibold">
              {" "}
              {fullDate}-{fullDate + 1}{" "}
            </span>
            school year will open on{" "}
            <span className="font-semibold"> September 1, 2022</span>.
          </p>

          <h1 className="text-2xl md:text-4xl capitalize font-bold mt-8">
            Key Application Dates
          </h1>
          <ul className="text-sm">
            <li className="my-1 py-3">
              <h1 className="font-semibold text-base px-2">
                September 1, 2021
              </h1>
              <p className="px-2">
                Application open for the 2022-2023 Academic Year
              </p>
            </li>{" "}
            <li className="my-1 py-3">
              <h1 className="font-semibold text-base px-2">
                September 1, 2021
              </h1>
              <p className="px-2">
                Application open for the 2022-2023 Academic Year
              </p>
            </li>{" "}
            <li className="my-1 py-3">
              <h1 className="font-semibold text-base px-2">
                September 1, 2021
              </h1>
              <p className="px-2">
                Application open for the 2022-2023 Academic Year
              </p>
            </li>{" "}
            <li className="my-1 py-3">
              <h1 className="font-semibold text-base px-2">
                September 1, 2021
              </h1>
              <p className="px-2">
                Application open for the 2022-2023 Academic Year
              </p>
            </li>
          </ul>

          <img src={GreenPatternImg} alt="" className="my-8" />

          <h1 className="text-xl md:text-4xl font-bold py-4 ">
            Batsyayan Test Optional Policy for the 2022-2023 Admissions Season
          </h1>
          <p className=" pb-4">
            As the COVID-19 pandemic continues, we understand that a
            standardized testing requirement may present challenges for
            families. So, we are officially test-optional this season. We
            support equally students who decide to submit standardized test
            results and those who do not.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationProcess;

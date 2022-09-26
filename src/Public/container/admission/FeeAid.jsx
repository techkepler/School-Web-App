import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import {
  BgPolyImg,
  ChildrenSingingImg,
  GreenPatternImg,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";

const Fee = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Fee & Finanical Aid");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${ChildrenSingingImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Education is a better safeguard of liberty than a standing
            army.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Edward Everett
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
              to="/application/process/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Application Process
            </Link>
            <Link
              to="/tution/financial/aid/"
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87] "
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
        <div className="lg:w-[80%] text-[#004B87]">
          <h1 className="py-4 font-semibold text-xl md:text-3xl text-[#004B87]">
            Fee and Financial Aid at Batsyayan
          </h1>
          <p className="py-2    text-[#004B87]">
            Investing in an independent school education is an important
            decision that requires planning and consideration.
          </p>
          <p className="py-2">
            At Batsyayan, we understand family concerns about affordability and
            are here to assist you as you plan your child’s educational journey.
          </p>

          <h1 className="text-xl md:text-3xl font-bold mt-8">
            Payment Options{" "}
          </h1>

          <p className="py-4">
            We also offer three options for fee payments so families can choose
            the one that works best for their budgeting.
          </p>
          <h2 className="font-semibold text-xl py-4">
            Options for payment of 2022-2023 fee and fees:
          </h2>
          <ul className="list-disc text-base mx-3">
            <li>Full fee payment by June 3, 2022</li>
            <li>
              Semi-annual fee payments: 50% due before June 3 and the balance
              due before December 3, 2022
            </li>
            <li>Monthly fee payments from June 2022 – March 2023</li>
          </ul>
          <img src={GreenPatternImg} alt="" className="my-8" />
          <h1 className="font-semibold text-lg md:text-3xl uppercase">
            Questions ?
          </h1>
          <p className="px-2 py-2 text-base font-semibold ">
            Please contact our financial team if you have any questions.
          </p>

          <p className="semi-bold py-2 px-2 text-sm font-semibold">
            <span className="text-base">Email:</span>
            <a
              href="mailto:fee@techkepler.com?subject=Fee Details"
              className="ml-1"
            >
              fee@Batsyayanacademy.com
            </a>
          </p>
          <p className="semi-bold py-2 px-2 text-sm font-semibold">
            <span className="text-base">Conatct No:</span>
            <a href="tel:082-568578" className="ml-1">
              082-568578
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fee;

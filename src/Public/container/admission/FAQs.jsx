import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import {
  BgPolyImg,
  ChildCookingImg,
  GreenPatternImg,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";
import { FAQData } from "../academics/curriculumData";

const FAQS = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("FAQs");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${ChildCookingImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;A person who won't read has no advantage over one who can't
            read.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Mark Twain
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div
        className="my-4 lg:my-8 px-3  py-7 md:py-10 text-gray-200  md:px-10   bg-cover bg-center lg:flex lg:gap-10 lg:mx-6"
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
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87] "
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
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87] "
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
        <div className="lg:w-[70%]">
          <p className="py-4  md:text-lg text-[#004B87]">
            Our Admissions Office is here to help you every step of the way.
            Please contact us. Below are some Frequently Asked Questions. We
            hope you find them helpful!
          </p>
          <img src={GreenPatternImg} alt="" className="my-4" />
          <div>
            <h1 className="text-2xl font-bold py-4 text-[#004b87]">
              Admissions FAQs
            </h1>
            <ul className="flex flex-col gap-5 justify-center">
              {FAQData.map((datas, index) => (
                <FAQDropdown datas={datas} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQS;

const FAQDropdown = ({ datas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const liRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (isOpen && liRef.current && !liRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li
      className={`bg-[#E4EFF7] relative transition-all duration-500 ease-linear origin-top py-4 text-[#004b87] px-4  flex flex-col justify-between `}
      ref={liRef}
    >
      <div className=" flex  justify-between ">
        <p className="font-bold text-lg">{datas.title}</p>

        <div>
          <BsPatchPlusFill
            className={`text-xl cursor-pointer  text-[#288fe3] ${
              isOpen ? "hidden" : "inline"
            }`}
            onClick={handleClick}
          />
          <BsPatchMinusFill
            className={`text-xl cursor-pointer  text-[#288fe3] ${
              !isOpen ? "hidden" : "inline"
            }`}
            onClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <div className="my-4 py-3 px-2 md:px-6 lg:px-10">
          <p>{datas.short_details}</p>
        </div>
      )}
    </li>
  );
};

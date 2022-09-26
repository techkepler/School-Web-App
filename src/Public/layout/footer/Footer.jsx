import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SchoolFooterImg } from "../../../Assets/export/ExportImg";

const Footer = () => {
  return (
    <div className="bg-white mt-5 md:mt-10 lg:mx-6 lg:mb-5">
      <div className="mt-3 py-6 flex flex-col lg:flex-row gap-2 lg:gap-5 lg:mx-4 justify-center lg:justify-between items-center">
        <h1 className="text-center text-[#004b87] font-bold pt-3 lg:w-[60%]">
          WELCOME! JOIN OUR BEAUTIFUL & GROWING COMMUNITY!
        </h1>
        <Link
          to="/register/"
          className="bg-[#0077C8] w-[90%] md:w-[80%] lg:w-[20%]  mt-2 text-white block text-center py-2 text-lg rounded-md"
        >
          Join
        </Link>
        <Link
          to="/contact/"
          className="bg-[#009CDE] w-[90%] md:w-[80%] lg:w-[20%] text-white block text-center text-lg py-2 mt-2 rounded-md"
        >
          Contact
        </Link>
      </div>

      <div className="w-full mt-5 hidden lg:block">
        <ul className="text-[#004b87] uppercase font-semibold text-lg flex w-full gap-5 justify-around">
          <Link to="/batsyayan/introduction/" className="hover:underline">
            about
          </Link>
          <Link to="/batsyayan/academics/" className="hover:underline">
            academics
          </Link>
          <Link to="/admission/overview/" className="hover:underline">
            admission
          </Link>
          <Link to="/athletics/overview/" className="hover:underline">
            athletics
          </Link>
          <Link to="/transportation/" className="hover:underline">
            Facilities
          </Link>
        </ul>
      </div>

      <div className="footer-section mt-9  text-[#004B87]">
        <div className="flex gap-6 flex-col justify-center md:justify-evenly items-center text-sm md:flex-row ">
          <img
            src={SchoolFooterImg}
            alt="Footer School Logo"
            className="w-36 md:order-2"
          />
          <div className="text-center md:order-1">
            <h1 className="text-xl md:text-2xl font-semibold">Address</h1>
            <p className="mt-2">
              <FaMapMarkerAlt className="text-xl font-semibold inline mr-2" />
              <span className="font-semibold text-sm">
                Ghorahi-10, Narayanpur
              </span>
              <p className="text-sm font-semibold">Dang, Nepal</p>
            </p>
          </div>
          <div className="text-center md:order-3">
            <h1 className="text-xl md:text-2xl font-semibold">Contact Info</h1>
            <p className="mt-2">
              <MdEmail className="text-xl font-semibold inline mr-2" />
              <a
                href="mailto:info@techkepler.com"
                className="font-semibold text-sm"
              >
                info@asgardacademy.com
              </a>
            </p>
            <p className="mt-2">
              <FaPhone className="text-lg font-semibold inline mr-2" />
              <a href="tel:082-764363" className="font-semibold text-sm mr-1">
                082-764363,
              </a>
              <a href="tel:082-756648" className="font-semibold text-sm">
                082-756648
              </a>
            </p>
          </div>
        </div>
        <div className="social-media flex justify-center gap-10 mt-10 text-3xl flex-wrap">
          <Link to="/facebook/">
            <AiFillFacebook className="inline " />
          </Link>
          <Link to="/linkedin/">
            <AiFillLinkedin className="inline" />
          </Link>
          <Link to="/twitter/">
            <BsTwitter className="inline" />
          </Link>
          <Link to="/youtube/">
            <BsYoutube className="inline" />
          </Link>
          <Link to="/instagram/">
            <BsInstagram className="inline" />
          </Link>
        </div>
      </div>
      <small className="pt-2 mt-8 md:mt-5 text-end px-4 block text-[#004b87]">
        <a
          href="https://portfolio.techkepler.com"
          className="font-semibold underline"
          target="_blank"
          rel="noreferrer"
        >
          Developed By Bishal Rayamajhi
        </a>{" "}
      </small>
      <div className="bg-[#E9F4FA] mt-2 text-center py-4 ">
        <footer>
          <small className="text-sm text-[#247bc3]">
            &copy; 2021 Asgard School. All rights Reserved.
          </small>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

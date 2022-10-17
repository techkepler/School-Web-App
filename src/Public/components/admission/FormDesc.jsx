import React from "react";
import { GreenPatternImg, ChariManImg } from "../../../Assets/export/ExportImg";
const FormDesc = () => {
  return (
    <div className="w-full md:w-[80%] px-2">
      {" "}
      <h1 className="py-4 font-semibold text-xl md:text-3xl text-[#004B87]">
        Contact the Admissions Office{" "}
      </h1>
      <p className="py-2    text-[#004B87]">
        Thank you for your interest in Batsyayan Academy! Our application
        deadline for the 2022-2023 academic year was November 22, 2021.
      </p>
      <p className="py-2">
        Please contact the Admissions Office with any questions via{" "}
        <a
          href="mailto:info@techkepler.com?subject=Admission Information"
          className="font-semibold underline"
          target="_blank"
          rel="noreferrer"
        >
          email
        </a>{" "}
        or phone:{" "}
        <a
          href="tel:082-88764"
          className="lg:hidden font-semibold text-sm underline"
        >
          082-88764
        </a>
        <span className="lg:inline hidden ">082-88764</span>
      </p>
      <img src={GreenPatternImg} alt="" className="my-8" />
      <div className="text-[#004b87]">
        <div>
          <img src={ChariManImg} alt="Admission Staff" />
          <p className="text-sm py-2 font-semibold">
            Director of Admissions & Financial Aid
          </p>
        </div>
        <div className="font-semibold text-sm">
          <h1 className="text-xl">Robert Downy Jr.</h1>
          <p className="py-1">
            Email:{" "}
            <a
              href="mailto:info@techkepler.com?subject=Admission Information"
              target="_blank"
              rel="noreferrer"
            >
              admission@asgard.com
            </a>{" "}
          </p>
          <p>
            Contact:{" "}
            <a href="tel:082-88764" className="lg:hidden">
              082-88764
            </a>
            <span className="lg:inline hidden">082-88764</span>
          </p>
        </div>
      </div>
      <div className="my-2 md:my-4 md:py-6 py-2">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Start the Conversation With Us
        </h1>
        <p className="py-3 text-sm">
          We are delighted to learn of your interest in The Asgard. Please
          complete the following form so we may send you additional information
          about the admission process and visitation opportunities. If you are
          inquiring for more than one child, a separate form must be submitted
          for each. Thank you for your interest in Batsyayan Academy!{" "}
        </p>
      </div>
    </div>
  );
};

export default FormDesc;

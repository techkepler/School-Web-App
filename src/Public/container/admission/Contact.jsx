import React, { useState, useEffect } from "react";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { BgPolyImg, ChildrenExpImg } from "../../../Assets/export/ExportImg";

import { useAuth } from "../../../contexts/GlobalProvider";

import StudentSection from "../../components/admission/StudentSection";
import FormDesc from "../../components/admission/FormDesc";
import HouseHold from "../../components/admission/HouseHold";
import ParentSection from "../../components/admission/ParentSection";
import AdditonalForm from "../../components/admission/AdditonalForm";
import axiosPublic from "../../../Api/axiosPublic";

const Contact = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Admission Form");
  }, [setCurrentLocation]);

  const intialValue = {
    student_name: "",
    gender: "",
    date_of_birth: "",
    entering_grade: "",
    year_applying: "",
    current_school: "",
    city: "",
    province: "",
    home_phone: "",
    relation: "",
    prefix: "",
    guardian_name: "",
    email: "",
    phone_number: "",
    hear_about_school: "",
    additional_query: "",
  };

  const [requestData, setRequestData] = useState(intialValue);
  const [sucsMsg, setSucsMsg] = useState({ status: "" });
  const [errMsg, setErrMsg] = useState({ msg: "" });
  const handleChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosPublic.post(
        "informations/crud/admission/inquiry/",
        requestData
      );
      setRequestData(intialValue);
      setSucsMsg({ status: res.status });
      setTimeout(() => {
        setSucsMsg({ status: "" });
      }, 3000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg({ msg: "No response form server" });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 3000);
      } else if (error?.response?.status === 500) {
        setErrMsg({ msg: "Internal Server Error." });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 3000);
      } else {
        setErrMsg({ msg: error.response.data.errors });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 5000);
      }
    }
  };

  return (
    <div className="w-full relative">
      <NavBar />
      {sucsMsg.status === 201 && (
        <div className="items-center w-full relative top-8 md:top-0 flex justify-center">
          <p className="px-4 text-base md:w-[60%] top-8 md:top-0  py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed z-50 text-center">
            Inquiry Submitted Successfully.
          </p>
        </div>
      )}

      {errMsg.msg && (
        <div className="items-center w-full relative top-10 md:top-0 flex   justify-center ">
          <p className="px-4 text-base md:w-[60%] capitalize py-2 top-10 md:top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed z-50 text-center">
            {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
          </p>
        </div>
      )}
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${ChildrenExpImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Education is not preparation for life; education is life
            itself.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; John Dewey
          </small>
        </div>
      </div>
      <JoinEvent />

      <div
        className="my-4 lg:my-8 px-3 bg-white py-7 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className=" text-[#004B87]">
          <FormDesc />

          <section className="enquiry-form w-full">
            <form className="flex inquiry-form px-4 md:px-0  justify-center gap-5 flex-col w-full  items-center ">
              <h2 className="font-semibold  pt-4 text-center mt-6 text-xl">
                Contact the Admissions Department
              </h2>
              <p className="mb-6">
                {" "}
                <span className="text-red-600 text-xl px-2 ">*</span> = Required
                Item{" "}
              </p>

              <StudentSection
                requestData={requestData}
                handleChange={handleChange}
              />
              <HouseHold
                requestData={requestData}
                handleChange={handleChange}
              />
              <ParentSection
                requestData={requestData}
                handleChange={handleChange}
              />
              <AdditonalForm
                requestData={requestData}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
              />
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

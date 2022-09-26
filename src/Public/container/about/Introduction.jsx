import React, { useEffect } from "react";

import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { SchoolBgImg1 } from "../../../Assets/export/ExportImg";
import "./uabout.css";
import { useAuth } from "../../../contexts/GlobalProvider";

const Introduction = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Introduction");
  }, [setCurrentLocation]);

  return (
    <div className="relative w-full m-0 p-0">
      <NavBar />
      <div
        className="relative w-full overflow-x-hidden  bg-cover h-[300px] md:h-[450px] bg-center"
        style={{ backgroundImage: `url(${SchoolBgImg1})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 py-2 md:px-4 w-80 md:w-[32rem]">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Education is the passport to the future, for tomorrow belongs
            to those who prepare for it today.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Malcolm X
          </small>
        </div>
      </div>
      <JoinEvent />

      <div className="text-sm relative text-opacity-90 md:text-base px-3  mt-10 text-white overflow-x-hidden ">
        <h1 className="text-center pb-4 text-2xl md:text-4xl lg:text-5xl font-medium">
          About Us
        </h1>

        <div className="flex flex-col  px-1" data-aos="fade-up">
          <div className="w-full text-base md:px-20">
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              praesentium vero repudiandae cupiditate perferendis eaque, unde
              debitis consequuntur totam vitae! Quas debitis nobis in quidem
              sapiente voluptatum porro aliquam cum facilis incidunt aliquid
              iusto molestias autem, doloremque perferendis rem culpa nulla
              deserunt veniam enim fugiat nisi. Veritatis, rerum. Magni
              exercitationem dolorum neque optio asperiores, sint numquam
              debitis provident autem libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero, iusto placeat dolorum modi
              id repudiandae tenetur. Provident eius quibusdam tempore!
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              praesentium vero repudiandae cupiditate perferendis eaque, unde
              debitis consequuntur totam vitae! Quas debitis nobis in quidem
              sapiente voluptatum porro aliquam cum facilis incidunt aliquid
              iusto molestias autem, doloremque perferendis rem culpa nulla
              deserunt veniam enim fugiat nisi. Veritatis, rerum. Magni
              exercitationem dolorum neque optio asperiores, sint numquam
              debitis provident autem libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero, iusto placeat dolorum modi
              id repudiandae tenetur. Provident eius quibusdam tempore!
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              praesentium vero repudiandae cupiditate perferendis eaque, unde
              debitis consequuntur totam vitae! Quas debitis nobis in quidem
              sapiente voluptatum porro aliquam cum facilis incidunt aliquid
              iusto molestias autem, doloremque perferendis rem culpa nulla
              deserunt veniam enim fugiat nisi. Veritatis, rerum. Magni
              exercitationem dolorum neque optio asperiores, sint numquam
              debitis provident autem libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero, iusto placeat dolorum modi
              id repudiandae tenetur. Provident eius quibusdam tempore!
            </p>{" "}
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              praesentium vero repudiandae cupiditate perferendis eaque, unde
              debitis consequuntur totam vitae! Quas debitis nobis in quidem
              sapiente voluptatum porro aliquam cum facilis incidunt aliquid
              iusto molestias autem, doloremque perferendis rem culpa nulla
              deserunt veniam enim fugiat nisi. Veritatis, rerum. Magni
              exercitationem dolorum neque optio asperiores, sint numquam
              debitis provident autem libero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Libero, iusto placeat dolorum modi
              id repudiandae tenetur. Provident eius quibusdam tempore!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Introduction;

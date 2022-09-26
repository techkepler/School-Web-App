import React, { useEffect } from "react";
import AOS from "aos";

import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import {
  SchoolBgImg1,
  BgPolyImg,
  PrincipalImg,
  VicePrincipalImg,
  ChariManImg,
} from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";
import "../../../../node_modules/aos/dist/aos.css";

const Leadership = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Leadership");
  }, [setCurrentLocation]);

  return (
    <div className="relative w-full">
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
            &ldquo;Change is the end result of all true learning.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Leo Buscaglia
          </small>
        </div>
      </div>
      <JoinEvent />

      <LeaderMessage />

      <Footer />
    </div>
  );
};

export default Leadership;

const LeaderMessage = () => {
  const LeaderMsg = [
    {
      msgFrom: "Chairman",
      name: "Bishal Rayamajhi",
      img: ChariManImg,
      msg1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
    },
    {
      msgFrom: "Principal",
      name: "Birat K.C.",
      img: PrincipalImg,
      msg1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
    },
    {
      msgFrom: "Vice-Principal",
      name: "Selena  Gomez",
      img: VicePrincipalImg,
      msg1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
      msg3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a excepturi corrupti itaque voluptate odio hic sapiente, recusandae similique tenetur facere aut cum reiciendis sed nobis. Possimus eius est iste!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, libero!",
    },
  ];

  return (
    <div
      className="my-10 flex flex-col gap-10  px-4 md:mx-6 md:px-16  bg-cover bg-center py-10 rounded-md text-blue-500"
      style={{ backgroundImage: `url(${BgPolyImg})` }}
    >
      {LeaderMsg.map((data) => (
        <div className="laboratory md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4"
            data-aos="fade-up"
          >
            Message From {data.msgFrom}
          </h1>
          <img
            src={data.img}
            alt={data.name}
            className="text-2xl mb-5 md:text-3xl  font-semibold  text-blue-500"
            data-aos="fade-up"
          />
          <p
            className="py-1 text-sm md:text-base text-slate-700"
            data-aos="fade-up"
          >
            {data.msg1}
          </p>{" "}
          <p
            className="py-1 text-sm md:text-base text-slate-700 "
            data-aos="fade-up"
          >
            {data.msg2}
          </p>
          <p
            className="py-1 text-sm md:text-base text-slate-700"
            data-aos="fade-up"
          >
            {data.msg3}
          </p>
          <p className="mt-5 mb-2 text-green-700" data-aos="fade-up">
            Thank You,
          </p>
          <p className="font-semibold text-green-700" data-aos="fade-up">
            {data.name}
          </p>
        </div>
      ))}
    </div>
  );
};

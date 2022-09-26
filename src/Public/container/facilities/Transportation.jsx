import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaAngleDoubleRight } from "react-icons/fa";

import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { useAuth } from "../../../contexts/GlobalProvider";
import {
  BgPolyImg,
  BusImg,
  StuImage1,
  StuImage2,
  StuImage3,
} from "../../../Assets/export/ExportImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../athletics/zath.css";
import "../about/uabout.css";

const Transportation = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Transportation");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${BusImg})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Learning is not the product of teaching. Learning is the
            product of the activity of learners.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash;John Holt
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div
        className="my-4 lg:my-8 bg-white py-7 md:py-10 text-gray-200   relative  bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className="lg:w-[80%] px-3 md:px-10  ">
          <p className="text-[#004B87] text-xl md:text-2xl font-bold">
            Transporation Facilities Overview
          </p>

          <p className="pt-4 pb-2 md:text-lg  text-[#004B87]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus reiciendis ullam itaque amet saepe, sit dolores
            accusantium. Officiis facere alias deserunt facilis libero voluptas
            sapiente iusto, atque aliquam perferendis cum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum, reiciendis!
          </p>
          <p className="pt-4 pb-2 md:text-lg  text-[#004B87]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus reiciendis ullam itaque amet saepe, sit dolores
            accusantium. Officiis facere alias deserunt facilis libero voluptas
            sapiente iusto, atque aliquam perferendis cum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum, reiciendis!
          </p>
        </div>
        <StudentReview />
      </div>

      <Footer />
    </div>
  );
};

export default Transportation;

const StudentReview = () => {
  let data = [
    {
      img: StuImage1,
      name: "Scarlet Johanson",
      type: "student",
      short_details:
        "“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptas labore nisi, amet illo nostrum quis similique odit id eveniet aliquid nam quam quidem praesentium ut, inventore debitis accusantium assumenda?”",
    },
    {
      img: StuImage2,
      name: "Elizabeth Olsen",
      type: "student",
      short_details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptas labore nisi, amet illo nostrum quis similique odit id eveniet aliquid nam quam quidem praesentium ut, inventore debitis accusantium assumenda?",
    },
    {
      img: StuImage3,
      name: "Nicole Kidman",
      type: "student",
      short_details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptas labore nisi, amet illo nostrum quis similique odit id eveniet aliquid nam quam quidem praesentium ut, inventore debitis accusantium assumenda?",
    },
  ];

  return (
    <div className="mt-20 bg-[#042947] py-6  relative overflow-x-hidden ">
      <h1 className="text-green-400 py-6 text-3xl font-semibold text-center ">
        Hear from our students
      </h1>
      <div className="py-10 lg:py-16">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data.map((datas, index) => (
            <SwiperSlide>
              <div key={index} className="px-2 relative ">
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="md:w-[80%] lg:w-[70%]">
                    <div className="octo rotate-45">
                      <div className="octo1">
                        <div
                          className="octo-image  bg-cover bg-center "
                          style={{ backgroundImage: `url(${datas.img})` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-white flex flex-col justify-center w-full items-center student-content">
                      <p
                        className={`py-2 text-center rounded-md w-24 uppercase text-white ${
                          datas.type === "student"
                            ? "bg-sky-500"
                            : "bg-blue-800"
                        }`}
                      >
                        {datas.type}
                      </p>
                      <p className="text-lg md:text-xl my-4 font-semibold">
                        {datas.name}
                      </p>
                      <p className="text-sm md:text-base font-medium text-center text-gray-200  px-4 md:px-10 lg:px-20">
                        {datas.short_details}
                      </p>
                      <Link
                        to="/student/details/"
                        className="block my-3 underline group hover:no-underline"
                      >
                        Read More{" "}
                        <FaAngleDoubleRight className="inline text-xl text-sky-500 ml-1 group-hover:translate-x-2" />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

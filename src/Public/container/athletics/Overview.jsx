import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaAngleDoubleRight } from "react-icons/fa";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import BatsyayNews from "../../components/home/HomeNews";

import {
  ChildrenPlayingImg,
  ChildrenSocialImg,
  SchoolBgImg1,
  StuImage1,
  StuImage2,
  StuImage3,
} from "../../../Assets/export/ExportImg";

import { useAuth } from "../../../contexts/GlobalProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./zath.css";
import "../about/uabout.css";

const Overview = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Athletics");
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
            &ldquo;Upon the subject of education … I can only say that I view it
            as the most important subject which we as a people may be engaged
            in.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Abraham Lincoln
          </small>
        </div>
      </div>
      <JoinEvent />
      <div className="mt-4 px-3 py-4 lg:py-10 text-gray-200  md:px-10  relative">
        <div className="lg:w-[50%]">
          <p className="py-2 md:text-lg ">
            By promoting character, self-esteem, and mental and physical health
            in all students, Batsyayan Athletics enables young people to learn
            about their own physical fitness, set personal goals, and develop a
            sense of confidence that will extend into the classroom and guide
            them throughout their lives.
          </p>
        </div>
        <img
          src={ChildrenSocialImg}
          alt="Children Playing"
          className="h-[400px] hidden lg:block md:w-[350px] lg:w-[400px] absolute -top-10 right-7 lg:right-20"
        />
      </div>

      <div className=" lg:my-8 px-3 py-4 lg:py-10 text-gray-200  md:px-10  relative lg:gap-10  lg:flex justify-end">
        <img
          src={ChildrenPlayingImg}
          alt="Children Playing"
          className="h-[400px] hidden lg:block md:w-[350px] lg:w-[40%]  -top-2 left-7 lg:left-10"
        />
        <div className="lg:w-[60%] lg:mt-28">
          <p className="pt-4 pb-2 md:text-lg ">
            Athletics, at its best, should feel like an extension of play: fun,
            engaging, and healthy. Our program, headed by a three-time Olympic
            coach, gets Batsyayan students moving every day.
          </p>
          <p className="py-2  md:text-lg ">
            Whether it’s staying active and healthy, playing collegiate sports,
            or becoming a professional athlete, Batsyayan provides students the
            physical and mental resources to reach their goals.
          </p>
        </div>
      </div>

      <div>
        <BatsyayNews category={"Athletics News"} title={"Athletic News"} />
      </div>

      <StudentReview />

      <Footer />
    </div>
  );
};

export default Overview;

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
                  <div className="md:w-[80%]">
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

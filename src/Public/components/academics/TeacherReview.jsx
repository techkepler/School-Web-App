import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";
import {
  PrincipalImg,
  VicePrincipalImg,
  ChariManImg,
  StuImage1,
  StuImage2,
  StuImage3,
} from "../../../Assets/export/ExportImg";

const TeacherReview = () => {
  let data = [
    {
      img: PrincipalImg,
      name: "Tom Cruise",
      type: "teacher",
      short_details:
        "“The highlight of my teaching career is having alumni return to tell me that seeds for their love of speaking other languages were originally planted in my classroom and that they travel throughout the world using their language skills beyond the walls of a classroom.”",
    },
    {
      img: VicePrincipalImg,
      name: "Ariana Grande",
      type: "teacher",
      short_details:
        "Jean’s AP Computer Science Principles class won the AP Computer Science Principles Female Diversity Award that recognizes Asgard commitment to female diversity, as well as the girls’ interest and enthusiasm for computer science.",
    },
    {
      img: ChariManImg,
      name: "Chris Hemsworth",
      type: "teacher",
      short_details:
        "“Teaching is at its richest when it’s not teaching, but learning—learning together, exploring questions without answers, and finding the limits of knowledge.”",
    },
    {
      img: StuImage1,
      name: "Willima Regan",
      type: "teacher",
      short_details:
        "Jean’s AP Computer Science Principles class won the AP Computer Science Principles Female Diversity Award that recognizes Poly’s commitment to female diversity, as well as the girls’ interest and enthusiasm for computer science.",
    },
    {
      img: StuImage2,
      name: "James Bond",
      type: "teacher",
      short_details:
        "“The highlight of my teaching career is having alumni return to tell me that seeds for their love of speaking other languages were originally planted in my classroom and that they travel throughout the world using their language skills beyond the walls of a classroom.”",
    },
    {
      img: StuImage3,
      name: "Chirs Patt",
      type: "teacher",
      short_details:
        "“Teaching is at its richest when it’s not teaching, but learning—learning together, exploring questions without answers, and finding the limits of knowledge.”",
    },
  ];

  return (
    <div className="mt-20 bg-[#042947] py-6  relative overflow-x-hidden ">
      <h1 className="text-green-400 py-6 text-3xl font-semibold text-center ">
        Hear From Our Teachers
      </h1>
      <div className="py-10 lg:py-16">
        <TeacherSlide data={data} />
      </div>
    </div>
  );
};

export default TeacherReview;

export const TeacherSlide = ({ data }) => {
  return (
    <div data-aos="fade-up  ">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((datas, index) => (
          <SwiperSlide>
            <div key={index} className="px-2 relative ">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="octo rotate-45">
                  <div className="octo1">
                    <div
                      className="octo-image  bg-cover bg-center "
                      style={{ backgroundImage: `url(${data.img})` }}
                    ></div>
                  </div>
                </div>
                <div className="text-white flex flex-col justify-center w-full items-center">
                  <p
                    className={`py-2  rounded-md w-24 uppercase text-white ${
                      data.type === "teacher" ? "bg-sky-500" : "bg-blue-800"
                    }`}
                  >
                    {data.type}
                  </p>
                  <p className="text-lg my-4 font-semibold">{data.name}</p>
                  <p
                    className="text-sm font-medium text-gray-200 text-center px-4"
                    style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
                  >
                    {data.short_details}
                  </p>
                  <Link
                    to="/teacher/details/"
                    className="block my-3 underline group hover:no-underline"
                  >
                    Read More{" "}
                    <FaAngleDoubleRight className="inline text-xl text-sky-500 ml-1 group-hover:translate-x-2" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

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

const ParentReview = () => {
  let data = [
    {
      img: PrincipalImg,
      name: "Tom Cruise",
      type: "parent",
      short_details:
        "“The highlight of my teaching career is having alumni return to tell me that seeds for their love of speaking other languages were originally planted in my classroom and that they travel throughout the world using their language skills beyond the walls of a classroom.”",
    },
    {
      img: VicePrincipalImg,
      name: "Ariana Grande",
      type: "parent",
      short_details:
        "Jean’s AP Computer Science Principles class won the AP Computer Science Principles Female Diversity Award that recognizes Asgard commitment to female diversity, as well as the girls’ interest and enthusiasm for computer science.",
    },
    {
      img: ChariManImg,
      name: "Chris Hemsworth",
      type: "parent",
      short_details:
        "“Teaching is at its richest when it’s not teaching, but learning—learning together, exploring questions without answers, and finding the limits of knowledge.”",
    },
    {
      img: StuImage1,
      name: "Willima Regan",
      type: "parent",
      short_details:
        "Jean’s AP Computer Science Principles class won the AP Computer Science Principles Female Diversity Award that recognizes Poly’s commitment to female diversity, as well as the girls’ interest and enthusiasm for computer science.",
    },
    {
      img: StuImage2,
      name: "James Bond",
      type: "parent",
      short_details:
        "“The highlight of my teaching career is having alumni return to tell me that seeds for their love of speaking other languages were originally planted in my classroom and that they travel throughout the world using their language skills beyond the walls of a classroom.”",
    },
    {
      img: StuImage3,
      name: "Chirs Patt",
      type: "parent",
      short_details:
        "“Teaching is at its richest when it’s not teaching, but learning—learning together, exploring questions without answers, and finding the limits of knowledge.”",
    },
  ];

  return (
    <div className="mt-20 bg-[#042947] py-6  relative overflow-x-hidden ">
      <h1 className="text-green-400 py-6 text-3xl font-semibold text-center ">
        Hear From Our Parents
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
                    <div className="text-white flex flex-col justify-center w-full items-center parent-content">
                      <p
                        className={`py-2 text-center rounded-md w-24 uppercase text-white ${
                          datas.type === "parent" ? "bg-sky-500" : "bg-blue-800"
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
                        to="/parent/details/"
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

export default ParentReview;

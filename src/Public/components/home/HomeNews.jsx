import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import axiosPublic from "../../../Api/axiosPublic";

const BatsyayanNews = (props) => {
  const [newsData, setNewsData] = useState([]);
  const { category, title } = props;

  useEffect(() => {
    const fetchNews = async () => {
      let res = await axiosPublic.get(
        `informations/crud/news/?category=${category}page_size=1`
      );
      setNewsData(res.data.results);
    };
    fetchNews();
  }, [category]);

  return (
    <div className="bg-white py-6 lg:px-2 lg:mx-4 mt-10">
      <div className="text-[#004B87] text-3xl font-semibold pb-2 relative w-full">
        <FaAngleRight className="text-blue-900 inline  absolute left-0" />
        <FaAngleRight className="text-sky-300 inline absolute left-2" />
        <span className="block mx-10">{title}</span>
      </div>

      <div className="mx-4 lg:mx-12 lg:pb-6">
        {newsData.slice(0, 1).map((data, index) => (
          <div
            className="flex w-full flex-col mt-3 lg:flex-row lg:gap-8 shadow-2xl   shadow-slate-500  rounded-md lg:h-[300px]"
            key={index}
          >
            <img src={data.image} alt="News" className="lg:w-[50%]" />
            <div className="news-contents px-4 lg:px-8 lg:flex flex-col gap-4  text-[#004B87] py-4 md:py-8 lg:w-[48%]">
              <h3 className="text-lg  lg:text-2xl text font-semibold">
                {data.title}
              </h3>
              <p>{data.short_details}</p>
              <Link
                to={`/news/post/${data.slug}/`}
                className="block text-sm font-semibold underline hover:no-underline mt-2 group"
              >
                Read More
                <FaAngleDoubleRight className="inline ml-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-10 flex justify-center lg:hidden">
        <Link
          to="/batsyayan/news/"
          className="px-4 text-center text-white font-bold w-72 md:w-96 block py-3 rounded-md bg-[#004B87] hover:bg-[#035aa1]"
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default BatsyayanNews;

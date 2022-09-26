import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import axiosPublic from "../../../Api/axiosPublic";
import "./zOther.css";

const ArticleFormat = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    let fetchNews = async () => {
      let res = await axiosPublic.get(`informations/crud/blogs/?page_size=3`);
      setArticleData(res.data.results);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsGrid articleData={articleData} />
    </div>
  );
};

export default ArticleFormat;

const NewsGrid = ({ articleData }) => {
  return (
    <div className=" news-grid-main py-6 ">
      <h1 className="text-3xl md:text-4xl font-bold italic  px-2 text-[#004b87] mb-4 pb-4">
        You May Also Like
      </h1>

      <div
        className={`${
          articleData.length > 1 ? "news-post-grid" : "flex justify-between"
        }  `}
      >
        {articleData.map((data, index) => (
          <div
            className=" shadow-2xl hover:shadow-slate-500  rounded-md group"
            key={index}
          >
            <div className="rounded-t-md w-full h-72 overflow-hidden">
              <img
                src={data.image}
                alt="Blogs"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className=" px-4 text-[#004B87] py-8 relative">
              <Link
                to={`/batsyayan/article/${data.slug}`}
                className={`absolute px-2 py-1 rounded-md font-semibold  uppercase text-sm -top-5 text-white ${
                  data.category === "Academic Blogs"
                    ? "bg-[#004B87]"
                    : data.category === "Technology Blogs"
                    ? "bg-green-600"
                    : "bg-sky-500"
                }`}
              >
                {data.category}
              </Link>
              <Link
                to={`/batsyayan/article/${data.slug}/`}
                className="text-lg text font-semibold"
              >
                {data.title}
              </Link>

              <p className="hidden py-2 lg:block">
                {data.short_details.length < 50 ? (
                  data.short_details
                ) : (
                  <p>{data.short_details.slice(0, 51)}.....</p>
                )}
              </p>
              <Link
                to={`/batsyayan/article/${data.slug}/`}
                className="block text-sm font-semibold underline hover:no-underline mt-2 py-2 group"
              >
                Read More
                <FaAngleDoubleRight className="inline ml-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import axiosPublic from "../../../Api/axiosPublic";
import "../about/uabout.css";

const Articles = () => {
  const { setCurrentLocation } = useAuth();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setCurrentLocation("Articles");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchBlog = async () => {
      let res = await axiosPublic.get(
        "informations/crud/public/blogs/?page_size=100"
      );
      setArticleData(res.data.results);
    };
    fetchBlog();
  }, []);

  const [articleCategory, setArticleCategory] = useState("");

  const filterArticles = () => {
    let filterArticle = articleData;
    if (articleCategory) {
      filterArticle = articleData.filter(
        (items) => items.category === articleCategory
      );
    }
    return filterArticle;
  };

  return (
    <div>
      <NavBar />
      <div className="h-20 md:hidden"></div>
      <div className="py-4 flex flex-col lg:flex-row justify-evenly w-full gap-3 px-2 md:px-10">
        <h1 className="text-4xl text-white font-bold  px-2 lg:w-[40%]">
          Batsyayan Articles
        </h1>
        <div className="lg:w-[60%]">
          <select
            name="category"
            id="newsId"
            value={articleCategory}
            onChange={(e) => setArticleCategory(e.target.value)}
            className="w-full py-3 form-select  rounded-md px-2 text-sky-600"
          >
            <option value="">Filter</option>
            <option value="Academic">Academic</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="History">History</option>
          </select>
        </div>
      </div>

      <ArticlesGrid
        articleCategory={articleCategory}
        filterArticles={filterArticles}
        setArticleCategory={setArticleCategory}
      />
      <Footer />
    </div>
  );
};

export default Articles;

const ArticlesGrid = ({
  articleCategory,
  filterArticles,
  setArticleCategory,
}) => {
  const clearFilter = () => {
    setArticleCategory("");
  };

  return (
    <div className="bg-white news-grid-main py-6 md:py-10 px-2 lg:mx-5 lg:px-5">
      {articleCategory && (
        <div className=" pb-6 mb-6  ">
          <button
            className="bg-[#E9F7FF] mx-2 border-2 text-[#004b87] text-sm font-semibold uppercase border-[#62B5E5] py-3 px-3 rounded-sm"
            onClick={clearFilter}
          >
            <IoClose className="inline mr-2 text-lg" />

            {articleCategory}
          </button>
          <button
            className="underline text-[#2182d2] font-semibold  hover:text-[#004b87"
            onClick={clearFilter}
          >
            Clear Filters
          </button>
        </div>
      )}

      {articleCategory && filterArticles().length < 1 && (
        <h1 className="text-3xl text-red-500 text-center">
          No Articles Available for {articleCategory} Section
        </h1>
      )}

      <div
        className={`${
          filterArticles().length > 1 ? "news-grid" : "flex justify-center"
        }  `}
      >
        {filterArticles().map((data, index) => (
          <div
            className="shadow-2xl shadow-slate-500  rounded-md group"
            key={index}
          >
            <div>
              <div className="rounded-t-md w-full h-72 overflow-hidden">
                <img
                  src={data.image}
                  alt="Blogs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
              </div>

              <div className=" px-4 text-[#004B87] py-8  relative">
                <Link
                  to={`/batsyayan/article/${data.slug}/`}
                  className={`absolute px-2 py-1 rounded-md font-semibold  uppercase text-sm -top-5 text-white ${
                    data.category === "Academic"
                      ? "bg-[#004B87]"
                      : data.category === "Technology"
                      ? "bg-green-600"
                      : "bg-sky-500"
                  }`}
                >
                  {data.category}
                </Link>
                <small className="absolute top-4 font-semibold text-xs opacity-80">
                  {new Date(data.date).toDateString()}
                </small>
                <Link
                  to={`/batsyayan/article/${data.slug}/`}
                  className="text-lg mt-3 block text font-semibold"
                >
                  {data.title.length < 50 ? (
                    data.title
                  ) : (
                    <span>{data.title.slice(0, 51)}.........</span>
                  )}
                </Link>
                <p className="hidden py-2 lg:block">
                  {data.short_details.length < 50 ? (
                    data.short_details
                  ) : (
                    <span>{data.short_details.slice(0, 51)}.....</span>
                  )}
                </p>{" "}
                <Link
                  to={`/batsyayan/article/${data.slug}/`}
                  className="block text-sm font-semibold underline hover:no-underline mt-2 py-2 group"
                >
                  Read More
                  <FaAngleDoubleRight className="inline ml-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

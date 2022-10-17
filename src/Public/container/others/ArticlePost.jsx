import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import axiosPublic from "../../../Api/axiosPublic";
import ArticleFormat from "./ArticleFormat";
import { BgPolyImg } from "../../../Assets/export/ExportImg";

const ArticlePost = () => {
  const { slug } = useParams();
  const { setCurrentLocation } = useAuth();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      let res = await axiosPublic.get(`informations/crud/blogs/${slug}`);
      setArticleData(res.data);
      setCurrentLocation("Articles");
    };
    fetchBlog();
  }, [slug, articleData.title, setCurrentLocation]);

  return (
    <div className="w-full">
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <div
        className="bg-center md:my-5 px-4 py-6 md:py-8 md:px-8 md:mx-4 lg:mx-6 bg-cover  text-[#004b87] lg:px-10 flex justify-center items-center flex-col "
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className="lg:w-[75%] md:w-[90%] xl:w-[70%]">
          <p className="text-xl md:py-2">
            {new Date(articleData.date).toDateString()}
          </p>
          <h1 className="font-bold text-3xl md:text-5xl my-1 py-2">
            {articleData.title}
          </h1>
          <button
            className="px-2 py-1 mb-5 rounded-md bg-[#027de1] font-bold text-white uppercase text-sm"
            disabled
          >
            {articleData.category}
          </button>

          <div>
            <p className="py-2 my-1 ">{articleData.short_details}</p>
            <img src={articleData.image} alt="Blog" className="py-2 my-2" />
            <p className="pb-2 my-2 ">{parse(`${articleData.data}`)}</p>
          </div>
        </div>

        <div className="author-section w-full md:w-[35rem]   border-slate-500 flex my-16 gap-6 md:gap-12 items-center justify-center">
          <img
            src={articleData.author_img}
            alt="Author"
            className="rounded-full w-24 h-24"
          />
          <div className="content">
            <h3 className="uppercase text-lg opacity-60 font-semibold">
              Written By
            </h3>
            <h1 className="text-2xl font-semibold capitalize">
              {articleData.author_name}
            </h1>
          </div>
        </div>

        <div className="mt-16">
          <ArticleFormat />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePost;

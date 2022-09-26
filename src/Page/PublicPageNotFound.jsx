import React from "react";
import { Link } from "react-router-dom";
import { GreenPatternImg, PageNotFoundImg } from "../Assets/export/ExportImg";
import NavBar from "../Public/layout/navbar/NavBar";
import Footer from "../Public/layout/footer/Footer";

const PublicPageNotFound = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <div
        className="bg-top md:bg-left-bottom bg-blue-700 px-4 md:px-8 lg:px-10 py-6  md:h-[500px]"
        style={{ backgroundImage: `url(${PageNotFoundImg})` }}
      >
        <div className="md:w-[90%] lg:w-[70%] md:my-10 px-">
          <p className="text-2xl md:text-3xl lg:text-4xl md:w-[40rem] pb-3 text-yellow-500 font-bold">
            Sorry, we can’t seem to find the page you’re looking for (404
            error).
          </p>
          <p className="text-lg md:text-xl text-white pt-2 pb-5">
            Try searching for a keyword in our site search.
          </p>

          <img src={GreenPatternImg} alt="" className="my-6" />

          <div className="text-white my-4 py-4">
            <h1 className="text-xl font-bold">
              Here are some links you may wish to explore:
            </h1>
            <div className="flex  text-white justify-around my-2">
              <div className="flex flex-col gap-2">
                <Link to="/batsyayan/home/" className="underline">
                  {" "}
                  Home{" "}
                </Link>
                <Link to="/batsyayan/academics/" className="underline">
                  {" "}
                  Academic{" "}
                </Link>
                <Link to="/admission/overview/" className="underline">
                  {" "}
                  Admission{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/batsyayan/articles/" className="underline">
                  {" "}
                  News{" "}
                </Link>
                <Link to="/calendar/" className="underline">
                  {" "}
                  Calendar{" "}
                </Link>
                <Link to="/athletics/overview/" className="underline">
                  {" "}
                  Athletics{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PublicPageNotFound;

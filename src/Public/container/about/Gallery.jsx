import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { VscChromeClose } from "react-icons/vsc";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import axiosPublic from "../../../Api/axiosPublic";
import { useAuth } from "../../../contexts/GlobalProvider";
import "./uabout.css";

import "swiper/css";
import "swiper/css/navigation";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";

const Gallery = () => {
  const { setCurrentLocation } = useAuth();
  const [galleryData, setGalleryData] = useState([]);
  const [currIndex, setCurrIndex] = useState({
    showSlide: false,
    index: 0,
  });

  useEffect(() => {
    setCurrentLocation("Gallery");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchGallery = async () => {
      let res = await axiosPublic.get(
        "informations/crud/gallery/?page_size=150"
      );
      setGalleryData(res.data.results);
    };
    fetchGallery();
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <GalleryGrid galleryData={galleryData} setCurrIndex={setCurrIndex} />
      <GallerySlide
        galleryData={galleryData}
        currIndex={currIndex}
        setCurrIndex={setCurrIndex}
      />
      <Footer />
    </div>
  );
};

export default Gallery;

const GalleryGrid = ({ galleryData, setCurrIndex }) => {
  return (
    <div className="bg-white news-grid-main py-6 md:py-10 px-3 lg:mx-5 lg:px-5 md:mt-10">
      <div className=" flex flex-wrap gap-10 sm:gap-5 lg:gap-8 w-full justify-center">
        <h1 className="text-4xl text-blue-500 font-bold text-center px-2 ">
          Batsyayan Gallery
        </h1>
        {galleryData.map((data, index) => (
          <button
            onClick={() => setCurrIndex({ showSlide: true, index: index })}
            key={index}
            className="w-full sm:w-[48%] lg:w-[30%]"
            data-aos="fade-up"
          >
            <div className="group h-80 md:h-96 relative overflow-hidden rounded-md">
              <img
                src={data.image}
                className="w-full h-full transition-transform group-hover:scale-125
             duration-500 object-cover"
                alt={data.name}
              />
              <p className="absolute text-start w-full bottom-0 bg-black text-gray-100 bg-opacity-30 text-2xl py-4 px-4 font-semibold">
                {data.name}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const GallerySlide = ({ galleryData, currIndex, setCurrIndex }) => {
  window.scrollTo(0, 0);
  return (
    <>
      {currIndex.showSlide && (
        <div className="h-full w-full absolute top-0 z-[300] bg-opacity-80 bg-black  ">
          <Swiper
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            initialSlide={currIndex.index}
          >
            {galleryData.map((datas, index) => (
              <SwiperSlide key={index}>
                <div className="px-2 flex justify-center overflow-hidden mt-36">
                  <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={100}
                    defaultPositionY={100}
                  >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <>
                        <div className="w-full absolute top-0 bg-black bg-opacity-30  py-8 flex items-center justify-end px-6 gap-5 lg:gap-10 z-[340]">
                          <BiZoomOut
                            className="text-2xl lg:text-4xl font-semibold text-slate-300  cursor-pointer right-5"
                            onClick={() => zoomOut()}
                          />
                          <BiZoomIn
                            className="text-2xl lg:text-4xl font-semibold text-slate-300  cursor-pointer right-5"
                            onClick={() => zoomIn()}
                          />
                          <VscChromeClose
                            className="text-2xl lg:text-4xl font-semibold text-slate-300  cursor-pointer right-5"
                            onClick={() => {
                              setCurrIndex({ showSlide: false });
                            }}
                          />
                        </div>
                        <TransformComponent>
                          <img
                            src={datas.image}
                            alt={datas.name}
                            className="min-h-[390px] "
                          />
                        </TransformComponent>
                      </>
                    )}
                  </TransformWrapper>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

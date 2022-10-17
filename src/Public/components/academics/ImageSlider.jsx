import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { axiosPublic } from "../../../api/AxiosPublic";
import useAuth from "../../../Context/useAuth";

const ImageSlider = ({ image_category, school_level }) => {
  const { setProgress } = useAuth();
  const [imageData, setimageData] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      setProgress(10);
      let res = await axiosPublic.get(
        `informations/crud/gallery/?category=${image_category}&school_level=${school_level}`
      );
      setProgress(50);
      setimageData(res.data.results);
      setProgress(100);
    };
    fetchImage();
  }, [setProgress, image_category, school_level]);

  return (
    <div className=" py-6 relative overflow-x-hidden ">
      <div className="py-10 lg:py-16">
        <StudentSlide data={imageData} />
      </div>
    </div>
  );
};

export default ImageSlider;

export const StudentSlide = ({ data }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nextIcon w-2`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prevIcon w-2`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };

  let slickerPropertiesSmall = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div data-aos="fade-up  ">
      {/* small screen slider */}
      <Slider
        {...slickerPropertiesSmall}
        className="text-center mt-10 lg:mt-5  relative  smallScrnSlick"
      >
        {data?.map((data, index) => (
          <div key={index} className="px-2 relative ">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="">
                <img
                  src={data.image}
                  alt={data.image_name}
                  className="h-auto md:h-[400px] w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

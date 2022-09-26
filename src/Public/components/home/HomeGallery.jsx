import {
  GreenPatternImg,
  TeacherImg1,
  TeacherImg2,
  TeacherImg3,
  TeacherImg4,
  TeacherImg5,
  TeacherImg6,
} from "../../../Assets/export/ExportImg";

const HomeGallery = () => {
  const imgData = [
    {
      img: TeacherImg1,
    },
    {
      img: TeacherImg2,
    },
    {
      img: TeacherImg3,
    },
    {
      img: TeacherImg4,
    },
    {
      img: TeacherImg5,
    },
    {
      img: TeacherImg6,
    },
  ];
  return (
    <div className=" my-14">
      <div className="flex justify-center ">
        <img
          src={GreenPatternImg}
          alt="Green Pattern"
          className="mt-5 w-auto"
        />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center my-8">
        Batsyayan Gallery
      </h1>

      <div className="gallery-grid bg-blue-400  ">
        {imgData.map((data, index) => (
          <div className="group">
            <img
              src={data.img}
              alt=""
              className="rounded-md group-hover:rotate-360"
              key={index}
              data-aos="flip-up"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;

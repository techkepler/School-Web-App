import React from "react";
import {
  TransportSvg,
  GuidanceSvg,
  HostelSvg,
  LibrarySvg,
  ComputerLabSvg,
  InfraSvg,
} from "../../../Assets/export/ExportImg";

const SchoolFeature = () => {
  const data = [
    {
      img: GuidanceSvg,
      title: "Guidance",
      details:
        "We also help students make an informed decision on higher education regarding the courses that best suit their interest and career goals. Our students are counselled by a professional Counse...",
    },
    {
      img: InfraSvg,
      title: "Infrastructure",
      details:
        "The school environment is calm and intentional in order to inspire and facilitate effective learning. All the buildings including the Extra–Curricular Activity (ECA) block incorporate shockp...",
    },
    {
      img: HostelSvg,
      title: "Hostel",
      details:
        "The Boarding houses are located within a short walking distance from the school buildings with separate buildings for girls and boys. All the buildings are equipped with necessary amenities ...",
    },
    {
      img: TransportSvg,
      title: "Transportation",
      details:
        "The school provides air–conditioned vans to transport the day students to and from the school, ensuring comfort and safety of the students availing the service. Every van will be supervised ...",
    },
    {
      img: ComputerLabSvg,
      title: "Computer Lab",
      details:
        "We have the latest educational tools including Information and Computer Technology (ICT) for use in our Science and Computer Laboratories to enhance learning experiences, and develop critica...",
    },
    {
      img: LibrarySvg,
      title: "Library",
      details:
        "The library forms the core of our literacy programme, and is the hub for all research and inquiry projects. We have two spacious and well– stocked libraries – one designed for Elementary stu... ",
    },
  ];
  return (
    <section className="school-fetaure mb-20 mt-14">
      <h1 className="text-3xl font-semibold lg:text-4xl my-6 md:my-10 lg:my-12 text-center text-slate-200">
        Our Features
      </h1>
      <div className="flex flex-wrap  justify-center gap-6 px-3 py-6 bg-blue-400 ">
        {data.map((data, index) => (
          <div
            className="flex flex-col gap-6 rounded-md px-4 items-center justify-center bg-[#004B87] group py-10  cursor-pointer w-full sm:w-[48%] lg:w-[30%]"
            key={index}
            data-aos="fade-up"
          >
            <div className="bg-blue-400 feature-image rounded-full group-hover:rotate-360 duration-1000">
              <div
                className="rounded-full bg-cover bg-center h-20 w-20"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
            </div>

            <h1 className="text-lg font-semibold scale-90 group-hover:scale-110 ransition-all duration-500 text-white">
              {data.title}
            </h1>
            <p className="text-center text-base scale-90 group-hover:scale-100 transition-all duration-500 text-white">
              {data.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolFeature;

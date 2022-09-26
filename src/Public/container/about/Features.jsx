import React, { useEffect } from "react";
import AOS from "aos";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { SchoolBgImg1, BgPolyImg } from "../../../Assets/export/ExportImg";
import { useAuth } from "../../../contexts/GlobalProvider";

import "../../../../node_modules/aos/dist/aos.css";

const BatsyayanFeatures = () => {
  const { setCurrentLocation } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setCurrentLocation("Features");
  }, [setCurrentLocation]);

  return (
    <div className="relative w-full">
      <NavBar />
      <div
        className="bg-[#004b87] bg-opacity-50 lg:bg-opacity-30 relative w-full h-[300px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${SchoolBgImg1})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 py-2 md:px-4 w-80 md:w-[32rem]">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;The roots of education are bitter, but the fruit is
            sweet.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Aristotle
          </small>
        </div>
      </div>
      <JoinEvent />

      <OurFeature />

      <Footer />
    </div>
  );
};

export default BatsyayanFeatures;

const OurFeature = () => {
  const data = [
    {
      title: "Laboratories:",
      details:
        "The school aims at developing the spirit of enquiry and scientific temper among students from an early stage. In addition to the customized computer-aided learning packages, project work, models, charts, PowerPoint presentations and interactive. Young students learn through experiments and demonstrations in modern and well-equipped physics, chemistry, biology and mathematics.",
    },
    {
      title: "School Library:",
      details:
        "The school has well stocked library with a good collection of over 5000 books ranging from encyclopedias to fiction and text books. The library is enriched with a collection of Cod’s used by the students for reference work. ‘Book Week’, and integral part of the timetable, encourages learning beyond text books.",
    },
    {
      title: "Co-Curricular/Extra Curricular Activities:",
      details:
        "Development of integrated personality of the child remains incomplete without cultivating an appreciation of fine arts. The school ensures a balanced growth of body and mind. Children are trained to shoulder responsibilities, make decisions and help in organizing programmes. They are trained in public speaking, games, sportsand various extracurricular activities. Inter-house and Inter-class activities creativity fosters multiple talents in our students.",
    },
    {
      title: "Competitions:",
      details:
        "Aiming at inculcating creativity among children and igniting their imagination, the school provides a plethora of opportunities which provide an effective platform for children to nurture and exhibit their talents and interests. Competitions at inter-class, inter-school, zonal and national level allow the young minds to interact, work in teams, analyze topical issues and hone various skills.",
    },
    {
      title: "Tours/Excursions/Camps:",
      details:
        "Vacation camps encompass activities like art and craft, communication skills, dance, instrumental music, badminton, basketball, carom, chess, cricket, judo, table-tennis, etc… which improve life skills and confidence among children. In addition to excursions during the summer vacation and the autumn/winter break, educational tours and camps are organized, which, besides providing recreations, inculcate qualities of leadership, self-reliance, discipline and a sense of responsibility.",
    },
    {
      title: "Games and Sports:",
      details:
        "A healthy mind lies in a healthy body. Depending on their age and stage of development, the children are trained in various sports and games under the guidance of trained Physical Education teachers. Sports help in developing personality of a child and inculcating self discipline amongst the students. They are groomed to be better citizens and good human beings. Specialized training is given to the student’s everyday in the morning for various indoor and outdoor games/sports like carom, chess, badminton, table-tennis, basketball, cricket, etc…",
    },
    {
      title: "Value Education and life skills:",
      details:
        "In the present scenario, where knowledge is exploding and wisdom is imploding, value education is of supreme importance. Thus, inculcation of values is an integral part of our education system. The school seeks to strike a balance between academic inputs, discipline, co-curricular activities and community welfare activities.",
    },
    {
      title: "Computer Education:",
      details:
        "Integration of technology into the school curriculum is the need of the hour as it helps students to derive maximum advantage from the explosion of knowledge in the current global scenario. Computer Science has been introduced from Class I to make each child computer literate and efficient in the use of Information Technology.",
    },
  ];

  return (
    <div
      className="my-10 flex flex-col gap-10  px-4 md:mx-6 md:px-16  bg-cover bg-center py-10 rounded-md"
      style={{ backgroundImage: `url(${BgPolyImg})` }}
    >
      {data.map((datas, index) => (
        <div
          className="laboratory md:w-[90%] lg:w-[80%] xl:w-[70%]"
          data-aos="fade-up"
          key={index}
        >
          <h1 className="text-2xl md:text-3xl  font-medium  text-blue-500">
            {datas.title}
          </h1>
          <p className="py-1 text-sm md:text-base text-slate-700">
            {datas.details}
          </p>
        </div>
      ))}
    </div>
  );
};

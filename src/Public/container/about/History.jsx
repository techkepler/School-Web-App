import React, { useEffect } from "react";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { useAuth } from "../../../contexts/GlobalProvider";
import {
  BgPolyImg,
  SchoolBgImg1,
  SchoolBgImg3,
  SchoolBgImg5,
} from "../../../Assets/export/ExportImg";

const History = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("History");
  }, [setCurrentLocation]);

  return (
    <div className="relative w-full">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg1})` }}
      >
        <div className="text-gray-200 bg-black bg-opacity-30 absolute  bottom-5 px-2 py-2 md:px-4 w-80 md:w-[32rem]">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Education is what remains after one has forgotten what one
            has learned in school.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Albert Einstein
          </small>
        </div>
      </div>
      <JoinEvent />
      <div
        className="bg-white lg:mt-10 mt-5 py-6  md:px-4 lg:px-6 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <StartingFoundation />
        <GrowthChange />
      </div>
      <Footer />
    </div>
  );
};

export default History;

const StartingFoundation = () => {
  return (
    <div className="flex flex-col gap-3 mt-5  md:flex-row md:gap-4 md:justify-around ">
      <div className="text-[#004b87] px-4 md:w-[70%]">
        <p className="text-3xl md:text-4xl font-bold text-sky-600">
          A SCHOOL GROWS
        </p>
        <p className="text-3xl md:text-4xl pb-2 uppercase font-bold text-[#6eb9f6]">
          IN Narayanpur
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          corporis dolor commodi pariatur exercitationem repellat, est quas quod
          molestias illum cum praesentium dicta? Aspernatur repellendus
          explicabo quasi, corrupti tempora, obcaecati doloremque dolores quos
          veritatis incidunt cum a aliquam omnis, placeat quis vero molestias ut
          enim deleniti voluptatum eligendi. Qui reiciendis saepe iusto quas
          soluta dicta reprehenderit nisi quaerat laudantium amet!
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt
          tempore minus officiis fugiat eveniet fugit quibusdam dignissimos et
          optio quos veritatis consectetur consequatur ducimus blanditiis, quis
          expedita cupiditate nesciunt debitis delectus. Magnam, sed! In. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
          perferendis?
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          ab recusandae sed et? Eaque tenetur minima repellat ratione, dicta
          modi id impedit commodi nobis odit ea. Culpa dolorum earum recusandae
          nulla, reiciendis quibusdam rerum consectetur esse labore sint
          architecto voluptatum, distinctio reprehenderit eveniet officiis
          exercitationem explicabo nihil ab?
        </p>
      </div>
      <div className="md:w-[30%] px-3 md:mt-20">
        <img src={SchoolBgImg3} alt="" className="w-full" />
      </div>
    </div>
  );
};

const GrowthChange = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 md:flex-row md:gap-4 md:justify-around pt-4 pb-10 ">
      <div className="text-[#004b87] px-4 md:w-[70%]">
        <p
          className="text-3xl md:text-4xl font-bold text-sky-600"
          data-aos="fade-up"
        >
          GROWTH & CHANGE{" "}
        </p>
        <p
          className="text-3xl md:text-4xl pb-2 font-bold text-[#6eb9f6]"
          data-aos="fade-up"
        >
          —1990s TO TODAY{" "}
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          voluptatibus quisquam optio laudantium veniam ipsam asperiores
          molestias tempora! Itaque eaque sequi voluptates inventore modi ipsum
          reiciendis aspernatur ducimus rerum, sit earum, neque accusantium ab
          molestiae consectetur odio, saepe facere. Temporibus labore quam
          laborum in commodi qui eius, repellat nostrum repudiandae totam, iste
          odio, accusamus a recusandae. Minima architecto voluptatum maiores.
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          ducimus quidem voluptas ipsam quae, sequi ab iste voluptatem
          perspiciatis, est a quos eius cumque fuga molestiae in impedit dolorum
          facilis laborum culpa reiciendis reprehenderit explicabo quasi
          tempore! Est repudiandae voluptatum molestiae id amet ipsum a quasi
          omnis architecto facere. Labore, deserunt autem harum soluta
          voluptatibus doloribus ratione accusantium cupiditate, odio
          dignissimos amet doloremque sint enim qui consequatur ea!
        </p>
        <p className="py-2" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          asperiores aliquid aliquam dolores deleniti nobis sit minus, ab id,
          iure velit debitis maiores sequi natus, eos veniam corporis. Fugiat,
          veritatis voluptas suscipit ea nam id dicta porro provident minus
          similique ipsa ex veniam modi accusantium dolorem placeat temporibus
          aliquid sed quibusdam natus aliquam nihil expedita ipsum. Delectus!
        </p>
      </div>
      <div className="md:w-[30%] px-3 md:mt-20">
        <img src={SchoolBgImg5} alt="" className="w-full" />
      </div>
    </div>
  );
};

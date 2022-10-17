import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BgPolyImg,
  SchoolBgImg1,
  GymImg,
  PoolImg,
  TrackImg,
  BaseBallImg,
} from "../../../Assets/export/ExportImg";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import JoinEvent from "../../components/home/JoinEvent";
import { useAuth } from "../../../contexts/GlobalProvider";

const LowerScl = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Athletic Facilities");
  }, [setCurrentLocation]);

  return (
    <div className="w-full relative">
      <NavBar />
      <div
        className="bg-cover bg-center relative  h-[300px] md:h-[450px]"
        style={{ backgroundImage: `url(${SchoolBgImg1})` }}
      >
        <div className="bg-black bg-opacity-30 text-gray-200 py-2 absolute  bottom-5 px-2 md:px-4 w-80 md:w-[30rem] ">
          <blockquote
            className="text-xl md:text-3xl  italic font-medium"
            style={{ fontFamily: "Archer SSm A, Archer SSm B" }}
          >
            &ldquo;Learning is not attained by chance, it must be sought for
            with ardor and attended to with diligence.&rdquo;
          </blockquote>
          <small className="text-base md:text-lg mt-3 block">
            &mdash; Abigail Adams
          </small>
        </div>
      </div>
      <div>
        <JoinEvent />
      </div>

      <div
        className="my-4 lg:my-8 px-3 bg-white py-7 md:py-10 text-gray-200  md:px-10  relative lg:flex lg:gap-10 lg:mx-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        <div className="lg:block w-[30%] hidden">
          <ul className="font-semibold text-[#004b87] w-60">
            <Link
              to="/athletics/overview/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-3 my-1 px-2 border-l-4 hover:border-[#004b87]"
            >
              Overview
            </Link>

            <Link
              to="strength/conditioning/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Strength & Conditioning
            </Link>
            <Link
              to="/sports/medicine/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Sport Medicine
            </Link>
            <Link
              to="/athletic/facilities/"
              className="block bg-[#19b8f2] bg-opacity-10 py-4 my-1 px-2 border-l-4 border-[#004b87] "
            >
              Facilities
            </Link>
            <Link
              to="/contact/athletics/"
              className="block border-white  hover:bg-[#19b8f2] hover:bg-opacity-10 py-4 my-1 px-2 border-l-4 hover:border-[#004b87]  "
            >
              Contact Athletic Facilities
            </Link>
          </ul>
        </div>
        <div className="lg:w-[70%] text-[#004B87]">
          <h1 className="text-[#004B87] text-xl md:text-2xl font-bold">
            BASEBALL & SOFTBALL TRAINING CENTER{" "}
          </h1>

          <p className="pt-4 pb-2 md:text-lg   text-[#004B87]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores nihil, repellendus atque blanditiis sit autem iste saepe.
            Fugiat tenetur praesentium sit hic sequi illo maiores, neque ab
            voluptatem ratione nisi assumenda officia culpa dignissimos, nostrum
            perferendis! Sunt, accusamus reiciendis.
          </p>
          <img src={BaseBallImg} alt="BaseBall Court" className="py-3" />

          <div className="md:py-10 ">
            <h1 className="text-[#004B87] mt-5 text-xl md:text-2xl font-bold">
              TRACK AND FIELD FACILITY
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              asperiores nihil, repellendus atque blanditiis sit autem iste
              saepe. Fugiat tenetur praesentium sit hic sequi illo maiores,
              neque ab voluptatem ratione nisi assumenda officia culpa
              dignissimos, nostrum perferendis! Sunt, accusamus reiciendis.
            </p>
            <img src={TrackImg} alt="Track" className="my-3" />
          </div>

          <div className="md:py-5">
            <h1 className="text-[#004B87] mt-5 text-xl md:text-2xl font-bold">
              GYMNASIUMS
            </h1>
            <img src={GymImg} alt="Gym" className="my-3" />
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              asperiores nihil, repellendus atque blanditiis sit autem iste
              saepe. Fugiat tenetur praesentium sit hic sequi illo maiores,
              neque ab voluptatem ratione nisi assumenda officia culpa
              dignissimos, nostrum perferendis! Sunt, accusamus reiciendis.
            </p>
          </div>

          <div className="md:py-5">
            <h1 className="text-[#004B87] mt-5 text-xl md:text-2xl font-bold">
              POOLS
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              asperiores nihil, repellendus atque blanditiis sit autem iste
              saepe. Fugiat tenetur praesentium sit hic sequi illo maiores,
              neque ab voluptatem ratione nisi assumenda officia culpa
              dignissimos, nostrum perferendis! Sunt, accusamus reiciendis.
            </p>

            <img src={PoolImg} alt="Swimming Pool" className="my-3" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LowerScl;

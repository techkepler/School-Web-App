import React from "react";
import { GreenPatternImg } from "../../../Assets/export/ExportImg";

const StartJourney = () => {
  return (
    <div>
      <div className="lg:mx-6">
        <div className="flex justify-center mt-5 md:mt-10">
          <img
            src={GreenPatternImg}
            alt="Green Pattern"
            className="mt-5 w-auto"
          />
        </div>

        <div className="mt-5 md:mt-14 px-4 flex flex-col justify-center items-center  w-full">
          <h2
            className="text-white text-center md:text-3xl text-2xl lg:text-6xl  w-full font-bold uppercase"
            data-aos="fade-up"
          >
            Start Your Journey
          </h2>
          <h2
            className="text-sky-500 text-2xl md:text-3xl lg:text-6xl font-bold uppercase "
            data-aos="fade-up"
          >
            with Batsyayan.
          </h2>
          <p
            className="text-base  lg:text-lg text-white text-opacity-90 mt-4 md:w-[80%] md:text-center"
            data-aos="fade-up"
          >
            Through Batsyayan's progressive liberal arts curriculum and an
            enriching co-curricular program featuring the visual and performing
            arts, athletics, student clubs and organizations, and community
            service, Batsyayan students experience excellence across multiple
            disciplines and in many ways: intellectually, physically, and
            morally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;

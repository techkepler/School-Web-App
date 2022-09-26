import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import axiosPublic from "../../../Api/axiosPublic";
import { useAuth } from "../../../contexts/GlobalProvider";
import "./uabout.css";

const Team = () => {
  const { setCurrentLocation } = useAuth();
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    setCurrentLocation("Team");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchTeacher = async () => {
      let res = await axiosPublic.get("teachers/crud/teacher/?page_size=100");
      let res2 = await axiosPublic.get("staffs/crud/staff/?page_size=100");
      const result = res.data.results.concat(res2.data.results);
      setTeacherData(result);
    };
    fetchTeacher();
  }, []);

  const [teamCategory, setTeamCategory] = useState("");

  const filterTeacher = () => {
    let filterData = teacherData;
    if (teamCategory) {
      filterData = teacherData.filter(
        (datas) => datas.category.toLowerCase() === teamCategory.toLowerCase()
      );
    }
    return filterData;
  };

  return (
    <div>
      <NavBar />
      <div className="h-20 md:hidden"></div>

      <div className="py-4 flex flex-col lg:flex-row justify-evenly w-full gap-3 px-2 md:px-10">
        <h1 className="text-4xl text-white font-bold  px-2 lg:w-[40%]">
          Our Team
        </h1>
        <div className="lg:w-[60%]">
          <select
            name="category"
            id="category"
            value={teamCategory}
            onChange={(e) => setTeamCategory(e.target.value)}
            className="w-full py-3  rounded-md px-2 text-sky-600"
          >
            <option value="">Filter</option>
            <option value="Academic">Academic Team</option>
            <option value="Administrative">Administrative Team</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <TeamGrid
        teamCategory={teamCategory}
        setTeamCategory={setTeamCategory}
        filterTeacher={filterTeacher}
      />
      <Footer />
    </div>
  );
};

export default Team;

const TeamGrid = ({ teamCategory, setTeamCategory, filterTeacher }) => {
  const clearFilter = () => {
    setTeamCategory("");
  };
  return (
    <div className="bg-white news-grid-main py-6 md:py-10 px-2 lg:mx-5 lg:px-5">
      {teamCategory && (
        <div className=" pb-6 mb-6  ">
          <button
            className="bg-[#E9F7FF] mx-2 border-2 text-[#004b87] text-sm font-semibold uppercase border-[#62B5E5] py-3 px-3 rounded-sm"
            onClick={clearFilter}
          >
            <IoClose className="inline mr-2 text-lg" />

            {teamCategory}
          </button>
          <button
            className="underline text-[#2182d2] font-semibold  hover:text-[#004b87"
            onClick={clearFilter}
          >
            Clear Filters
          </button>
        </div>
      )}

      {teamCategory && filterTeacher().length < 1 && (
        <h1 className="text-3xl text-red-600 text-center">
          No Member Found for {teamCategory} Section
        </h1>
      )}

      {filterTeacher().length > 0 && (
        <div
          className={`${
            filterTeacher().length === 1 ? "w-96" : "news-grid w-full"
          } `}
        >
          {filterTeacher().map((data, index) => (
            <div
              className={`bg-cover bg-center group relative h-[350px]`}
              style={{ backgroundImage: `url(${data.image})` }}
              key={index}
            >
              <div className="content bg-gray-500 bg-opacity-40 w-full h-[50%] relative top-[50%] ">
                <h1 className="transition-all duration-300  group-hover:-translate-y-12 absolute bottom-8 my-2 py-1 text-2xl font-bold capitalize left-4">
                  {data.name}
                </h1>
                <p className="transition-all duration-300  group-hover:-translate-y-12 absolute bottom-2 my-2 py-1 text-sm  font-bold capitalize left-4">
                  {data.subject && <span>{data.subject} Teacher</span>}
                  {data.position}
                </p>
                <NavLink
                  to="/teacher-details/"
                  className="absolute hover:underline bottom-0 h-12 w-14 flex justify-start items-center bg-blue-900 right-0 transition-all duration-500 group-hover:w-full group-hover:px-4 text-lg text-white font-bold uppercase"
                >
                  View More
                </NavLink>
                <div className="absolute bottom-0 h-12 w-14 flex justify-center items-center bg-blue-900 right-0">
                  <FaAngleDoubleRight className="text-yellow-500 text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

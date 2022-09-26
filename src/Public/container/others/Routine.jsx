import React, { useState, useEffect } from "react";
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import axiosPublic from "../../../Api/axiosPublic";
import { BgPolyImg } from "../../../Assets/export/ExportImg";
import generatePDF from "./GenerateRoutine";

const GetRoutine = () => {
  const { setCurrentLocation } = useAuth();

  useEffect(() => {
    setCurrentLocation("Routine");
  }, [setCurrentLocation]);

  const initalValue = {
    grade: "",
    exam_term: "",
  };

  const [data, setData] = useState(initalValue);

  const [routineData, setRoutineData] = useState([]);

  const [isAvailable, setIsAvailable] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    let res = await axiosPublic.get(
      `informations/crud/routines/?grade=${data.grade}&exam_term=${data.exam_term}`
    );
    setRoutineData(res.data);

    if (res.data.length < 1) {
      setIsAvailable(false);
    } else {
      window.scrollTo(0, 0);
    }

    setTimeout(() => {
      setIsAvailable(true);
    }, 2000);
  };

  let storeTerm = [];
  let storeGrade = [];
  routineData.map((data) => storeTerm.push(data.exam_term));
  routineData.map((data) => storeGrade.push(data.grade));

  return (
    <>
      <NavBar />
      <div className="h-10 md:hidden"></div>
      <div
        className="bg-cover bg-center py-10 px-3"
        style={{ backgroundImage: `url(${BgPolyImg})` }}
      >
        {!isAvailable && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0  py-2  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              No Routine Found.
            </p>
          </div>
        )}
        {routineData.length > 0 && (
          <>
            <div className="flex flex-col  md:justify-center mt-20 mx-2 overflow-auto bg-inherit lg:mx-2">
              <h1 className="text-blue-700 font-semibold text-2xl text-center mb-5">
                {storeTerm.slice(0, 1)} Exam Routine Grade{" "}
                <span className="pr-2">{storeGrade.slice(0, 1)}</span>
                {new Date().getFullYear()}
              </h1>
              <div className=" m-4">
                <button
                  className="bg-sky-500 py-2 px-2 rounded-md"
                  onClick={() => generatePDF(routineData)}
                >
                  Download PDF
                </button>
              </div>
              <div className="overflow-auto  bg-slate-100 rounded-md dark:bg-slate-900  box-border shadow-2xl">
                <table className="w-full">
                  <thead>
                    <tr className=" text-green-600  dark:text-green-500 bg-slate-300 dark:bg-slate-700 border border-slate-300 dark:border-slate-800 pb-4">
                      <th className="whitespace-nowrap p-5   ">Date</th>
                      <th className="whitespace-nowrap p-5   ">Subject</th>
                      <th className="whitespace-nowrap p-5  text-center">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {routineData.length > 0 &&
                      routineData.map((datas, index) => (
                        <tr
                          key={index}
                          className="  text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 pb-4"
                        >
                          <td className="whitespace-nowrap text-center  px-8 py-5 text-sm capitalize">
                            {new Date(datas.date).getDay() === 0 && "Sunday"}
                            {new Date(datas.date).getDay() === 1 && "Monday"}
                            {new Date(datas.date).getDay() === 2 && "Tuesday"}
                            {new Date(datas.date).getDay() === 3 && "Wednesday"}
                            {new Date(datas.date).getDay() === 4 && "Thursday"}
                            {new Date(datas.date).getDay() === 5 && "Friday"}
                            {new Date(datas.date).getDay() === 6 && "Saturday"}
                          </td>

                          <td className="whitespace-nowrap text-center  px-8 py-5 text-sm capitalize">
                            {datas.subject}
                          </td>

                          <td className="whitespace-nowrap text-center px-8 py-5 text-sm capitalize">
                            <ShowTime datas={datas} />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-center">
          <div className="my-16 bg-[#004b87] w-[95%] md:w-[60%] py-8 px-4 rounded-lg md:px-8 lg:w-[50%] lg:px-12 xl:w-[40%] xl:px-16">
            <h1 className="text-3xl text-gray-300 text-center">Get Routine</h1>
            <form onSubmit={handleSubmitBtn} className="mt-8">
              <div className="grade my-8 relative">
                <label
                  htmlFor="grade"
                  className=" px-1 block   text-lg text-white"
                >
                  Choose Grade
                </label>
                <select
                  name="grade"
                  required
                  id="grade"
                  value={data.grade}
                  onChange={handleChange}
                  className="form-select px-4 py-4   w-full rounded"
                >
                  <option value="choose">-- Select One --</option>
                  <option value="Nursery">Nursery</option>
                  <option value="L.K.G">L.K.G</option>
                  <option value="U.K.G">U.K.G</option>
                  <option value="One">One</option>
                  <option value="Two">Two </option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                  <option value="Ten">Ten</option>
                  <option value="Eleven">Eleven</option>
                  <option value="Twelve">Twelve</option>
                </select>
              </div>
              <div className="exam_term my-8 relative">
                <label
                  htmlFor="exam_term"
                  className=" px-1 block   text-lg text-white"
                >
                  Exam Term
                </label>
                <select
                  name="exam_term"
                  required
                  id="exam_term"
                  value={data.exam_term}
                  onChange={handleChange}
                  className="form-select px-4 py-4   w-full rounded"
                >
                  <option value="choose">-- Select One --</option>
                  <option value="First Term">First Term</option>
                  <option value="Second Term">Second Term</option>
                  <option value="Third Term">Third Term</option>
                  <option value="Final Term">Final Term</option>
                </select>
              </div>

              <div className="mt-14">
                <button
                  className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
                  disabled={data.grade.length < 1 || data.exam_term.length < 1}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetRoutine;

const ShowTime = ({ datas }) => {
  return (
    <>
      {datas.start_time.split(":")[0] > 12 ? (
        <span>
          {datas.start_time.split(":")[0] - 12 < 10
            ? `0${datas.start_time.split(":")[0] - 12}`
            : `${datas.start_time.split(":")[0] - 12}`}
          :{datas.start_time.split(":")[1]}
        </span>
      ) : (
        <span>
          {datas.start_time.split(":")[0]}:{datas.start_time.split(":")[1]}
        </span>
      )}

      <span className="px-2">to</span>
      {datas.end_time.split(":")[0] > 12 ? (
        <span>
          {datas.end_time.split(":")[0] - 12 < 10
            ? `0${datas.end_time.split(":")[0] - 12}`
            : `${datas.end_time.split(":")[0] - 12}`}
          :{datas.end_time.split(":")[1]}
        </span>
      ) : (
        <span>
          {datas.end_time.split(":")[0]}:{datas.end_time.split(":")[1]}
        </span>
      )}
    </>
  );
};

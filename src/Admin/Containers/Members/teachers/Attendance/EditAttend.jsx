import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditAttendance from "../../../../Components/attendance/EditAttendance";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const EditTeacherAttendance = () => {
  const { isSideBar, isColorBar } = useAuth();
  //   Fetch Data from backend
  const { id } = useParams();
  const navigate = useNavigate();
  const [attend, setAttend] = useState("");
  const [absent, setAbsent] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get(`teachers/crud/attendance/${id}/`);
      setAttend(res.data.attend_day);
      setAbsent(res.data.absent_day);
      setDate(res.data.date);
      setName(res.data.name);
    };
    fetchData();
  }, [id]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosAdmin.put(`teachers/crud/attendance/${id}/`, {
        id: id,
        attend_day: attend,
        absent_day: absent,
        total_day: Number(attend) + Number(absent),
        date: date,
        name: name,
      });
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        navigate("/admin/teachers/attendance/");
      }, 1000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No response from server.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.status === 500) {
        setErrMsg("Internal Server Error.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg(error.response.data.errors);
        setTimeout(() => {
          setErrMsg("");
        }, 4000);
      }
    }
  };

  return (
    <>
      <AdminNav />

      {/* Form start here */}

      <section
        className={`teachers mt-2 px-4 md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg === 200 && (
          <div className="items-center w-full absolute  flex md:justify-center">
            <p className="px-4 text-sm md:text-base w-[90%] md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Teacher Updated Successfully.
            </p>
          </div>
        )}
        {errMsg.msg && (
          <div className="items-center w-full absolute  flex   md:justify-center ">
            <p className="px-4 text-sm  md:text-base w-[90%] md:w-[60%] capitalize py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}

        <div className="flex flex-col w-full items-center justify-center my-10">
          <EditAttendance
            attend={attend}
            setAttend={setAttend}
            absent={absent}
            setAbsent={setAbsent}
            id={id}
            handleSubmitBtn={handleSubmitBtn}
            title="Teacher"
          />
        </div>
      </section>

      {/* Form end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default EditTeacherAttendance;

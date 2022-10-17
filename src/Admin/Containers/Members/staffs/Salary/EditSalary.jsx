import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditSalary from "../../../../Components/attendance/EditSalary";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const EditTeacherSalary = () => {
  const { isSideBar, isColorBar } = useAuth();
  //   Fetch Data from backend
  const { id } = useParams();
  const navigate = useNavigate();
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [paidSalary, setPaidSalary] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get(`staffs/crud/salary/${id}/`);
      setTotalSalary(res.data.total_salary);
      setMonthlySalary(res.data.monthly_salary);
      setPaidSalary(res.data.paid_salary);
      setName(res.data.name);
      setDate(res.data.date);
    };
    fetchData();
  }, [id]);

  const [sucsMsg, setSucsMsg] = useState("");
  const [errMsg, setErrMsg] = useState({ msg: "" });

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await axiosAdmin.put(`staffs/crud/salary/${id}/`, {
        id: id,
        monthly_salary: monthlySalary,
        paid_salary: paidSalary,
        total_salary: totalSalary,
        unpaid_salary: Number(totalSalary) - Number(paidSalary),
        date: date,
        name: name,
      });
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        navigate("/admin/staffs/salary/");
      }, 1000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No response from server.");
        setTimeout(() => {
          setErrMsg({ msg: "" });
        }, 2000);
      } else if (error?.response?.status === 500) {
        setErrMsg("Internal Server Error.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } else if (error?.response?.data) {
        setErrMsg(error.response.data.errors);
        setTimeout(() => {
          setErrMsg({ msg: "" });
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
            <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500  rounded-md fixed text-center z-40">
              Staff Salary Updated Successfully.
            </p>
          </div>
        )}
        {errMsg.msg && (
          <div className="items-center w-full absolute  flex   md:justify-center ">
            <p className="px-4  text-sm md:text-base w-[90%] md:w-[60%] capitalize py-2 top-0  text-gray-900 bg-red-500  rounded-md fixed text-center z-40">
              {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}

        <div className="flex flex-col w-full items-center justify-center my-10">
          <EditSalary
            paidSalary={paidSalary}
            setPaidSalary={setPaidSalary}
            monthlySalary={monthlySalary}
            setMonthlySalary={setMonthlySalary}
            totalSalary={totalSalary}
            setTotalSalary={setTotalSalary}
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

export default EditTeacherSalary;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNav from "../../../../layouts/navbar/AdminNav";
import Footer from "../../../../layouts/footer/Footer";
import { useAuth } from "../../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../../server/Axios";
import ColorSettings from "../../../../Components/nav/ColorSettings";

const EditStuFee = () => {
  const { isSideBar, isColorBar } = useAuth();
  //   Fetch Data from backend
  const { id } = useParams();
  const navigate = useNavigate();
  const [monthlyFee, setMonthlyFee] = useState(0);
  const [busFee, setBusFee] = useState(0);
  const [computerFee, setComputerFee] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axiosAdmin.get(`students/crud/fee/${id}/`);
      setMonthlyFee(res.data.monthly_fee);
      setBusFee(res.data.bus_fee);
      setComputerFee(res.data.computer_fee);
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
      let res = await axiosAdmin.patch(`students/crud/fee/${id}/`, {
        id: id,
        name: name,
        monthly_fee: monthlyFee,
        bus_fee: busFee,
        computer_fee: computerFee,
        date: date,
      });
      setSucsMsg(res.status);
      setTimeout(() => {
        setSucsMsg("");
        navigate("/admin/students/fee/");
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
            <p className="px-4 text-sm md:text-base w-[90%]  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Student Fee Updated Successfully.
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
          <form className="my-10 dark:bg-slate-900  w-full md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
            <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
              Student Fee
            </h1>
            <div className="id mt-12 mb-5 relative ">
              <label
                htmlFor="id"
                className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
              >
                Student Id
              </label>
              <input
                type="text"
                name="id"
                id="id"
                value={id}
                readOnly
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>
            <div className="attend mt-10 mb-5 relative ">
              <label
                htmlFor="id"
                className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
              >
                Monthly Fee
              </label>
              <input
                type="number"
                name="Fee"
                id="Fee"
                value={monthlyFee}
                onChange={(e) => setMonthlyFee(e.target.value)}
                required
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>{" "}
            <div className="attend mt-10 mb-5 relative ">
              <label
                htmlFor="busFee"
                className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
              >
                Bus Fee
              </label>
              <input
                type="number"
                name="busFee"
                id="busFee"
                value={busFee}
                onChange={(e) => setBusFee(e.target.value)}
                required
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>{" "}
            <div className="attend mt-10 mb-5 relative ">
              <label
                htmlFor="computerFee"
                className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
              >
                Computer Fee
              </label>
              <input
                type="number"
                name="computerFee"
                id="computerFee"
                value={computerFee}
                onChange={(e) => setComputerFee(e.target.value)}
                required
                className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
              />
            </div>
            <div className="mt-10">
              <button
                className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
                disabled={!id || !monthlyFee || !busFee || !computerFee}
                onClick={handleSubmitBtn}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Form end here */}
      <ColorSettings />
      <Footer />
    </>
  );
};

export default EditStuFee;

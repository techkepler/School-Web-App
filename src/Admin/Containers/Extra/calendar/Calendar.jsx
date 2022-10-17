import React, { useState, useEffect } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import AdminNav from "../../../layouts/navbar/AdminNav";
import Footer from "../../../layouts/footer/Footer";
import { useAuth } from "../../../../contexts/GlobalProvider";
import { axiosAdmin } from "../../../../server/Axios";
import ColorSettings from "../../../Components/nav/ColorSettings";
import "./zcalendar.css";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const { isSideBar, isColorBar, setCurrentLocation, setIsLinkActive } =
    useAuth();

  useEffect(() => {
    setIsLinkActive("calendar");
    localStorage.setItem("whichLink", "calendar");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Calendar");
  }, [setCurrentLocation]);

  const [scheduleObj, setScheduleObj] = useState();
  const [scheduleData, setScheduleData] = useState([]);
  const [sucsMsg, setSucsMsg] = useState({
    msg: "",
  });
  const [errMsg, setErrMsg] = useState({
    msg: "",
  });

  const eventData = scheduleData.map((data) => {
    return {
      Id: data.event_id,
      Subject: data.subject,
      Location: data.location,
      StartTime: data.start_date,
      EndTime: data.end_date,
      Description: data.description,
      IsAllDay: data.all_day,
    };
  });

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  const handleFinalClick = async () => {
    let collectData = scheduleObj.eventsData;
    let mapData = collectData.map((datas) => {
      return {
        event_id: datas.Id,
        subject: datas.Subject,
        start_date: datas.StartTime,
        end_date: datas.EndTime,
        all_day: datas.IsAllDay,
        location: datas.Location,
        description: datas.Description,
      };
    });

    try {
      let res = await axiosAdmin.post(
        "informations/calendar/add/event/",
        mapData
      );
      setSucsMsg({ msg: res.status });
      setTimeout(() => {
        setSucsMsg({ msg: "" });
      }, 3000);
    } catch (error) {
      if (!error?.response) {
        setErrMsg({ msg: "No response from server" });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 3000);
      } else if (error?.response?.status === 500) {
        setErrMsg({ msg: "Internal server error." });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 3000);
      } else if (error?.response?.data) {
        setErrMsg({
          msg: error.response.data.errors,
        });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 7000);
      } else {
        setErrMsg({ msg: "Some error occured." });
        setTimeout(() => {
          setErrMsg({ msg: null });
        }, 3000);
      }
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      let res = await axiosAdmin.get("informations/crud/calendar");
      setScheduleData(res.data);
    };
    fetchEvent();
  }, []);

  return (
    <>
      <AdminNav />
      <section
        className={`students mt-2  md:px-6 lg:px-10  admin-body ${
          isSideBar && "sidebar-active"
        } ${isColorBar && "colorbar-active"}`}
      >
        {sucsMsg.msg === 201 && (
          <div className="items-center w-full absolute  flex justify-center">
            <p className="px-4 text-base  md:w-[60%] top-0 py-2  text-gray-900 bg-green-500 mx-2 rounded-md fixed text-center z-40">
              Calendar Events Added Successfully.
            </p>
          </div>
        )}

        {errMsg.msg && (
          <div className="items-center w-full absolute  flex   justify-center ">
            <p className="px-4  text-base md:w-[60%]  py-2 top-0  text-gray-900 bg-red-500 mx-2 rounded-md fixed text-center z-40">
              {Object.entries(errMsg.msg).map(([key, value]) => value[0])}
            </p>
          </div>
        )}
        <h1 className="text-sky-500 text-2xl md:text-3xl  font-bold mt-10 md:mt-20 px-2 text-center">
          Asgard Calendar {new Date().getFullYear()}
        </h1>
        <div className=" md:m-10 my-10 p-4 md:p-10 bg-slate-100 rounded-3xl">
          <ScheduleComponent
            height="650px"
            ref={(schedule) => setScheduleObj(schedule)}
            eventSettings={{ dataSource: eventData }}
            dragStart={onDragStart}
          >
            <ViewsDirective>
              {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
                <ViewDirective key={item} option={item} />
              ))}
            </ViewsDirective>
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>
          <PropertyPane>
            <table
              style={{ width: "100%", background: "white", color: "white" }}
            >
              <tbody>
                <tr style={{ height: "50px" }}>
                  <td style={{ width: "100%" }}>
                    <DatePickerComponent
                      value={new Date()}
                      showClearButton={false}
                      placeholder="Current Date"
                      floatLabelType="Always"
                      change={change}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>

          <div className="flex justify-center my-5">
            <button
              className="bg-green-600 px-4 py-3 rounded-md"
              onClick={handleFinalClick}
            >
              Save Data
            </button>
          </div>
        </div>
      </section>
      <ColorSettings />
      <Footer />
    </>
  );
};

export default Scheduler;

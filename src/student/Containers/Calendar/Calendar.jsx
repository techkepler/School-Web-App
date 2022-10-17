import React, { useState, useEffect } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import StaffNav from "../../layouts/navbar/StaffNav";
import Footer from "../../layouts/footer/Footer";
import ColorSettings from "../../../Admin/Components/nav/ColorSettings";
import { axiosAdmin } from "../../../server/Axios";
import { useAuth } from "../../../contexts/GlobalProvider";

import "./zcalendar.css";

const Calendar = () => {
  const { setCurrentLocation, setIsLinkActive, isSideBar, isColorBar } =
    useAuth();
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    setIsLinkActive("calendar");
    localStorage.setItem("whichLink", "calendar");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Calendar");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchEvent = async () => {
      let res = await axiosAdmin.get("informations/crud/calendar");
      setScheduleData(res.data);
    };
    fetchEvent();
  }, []);

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

  return (
    <div>
      <StaffNav />
      <div className="h-10 md:hidden"></div>
      <section
        className={` px-1   admin-body ${isSideBar && "sidebar-active"} ${
          isColorBar && "colorbar-active"
        }`}
      >
        <h1 className="  md:mt-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold text-sky-500  px-2 py-3 md:px-10">
          Batsyayan Calendar {new Date().getFullYear()}
        </h1>
        <div className="mx-2 mt-10 md:m-10   p-2 md:p-10 bg-slate-200 rounded-3xl">
          <ScheduleComponent
            height="650px"
            eventSettings={{ dataSource: eventData }}
          >
            <Inject
              services={[
                Day,
                Week,
                Month,
                Resize,
                WorkWeek,
                Agenda,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>
        </div>
        <div className="mt-16">
          <ColorSettings />

          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Calendar;

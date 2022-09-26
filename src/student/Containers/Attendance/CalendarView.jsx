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
import { axiosAdmin } from "../../../server/Axios";
import { useAuth } from "../../../contexts/GlobalProvider";

import "../Calendar/zcalendar.css";

const CalendarView = () => {
  const { setCurrentLocation, setIsLinkActive, auth } = useAuth();
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    setIsLinkActive("attendance");
    localStorage.setItem("whichLink", "attendance");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Attendance");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchEvent = async () => {
      let res = await axiosAdmin.get(
        `students/crud/absent?student_details=${auth.uid}`
      );
      setScheduleData(res.data);
    };
    fetchEvent();
  }, [auth.uid]);

  const eventData = scheduleData.map((data) => {
    return {
      Id: data.stu_details,
      Subject: "Absent",
      Location: "School",
      StartTime: data.date,
      EndTime: data.date,
      Description: "You were absent.",
      IsAllDay: true,
    };
  });

  return (
    <div className="mx-2 mt-10 md:m-10    md:p-10 bg-slate-200 rounded-3xl">
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: eventData }}
      >
        <Inject
          services={[Day, Week, Month, Resize, WorkWeek, Agenda, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default CalendarView;

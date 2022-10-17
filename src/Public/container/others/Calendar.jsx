import React, { Suspense, useState, useEffect } from "react";
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
import NavBar from "../../layout/navbar/NavBar";
import Footer from "../../layout/footer/Footer";
import { useAuth } from "../../../contexts/GlobalProvider";
import axiosPublic from "../../../Api/axiosPublic";
import "./ucalendar.css";
const Calendar = () => {
  const { setCurrentLocation } = useAuth();
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    setCurrentLocation("Events");
  }, [setCurrentLocation]);

  useEffect(() => {
    const fetchEvent = async () => {
      let res = await axiosPublic.get("informations/crud/calendar");
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
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
      </Suspense>
      <div className="h-20 md:hidden"></div>
      <h1 className="mt-3  md:mt-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white px-2 py-3 md:px-10">
        Batsyayan Calendar {new Date().getFullYear()}
      </h1>
      <div className="mx-2 md:m-10 mt-5  p-2 md:p-10 bg-white rounded-3xl">
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: eventData }}
        >
          <Inject
            services={[Day, Week, Month, Resize, WorkWeek, Agenda, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
      <div className="mt-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Calendar;

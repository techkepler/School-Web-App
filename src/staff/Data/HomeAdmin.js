import {
  FcPlanner,
  FcTodoList,
  FcLeave,
  FcBarChart,
  FcCalendar,
  FcDataSheet,
} from "react-icons/fc";

export const DashBoardItems = () => {
  const dashBoardItem = [
    {
      name: "Attendance",
      link: "student/attendance",
      icon: <FcPlanner className="text-4xl" />,
    },

    {
      name: "Leave Application",
      link: "leave/application",
      icon: <FcLeave className="text-4xl" />,
    },
    {
      name: "Homework",
      link: "student/homework",
      icon: <FcTodoList className="text-4xl" />,
    },
    {
      name: "Result",
      link: "student/results",
      icon: <FcBarChart className="text-4xl " />,
    },
    {
      name: "Calendar",
      link: "calendar",
      icon: <FcCalendar className="text-4xl " />,
    },
    {
      name: "Routine",
      link: "exam/routine",
      icon: <FcDataSheet className="text-4xl " />,
    },
  ];
  return dashBoardItem;
};

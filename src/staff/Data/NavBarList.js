import {
  FcButtingIn,
  FcPlanner,
  FcTodoList,
  FcLeave,
  FcBarChart,
  FcCalendar,
  FcDataSheet,
} from "react-icons/fc";

export const staffSideBar = [
  {
    name: "Attendance",
    icon: <FcPlanner className="text-xl " />,
    url: "student/attendance",
  },
  {
    name: "Homework",
    icon: <FcTodoList className="text-xl " />,
    url: "student/homework",
  },
  {
    name: "Leave Application",
    icon: <FcLeave className="text-xl " />,
    url: "leave/application",
  },

  {
    name: "Results",
    icon: <FcBarChart className="text-xl " />,
    url: "student/results",
  },
  {
    name: "Calendar",
    icon: <FcCalendar className="text-xl " />,
    url: "calendar",
  },
  {
    name: "Routine",
    icon: <FcDataSheet className="text-xl " />,
    url: "exam/routine",
  },

  {
    name: "Profile",
    icon: <FcButtingIn className="text-xl " />,
    url: "profile",
  },
];

import {
  FcButtingIn,
  FcPlanner,
  FcTodoList,
  FcLeave,
  FcBarChart,
  FcCalendar,
  FcDataSheet,
  FcCurrencyExchange,
} from "react-icons/fc";

export const studentSideBar = [
  {
    name: "Homework",
    icon: <FcTodoList className="text-xl " />,
    url: "homework",
  },

  {
    name: "Results",
    icon: <FcBarChart className="text-xl " />,
    url: "results",
  },
  {
    name: "Fee",
    icon: <FcCurrencyExchange className="text-xl " />,
    url: "fee",
  },
  {
    name: "Routine",
    icon: <FcDataSheet className="text-xl " />,
    url: "exam/routine",
  },
  {
    name: "Attendance",
    icon: <FcPlanner className="text-xl " />,
    url: "attendance",
  },

  {
    name: "Leave Application",
    icon: <FcLeave className="text-xl " />,
    url: "leave/application",
  },
  {
    name: "Calendar",
    icon: <FcCalendar className="text-xl " />,
    url: "calendar",
  },

  {
    name: "Profile",
    icon: <FcButtingIn className="text-xl " />,
    url: "profile",
  },
 
];

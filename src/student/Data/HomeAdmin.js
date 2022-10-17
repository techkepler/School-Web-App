import {
  FcPlanner,
  FcTodoList,
  FcLeave,
  FcBarChart,
  FcCurrencyExchange,
  FcDataSheet,
} from "react-icons/fc";

export const DashBoardItems = () => {
  const dashBoardItem = [
    {
      name: "Attendance",
      link: "attendance",
      icon: <FcPlanner className="text-4xl" />,
    },

    {
      name: "Leave Application",
      link: "leave/application",
      icon: <FcLeave className="text-4xl" />,
    },
    {
      name: "Homework",
      link: "homework",
      icon: <FcTodoList className="text-4xl" />,
    },
    {
      name: "Result",
      link: "results",
      icon: <FcBarChart className="text-4xl " />,
    },
    {
      name: "Fee",
      link: "fee",
      icon: <FcCurrencyExchange className="text-4xl " />,
    },
    {
      name: "Routine",
      link: "exam/routine",
      icon: <FcDataSheet className="text-4xl " />,
    },
  ];
  return dashBoardItem;
};

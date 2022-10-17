import {
  FcGallery,
  FcCalendar,
  FcPlanner,
  FcAdvertising,
  FcViewDetails,
  FcSurvey,
} from "react-icons/fc";
import {
  FaRegIdCard,
  FaEye,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaFilePdf,
} from "react-icons/fa";
import { AiFillInteraction } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";

export const DashBoardItems = () => {
  const dashBoardItem = [
    {
      name: "Announcement",
      link: "announcement",
      icon: <FcAdvertising className="text-4xl" />,
    },

    {
      name: "Gallery",
      link: "gallery",
      icon: <FcGallery className="text-4xl" />,
    },
    {
      name: "Calendar",
      link: "calendar",
      icon: <FcCalendar className="text-4xl" />,
    },
    {
      name: "Leave Application ",
      link: "application",
      icon: <FcViewDetails className="text-4xl " />,
    },
    {
      name: "Inqiury Form ",
      link: "inquiry",
      icon: <FcSurvey className="text-4xl " />,
    },
    {
      name: "Events",
      link: "events",
      icon: <FcPlanner className="text-4xl " />,
    },
  ];
  return dashBoardItem;
};

export const teacherDashboardItems = (props) => {
  let teacherDashboardItem = [
    {
      name: `Register ${props}`,
      link: "register",
      icon: <FaRegIdCard className="text-3xl text-sky-500" />,
    },

    {
      name: `View ${props}`,
      link: "view",
      icon: <FaEye className="text-3xl text-lime-500" />,
    },
    {
      name: `${props} Attendance`,
      link: "attendance",
      icon: <FaCalendarAlt className="text-3xl  text-amber-500" />,
    },
    {
      name: `${props} Salary`,
      link: "salary",
      icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
    },
    {
      name: "Generate PDF",
      link: "generate/pdf",
      icon: <FaFilePdf className="text-3xl text-teal-500" />,
    },
    {
      name: "Others",
      link: "others",
      icon: <AiFillInteraction className="text-3xl text-indigo-500" />,
    },
  ];
  return teacherDashboardItem;
};

export const studentDashboardItems = (props) => {
  let stuDashboardItem = [
    {
      name: `Register ${props}`,
      link: "register",
      icon: <FaRegIdCard className="text-3xl text-sky-500" />,
    },

    {
      name: `View ${props}`,
      link: "view",
      icon: <FaEye className="text-3xl text-lime-500" />,
    },
    {
      name: `${props} Attendance`,
      link: "attendance",
      icon: <FaCalendarAlt className="text-3xl  text-amber-500" />,
    },
    {
      name: `${props} Fee`,
      link: "fee",
      icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
    },
    {
      name: `${props} Result`,
      link: "result",
      icon: <BsBarChartFill className="text-3xl text-green-500" />,
    },
    {
      name: "Generate PDF",
      link: "generate/pdf",
      icon: <FaFilePdf className="text-3xl text-teal-500" />,
    },
    {
      name: "Others",
      link: "others",
      icon: <AiFillInteraction className="text-3xl text-indigo-500" />,
    },
  ];
  return stuDashboardItem;
};

export const parentDashboardItems = (props) => {
  let parentDashboardItem = [
    {
      name: `Register ${props}`,
      link: "register",
      icon: <FaRegIdCard className="text-3xl text-sky-500" />,
    },

    {
      name: `View ${props}`,
      link: "view",
      icon: <FaEye className="text-3xl dark:text-lime-500 text-lime-700" />,
    },
    {
      name: "Generate PDF",
      link: "generate/pdf",
      icon: <FaFilePdf className="text-3xl text-teal-500" />,
    },
  ];

  return parentDashboardItem;
};

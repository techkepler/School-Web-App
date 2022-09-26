import {
  FcBusinessman,
  FcBusinesswoman,
  FcManager,
  FcConferenceCall,
  FcGallery,
  FcCalendar,
  FcDataSheet,
  FcAdvertising,
  FcNews,
  FcPlanner,
  FcQuestions,
  FcTemplate,
  FcButtingIn,
} from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

export const adminSideBarMember = [
  {
    name: "Teachers",
    icon: <FcBusinessman className="text-xl " />,
  },
  {
    name: "Staffs",
    icon: <FcBusinesswoman className="text-xl " />,
  },
  {
    name: "Students",
    icon: <FcManager className="text-xl " />,
  },

  {
    name: "Parents",
    icon: <FcConferenceCall className="text-xl " />,
  },
];

export const adminSideBarNews = [
  {
    name: "Announcement",
    icon: <FcAdvertising className="text-xl " />,
  },
  {
    name: "News",
    icon: <FcNews className="text-xl " />,
  },
  {
    name: "Blogs",
    icon: <FcTemplate className="text-xl " />,
  },

  {
    name: "Events",
    icon: <FcPlanner className="text-xl " />,
  },
];

export const adminSideBarExtra = [
  {
    name: "Gallery",
    icon: <FcGallery className="text-xl " />,
  },
  {
    name: "Routine",
    icon: <FcDataSheet className="text-xl " />,
  },
  {
    name: "Calendar",
    icon: <FcCalendar className="text-xl " />,
  },
  {
    name: "Application",
    icon: <FaWpforms className="text-lg text-sky-600 dark:text-sky-500" />,
  },
  {
    name: "Inquiry",
    icon: <FcQuestions className="text-2xl " />,
  },
];

export const adminSideBarProfile = [
  {
    name: "Account",
    icon: (
      <MdAccountCircle className="text-2xl text-green-600 dark:text-green-500" />
    ),
  },
  {
    name: "Profile",
    icon: <FcButtingIn className="text-xl " />,
  },
];

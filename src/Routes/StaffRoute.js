import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/GlobalProvider";
import RequireAuth from "../Hooks/RequireAuth";
import PersistentLogin from "../Hooks/persistentLogin";

const Layout = React.lazy(() => import("../staff/layouts/layout"));
const Dashboard = React.lazy(() => import("../staff/Containers/Dashboard"));
const StudentAttendance = React.lazy(() =>
  import("../staff/Containers/Attendance/Attendance")
);
const LeaveApplication = React.lazy(() =>
  import("../staff/Containers/LeaveApplication/Application")
);
const SingleApplication = React.lazy(() =>
  import("../staff/Containers/LeaveApplication/SingleApplication")
);
const StuResult = React.lazy(() =>
  import("../staff/Containers/Results/Result")
);
const Calendar = React.lazy(() =>
  import("../staff/Containers/Calendar/Calendar")
);
const Routine = React.lazy(() =>
  import("../staff/Containers/Routines/Routines")
);
const Profile = React.lazy(() =>
  import("../staff/Containers/Account/profile/Profile")
);
const ChangePass = React.lazy(() =>
  import("../staff/Containers/Account/profile/ChangePass")
);

const Homework = React.lazy(() =>
  import("../staff/Containers/Homework/Homework")
);

const SingleHomework = React.lazy(() =>
  import("../staff/Containers/Homework/SingleHomework")
);

const EditHomework = React.lazy(() =>
  import("../staff/Containers/Homework/EditHomework")
);

const UnAuthorized = React.lazy(() => import("../Page/UnAuthorized"));
const PageNotFound = React.lazy(() => import("../Page/PublicPageNotFound"));

const StaffRoutes = () => {
  const { setThemeColor, colorMode, setColorMode, setIsLinkActive } = useAuth();

  useEffect(() => {
    const ColorMode = localStorage.getItem("colorMode");
    const ThemeColor = localStorage.getItem("themeMode");
    const LinkActive = localStorage.getItem("whichLink");

    if (ColorMode || ThemeColor || LinkActive) {
      setColorMode(ColorMode);
      setThemeColor(ThemeColor);
      setIsLinkActive(LinkActive);
    }
  }, [setColorMode, setThemeColor, setIsLinkActive]);
  return (
    <div
      className={`${
        colorMode === "Dark"
          ? "dark bg-gray-800 min-h-[100vh]"
          : "bg-white min-h-[100vh]"
      }`}
    >
      <Suspense fallback={<div>Loading......</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PersistentLogin />}>
              <Route element={<RequireAuth allowedRole={[454545]} />}>
                <Route exact path="/unauthorized/" element={<UnAuthorized />} />
              </Route>
              <Route element={<RequireAuth allowedRole={[5379482180]} />}>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/student/attendance/"
                  element={<StudentAttendance />}
                />
                <Route
                  path="/leave/application/"
                  element={<LeaveApplication />}
                />
                <Route
                  path="/student/leave/application/:id/"
                  element={<SingleApplication />}
                />

                <Route path="/student/results/" element={<StuResult />} />
                <Route path="/calendar/" element={<Calendar />} />
                <Route path="/exam/routine/" element={<Routine />} />
                <Route path="/profile/" element={<Profile />} />
                <Route
                  path="/profile/change/password/"
                  element={<ChangePass />}
                />
                <Route path="/student/homework/" element={<Homework />} />
                <Route
                  path="/student/homework/view/:id/"
                  element={<SingleHomework />}
                />
                <Route
                  path="/student/edit/homework/:id/"
                  element={<EditHomework />}
                />
              </Route>
              <Route exact path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default StaffRoutes;

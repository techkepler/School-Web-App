import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/GlobalProvider";
import RequireAuth from "../Hooks/RequireAuth";
import PersistentLogin from "../Hooks/persistentLogin";

const Layout = React.lazy(() => import("../student/layouts/layout"));
const Dashboard = React.lazy(() => import("../student/Containers/Dashboard"));

const Homework = React.lazy(() =>
  import("../student/Containers/Homework/Homework")
);

const SingleHomework = React.lazy(() =>
  import("../student/Containers/Homework/SingleHomework")
);

const StuResult = React.lazy(() =>
  import("../student/Containers/Results/Result")
);
const Routine = React.lazy(() =>
  import("../student/Containers/Routines/Routines")
);

const StudentAttendance = React.lazy(() =>
  import("../student/Containers/Attendance/Attendance")
);
const LeaveApplication = React.lazy(() =>
  import("../student/Containers/LeaveApplication/Application")
);
const SingleApplication = React.lazy(() =>
  import("../student/Containers/LeaveApplication/SingleApplication")
);
const EditApplication = React.lazy(() =>
  import("../student/Containers/LeaveApplication/EditApplication")
);
const Calendar = React.lazy(() =>
  import("../student/Containers/Calendar/Calendar")
);
const Profile = React.lazy(() =>
  import("../student/Containers/Account/profile/Profile")
);
const ChangePass = React.lazy(() =>
  import("../student/Containers/Account/profile/ChangePass")
);
const StudentFee = React.lazy(() => import("../student/Containers/Fee/Fee"));
const UnAuthorized = React.lazy(() => import("../Page/UnAuthorized"));
const PageNotFound = React.lazy(() => import("../Page/PublicPageNotFound"));

const StudentRoutes = () => {
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
              <Route element={<RequireAuth allowedRole={[2481237951]} />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/homework/" element={<Homework />} />

                <Route
                  path="/homework/view/:id/"
                  element={<SingleHomework />}
                />
                <Route path="/results/" element={<StuResult />} />
                <Route path="/fee/" element={<StudentFee />} />
                <Route path="/exam/routine/" element={<Routine />} />
                <Route path="/attendance/" element={<StudentAttendance />} />
                <Route
                  path="/leave/application/"
                  element={<LeaveApplication />}
                />
                <Route
                  path="/edit/leave/application/:id/"
                  element={<EditApplication />}
                />
                <Route
                  path="/leave/application/view/:id/"
                  element={<SingleApplication />}
                />
                <Route path="/calendar/" element={<Calendar />} />
                <Route path="/profile/" element={<Profile />} />
                <Route
                  path="/profile/change/password/"
                  element={<ChangePass />}
                />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default StudentRoutes;

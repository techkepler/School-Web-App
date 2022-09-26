import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Admin/layouts/layout";
import { useAuth } from "../contexts/GlobalProvider";
import RequireAuth from "../Hooks/RequireAuth";
import PersistentLogin from "../Hooks/persistentLogin";
const Dashboard = React.lazy(() => import("../Admin/Containers/Dashboard"));

// TEACHER CRUD OPERATION START HERE
const Teacher = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Teacher")
);
const RegisterTeacher = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/CRUD/AddTeacher")
);
const ViewTeacher = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/CRUD/ViewTeachers")
);
const EditTeacher = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/CRUD/EditTeacher")
);

// TEACHER ATTENDANCE START HERE
const TeacherAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Attendance/Attendance")
);
const EditTeacherAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Attendance/EditAttend")
);

// TEACHER SALARY SART HERE
const TeacherSalary = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Salary/Salary")
);

const EditTeacherSalary = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Salary/EditSalary")
);

// Teache PDF ROUTE
const TeacherPDF = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/PDF/PDF")
);

// Teacher Other Route
const TeacherOther = React.lazy(() =>
  import("../Admin/Containers/Members/teachers/Others/Other")
);

// STAFF CRUD OPERATION START HERE
const Staff = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Staff")
);
const RegisterStaff = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/CRUD/AddStaff")
);
const ViewStaff = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/CRUD/ViewStaff")
);
const EditStaff = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/CRUD/EditStaff")
);

// Staff Attendance Start Here
const StaffAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Attendance/Attendance")
);
const EditStaffAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Attendance/EditAttend")
);

// Staff SALARY SART HERE
const StaffSalary = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Salary/Salary")
);

const EditStaffSalary = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Salary/EditSalary")
);

// Staff PDF ROUTE
const StaffPDF = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/PDF/PDF")
);

// Staff Other Route
const StaffOther = React.lazy(() =>
  import("../Admin/Containers/Members/staffs/Others/Other")
);

// Student CRUD OPERATION START HERE
const Student = React.lazy(() =>
  import("../Admin/Containers/Members/students/Student")
);
const RegisterStudent = React.lazy(() =>
  import("../Admin/Containers/Members/students/CRUD/AddStudent")
);
const ViewStudent = React.lazy(() =>
  import("../Admin/Containers/Members/students/CRUD/ViewStudent")
);
const EditStudent = React.lazy(() =>
  import("../Admin/Containers/Members/students/CRUD/EditStudent")
);

// Student Attendance route start here

const StudentAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/students/Attendance/Attendance")
);

const EditStudentAttendance = React.lazy(() =>
  import("../Admin/Containers/Members/students/Attendance/EditAttend")
);

// Student Fee Start Here
const StudentFee = React.lazy(() =>
  import("../Admin/Containers/Members/students/Fee/Fee")
);

const EditStudentFee = React.lazy(() =>
  import("../Admin/Containers/Members/students/Fee/EditFee")
);

// Student Result Start Her

const StudentResult = React.lazy(() =>
  import("../Admin/Containers/Members/students/Results/Result")
);

const StudentPDF = React.lazy(() =>
  import("../Admin/Containers/Members/students/PDF/PDF")
);

const EditStuResult = React.lazy(() =>
  import("../Admin/Containers/Members/students/Results/EditResult")
);

const StudentOther = React.lazy(() =>
  import("../Admin/Containers/Members/students/Others/Other")
);

// Parent Routes Start Here

const Parent = React.lazy(() =>
  import("../Admin/Containers/Members/parents/Parent")
);

const RegisterParent = React.lazy(() =>
  import("../Admin/Containers/Members/parents/CRUD/AddParent")
);

const ViewParent = React.lazy(() =>
  import("../Admin/Containers/Members/parents/CRUD/ViewParent")
);

const EditParent = React.lazy(() =>
  import("../Admin/Containers/Members/parents/CRUD/EditParent")
);

const ParentPdf = React.lazy(() =>
  import("../Admin/Containers/Members/parents/pdf/PDF")
);

// NEWS SECTION START HERE

// Announcement Route
const Announcement = React.lazy(() =>
  import("../Admin/Containers/Information/announcement/Announcement")
);

const EditAnnouncement = React.lazy(() =>
  import("../Admin/Containers/Information/announcement/EditAnnouncement")
);

// News Route
const News = React.lazy(() =>
  import("../Admin/Containers/Information/news/News")
);

const EditNews = React.lazy(() =>
  import("../Admin/Containers/Information/news/EditNews")
);

// Blogs Route
const Blogs = React.lazy(() =>
  import("../Admin/Containers/Information/blogs/Blogs")
);

const EditBlogs = React.lazy(() =>
  import("../Admin/Containers/Information/blogs/EditBlogs")
);

// Events Route
const Events = React.lazy(() =>
  import("../Admin/Containers/Information/events/Events")
);

const EditEvents = React.lazy(() =>
  import("../Admin/Containers/Information/events/EditEvents")
);

// Extra Section Routes Start Here

// Gallery
const Gallery = React.lazy(() =>
  import("../Admin/Containers/Extra/gallery/Gallery")
);

// Calendar Route
const Calendar = React.lazy(() =>
  import("../Admin/Containers/Extra/calendar/Calendar")
);

// Routine Route
const Routines = React.lazy(() =>
  import("../Admin/Containers/Extra/routines/Routines")
);

const EditRoutines = React.lazy(() =>
  import("../Admin/Containers/Extra/routines/EditRoutines")
);

// Leave Applicatin Route
const LeaveApplication = React.lazy(() =>
  import("../Admin/Containers/Extra/application/Application")
);

const SingleApplication = React.lazy(() =>
  import("../Admin/Containers/Extra/application/SingleApplication")
);

// Admission Inquiry Form Route
const Inquiry = React.lazy(() =>
  import("../Admin/Containers/Extra/inquiry/Inquiry")
);

const SingleInquiry = React.lazy(() =>
  import("../Admin/Containers/Extra/inquiry/SingleInquiry")
);

// User Account Route

const UsersAccount = React.lazy(() =>
  import("../Admin/Containers/Account/users/Users")
);

// Profile Route

const Profile = React.lazy(() =>
  import("../Admin/Containers/Account/profile/Profile")
);

const ChangePass = React.lazy(() =>
  import("../Admin/Containers/Account/profile/ChangePass")
);
const UnAuthorized = React.lazy(() => import("../Page/UnAuthorized"));
const PageNotFound = React.lazy(() => import("../Page/PublicPageNotFound"));
const AdminRoute = () => {
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
      <React.Suspense fallback={<div>Loading.......</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PersistentLogin />}>
              <Route element={<RequireAuth allowedRole={[454545]} />}>
                <Route exact path="/unauthorized/" element={<UnAuthorized />} />
              </Route>
              <Route element={<RequireAuth allowedRole={[2846728426]} />}>
                <Route path="/" exact element={<Dashboard />} />
                {/* Teacher routes start here */}
                {/* Teacher CRUD Routes Start Here */}
                <Route path="/teachers/" exact element={<Teacher />} />
                <Route
                  path="/teachers/register/"
                  exact
                  element={<RegisterTeacher />}
                />
                <Route path="/teachers/view/" exact element={<ViewTeacher />} />
                <Route
                  path="/teachers/edit/:id/"
                  exact
                  element={<EditTeacher />}
                />

                {/* Teacher Attendance Routes Start Here */}
                <Route
                  path="/teachers/attendance/"
                  exact
                  element={<TeacherAttendance />}
                />
                <Route
                  path="/teachers/attendance/edit/:id/"
                  exact
                  element={<EditTeacherAttendance />}
                />

                {/* Teacher Salary Routes Start Here */}
                <Route
                  path="/teachers/salary/"
                  exact
                  element={<TeacherSalary />}
                />
                <Route
                  path="/teachers/salary/edit/:id/"
                  exact
                  element={<EditTeacherSalary />}
                />
                {/* Teacher PDF ROUTES START HERE */}
                <Route
                  path="/teachers/generate/pdf/"
                  exact
                  element={<TeacherPDF />}
                />

                {/* Teacher Other Routes */}
                <Route
                  path="/teachers/others/"
                  exact
                  element={<TeacherOther />}
                />

                {/* Teacher routes end here */}

                {/* Staff route start here */}

                {/* Staff CRUD Routes Start Here */}
                <Route path="/staffs/" exact element={<Staff />} />
                <Route
                  path="/staffs/register/"
                  exact
                  element={<RegisterStaff />}
                />
                <Route path="/staffs/view/" exact element={<ViewStaff />} />
                <Route path="/staffs/edit/:id/" exact element={<EditStaff />} />

                {/* Staff Attendance Routes Start Here */}
                <Route
                  path="/staffs/attendance/"
                  exact
                  element={<StaffAttendance />}
                />
                <Route
                  path="/staffs/attendance/edit/:id/"
                  exact
                  element={<EditStaffAttendance />}
                />

                {/* Satff Salary Routes Start Here */}
                <Route path="/staffs/salary/" exact element={<StaffSalary />} />
                <Route
                  path="/staffs/salary/edit/:id/"
                  exact
                  element={<EditStaffSalary />}
                />
                {/* Staff PDF ROUTES START HERE */}
                <Route
                  path="/staffs/generate/pdf/"
                  exact
                  element={<StaffPDF />}
                />

                {/* Staff Other Routes */}
                <Route path="/staffs/others/" exact element={<StaffOther />} />

                {/* Staff route end here */}

                {/* Student Route start here */}

                {/* Staff CRUD Routes Start Here */}
                <Route path="/students/" exact element={<Student />} />
                <Route
                  path="/students/register/"
                  exact
                  element={<RegisterStudent />}
                />
                <Route path="/students/view/" exact element={<ViewStudent />} />
                <Route
                  path="/students/edit/:id/"
                  exact
                  element={<EditStudent />}
                />

                {/* Student Attendance Routes Start Here */}
                <Route
                  path="/students/attendance/"
                  exact
                  element={<StudentAttendance />}
                />
                <Route
                  path="/students/attendance/edit/:id/"
                  exact
                  element={<EditStudentAttendance />}
                />

                {/* Student Fee Routes Start Here */}
                <Route path="/students/fee/" exact element={<StudentFee />} />
                <Route
                  path="/students/fee/edit/:id/"
                  exact
                  element={<EditStudentFee />}
                />

                {/* Student Result Routes Start here */}
                <Route
                  path="/students/result/"
                  exact
                  element={<StudentResult />}
                />
                <Route
                  path="/students/result/edit/:id/"
                  exact
                  element={<EditStuResult />}
                />

                <Route
                  path="/students/generate/pdf/"
                  exact
                  element={<StudentPDF />}
                />
                <Route
                  path="/students/others/"
                  exact
                  element={<StudentOther />}
                />

                {/* Parent Routes Start Here */}
                <Route path="/parents/" exact element={<Parent />} />
                <Route
                  path="/parents/register/"
                  exact
                  element={<RegisterParent />}
                />
                <Route path="/parents/view/" exact element={<ViewParent />} />
                <Route
                  path="/parents/edit/:id/"
                  exact
                  element={<EditParent />}
                />
                <Route
                  path="/parents/generate/pdf/"
                  exact
                  element={<ParentPdf />}
                />

                {/* NEWS ROUTES START HERE */}

                {/* Announcement */}
                <Route path="/announcement/" exact element={<Announcement />} />
                <Route
                  path="/announcement/edit/:id/"
                  exact
                  element={<EditAnnouncement />}
                />

                {/* News */}
                <Route path="/news/" exact element={<News />} />
                <Route path="/news/edit/:slugs/" exact element={<EditNews />} />

                {/* Blogs */}
                <Route path="/blogs/" exact element={<Blogs />} />
                <Route
                  path="/blogs/edit/:slugs/"
                  exact
                  element={<EditBlogs />}
                />

                {/* Events */}
                <Route path="/events/" exact element={<Events />} />
                <Route
                  path="/events/edit/:id/"
                  exact
                  element={<EditEvents />}
                />

                {/* Gallery Route */}
                <Route path="/gallery/" exact element={<Gallery />} />

                {/* Routines */}
                <Route path="/calendar/" exact element={<Calendar />} />

                {/* Routines */}
                <Route path="/routine/" exact element={<Routines />} />
                <Route
                  path="/routine/edit/:id/"
                  exact
                  element={<EditRoutines />}
                />

                {/* Application */}
                <Route
                  path="/application/"
                  exact
                  element={<LeaveApplication />}
                />
                <Route
                  path="/application/view/:id/"
                  exact
                  element={<SingleApplication />}
                />

                {/* Inquiry */}
                <Route path="/inquiry/" exact element={<Inquiry />} />
                <Route
                  path="/inquiry/view/:id/"
                  exact
                  element={<SingleInquiry />}
                />

                {/* User Accounts Routes Start Here */}

                {/* Users Route */}
                <Route path="/account/" exact element={<UsersAccount />} />

                {/* Profile Route */}
                <Route path="/profile/" exact element={<Profile />} />
                <Route
                  path="/profile/change/password/"
                  exact
                  element={<ChangePass />}
                />
              </Route>
              <Route exact path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default AdminRoute;

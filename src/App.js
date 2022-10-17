import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/GlobalProvider";
import ScrollToTop from "./Hooks/ScrollToTop";
import Skeleton from "./Page/Skeleton";
import "./App.css";

const PublicRoute = React.lazy(() => import("./Routes/PublicRoute"));
const AdminRoute = React.lazy(() => import("./Routes/AdminRoute"));
const StaffRoute = React.lazy(() => import("./Routes/StaffRoute"));
const StudentRoute = React.lazy(() => import("./Routes/StudentRoute"));

const App = () => {
  const { currentLocation } = useAuth();

  document.title = `${currentLocation} - Batsyayan School`;

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            <Route exact path="/*" element={<PublicRoute />} />
            <Route exact path="/admin/*" element={<AdminRoute />} />
            <Route exact path="/staff/*" element={<StaffRoute />} />
            <Route exact path="/student/*" element={<StudentRoute />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;

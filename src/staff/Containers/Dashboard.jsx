import React, { useEffect } from "react";
import StaffNav from "../layouts/navbar/StaffNav";
import HomeAdmin from "../layouts/body/Home";
import ColorSettings from "../Components/nav/ColorSettings";
import { useAuth } from "../../contexts/GlobalProvider";

const Dashboard = () => {
  const { setCurrentLocation, setIsLinkActive } = useAuth();

  useEffect(() => {
    setIsLinkActive("dashboard");
    localStorage.setItem("whichLink", "dashboard");
  }, [setIsLinkActive]);

  useEffect(() => {
    setCurrentLocation("Dashboard");
  }, [setCurrentLocation]);

  return (
    <div>
      <StaffNav />
      <HomeAdmin />
      <ColorSettings />
    </div>
  );
};

export default Dashboard;

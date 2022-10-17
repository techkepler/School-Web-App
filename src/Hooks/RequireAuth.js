import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/GlobalProvider";

const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.role?.find((roles) => allowedRole?.includes(roles)) ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/admin/unauthorized/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login/" state={{ from: location }} replace />
  );
};

export default RequireAuth;

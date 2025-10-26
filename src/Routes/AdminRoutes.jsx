import React from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router";
import AuthHook from "../Hooks/AuthHook";
import UseUserRole from "../Hooks/UseUserRole";


const AdminRoute = ({ children }) => {
  const { user, loading } = AuthHook();
  const { role, roleLoading } = UseUserRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (user && role === "admin") {
    return children;
  }
  return (
    <Navigate to="/forbidden" state={{ from: location.pathname }} replace></Navigate>
  );
};

export default AdminRoute;

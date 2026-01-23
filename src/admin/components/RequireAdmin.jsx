import React from "react";
import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const isAdminLoggedIn = sessionStorage.getItem("adminAuth");

  if (isAdminLoggedIn !== "true") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default RequireAdmin;

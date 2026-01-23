import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";
import Main from "../components/Main";
import { BottomNav } from "../components/BottomNav";

export const Dashboard = () => {

  // 🔐 AUTH CHECK (THIS IS THE PROTECTION)
  const isAdmin = localStorage.getItem("adminAuth");

  if (isAdmin !== "true") {
    return <Navigate to="/admin/login" />;
  }

  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <Main activePage={activePage} />
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import Main from "../components/Main";
import { BottomNav } from "../components/BottomNav";

export const Dashboard = () => {
  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <Main activePage={activePage} />
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

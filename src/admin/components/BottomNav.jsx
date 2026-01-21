import React from "react";
import "../../common/bottomNav.css";

export const BottomNav = ({ activePage, setActivePage }) => {
  const getButtonClass = (page) =>
    activePage === page ? "bottom-btn active" : "bottom-btn";

  return (
    <nav className="bottom-nav">
      <button className={getButtonClass("overview")} onClick={() => setActivePage("overview")}>
        Overview
      </button>
      <button className={getButtonClass("exams")} onClick={() => setActivePage("exams")}>
        Exams
      </button>
      <button className={getButtonClass("results")} onClick={() => setActivePage("results")}>
        Results
      </button>
      <button className={getButtonClass("analytics")} onClick={() => setActivePage("analytics")}>
        Analytics
      </button>
      <button className={getButtonClass("students")} onClick={() => setActivePage("students")}>
        Students
      </button>
    </nav>
  );
};

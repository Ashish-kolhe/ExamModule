import React from "react";
import "../../common/bottomNav.css";

export const BottomNav = ({ activePage, setActivePage }) => {
  const getButtonClass = (page) =>
    activePage === page ? "bottom-btn active" : "bottom-btn";

  return (
    <nav className="bottom-nav">
      <button className={getButtonClass("overview")} onClick={() => setActivePage("overview")}>
        <i className="fa-solid fa-chart-line"></i>
        Overview
      </button>
      <button className={getButtonClass("exams")} onClick={() => setActivePage("exams")}>
          <i className="fa-solid fa-pen-to-square"></i>
        Exams
      </button>
      <button className={getButtonClass("results")} onClick={() => setActivePage("results")}>
              <i className="fa-solid fa-trophy result-icon"></i>
        Results
      </button>
      <button className={getButtonClass("analytics")} onClick={() => setActivePage("analytics")}>
       <i className="fa-solid fa-chart-line analytics-icon"></i>
        Analytics
      </button>
      <button className={getButtonClass("students")} onClick={() => setActivePage("students")}>
       <i className="fa-solid fa-user-graduate student-icon"></i>
        Students
      </button>
    </nav>
  );
};

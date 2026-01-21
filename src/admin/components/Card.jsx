import React from 'react';

export const Card = ({ activePage, setActivePage }) => {

  const isActive = (page) =>
    activePage === page ? "overview-btn active" : "overview-btn";

  return (
    <div className="card">

      <button
        className={isActive("overview")}
        onClick={() => setActivePage("overview")}
      >
        <i className="fa-solid fa-chart-line"></i>
        Overview
      </button>

      <button
        className={isActive("exams")}
        onClick={() => setActivePage("exams")}
      >
        <i className="fa-solid fa-pen-to-square"></i>
        Exams
      </button>

      <button
        className={isActive("results")}
        onClick={() => setActivePage("results")}
      >
        <i className="fa-solid fa-trophy result-icon"></i>
        Results
      </button>

      <br />
      <hr />
      <br />

      <button
        className={isActive("analytics")}
        onClick={() => setActivePage("analytics")}
      >
        <i className="fa-solid fa-chart-line analytics-icon"></i>
        Analytics
      </button>

      <button
        className={isActive("students")}
        onClick={() => setActivePage("students")}
      >
        <i className="fa-solid fa-user-graduate student-icon"></i>
        Student
      </button>

    </div>
  );
};

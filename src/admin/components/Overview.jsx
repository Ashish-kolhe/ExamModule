import React from "react";
import "../../common/overview.css";

const Overview = () => {
  return (
    <div className="page-wire overview-page">
      <div className="page-top-grid">
        <div className="page-card">
          <div className="card-icon blue">
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <div>
            <h4>Total Exams</h4>
            <h2>1</h2>
          </div>
          </div>

        <div className="page-card">
          <div className="card-icon green">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <h4>Active</h4>
            <h2>1</h2>
          </div>
        </div>

        <div className="page-card"><div className="card-icon orange">
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div>
            <h4>Questions</h4>
            <h2>3</h2>
          </div></div>

        <div className="page-card"><div className="card-icon purple">
            <i className="fa-solid fa-user-pen"></i>
          </div>
          <div>
            <h4>Attempts</h4>
            <h2>0</h2>
          </div></div>

          <div className="page-card">
          <div className="card-icon teal">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <div>
            <h4>Avg Score</h4>
            <h2>0%</h2>
          </div>
        </div>

        <div className="page-card">
          <div className="card-icon red">
            <i className="fa-solid fa-percent"></i>
          </div>
          <div>
            <h4>Pass Rate</h4>
            <h2>0%</h2>
          </div>
        </div>
      </div>

      <div className="page-bottom">
        <div className="page-bottom">
        <div className="bottom-section">
          <h3>Recent Exams</h3>
          <p><strong>C++ (Copy)</strong> — 0 attempts — Active</p>
        </div>

        <div className="bottom-section">
          <h3>Recent Results</h3>
          <p>No results yet</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Overview;


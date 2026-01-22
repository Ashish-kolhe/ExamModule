import React, { useState } from "react";
import "../../common/stud.css";

const Stud = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-wire stud-page">

      <div className="student">
        <div className="stud-stats">

          <div className="stud-stats-header">
            <i className="fa-solid fa-user-graduate stud-stats-icon"></i>
            <span className="stud-stats-title">Students</span>
          </div>

          <div className="stud-stats-body">
            <div className="stud-stat">
              <div className="stud-stat-value">78%</div>
              <div className="stud-stat-label">Avg Score</div>
            </div>

            <div className="stud-stat">
              <div className="stud-stat-value">120</div>
              <div className="stud-stat-label">Passed</div>
            </div>

            <div className="stud-stat">
              <div className="stud-stat-value">85%</div>
              <div className="stud-stat-label">Pass Rate</div>
            </div>
          </div>

          <button
            className="stud-stats-btn"
            onClick={() => setShowModal(true)}
          >
            <i className="fa-solid fa-eye"></i> View Details
          </button>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="stud-modal-overlay">
          <div className="stud-modal">

            <div className="stud-modal-header">
              <h3>Student Performance Details</h3>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setShowModal(false)}
              ></i>
            </div>

            <div className="stud-modal-summary">
              <div><strong>Exams Taken:</strong> 12</div>
              <div><strong>Passed:</strong> 9</div>
              <div><strong>Avg Score:</strong> 78%</div>
              <div><strong>Pass Rate:</strong> 75%</div>
            </div>

            <div className="stud-modal-section">
              <h4>Performance by Category</h4>
              <ul>
                <li>Maths – 82%</li>
                <li>Science – 74%</li>
                <li>English – 80%</li>
              </ul>
            </div>

            <div className="stud-modal-section">
              <h4>Exam History</h4>
              <table className="stud-table">
                <thead>
                  <tr>
                    <th>Exam</th>
                    <th>Score</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mid Term</td>
                    <td>76%</td>
                    <td className="pass">Passed</td>
                  </tr>
                  <tr>
                    <td>Final Exam</td>
                    <td>68%</td>
                    <td className="pass">Passed</td>
                  </tr>
                  <tr>
                    <td>Mock Test</td>
                    <td>45%</td>
                    <td className="fail">Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Stud;

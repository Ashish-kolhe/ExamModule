// import React from "react";
// import "../../common/overview.css";

// const Overview = () => {
//   return (
//     <div className="page-wire overview-page">
//       <div className="page-top-grid">
//         <div className="page-card">
//           <div className="card-icon blue">
//             <i className="fa-solid fa-file-lines"></i>
//           </div>
//           <div>
//             <h4>Total Exams</h4>
//             <h2>1</h2>
//           </div>
//           </div>

//         <div className="page-card">
//           <div className="card-icon green">
//             <i className="fa-solid fa-circle-check"></i>
//           </div>
//           <div>
//             <h4>Active</h4>
//             <h2>1</h2>
//           </div>
//         </div>

//         <div className="page-card"><div className="card-icon orange">
//             <i className="fa-solid fa-circle-question"></i>
//           </div>
//           <div>
//             <h4>Questions</h4>
//             <h2>3</h2>
//           </div></div>

//         <div className="page-card"><div className="card-icon purple">
//             <i className="fa-solid fa-user-pen"></i>
//           </div>
//           <div>
//             <h4>Attempts</h4>
//             <h2>0</h2>
//           </div></div>

//           <div className="page-card">
//           <div className="card-icon teal">
//             <i className="fa-solid fa-chart-line"></i>
//           </div>
//           <div>
//             <h4>Avg Score</h4>
//             <h2>0%</h2>
//           </div>
//         </div>

//         <div className="page-card">
//           <div className="card-icon red">
//             <i className="fa-solid fa-percent"></i>
//           </div>
//           <div>
//             <h4>Pass Rate</h4>
//             <h2>0%</h2>
//           </div>
//         </div>
//       </div>

//       <div className="page-bottom">
//         <div className="page-bottom">
//         <div className="bottom-section">
//           <h3>Recent Exams</h3>
//           <p><strong>C++ (Copy)</strong> — 0 attempts — Active</p>
//         </div>

//         <div className="bottom-section">
//           <h3>Recent Results</h3>
//           <p>No results yet</p>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;


import React from "react";
import "../../common/overview.css";

const stats = [
  {
    title: "Total Exams",
    value: "1",
    icon: "fa-file-lines",
    color: "blue",
  },
  {
    title: "Active",
    value: "1",
    icon: "fa-circle-check",
    color: "green",
  },
  {
    title: "Questions",
    value: "3",
    icon: "fa-circle-question",
    color: "orange",
  },
  {
    title: "Attempts",
    value: "0",
    icon: "fa-user-pen",
    color: "purple",
  },
  {
    title: "Avg Score",
    value: "0%",
    icon: "fa-chart-line",
    color: "teal",
  },
  {
    title: "Pass Rate",
    value: "0%",
    icon: "fa-percent",
    color: "red",
  },
];

const Overview = () => {
  return (
    <div className="page-wire overview-page">
      <div className="page-top-grid">
        {stats.map((item, index) => (
          <div className="page-card" key={index}>
            <div className={`card-icon ${item.color}`}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div>
              <h4>{item.title}</h4>
              <h2>{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="page-bottom">
        <div className="bottom-section">
          <h3>Recent Exams</h3>
          <p>
            <strong>C++ (Copy)</strong> — 0 attempts — Active
          </p>
        </div>

        <div className="bottom-section">
          <h3>Recent Results</h3>
          <p>No results yet</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
// import React from "react";
// import "../../common/analytics.css";

// const Analytics = () => {
//   return (
//     <div className="page-wire analytics-page">
//       <div className="page-top-grid">
//         <div className="page-card">Chart</div>
//         <div className="page-card">Graph</div>
//       </div>

//       <div className="page-bottom">
//         Analytics Full Section
//       </div>
//     </div>
//   );
// };

// export default Analytics;


// import React from "react";
// import "../../common/analytics.css";

// const stats = [
//   {
//     title: "Attempts",
//     value: "1",
//     icon: "fa-user-pen",
//     color: "blue",
//   },
//   {
//     title: "Avg Score",
//     value: "33.3%",
//     icon: "fa-chart-line",
//     color: "green",
//   },
//   {
//     title: "Pass Rate",
//     value: "0.0%",
//     icon: "fa-percent",
//     color: "red",
//   },
//   {
//     title: "Exams",
//     value: "1",
//     icon: "fa-file-lines",
//     color: "purple",
//   },
//   {
//     title: "Questions",
//     value: "3",
//     icon: "fa-circle-question",
//     color: "orange",
//   },
// ];

// const examPerformance = [
//   {
//     name: "C++ (Copy) (Copy)",
//     attempts: 1,
//     passRate: "0%",
//     avgScore: "33%",
//   },
// ];

// const charts = [
//   {
//     title: "Daily Trends (Last 30 Days)",
//     subtitle: "Attempts • Pass Rate • Avg Score",
//     icon: "fa-chart-area",
//   },
//   {
//     title: "Most Difficult Questions",
//     subtitle: "Not enough data to determine difficult questions",
//     icon: "fa-triangle-exclamation",
//   },
// ];

// const Analytics = () => {
//   return (
//     <div className="page-wire analytics-page">
//       {/* Top Stats */}
//       <div className="page-top-grid">
//         {stats.map((item, index) => (
//           <div className="page-card" key={index}>
//             <div className={`card-icon ${item.color}`}>
//               <i className={`fa-solid ${item.icon}`}></i>
//             </div>
//             <div>
//               <h4>{item.title}</h4>
//               <h2>{item.value}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Exam Performance */}
//       <div className="page-bottom">
//         <h3 className="section-title">Exam Performance</h3>

//         {examPerformance.map((exam, index) => (
//           <div className="exam-card" key={index}>
//             <h4>{exam.name}</h4>
//             <p>{exam.attempts} attempts</p>
//             <p><strong>Pass:</strong> {exam.passRate}</p>
//             <p><strong>Avg:</strong> {exam.avgScore}</p>
//           </div>
//         ))}

//         {/* Charts / Insights */}
//         <div className="chart-grid">
//           {charts.map((chart, index) => (
//             <div className="page-card chart-card" key={index}>
//               <i className={`fa-solid ${chart.icon} chart-icon`}></i>
//               <h4>{chart.title}</h4>
//               <p>{chart.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React from "react";
import "../../common/analytics.css";

const stats = [
  { title: "Attempts", value: "1", icon: "fa-user-pen", color: "blue" },
  { title: "Avg Score", value: "33.3%", icon: "fa-chart-line", color: "green" },
  { title: "Pass Rate", value: "0.0%", icon: "fa-percent", color: "red" },
  { title: "Exams", value: "1", icon: "fa-file-lines", color: "purple" },
  { title: "Questions", value: "3", icon: "fa-circle-question", color: "orange" },
];

const examPerformance = [
  {
    name: "C++ (Copy) (Copy)",
    attempts: 1,
    passRate: "0%",
    avgScore: "33%",
  },
];

const Analytics = () => {
  return (
    <div className="page-wire analytics-page">
      {/* Header */}
      <div className="analytics-header">
        <h2>Analytics Dashboard</h2>
        <p>Comprehensive exam performance insights</p>
      </div>

      {/* KPI Cards */}
      <div className="page-top-grid">
        {stats.map((item, index) => (
          <div className="page-card stat-card" key={index}>
            <div className={`card-icon ${item.color}`}>
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className="stat-info">
              <span>{item.title}</span>
              <h3>{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Section */}
      <div className="analytics-grid">
        {/* Exam Performance */}
        <div className="analytics-box">
          <h3>Exam Performance</h3>

          {examPerformance.map((exam, index) => (
            <div className="exam-row" key={index}>
              <div>
                <strong>{exam.name}</strong>
                <p>{exam.attempts} attempts</p>
              </div>

              <div className="exam-metrics">
                <span>Pass: {exam.passRate}</span>
                <span>Avg: {exam.avgScore}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="analytics-box">
          <h3>Most Difficult Questions</h3>
          <p className="muted">
            Not enough data to determine difficult questions
          </p>
        </div>

        {/* Trends */}
        <div className="analytics-box full-width">
          <h3>Daily Trends (Last 30 Days)</h3>
          <div className="trend-placeholder">
            <i className="fa-solid fa-chart-area"></i>
            <p>Attempts • Pass Rate • Avg Score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

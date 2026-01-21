import React from 'react'


export const Card = () => {
  return (
    <div className="card">

      <button className="overview-btn">
        <i className="fa-solid fa-chart-line"></i>
        Overview
      </button>
      <button className="overview-btn">
        <i className="fa-solid fa-pen-to-square"></i>
        Exams
      </button>
      <button className="overview-btn">
        <i className="fa-solid fa-trophy result-icon"></i>
        Results
      </button><br></br>
      <hr />
      <br></br>
      <button className="overview-btn">
        <i className="fa-solid fa-chart-line analytics-icon"></i>
        Analytics
      </button>
      <button className="overview-btn">
        <i className="fa-solid fa-user-graduate student-icon"></i>
        Student
      </button>


</div>
  )
}

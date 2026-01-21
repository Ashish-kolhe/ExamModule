import React from "react";
import "../../common/results.css";

const Results = () => {
  return (
    <div className="page-wire results-page">
      <div className="page-top-grid">
        <div className="page-card">Passed</div>
        <div className="page-card">Failed</div>
        <div className="page-card">Top Rank</div>
      </div>

      <div className="page-bottom">
        Results Full Section
      </div>
    </div>
  );
};

export default Results;

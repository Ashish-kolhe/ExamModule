import React from "react";
import "../../common/overview.css";

const Overview = () => {
  return (
    <div className="page-wire overview-page">
      <div className="page-top-grid">
        <div className="page-card">Card 1</div>
        <div className="page-card">Card 2</div>
        <div className="page-card">Card 3</div>
        <div className="page-card">Card 4</div>
      </div>

      <div className="page-bottom">
        Full Width Section
      </div>
    </div>
  );
};

export default Overview;


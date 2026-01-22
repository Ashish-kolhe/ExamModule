import React from "react";
import Overview from "./Overview";
import Exams from "./Exams";
import Results from "./Results";
import Analytics from "./Analytics";
import Stud from "./Stud";
const Main = ({ activePage }) => {

  const renderContent = () => {
    switch (activePage) {

      case "overview":
        return <Overview/>;
        

      case "exams":
        return <Exams/>;

      case "results":
        return <Results/>;

      case "analytics":
        return <Analytics/>;

      case "students":
        return <Stud/>;

      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <main className="main">
      <section className="main-header">
        <h1>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h1>
      </section>

      <section className="main-body">
        {renderContent()}
      </section>
    </main>
  );
};

export default Main;


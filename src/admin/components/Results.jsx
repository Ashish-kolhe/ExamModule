import React from "react";
import "../../common/results.css";

const Results = () => {
  const student =[
    { id:1, name:"Vishal",  marks:"40"}
  ]

  function show(){
    alert("Hello");
  }
  return (
    <div>
    <div className="box">

      <div className="inner">
        <div className="text">
          <div className="left">
            <span className="icon-bg">
              <i className="fa-solid fa-book-open"></i>
            </span>

            <div className="content" >
              <b>C++</b>
              <span className="subtext">6 submissions</span>
            </div>
            <button onClick={show}><i class="fa-solid fa-angle-down"></i></button>
          </div>
        </div>
      </div>
    </div>
 <div className="border">
      <div className="lefts" >
      chaitanya<br></br>
      jan 23, 12:33PM
      </div>
      <div className="rights">
       <div> 1/3<br></br>
        score</div>
        <div className="color" > 33.3%</div>
      </div>

    </div>
    </div>
  );
};

export default Results;

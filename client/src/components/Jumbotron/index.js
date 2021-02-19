import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height:450 , clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
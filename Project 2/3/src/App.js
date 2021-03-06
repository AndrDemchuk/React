import React from "react";
import "./App.css";
import Car from "./Car/Car";

function App() {
  const divStyle = {
    textAlign: "center",
  };
  return (
    <div style={divStyle}>
      <h1>Hello World!</h1>
      <Car name={"Ford"} year={2018} />
      <Car name={"Audi"} year={2016} />
      <Car name={"Mazda"} year={2010} />
    </div>
  );
  /*     React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hello world!")
    ) */
}

export default App;

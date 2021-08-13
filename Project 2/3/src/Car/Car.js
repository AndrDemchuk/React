import React from "react";
/* function Car() {
  return <div>This is a car component</div>;
} */

/* const car = () => {
  return <div>This is a car component</div>;
}; */

/* const car = () => (
  <div>
    This is a car component
    <strong>test</strong>
  </div>
); */
export default (
  props //компонент
) => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>
      Year:
      <strong>{props.year}</strong>
    </p>
  </div>
);

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
export default () => (
  <div>
    <p>This is a car component</p>
    <p>
      Number:
      <strong>{Math.round(Math.random() * 100)}</strong>
    </p>
  </div>
);

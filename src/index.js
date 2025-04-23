import React from "react";
import ReactDOM from "react-dom/client";

const numbers = [1, 2, 3, 4, 5];

const renderedList = numbers.map((number, index) => {
  return (<li key={index}>{number}</li>);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ul>{renderedList}</ul>);

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = (<h1>Namaste React</h1>);

const Heading = () => (
  <div>
    {title}
    <h2>by Akshay Asani</h2>
  </div>
);
root.render(<Heading />);

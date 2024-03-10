import React from "react";
import ReactDOM  from "react-dom/client";

const heading =React.createElement("h1",{id:"heading"},"Hello from React!");
console.log(heading);


const Title=()=>(<h1 id="jsxHeading">JSX Title from JSX </h1>);
const Counter=(c)=><p>Counter paragraph</p>;

const HeadingComponent=()=>(
  <div id="container">
    <Counter/>
    <Title/>
    <h1 className="heading">Header from functional React Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeadingComponent());

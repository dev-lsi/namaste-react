import React from "react";
import ReactDOM  from "react-dom/client";

const reactHeading=React.createElement("h2", 
{
  id:"react-heading"
}, 
"Hello world by React");


const reactRoot= ReactDOM.createRoot(document.getElementById('react-root'));

reactRoot.render(reactHeading);
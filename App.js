import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement('h1', {id:"heading"}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(reactHeading);

   

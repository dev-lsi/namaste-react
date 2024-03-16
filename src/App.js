import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const App = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:
    [
      {
        path:"/",
        element:<Main/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contacts",
        element:<Contacts/>,
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const App = () => {
  return (
    <Provider store={appStore}>
    <div id="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
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
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

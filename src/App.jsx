import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import "../src/styles/component.css";
import "../src/styles/helper.css";
import "../src/styles/global.css";

import Home from "./pages/home/Home";
import Member from "./pages/member/Member";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/member",
    element: <Member />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

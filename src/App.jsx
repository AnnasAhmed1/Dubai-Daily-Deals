import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../src/styles/global.css";
import "./App.css";

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

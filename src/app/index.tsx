import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import MainLayout from "../pages/mainLayout";
import Home from "../pages/home";
import Post from "../pages/post";

import { ROUTES } from "../shared/routes";

const router = createBrowserRouter([
  {
    path: `${ROUTES.home}`,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

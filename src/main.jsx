import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import AllServices from "./pages/AllServices.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUspage from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/aboutus",
        element: <AboutUspage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./user/home.jsx";
import Navbar from "./Navbar/navbar.jsx";
import About from "./user/about.jsx";
import Contact from "./user/contact.jsx";
import "boxicons";
import Lomba from "./components/Lomba.jsx";
import BuatLomba from "./admin/buatlomba.jsx";
import DaftarLomba from "./user/daftarlomba.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/lomba",
    element: <Lomba />,
  },
  {
    path: "/buatlomba",
    element: <BuatLomba />,
  },
  {
    path: "/daftarlomba",
    element: <DaftarLomba />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

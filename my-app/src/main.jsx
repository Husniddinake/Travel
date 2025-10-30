import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from "./components/MainPage.jsx";
import Tablo from "./components/Tablo.jsx";
import FlightAbu from "./components/FlightAbu.jsx";
import BiletAbu from "./components/BiletAbu.jsx";
import Shahrizoda from "./components/Shahrizoda.jsx";  // Fixed: Added space after 'from'
import AddCart from "./components/AddCart.jsx";
import LoginPart from "./components/LoginPart.jsx";  // Fixed: Added semicolon
import SignUpPart from "./components/SignUpPart.jsx";
import Page from"./components/Page.jsx";
import RegisterSanya from "./components/RegisterSanya.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        index: true,  
        element: <MainPage />,
      },
      
      {
        path: "/Tablo",
        element: <Tablo />,
      },
      {
        path: "/FlightAbu",
        element: <FlightAbu />,
      },
      {
        path: "/BiletAbu",
        element: <BiletAbu />,
      },
      {
        path: "/Shahrizoda",
        element: <Shahrizoda />,
      },
      {
        path: "/AddCart",
        element: <AddCart />,
      },
      {
        path: "/LoginPart",
        element: <LoginPart />,
      },
      {
        path: "/signup",
        element: <SignUpPart />,
      },
      {
        path: "/Page",
        element: <Page />,
      },
      {
        path: "/Sanya",
        element: <RegisterSanya />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
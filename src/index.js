import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import About from "./About.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Speaker from "./Speaker.js";
import Schedule from "./Schedule.js";
import Contact from "./Contact.js";
import FAQ from "./FAQ.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/navbar", element: <NavBar /> },
  { path: "/speaker", element: <Speaker /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/faq", element: <FAQ /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

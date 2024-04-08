import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./Routes";
import {RouterProvider} from "react-router-dom";
import {register} from "swiper/element/bundle";
register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

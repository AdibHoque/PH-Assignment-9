import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./Routes";
import {RouterProvider} from "react-router-dom";
import {register} from "swiper/element/bundle";
import AuthProvider from "./AuthProvider";
import {HelmetProvider} from "react-helmet-async";
register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

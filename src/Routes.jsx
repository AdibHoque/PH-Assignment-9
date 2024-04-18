import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Estates from "./pages/Estates";
import RoutesPrivate from "./RoutesPrivate";
import UpdateProfile from "./pages/UpdateProfile";
import SellWithUs from "./pages/SellWithUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estates/:id",
        element: (
          <RoutesPrivate>
            <Estates></Estates>
          </RoutesPrivate>
        ),
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/updateprofile",
        element: (
          <RoutesPrivate>
            <UpdateProfile></UpdateProfile>
          </RoutesPrivate>
        ),
      },
      {
        path: "/sell",
        element: (
          <RoutesPrivate>
            <SellWithUs></SellWithUs>
          </RoutesPrivate>
        ),
      },
    ],
  },
]);

export default routes;

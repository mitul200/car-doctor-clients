import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Bookings from "../Pages/Bookings/Bookings";
import CheackOut from "../Pages/CheackOut/CheackOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login";
import SingUp from "../Pages/LoginPage/SingUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
      {
        path: "cheackOut/:id",
        element: (
          <PrivetRoute>
            <CheackOut />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Bookings />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login";
import SingUp from "../Pages/LoginPage/SingUp";
import CheackOut from "../Pages/CheackOut/CheackOut";


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
        path:'/login',
        element:<Login/>
      },
      {
        path:'/singUp',
        element:<SingUp/>
      },
      {
        path:'cheackOut/:id',
        element:<CheackOut/>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ],
  },
]);

export default router;

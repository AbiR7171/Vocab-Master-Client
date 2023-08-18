import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllRouts from "../AllRouts/AllRouts/AllRouts";
import LeftSideRoutes from "../AllRouts/LeftSideRoutes/LeftSideRoutes";
import Learn from "../Pages/Home/Home/Learn/Learn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //     path: 'learn',
      //     element:<Progress></Progress>

      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/allRouts",
    element: <LeftSideRoutes />,
    children: [
      {
        path: "/allRouts/learn",
        element: <Learn />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllRouts from "../AllRouts/AllRouts/AllRouts";

import LeftSideRoutes from "../AllRouts/LeftSideRoutes/LeftSideRoutes";
import Learn from "../Pages/Home/Home/Learn/Learn";
import Session1 from "../Pages/Home/Home/Learn/session1";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayouts />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "login",
//         element: <Login></Login>,
//       },
//       {
//         path: "register",
//         element: <Register></Register>,
//       },
//     ],
//   },
//   {
//     path: "/allRouts",
//     element: <LeftSideRoutes />,
//     children: [
//       {
//         path: "/allRouts/learn",
//         element: <Learn />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
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
  {
    path: "/learn/sesson1",
    element: <Session1 />,
  },
]);

export default router;

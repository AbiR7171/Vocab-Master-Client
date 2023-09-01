import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

import AllRouts from "../AllRouts/AllRouts/AllRouts";

import LeftSideRoutes from "../AllRouts/LeftSideRoutes/LeftSideRoutes";
import Learn from "../Pages/Home/Home/Learn/Learn";
import LessonOne from "../Pages/Home/Home/Learn/LessonONe/LessonOne";
// import Session1 from "../Learn/session1";
import Docs from "../components/Docs/Docs";
import PrivateRoute from "../components/PrivateRoute";
import LessonTwo from "../Pages/Home/Home/Learn/LessonTwo";
import StepLessonOne from "../Pages/Home/Home/Learn/LessonONe/StepLessonOne";
import AdminHome from "../Admin/AdminHome";
import ManageUser from "../Admin/ManageUser";
import WordReques from "../Admin/WordReques";
// import AllWord from "../Admin/AllWord";
import ManageWords from "../Admin/ManageWords";
import EditWord from "../Admin/EditWord";

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
      {
        path: "docs",
        element: <Docs></Docs>,
      },
    ],
  },
  {
    path: "/allRouts",
    element:<PrivateRoute> <LeftSideRoutes /></PrivateRoute>,
    children: [
      {
        path: "/allRouts/learn",
        element: <Learn />,
      },
      {
        path:"/allRouts/adminHome",
        element: <AdminHome/>
      },
      {
        path:"/allRouts/manageUsers",
        element: <ManageUser/>
      },
      {
        path:"/allRouts/wordRequest",
        element: <WordReques/>
      },
      {
        path:"/allRouts/manageWords",
        element:<ManageWords/>
      },
      {
        path: "/allRouts/editWord/:id",
        element:<EditWord/>,
        loader:({params})=> fetch(`https://vocab-master-server.vercel.app/word/${params.id}`)
      }
    ],
  },
  {
    
      path:"/allRouts/learn/sesson1",
      element:<LessonOne/>,
      loader:()=> fetch("https://vocab-master-server.vercel.app/lesson/category/TeaStall")
    
  },
  {
    path:"/allRouts/learn/lessonOneStep",
    element:<StepLessonOne/>

  },
  {
    path:"/allRouts/learn/sesson2",
    element:<LessonTwo/>
  },
  {
    path:"/docs",
    element:<Docs/>
  }
]);

export default router;

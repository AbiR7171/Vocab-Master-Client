import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
// import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
// import AllRouts from "../AllRouts/AllRouts/AllRouts";

import AllRouts from "../AllRouts/AllRouts/AllRouts";

import LeftSideRoutes from "../AllRouts/LeftSideRoutes/LeftSideRoutes";
import Learn from "../Pages/Home/Home/Learn/Learn";
import LessonOne from "../Pages/Home/Home/Learn/LessonONe/LessonOne";
// import Session1 from "../Learn/session1";
import Docs from "../components/Docs/Docs";
import PrivateRoute from "../components/PrivateRoute";
// import LessonTwo from "../Pages/Home/Home/Learn/LessonTwo";
import StepLessonOne from "../Pages/Home/Home/Learn/LessonONe/StepLessonOne";
import AdminHome from "../Admin/AdminHome";
import ManageUser from "../Admin/ManageUser";
import WordReques from "../Admin/WordReques";
// import AllWord from "../Admin/AllWord";
import ManageWords from "../Admin/ManageWords";
import EditWord from "../Admin/EditWord";
import LessonOne1 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe1";
import LessonOne2 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe2";
import LessonOne3 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe3";
import LessonOne4 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe4";
import LessonOne5 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe5";
import LessonOne6 from "../Pages/Home/Home/Learn/LessonTwo/LessonOne6";
import LessonOne7 from "../Pages/Home/Home/Learn/LessonTwo/LesssonOne7";
import LessonOne8 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe8";
import LessonOne9 from "../Pages/Home/Home/Learn/LessonTwo/LessonONe9";

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
      {
        path: "docs",
        element: <Docs></Docs>,
      },
    ],
  },
  {
    path: "/allRouts",
    element: <PrivateRoute> <LeftSideRoutes /></PrivateRoute>,
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
  // {

  //   path: "/allRouts/learn/sesson1",
  //   element: <LessonOne />,
  //   loader: () => fetch("https://vocab-master-server.vercel.app/vocabs")
  //   // loader:()=> fetch("https://vocab-master-server.vercel.app/lesson/category/TeaStall")

  // },
  { 

    path:"/allRouts/learn/season1.2",
    element:<LessonOne1/>

  },
  {
    path:"/allRouts/learn/season1.3",
    element:<LessonOne2/>
  },
  {
    path:"/allRouts/learn/season1.4",
    element:<LessonOne3/>
  },
  {
    path:"/allRouts/learn/season1.5",
    element:<LessonOne4/>
  },
  {
    path:"/allRouts/learn/season1.6",
    element:<LessonOne5/>
  },
  {
    path:"/allRouts/learn/season1.7",
    element:<LessonOne6/>
  },
  {
    path:"/allRouts/learn/season1.8",
    element:<LessonOne7/>
  },
  {
    path:"/allRouts/learn/season1.9",
    element:<LessonOne8/>
  },
  {
    path:"/allRouts/learn/season1.10",
    element:<LessonOne9/>
  },
  {
    path: "/allRouts/learn/sesson2",
    // element: <LessonTwo />
  },
  {
    path: "/docs",
    element: <Docs />
  }
]);

export default router;

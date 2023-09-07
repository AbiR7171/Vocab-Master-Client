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
import StepSeasonTwo from "../Pages/Home/Home/Learn/Season2/StepSeasonTwo";
import SeasonTwo1 from "../Pages/Home/Home/Learn/Season2/SeasoneTwo1";
import SeasonTwo2 from "../Pages/Home/Home/Learn/Season2/SeasonTwo2";
import SeasonTwo3 from "../Pages/Home/Home/Learn/Season2/SeasonTwo3";
import SeasonTwo4 from "../Pages/Home/Home/Learn/Season2/SeasonTwo4";
import SeasonTwo5 from "../Pages/Home/Home/Learn/Season2/SeasonTwo5";
import SeasonTwo6 from "../Pages/Home/Home/Learn/Season2/SeasonTwo6";
import SeasonTwo7 from "../Pages/Home/Home/Learn/Season2/SeasonTwo7";
import SeasonTwo8 from "../Pages/Home/Home/Learn/Season2/SeasonTwo8";
import SeasonTwo9 from "../Pages/Home/Home/Learn/Season2/SeasonTwo9";
import StepSeasonThree from "../Pages/Home/Home/Learn/season3/StepSeasonThree";
import SeasonThree1 from "../Pages/Home/Home/Learn/season3/SeasonThree1";
import SeasonThree2 from "../Pages/Home/Home/Learn/season3/SeasonThree2";
import SeasonThree3 from "../Pages/Home/Home/Learn/season3/SeasonThree3";
import SeasonThree4 from "../Pages/Home/Home/Learn/season3/SeasonThree4";
import SeasonThree5 from "../Pages/Home/Home/Learn/season3/SeasonThree5";
import SeasonThree6 from "../Pages/Home/Home/Learn/season3/SeasonThree6";
import SeasonThree7 from "../Pages/Home/Home/Learn/season3/SeasonThree7";
import SeasonThree8 from "../Pages/Home/Home/Learn/season3/SeasonThree8";
import SeasonThree9 from "../Pages/Home/Home/Learn/season3/SeasonThree9";

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
    path: "/allRouts/learn/stepSeasonTwo",
    element: <StepSeasonTwo/>
  },
  { 

    path:"/allRouts/learn/season2",
    element:<SeasonTwo1/>

  },
  { 

    path:"/allRouts/learn/season2.2",
    element:<SeasonTwo2/>

  },
  { 

    path:"/allRouts/learn/season2.3",
    element:<SeasonTwo3/>

  },
  { 

    path:"/allRouts/learn/season2.4",
    element:<SeasonTwo4/>

  },
  { 

    path:"/allRouts/learn/season2.5",
    element:<SeasonTwo5/>

  },
  { 

    path:"/allRouts/learn/season2.6",
    element:<SeasonTwo6/>

  },
  { 

    path:"/allRouts/learn/season2.7",
    element:<SeasonTwo7/>

  },
  { 

    path:"/allRouts/learn/season2.8",
    element:<SeasonTwo8/>

  },
  { 

    path:"/allRouts/learn/season2.9",
    element:<SeasonTwo9/>

  },
  {
    path:"/allRouts/learn/stepSeasonThree",
    element: <StepSeasonThree/>
  },
  {
       path: "/allRouts/learn/season3",
       element:<SeasonThree1/>
  },
  {
       path: "/allRouts/learn/season3.1",
       element:<SeasonThree2/>
  },
  {
       path: "/allRouts/learn/season3.3",
       element:<SeasonThree3/>
  },
  {
       path: "/allRouts/learn/season3.4",
       element:<SeasonThree4/>
  },
  {
       path: "/allRouts/learn/season3.5",
       element:<SeasonThree5/>
  },
  {
       path: "/allRouts/learn/season3.6",
       element:<SeasonThree6/>
  },
  {
       path: "/allRouts/learn/season3.7",
       element:<SeasonThree7/>
  },
  {
       path: "/allRouts/learn/season3.8",
       element:<SeasonThree8/>
  },
  {
       path: "/allRouts/learn/season3.9",
       element:<SeasonThree9/>
  },
  {
    path: "/docs",
    element: <Docs />
  }
]);

export default router;

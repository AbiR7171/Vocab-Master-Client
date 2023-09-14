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
import StepSeasonFour from "../Pages/Home/Home/Learn/seasonFour/StepSeasonFour";
import SeasonFive1 from "../Pages/Home/Home/Learn/Season5/SeasonFive1";
import SeasonFour1 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour1";
import SeasonFour2 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour2";
import SeasonFour3 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour3";
import SeasonFour4 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour4";
import SeasonFour5 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour5";
import SeasonFour6 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour6";
import SeasonFour7 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour7";
import SeasonFour8 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour8";
import SeasonFour9 from "../Pages/Home/Home/Learn/seasonFour/SeasonFour9";
import StepSeasonFive from "../Pages/Home/Home/Learn/Season5/StepSeasonFive";
import SeasonFive2 from "../Pages/Home/Home/Learn/Season5/SeasonFive2";
import SeasonFive3 from "../Pages/Home/Home/Learn/Season5/SeasonFive3";
import SeasonFive4 from "../Pages/Home/Home/Learn/Season5/SeasonFive4";
import SeasonFive5 from "../Pages/Home/Home/Learn/Season5/SeasonFive5";
import SeasonFive6 from "../Pages/Home/Home/Learn/Season5/SeasonFive6";
import SeasonFive7 from "../Pages/Home/Home/Learn/Season5/SeasonFive7";
import SeasonFive8 from "../Pages/Home/Home/Learn/Season5/SeasonFive8";
import SeasonFive9 from "../Pages/Home/Home/Learn/Season5/SeasonFive9";
import StepSeasonSix from "../Pages/Home/Home/Learn/Season6/StepSeasonSix";
import SeasonSix1 from "../Pages/Home/Home/Learn/Season6/SeasonSix1";
import SeasonSix2 from "../Pages/Home/Home/Learn/Season6/SeasonSix2";
import SeasonSix3 from "../Pages/Home/Home/Learn/Season6/SeasonSix3";
import SeasonSix4 from "../Pages/Home/Home/Learn/Season6/SeasonSix4";
import SeasonSix5 from "../Pages/Home/Home/Learn/Season6/SeasonSix5";
import SeasonSix6 from "../Pages/Home/Home/Learn/Season6/SeasonSix6";
import SeasonSix7 from "../Pages/Home/Home/Learn/Season6/SeasonSix7";
import SeasonSix8 from "../Pages/Home/Home/Learn/Season6/SeasonSix8";
import SeasonSix9 from "../Pages/Home/Home/Learn/Season6/SeasonSix9";
import LeaderBoard from "../Users/LeaderBoard";
import WordRequest from "../Users/WordRequest";
import SeasonONeQuiz from "../Pages/Home/Home/Learn/QuizGalaxy/SeasonONeQuiz";
import Issue from "../Users/Issue";
import AdminIssue from "../Admin/AdminIssue";
import Feedback from "../Users/Feedback";
import Profile from "../Users/Profile";

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
        path:"/allRouts/leaderBoard",
        element:<LeaderBoard/>

      },
      {
            path: "/allRouts/sentWordRequest",
            element:<WordRequest/>
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
      },
      {
        path:"/allRouts/Adminissue",
        element:<AdminIssue/>
      },
      {
        path: "/allRouts/feedback",
        element: <Feedback/>
      },
      {
        path: "/allRouts/userProfile",
        element: <Profile/>
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
      path:"/allRouts/learn/stepSeasonFour",
      element:<StepSeasonFour/>
  },
  {
     
    path: "/allRouts/learn/season4",
    element:<SeasonFour1/>

  },
  {
     
    path: "/allRouts/learn/season4.2",
    element:<SeasonFour2/>

  },
  {
     
    path: "/allRouts/learn/season4.3",
    element:<SeasonFour3/>

  },
  {
     
    path: "/allRouts/learn/season4.4",
    element:<SeasonFour4/>

  },
  {
     
    path: "/allRouts/learn/season4.5",
    element:<SeasonFour5/>

  },
  {
     
    path: "/allRouts/learn/season4.6",
    element:<SeasonFour6/>

  },
  {
     
    path: "/allRouts/learn/season4.7",
    element:<SeasonFour7/>

  },
  {
     
    path: "/allRouts/learn/season4.8",
    element:<SeasonFour8/>

  },
  {
     
    path: "/allRouts/learn/season4.9",
    element:<SeasonFour9/>

  },
  {
     path:"/allRouts/learn/stepSeasonFive",
     element: <StepSeasonFive/>
  },
  {
     path:"/allRouts/learn/season5",
     element: <SeasonFive1/>
  },
  {
     path:"/allRouts/learn/season5.2",
     element: <SeasonFive2/>
  },
  {
     path:"/allRouts/learn/season5.3",
     element: <SeasonFive3/>
  },
  {
     path:"/allRouts/learn/season5.4",
     element: <SeasonFive4/>
  },
  {
     path:"/allRouts/learn/season5.5",
     element: <SeasonFive5/>
  },
  {
     path:"/allRouts/learn/season5.6",
     element: <SeasonFive6/>
  },
  {
     path:"/allRouts/learn/season5.7",
     element: <SeasonFive7/>
  },
  {
     path:"/allRouts/learn/season5.8",
     element: <SeasonFive8/>
  },
  {
     path:"/allRouts/learn/season5.9",
     element: <SeasonFive9/>
  },
  {
     path:"/allRouts/learn/stepSeasonSix",
     element:<StepSeasonSix/>

  },
  {
      path:"/allRouts/learn/season6",
      element:<SeasonSix1/>
  },
  {
      path:"/allRouts/learn/season6.2",
      element:<SeasonSix2/>
  },
  {
      path:"/allRouts/learn/season6.3",
      element:<SeasonSix3/>
  },
  {
      path:"/allRouts/learn/season6.4",
      element:<SeasonSix4/>
  },
  {
      path:"/allRouts/learn/season6.5",
      element:<SeasonSix5/>
  },
  {
      path:"/allRouts/learn/season6.6",
      element:<SeasonSix6/>
  },
  {
      path:"/allRouts/learn/season6.7",
      element:<SeasonSix7/>
  },
  {
      path:"/allRouts/learn/season6.8",
      element:<SeasonSix8/>
  },
  {
      path:"/allRouts/learn/season6.9",
      element:<SeasonSix9/>
  },
  {
    path:"/allRouts/seasonOneQuiz",
    element: <SeasonONeQuiz/>
 },
 {
     path: "/allRouts/issue",
     element: <Issue/>
 },
  {
    path: "/docs",
    element: <Docs />
  }
]);

export default router;

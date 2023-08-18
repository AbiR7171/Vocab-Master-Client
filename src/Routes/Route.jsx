import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Progress from "../Pages/Home/Home/Learn/Progress";
import Login from "../Authentication/Login/Login"
import Register from "../Authentication/Register/Register";
import AllRouts from "../AllRouts/AllRouts/AllRouts";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayouts/>,
        children:[
            {
               path:"/",
               element:<Home/>
            },
            {
                path: 'learn',
                element:<Progress></Progress>
    
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"allRouts",
                element:<PrivateRoute><AllRouts></AllRouts></PrivateRoute>
            }
        ]

    }
    // {
    //     path:"allRouts",
    //     element:<PrivateRoute><AllRouts></AllRouts></PrivateRoute>,
    //     children:[
    //         {
    //             path:"leftRoute",
    //             element:<LeftSideRoutes></LeftSideRoutes>
    //         }
    //     ]
    // }
])


export default router;
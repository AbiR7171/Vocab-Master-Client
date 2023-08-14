import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login"
import Register from "../Authentication/Register/Register";



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
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
])


export default router;
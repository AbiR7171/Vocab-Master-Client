import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Progress from "../Pages/Home/Home/Learn/Progress";



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
            }
        ]
    }
])


export default router;
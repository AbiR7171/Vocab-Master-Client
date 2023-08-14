// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// // ----------------------------------------
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// // import Login from './Authentication/Login/Login.jsx';
// // import Register from './Authentication/Register/Register.jsx';
// import Login from '../src/Authentication/Login/Login.jsx'

// // import router from './Routes/Route.jsx'
// import Register from './Authentication/Register/Register.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login></Login>
//   },
//   {
//     path: "/register",
//     element: <Register></Register>
//   }
// ]);

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     {/* <App /> */}
// //     <RouterProvider router={router} />
// // import { RouterProvider } from 'react-router-dom'
// // import Register from './Authentication/Register/Register.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
// import router from './Routes/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
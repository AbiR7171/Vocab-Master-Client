import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import Context from './context/Context.jsx'
import AuthProvider from './Authentication/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Context>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </Context>
  </React.StrictMode>,
)

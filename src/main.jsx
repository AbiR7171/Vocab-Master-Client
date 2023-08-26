import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import Context from './context/Context'
import AuthProvider from './Authentication/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Context> <RouterProvider router={router} /></Context>
    </AuthProvider>

  </React.StrictMode>
)

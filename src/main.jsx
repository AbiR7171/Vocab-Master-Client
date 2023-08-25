import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import Context from './context/Context'
import AuthProvider from './Authentication/Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Context>
  </React.StrictMode>,
)

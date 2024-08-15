import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Team from './components/Team/Team'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/> 
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "team",
        element: <Team/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

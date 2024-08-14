import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Team from './components/Team/Team'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/> 
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Team/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='team' element={<Team/>}/>
      <Route  path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

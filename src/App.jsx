import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Notfound from './Components/Notfound/Notfound'

function App() {
  let router=createBrowserRouter([
    {
      path:'',element: <Layout/>, children:[
        {index:true,element: <Home/>},
        {path:'about',element: <About/>},
        {path:'portfolio',element: <Portfolio/>},
        {path:'contact',element: <Contact/>},
        {path:'*',element: <Notfound/>}
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
